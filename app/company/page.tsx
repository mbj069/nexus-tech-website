import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our Software Company in Lahore",
  description:
    "Nexus-Tech Solutions is a Lahore-based software development company building websites, custom software, mobile apps, e-commerce and AI solutions for clients worldwide.",
  alternates: { canonical: "/company/" },
};

const BELIEFS = ["simpler", "faster", "more useful", "more scalable"];

const SERVICES = [
  {
    href: "/services/web-development/",
    title: "Web Development",
    description: "High-performance websites and web platforms built for speed, SEO and conversion.",
  },
  {
    href: "/services/software-development/",
    title: "Custom Software",
    description: "Business systems, dashboards and SaaS products built around how you work.",
  },
  {
    href: "/services/mobile-app-development/",
    title: "Mobile Apps",
    description: "User-focused iOS, Android and cross-platform applications.",
  },
  {
    href: "/services/ecommerce-development/",
    title: "E-Commerce",
    description: "Online stores and commerce experiences engineered to sell.",
  },
  {
    href: "/services/ai-solutions/",
    title: "AI Solutions",
    description: "Practical AI integrations and automation for real business use cases.",
  },
];

const PROCESS = [
  { index: "01", title: "DISCOVER", description: "Understand the business, users, requirements and goals." },
  { index: "02", title: "PLAN", description: "Define scope, priorities, architecture and project direction." },
  { index: "03", title: "DESIGN", description: "Create the user experience, interface and product structure." },
  { index: "04", title: "BUILD", description: "Develop, integrate, test and refine the product." },
  { index: "05", title: "LAUNCH", description: "Deploy, monitor and continue improving where needed." },
];

export default function CompanyPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <p className="eyebrow">About Nexus-Tech</p>
        <h1 className="hero-title">Technology With Purpose.</h1>
        <p className="lead">
          Nexus-Tech Solutions is a software development company based in
          Lahore, Pakistan, building for clients worldwide. We make
          websites, custom software, mobile apps, e-commerce platforms
          and AI systems — always around a real business problem, never
          technology for its own sake.
        </p>
        <div className="hero-ctas">
          <Link href="/work/" className="btn btn-secondary">
            View Our Work <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/contact/" className="btn btn-primary">
            Start a Project <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="eyebrow">What We Believe</p>
          <h2 className="section-title">Technology should make things:</h2>
        </Reveal>
        <div className="card-grid cols-3" style={{ marginTop: "2.5rem" }}>
          {BELIEFS.map((belief, i) => (
            <Reveal key={belief} delay={i * 60}>
              <div className="card">
                <p className="microcopy">0{i + 1}</p>
                <h3 className="card-title" style={{ marginTop: "0.75rem" }}>
                  {belief}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="lead" style={{ marginTop: "2rem" }}>
            The goal isn&apos;t to use the newest technology. The goal is
            to use the right technology to create a better outcome.
          </p>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title">Five Disciplines, One Standard</h2>
        </Reveal>
        <div className="card-grid" style={{ marginTop: "2.5rem" }}>
          {SERVICES.map((service, i) => (
            <Reveal key={service.href} delay={Math.min(i, 4) * 60}>
              <Link href={service.href} className="card">
                <h3 className="card-title">{service.title}</h3>
                <p style={{ color: "var(--color-muted)", marginTop: "0.75rem" }}>
                  {service.description}
                </p>
                <p style={{ marginTop: "1.25rem", fontWeight: 600 }}>
                  Explore <span className="card-arrow" aria-hidden="true">→</span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="eyebrow">How We Work</p>
          <h2 className="section-title">A Process That Respects Your Investment</h2>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            Every project follows the same five steps — so you always
            know where things stand, what happens next, and what
            you&apos;re paying for.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ol className="process-steps" style={{ listStyle: "none", padding: 0, marginTop: "2.5rem" }}>
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

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="eyebrow">Where We Are</p>
          <h2 className="section-title">Based in Lahore. Built for the World.</h2>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            We operate from Lahore, Pakistan — and build for businesses
            everywhere. Clear communication, honest timelines, and work
            that holds up wherever your customers are.
          </p>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <CtaBand />
      </section>
    </div>
  );
}
