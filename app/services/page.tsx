import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Software Development & Digital Solutions",
  description:
    "Explore Nexus-Tech Solutions' services: web development, custom software, mobile apps, e-commerce development and AI solutions — built for performance and growth.",
  alternates: { canonical: "/services/" },
};

const SERVICES = [
  {
    href: "/services/web-development/",
    index: "01",
    name: "Web Development",
    description:
      "Modern, responsive websites and web applications designed for performance, usability and growth.",
  },
  {
    href: "/services/software-development/",
    index: "02",
    name: "Custom Software Development",
    description:
      "Business platforms, SaaS products, dashboards and internal systems built around your specific workflows.",
  },
  {
    href: "/services/mobile-app-development/",
    index: "03",
    name: "Mobile App Development",
    description:
      "User-focused mobile applications for businesses, startups and digital products.",
  },
  {
    href: "/services/ecommerce-development/",
    index: "04",
    name: "E-Commerce Development",
    description:
      "High-performing online stores and custom commerce experiences built to help businesses sell online.",
  },
  {
    href: "/services/ai-solutions/",
    index: "05",
    name: "AI Solutions",
    description:
      "AI integrations, automation, intelligent workflows and AI-powered applications built around practical business use cases.",
  },
];

export default function ServicesPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <p className="eyebrow">Capabilities</p>
        <h1 className="hero-title">What We Build</h1>
        <p className="lead">
          From customer-facing websites to internal business systems, we
          build digital products designed to work in the real world.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="card-grid">
          {SERVICES.map((service, i) => (
            <Reveal key={service.href} delay={Math.min(i, 4) * 60}>
              <Link href={service.href} className="card">
                <p className="microcopy">{service.index}</p>
                <h2 className="card-title" style={{ marginTop: "0.75rem" }}>
                  {service.name}
                </h2>
                <p style={{ color: "var(--color-muted)", marginTop: "0.75rem" }}>
                  {service.description}
                </p>
                <p style={{ marginTop: "1.25rem", fontWeight: 600 }}>
                  Explore {service.name.split(" ")[0]} Development{" "}
                  <span className="card-arrow" aria-hidden="true">→</span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <CtaBand />
      </section>
    </div>
  );
}
