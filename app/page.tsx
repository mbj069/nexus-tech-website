import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  // Uses the default title from the root layout.
  description:
    "Nexus-Tech Solutions builds high-performance websites, custom software, mobile apps, e-commerce platforms and AI solutions for businesses worldwide.",
  alternates: { canonical: "/" },
};

const CAPABILITIES = ["WEB", "SOFTWARE", "MOBILE", "E-COMMERCE", "AI"];

export default function HomePage() {
  return (
    <>
      <div className="container">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Nexus-Tech Solutions</p>
            <h1 className="hero-title">
              We Build Digital Products That Move Businesses Forward.
            </h1>
            <p className="lead">
              Nexus-Tech Solutions designs and develops high-performance
              websites, custom software, mobile applications, e-commerce
              platforms and AI-powered solutions for businesses worldwide.
            </p>
            <div className="hero-ctas">
              <Link href="/work/" className="btn btn-secondary">
                View Our Work <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/contact/" className="btn btn-primary">
                Start a Project <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="microcopy">Lahore, Pakistan · Serving Clients Worldwide</p>
          </div>
        </section>

        <Reveal>
          <div className="cap-strip" aria-label="What we build">
            <span className="cap-label">What we build</span>
            {CAPABILITIES.map((item) => (
              <span key={item} className="cap-item">
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Full homepage sections (introduction, services, work, why,
            process, technology, company, final CTA) are built in the
            next phase on top of this foundation. */}
      </div>
    </>
  );
}
