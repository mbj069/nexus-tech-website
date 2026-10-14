import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 5000;
const MAX_BODY_BYTES = 32 * 1024;

/**
 * Lightweight abuse protection for a serverless contact endpoint.
 * In-memory sliding window per IP — instances are ephemeral on Vercel,
 * so this raises the bar against casual spam/quota-burning rather than
 * being a hard guarantee. The honeypot catches most bots before this.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 2000) {
    // opportunistic prune so the map can't grow unbounded
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_REQUESTS;
}

/**
 * Contact form endpoint (Vercel serverless function).
 * Sends the project brief via Resend. Requires env vars:
 *   RESEND_API_KEY   — Resend API key
 *   CONTACT_TO_EMAIL — where briefs are delivered
 *   RESEND_FROM      — verified sender (defaults to Resend's test sender)
 */
export async function POST(request: Request) {
  try {
    // Reject oversized bodies before parsing.
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Submission too large." },
        { status: 413 }
      );
    }

    // Basic per-IP rate limiting to protect the email quota.
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Too many submissions — please wait a few minutes or reach us on WhatsApp.",
        },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid submission." },
        { status: 400 }
      );
    }

    const { name, email, company, projectType, budget, description, website } =
      body as Record<string, unknown>;

    // Honeypot: bots fill it, humans never see it.
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const clean = {
      name: String(name ?? "").trim().slice(0, 200),
      email: String(email ?? "").trim().slice(0, 200),
      company: String(company ?? "").trim().slice(0, 200),
      projectType: String(projectType ?? "").trim().slice(0, 100),
      budget: String(budget ?? "").trim().slice(0, 100),
      description: String(description ?? "").trim().slice(0, MAX_LEN),
    };

    if (!clean.name || !clean.email || !clean.projectType || !clean.description) {
      return NextResponse.json(
        { ok: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(clean.email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.RESEND_FROM || "onboarding@resend.dev";

    if (!apiKey || !to) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email delivery isn't configured yet — please reach us on WhatsApp and we'll reply right away.",
        },
        { status: 503 }
      );
    }

    const text = [
      `New project brief from ${process.env.NEXT_PUBLIC_SITE_URL || "the website"}`,
      "",
      `Name: ${clean.name}`,
      `Email: ${clean.email}`,
      clean.company ? `Company: ${clean.company}` : null,
      `Project type: ${clean.projectType}`,
      clean.budget ? `Budget: ${clean.budget}` : null,
      "",
      "Description:",
      clean.description,
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Nexus-Tech Website <${from}>`,
        to: [to],
        reply_to: clean.email,
        subject: `New project brief: ${clean.projectType} — ${clean.name}`,
        text,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", await res.text().catch(() => res.status));
      return NextResponse.json(
        {
          ok: false,
          error:
            "Something went wrong sending your brief. Please try WhatsApp instead — we'll reply right away.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong sending your brief. Please try WhatsApp instead — we'll reply right away.",
      },
      { status: 500 }
    );
  }
}
