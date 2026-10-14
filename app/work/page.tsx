import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our Work & Projects",
  description:
    "A selection of websites, applications, software platforms and digital products designed and developed by Nexus-Tech Solutions.",
  alternates: { canonical: "/work/" },
};

/**
 * Real projects only — names and categories verified against actual
 * work. Descriptions are added per project only after verification
 * against the real thing (Draft 02 §8: no invented results, clients,
 * metrics or testimonials).
 */
const PROJECTS = [
  { name: "NexusPOS", category: "SaaS / Business Software" },
  { name: "PharmaNexus", category: "Healthcare / Business Software" },
  { name: "NexusCRM", category: "CRM / Business Software" },
  { name: "CliniX AI", category: "Healthcare / AI" },
  { name: "Neon Oroborus", category: "Experimental / Digital Product" },
];

export default function WorkPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <p className="eyebrow">Selected Work</p>
        <h1 className="hero-title">Our Work</h1>
        <p className="lead">
          A selection of websites, applications, software platforms and
          digital products we&apos;ve designed and developed.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="card-grid">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={Math.min(i, 4) * 60}>
              <article className="card">
                <p className="microcopy">{project.category}</p>
                <h2 className="card-title" style={{ marginTop: "0.75rem" }}>
                  {project.name}
                </h2>
                {/* TODO(phase: work): verified case-study description + visual per project */}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <CtaBand
          title="Have a Project in Mind?"
          copy="Tell us what you're building. We'll help you figure out the smartest way to build it."
        />
      </section>
    </div>
  );
}
