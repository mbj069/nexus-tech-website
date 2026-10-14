import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Introduction() {
  return (
    <section className="section intro-section" aria-labelledby="intro-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow">More Than Code</p>
          <h2 className="section-title" id="intro-heading">
            Technology Built Around Your Business.
          </h2>
          <p className="lead" style={{ marginTop: "1.5rem" }}>
            Every business has different problems, processes and goals. We
            combine strategy, design and engineering to build digital
            products around the way your business actually works — not
            around a one-size-fits-all template.
          </p>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Whether you need a high-converting website, a custom business
            platform, a mobile application, an online store or an
            AI-powered workflow, we help turn the idea into something real
            and usable.
          </p>
          <Link
            href="/services/"
            className="btn btn-secondary"
            style={{ marginTop: "2rem" }}
          >
            Explore Our Services <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
