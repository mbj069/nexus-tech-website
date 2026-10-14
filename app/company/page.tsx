import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Nexus-Tech Solutions | Software Development Agency",
  description:
    "Nexus-Tech Solutions is a Lahore-based software development company building websites, custom software, mobile apps, e-commerce and AI solutions for clients worldwide.",
  alternates: { canonical: "/company/" },
};

const BELIEFS = ["simpler", "faster", "more useful", "more scalable"];

export default function CompanyPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <p className="eyebrow">About Nexus-Tech</p>
        <h1 className="hero-title">Technology With Purpose.</h1>
        <p className="lead">
          Nexus-Tech Solutions builds digital products that solve real
          business problems. Based in Lahore, Pakistan, we work with
          businesses and organizations that need more than an off-the-shelf
          solution — from modern websites and e-commerce platforms to
          custom software, mobile applications and AI-powered systems.
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
            The goal isn&apos;t to use the newest technology. The goal is to
            use the right technology to create a better outcome.
          </p>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="eyebrow">Where We Are</p>
          <h2 className="section-title">Based in Lahore. Built for the World.</h2>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            Nexus-Tech operates from Lahore, Pakistan while working with
            clients and projects across international markets.
          </p>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <CtaBand />
      </section>
    </div>
  );
}
