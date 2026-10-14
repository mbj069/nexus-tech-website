import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/404/" },
};

export default function NotFound() {
  return (
    <div className="container">
      <section className="page-hero" style={{ textAlign: "center" }}>
        <p className="eyebrow">404</p>
        <h1 className="hero-title">This page doesn&apos;t exist.</h1>
        <p className="lead" style={{ marginInline: "auto", marginTop: "1.25rem" }}>
          The link may be broken, or the page may have moved.
        </p>
        <div className="hero-ctas" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn-primary">
            Back to Home <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/contact/" className="btn btn-secondary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
