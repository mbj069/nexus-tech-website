import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 2000;
const MAX_BODY_BYTES = 5 * 1024 * 1024;
const MAX_CV_BYTES = 4 * 1024 * 1024;

const ROLE_TITLES: Record<string, string> = {
  "web-dev-intern": "Web Development Intern",
  "sales-intern": "Sales Intern",
  "sales-agent": "Sales Agent",
};

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];

/**
 * Lightweight abuse protection for a serverless application endpoint.
 * Same best-effort pattern as /api/contact: in-memory sliding window
 * per IP — instances are ephemeral on Vercel, so this raises the bar
 * against casual spam/quota-burning rather than being a hard guarantee.
 * The honeypot catches most bots before this.
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
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_REQUESTS;
}

/**
 * Job application endpoint (Vercel serverless function).
 * Accepts multipart/form-data with a CV attachment and sends the
 * application via Resend. Requires env vars:
 *   RESEND_API_KEY   — Resend API key
 *   RESEND_FROM      — verified sender (defaults to Resend's test sender)
 *   APPLY_TO_EMAIL   — where applications are delivered (defaults to
 *                      the public info@ inbox)
 */
export async function POST(request: Request) {
  try {
    // Reject oversized bodies before parsing.
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Submission too large — your CV must be under 4 MB." },
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
            "Too many submissions — please wait a few minutes or email your CV to info@globalnexus.tech.",
        },
        { status: 429 }
      );
    }

    const form = await request.formData().catch(() => null);
    if (!form) {
      return NextResponse.json(
        { ok: false, error: "Invalid submission." },
        { status: 400 }
      );
    }

    // Honeypot: bots fill it, humans never see it.
    const honeypot = form.get("website");
    if (typeof honeypot === "string" && honeypot.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const clean = {
      name: String(form.get("name") ?? "").trim().slice(0, 200),
      email: String(form.get("email") ?? "").trim().slice(0, 200),
      phone: String(form.get("phone") ?? "").trim().slice(0, 100),
      role: String(form.get("role") ?? "").trim(),
      message: String(form.get("message") ?? "").trim().slice(0, MAX_LEN),
    };
    const cv = form.get("cv");

    if (!clean.name || !clean.email || !clean.role) {
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
    const roleTitle = ROLE_TITLES[clean.role];
    if (!roleTitle) {
      return NextResponse.json(
        { ok: false, error: "Please select a valid role." },
        { status: 400 }
      );
    }
    if (!(cv instanceof File) || cv.size === 0) {
      return NextResponse.json(
        { ok: false, error: "Please attach your CV." },
        { status: 400 }
      );
    }
    const cvName = cv.name.toLowerCase();
    const extOk = ACCEPTED_EXTENSIONS.some((ext) => cvName.endsWith(ext));
    if (!extOk || (cv.type && !ACCEPTED_TYPES.includes(cv.type))) {
      return NextResponse.json(
        { ok: false, error: "Your CV must be a PDF, DOC or DOCX file." },
        { status: 400 }
      );
    }
    if (cv.size > MAX_CV_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Your CV must be under 4 MB." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to =
      process.env.APPLY_TO_EMAIL || "info@globalnexus.tech";
    const from = process.env.RESEND_FROM || "onboarding@resend.dev";

    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email delivery isn't configured yet — please email your CV to info@globalnexus.tech and we'll reply right away.",
        },
        { status: 503 }
      );
    }

    const text = [
      `New job application from ${process.env.NEXT_PUBLIC_SITE_URL || "the website"}`,
      "",
      `Role: ${roleTitle}`,
      `Name: ${clean.name}`,
      `Email: ${clean.email}`,
      clean.phone ? `Phone: ${clean.phone}` : null,
      "",
      "Why they're a fit:",
      clean.message || "(no message)",
    ]
      .filter(Boolean)
      .join("\n");

    const cvBase64 = Buffer.from(await cv.arrayBuffer()).toString("base64");

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
        subject: `New application: ${roleTitle} - ${clean.name}`,
        text,
        attachments: [{ filename: cv.name, content: cvBase64 }],
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", await res.text().catch(() => res.status));
      return NextResponse.json(
        {
          ok: false,
          error:
            "Something went wrong sending your application. Please email your CV to info@globalnexus.tech instead.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Apply API error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong sending your application. Please email your CV to info@globalnexus.tech instead.",
      },
      { status: 500 }
    );
  }
}
