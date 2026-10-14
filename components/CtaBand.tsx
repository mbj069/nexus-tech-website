import Link from "next/link";
import Reveal from "@/components/Reveal";

type CtaBandProps = {
  title?: string;
  copy?: string;
};

/** Shared conversion band — same CTA language on every page. */
export default function CtaBand({
  title = "Have a Project in Mind?",
  copy = "Tell us what you're building. We'll help you figure out the smartest way to build it.",
}: CtaBandProps) {
  return (
    <Reveal>
      <div className="cta-band">
        <h2 className="section-title">{title}</h2>
        <p className="lead" style={{ margin: "1.25rem auto 0" }}>
          {copy}
        </p>
        <div className="hero-ctas">
          <Link href="/contact/" className="btn btn-primary">
            Start a Project <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
