import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export type Offering = {
  title: string;
  description: string;
};

type ServicePageProps = {
  h1: string;
  intro: string;
  offeringsTitle?: string;
  offerings: Offering[];
};

/**
 * Shared service-page architecture (Draft 02 §15):
 * hero → what we build → capabilities → CTA.
 * Process, work and FAQ sections arrive with the full page builds.
 */
export default function ServicePage({
  h1,
  intro,
  offeringsTitle = "What We Can Build",
  offerings,
}: ServicePageProps) {
  return (
    <div className="container">
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

      <section className="section" style={{ paddingTop: 0 }}>
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

      <section className="section" style={{ paddingTop: 0 }}>
        <CtaBand title="Let's Build It." />
      </section>
    </div>
  );
}
