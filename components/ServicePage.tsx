import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export type Offering = {
  title: string;
  description: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type RelatedProject = {
  name: string;
  category: string;
};

type ServicePageProps = {
  h1: string;
  intro: string;
  problemHeading: string;
  problemCopy: string[];
  offeringsTitle?: string;
  offerings: Offering[];
  capabilitiesHeading: string;
  capabilities: Offering[];
  relatedWork?: RelatedProject[];
  faqs: Faq[];
};

const PROCESS = [
  { index: "01", title: "DISCOVER", description: "Understand the business, users, requirements and goals." },
  { index: "02", title: "PLAN", description: "Define scope, priorities, architecture and project direction." },
  { index: "03", title: "DESIGN", description: "Create the user experience, interface and product structure." },
  { index: "04", title: "BUILD", description: "Develop, integrate, test and refine the product." },
  { index: "05", title: "LAUNCH", description: "Deploy, monitor and continue improving where needed." },
];

/**
 * Full service-page architecture (Draft 02 §15):
 * hero → problem → what we build → capabilities → process →
 * related work → FAQ → CTA.
 *
 * Related work appears ONLY where real Nexus-Tech work exists —
 * never invented to fill a section.
 */
export default function ServicePage({
  h1,
  intro,
  problemHeading,
  problemCopy,
  offeringsTitle = "What We Can Build",
  offerings,
  capabilitiesHeading,
  capabilities,
  relatedWork,
  faqs,
}: ServicePageProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="container">
      {/* hero */}
      <section className="page-hero">
        <p className="eyebrow">Nexus-Tech / Services</p>
        <h1 className="hero-title">{h1}</h1>
        <p className="lead">{intro}</p>
        <div className="hero-ctas">
          <Link href="/contact/" className="btn btn-primary">
            Start a Project <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/work/" className="btn btn-secondary">
            View Our Work <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* problem */}
      <section className="problem-band" aria-label="The problem this service solves">
        <Reveal>
          <h2 className="section-title">{problemHeading}</h2>
          {problemCopy.map((paragraph, i) => (
            <p className="lead" key={i} style={{ marginTop: "1.25rem" }}>
              {paragraph}
            </p>
          ))}
        </Reveal>
      </section>

      {/* offerings */}
      <section className="section" aria-label={offeringsTitle}>
        <Reveal>
          <h2 className="section-title">{offeringsTitle}</h2>
        </Reveal>
        <div className="offer-grid cols-4">
          {offerings.map((offering) => (
            <div key={offering.title} className="offer-item">
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* capabilities */}
      <section className="section" style={{ paddingTop: 0 }} aria-label={capabilitiesHeading}>
        <Reveal>
          <h2 className="section-title">{capabilitiesHeading}</h2>
        </Reveal>
        <div className="offer-grid">
          {capabilities.map((capability) => (
            <div key={capability.title} className="offer-item">
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* process */}
      <section className="section" style={{ paddingTop: 0 }} aria-label="Our process">
        <Reveal>
          <h2 className="section-title">How We Approach These Projects</h2>
        </Reveal>
        <Reveal delay={100}>
          <ol className="process-steps" style={{ listStyle: "none", padding: 0 }}>
            {PROCESS.map((step) => (
              <li key={step.index} className="process-step">
                <p className="step-index">{step.index}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* related work — only where real work exists */}
      {relatedWork && relatedWork.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }} aria-label="Related work">
          <Reveal>
            <h2 className="section-title">Related Work</h2>
          </Reveal>
          <div className="card-grid">
            {relatedWork.map((project) => (
              <Reveal key={project.name}>
                <Link href="/work/" className="card">
                  <p className="microcopy">{project.category}</p>
                  <h3 className="card-title" style={{ marginTop: "0.75rem" }}>
                    {project.name}
                  </h3>
                  <p style={{ marginTop: "1rem", fontWeight: 600 }}>
                    View in portfolio{" "}
                    <span className="card-arrow" aria-hidden="true">→</span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* FAQ — genuine questions only, no stuffing */}
      <section className="section" style={{ paddingTop: 0 }} aria-label="Frequently asked questions">
        <Reveal>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </Reveal>
        <div className="faq-list" style={{ marginTop: "2rem" }}>
          {faqs.map((faq) => (
            <details key={faq.q} className="faq-item">
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <CtaBand title="Let's Build It." />
      </section>
    </div>
  );
}
