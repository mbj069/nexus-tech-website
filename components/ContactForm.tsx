"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_URL } from "@/components/Footer";

const PROJECT_TYPES = [
  "Website",
  "Custom Software",
  "Mobile App",
  "E-Commerce",
  "AI Solution",
  "Other",
];

const BUDGETS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Not sure yet",
];

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Project brief form. Submits to the /api/contact serverless function,
 * which delivers via Resend. If email isn't configured yet, the API
 * says so honestly and the visitor is routed to WhatsApp.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setError("");

    const data = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          projectType: data.get("projectType"),
          budget: data.get("budget"),
          description: data.get("description"),
          website: data.get("website"), // honeypot
        }),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
        setError(
          json?.error ||
            "Something went wrong. Please try WhatsApp instead."
        );
      }
    } catch {
      setStatus("error");
      setError("Couldn't reach our server. Please try WhatsApp instead.");
    }
  };

  if (status === "sent") {
    return (
      <div className="form-note" role="status">
        <h2 className="card-title">Brief received.</h2>
        <p style={{ marginTop: "0.75rem" }}>
          Thanks — we&apos;ll read it properly and get back to you within
          one business day. Need us sooner? Message us directly:
        </p>
        <a
          className="btn btn-primary"
          style={{ marginTop: "1.25rem" }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp <span className="btn-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} aria-label="Project brief form" noValidate={false}>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="cf-company">
          Company <span className="optional">(optional)</span>
        </label>
        <input id="cf-company" name="company" type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="cf-type">Project Type</label>
        <select id="cf-type" name="projectType" required defaultValue="">
          <option value="" disabled>
            Select a project type
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-budget">
          Budget Range <span className="optional">(optional)</span>
        </label>
        <select id="cf-budget" name="budget" defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {BUDGETS.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-desc">Project Description</label>
        <textarea
          id="cf-desc"
          name="description"
          required
          placeholder="What are you trying to build? What problem should it solve?"
        />
      </div>

      {/* Honeypot — invisible to humans, irresistible to bots */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input
          id="cf-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send Project Brief"}{" "}
        <span className="btn-arrow" aria-hidden="true">→</span>
      </button>
    </form>
  );
}
