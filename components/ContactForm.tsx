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

/**
 * Foundation shell: full accessible markup, native validation.
 * TODO(phase: contact): wire submit to the /api/contact serverless
 * function (Vercel) + free-tier email service. Until then, the form
 * is honest about what happens — nothing is silently swallowed.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-note" role="status">
        <p>
          Online submissions open with the site launch. For an instant
          reply right now, message us directly:
        </p>
        <a
          className="btn btn-primary"
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
    <form onSubmit={onSubmit} aria-label="Project brief form">
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
        <label htmlFor="cf-desc">Project Description</label>
        <textarea
          id="cf-desc"
          name="description"
          required
          placeholder="What are you trying to build? What problem should it solve?"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send Project Brief <span className="btn-arrow" aria-hidden="true">→</span>
      </button>
    </form>
  );
}
