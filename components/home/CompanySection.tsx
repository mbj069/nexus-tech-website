import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CompanySection() {
  return (
    <section
      className="section company-preview"
      aria-labelledby="company-heading"
      style={{ paddingTop: 0 }}
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow">About Nexus-Tech</p>
          <h2 className="section-title" id="company-heading">
            A Technology Partner for What&apos;s Next.
          </h2>
          <p className="lead">
            Nexus-Tech Solutions is a Lahore-based technology company
            focused on designing and developing practical digital products
            for businesses and organizations.
          </p>
          <p className="lead">
            We work with clients locally and internationally, helping turn
            ideas, operational problems and business requirements into
            reliable digital solutions.
          </p>
          <Link href="/company/" className="btn btn-secondary">
            Meet Nexus-Tech <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
