"use client";

import { useEffect, useState, type FormEvent } from "react";

export type ApplyRoleOption = { id: string; title: string };

const MAX_CV_BYTES = 4 * 1024 * 1024; // 4 MB — stays under Vercel's 4.5 MB function payload limit
const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];

type Status = "idle" | "sending" | "sent" | "error";

function cvError(file: File | null): string {
  if (!file) return "Please attach your CV.";
  const name = file.name.toLowerCase();
  const extOk = ACCEPTED_EXTENSIONS.some((ext) => name.endsWith(ext));
  if (!extOk || (file.type && !ACCEPTED_TYPES.includes(file.type))) {
    return "Your CV must be a PDF, DOC or DOCX file.";
  }
  if (file.size > MAX_CV_BYTES) {
    return "Your CV must be under 4 MB.";
  }
  return "";
}

/**
 * Job application form. Submits multipart/form-data to /api/apply, which
 * delivers the application plus the CV attachment to info@ via Resend.
 * The role is preselected by the "Apply for This Role" buttons on the
 * role cards: they carry data-apply-role and link to #apply.
 */
export default function ApplyForm({ roles }: { roles: ApplyRoleOption[] }) {
  const [role, setRole] = useState("");
  const [cvName, setCvName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("[data-apply-role]");
      if (!target) return;
      const value = target.getAttribute("data-apply-role") ?? "";
      if (roles.some((r) => r.id === value)) setRole(value);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [roles]);

  const onCvChange = (event: FormEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0] ?? null;
    setCvName(file ? file.name : "");
    const problem = file ? cvError(file) : "";
    setError(problem);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const file = (
      form.elements.namedItem("cv") as HTMLInputElement | null
    )?.files?.[0] ?? null;
    const problem = cvError(file);
    if (problem) {
      setStatus("error");
      setError(problem);
      return;
    }
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: new FormData(form),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
        setError(
          json?.error ||
            "Something went wrong. Please email your CV to info@globalnexus.tech instead."
        );
      }
    } catch {
      setStatus("error");
      setError(
        "Couldn't reach our server. Please email your CV to info@globalnexus.tech instead."
      );
    }
  };

  if (status === "sent") {
    return (
      <div className="form-note" role="status">
        <h2 className="card-title">Application received.</h2>
        <p style={{ marginTop: "0.75rem" }}>
          Thanks for applying. We read every application properly and will
          get back to you if it&apos;s a fit. Shortlisted applicants hear from
          us within one week.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} aria-label="Job application form">
      <div className="field">
        <label htmlFor="af-name">Full Name</label>
        <input id="af-name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="af-email">Email</label>
        <input id="af-email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="af-phone">
          Phone <span className="optional">(optional)</span>
        </label>
        <input id="af-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="af-role">Role</label>
        <select
          id="af-role"
          name="role"
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="" disabled>
            Select a role
          </option>
          {roles.map((r) => (
            <option key={r.id} value={r.id}>
              {r.title}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="af-message">
          Why you&apos;re a fit <span className="optional">(optional)</span>
        </label>
        <textarea
          id="af-message"
          name="message"
          placeholder="Tell us briefly why this role fits you."
        />
      </div>
      <div className="field">
        <label htmlFor="af-cv">CV (PDF, DOC or DOCX, up to 4 MB)</label>
        <input
          id="af-cv"
          name="cv"
          type="file"
          required
          accept=".pdf,.doc,.docx"
          onChange={onCvChange}
        />
        {cvName && (
          <p style={{ color: "var(--color-muted)", fontSize: "0.9375rem" }}>
            Attached: {cvName}
          </p>
        )}
      </div>

      {/* Honeypot — invisible to humans, irresistible to bots */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="af-website">Website</label>
        <input
          id="af-website"
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
        {status === "sending" ? "Sending…" : "Submit Application"}{" "}
        <span className="btn-arrow" aria-hidden="true">→</span>
      </button>
    </form>
  );
}
