import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our Work & Projects",
  description:
    "Case studies of websites, applications and software platforms designed and developed by Nexus-Tech Solutions — including NexusPOS, PharmaNexus, NexusCRM and CliniX AI.",
  alternates: { canonical: "/work/" },
};

type CaseStudy = {
  index: string;
  name: string;
  category: string;
  tagline: string;
  points: string[];
  stack: string[];
  github?: string;
};

/**
 * Every claim below is verified against the real projects:
 * descriptions match the original portfolio entries; CliniX AI
 * details match the shipped build. No invented metrics, clients
 * or results — per the honesty rule.
 */
const CASE_STUDIES: CaseStudy[] = [
  {
    index: "01",
    name: "NexusPOS",
    category: "SaaS / Business Software",
    tagline:
      "Cloud-based point of sale system with real-time analytics and inventory sync.",
    points: [
      "Live sales analytics as transactions happen",
      "Inventory stays in sync automatically as stock moves",
      "Cloud-based — accessible from anywhere, no on-premise servers",
    ],
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    index: "02",
    name: "PharmaNexus",
    category: "Healthcare / Business Software",
    tagline:
      "Comprehensive pharmacy management system with advanced stock tracking and automated reordering.",
    points: [
      "Advanced stock tracking across pharmacy inventory",
      "Automated reordering when stock runs low",
      "Built for the day-to-day realities of running a pharmacy",
    ],
    stack: ["PHP"],
    github: "https://github.com/mbj069/pharma-nexus",
  },
  {
    index: "03",
    name: "NexusCRM",
    category: "CRM / Business Software",
    tagline:
      "Scalable CRM platform for managing customer lifecycles and sales pipelines.",
    points: [
      "Customer lifecycles managed in one place",
      "Sales pipeline tracking from lead to close",
      "Architecture designed to scale with the business",
    ],
    stack: ["TypeScript", "Express"],
  },
  {
    index: "04",
    name: "CliniX AI",
    category: "Healthcare / AI · Prototype",
    tagline:
      "Patient-record system with role-based access, audit logging and a bring-your-own-AI layer.",
    points: [
      "Role-based access for admin, doctor, nurse and receptionist",
      "Append-only audit trail for full accountability",
      "AI clinical summarizer, AI scribe for SOAP drafts, and natural-language patient search",
    ],
    stack: ["React", "Express", "SQLite", "AI"],
    github: "https://github.com/mbj069/Clinix-ai",
  },
  {
    index: "05",
    name: "Neon Oroborus",
    category: "Gaming / Digital Product",
    tagline:
      "High-speed action game developed as a modern web-based arcade experience.",
    points: [
      "Fast, responsive arcade gameplay in the browser",
      "Canvas-rendered visuals with smooth motion",
      "No installs — plays instantly on the web",
    ],
    stack: ["Canvas", "GSAP"],
  },
];

export default function WorkPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <p className="eyebrow">Selected Work</p>
        <h1 className="hero-title">Things We&apos;ve Built.</h1>
        <p className="lead">
          A selection of software platforms, applications and digital
          products we&apos;ve designed and developed — each one built
          around a real problem.
        </p>
      </section>

      <div className="case-list">
        {CASE_STUDIES.map((study) => (
          <Reveal key={study.name}>
            <article className="case-study" aria-label={`${study.name} case study`}>
              <p className="case-index" aria-hidden="true">
                {study.index}
              </p>
              <div className="case-body">
                <p className="microcopy">{study.category}</p>
                <h2 className="case-title">{study.name}</h2>
                <p className="case-tagline">{study.tagline}</p>
                <ul className="case-points">
                  {study.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="tag-list" aria-label="Technologies used">
                  {study.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {study.github && (
                  <p style={{ marginTop: "1.25rem" }}>
                    <a
                      href={study.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      View the code on GitHub{" "}
                      <span aria-hidden="true">→</span>
                    </a>
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="section">
        <CtaBand
          title="Have a Project in Mind?"
          copy="Tell us what you're building. We'll help you figure out the smartest way to build it."
        />
      </section>
    </div>
  );
}
