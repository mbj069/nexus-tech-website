import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Introduction from "@/components/home/Introduction";
import ServicesSection from "@/components/home/ServicesSection";
import WorkSection from "@/components/home/WorkSection";
import WhyNexus from "@/components/home/WhyNexus";
import ProcessSection from "@/components/home/ProcessSection";
import TechnologySection from "@/components/home/TechnologySection";
import CompanySection from "@/components/home/CompanySection";

export const metadata: Metadata = {
  // Uses the default title from the root layout.
  description:
    "Nexus-Tech Solutions builds high-performance websites, custom software, mobile apps, e-commerce platforms and AI solutions for businesses worldwide.",
  alternates: { canonical: "/" },
};

const CAPABILITIES = ["WEB", "SOFTWARE", "MOBILE", "E-COMMERCE", "AI"];

/**
 * Homepage flow (locked, Draft 02 §34):
 * hero → capability strip → introduction → services → selected work →
 * why Nexus-Tech → process → technology → company → final CTA.
 */
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
      </div>

      <Introduction />
      <ServicesSection />
      <WorkSection />
      <WhyNexus />
      <ProcessSection />
      <TechnologySection />
      <CompanySection />

      <div className="container">
        <section className="section" style={{ paddingTop: 0 }}>
          <CtaBand
            title="Have a Project in Mind?"
            copy="Tell us what you're building. We'll help you figure out the smartest way to build it."
          />
        </section>
      </div>
    </>
  );
}
