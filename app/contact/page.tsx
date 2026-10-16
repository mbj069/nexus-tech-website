import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { WHATSAPP_URL } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Start Your Project",
  description:
    "Have an idea, a business problem or a product that needs work? Tell Nexus-Tech Solutions what you're building — or reach us instantly on WhatsApp.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1 className="hero-title">Let&apos;s Build Something Useful.</h1>
        <p className="lead">
          Have an idea, a business problem or an existing product that
          needs work? Tell us what you&apos;re trying to build and
          we&apos;ll help you figure out the right next step.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "1fr",
          }}
          className="contact-layout"
        >
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={120}>
            <div className="card">
              <h2 className="card-title">Prefer WhatsApp?</h2>
              <p style={{ color: "var(--color-muted)", marginTop: "0.75rem" }}>
                Send us a message directly and tell us what you&apos;re
                working on. Prefer email? Write to{" "}
                <a href="mailto:info@globalnexus.tech">
                  info@globalnexus.tech
                </a>
                .
              </p>
              <a
                className="btn btn-primary"
                style={{ marginTop: "1.5rem" }}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .contact-layout { grid-template-columns: 1.4fr 1fr !important; align-items: start; }
        }
      `}</style>
    </div>
  );
}
