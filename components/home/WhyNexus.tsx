import Reveal from "@/components/Reveal";

const PILLARS = [
  {
    index: "01",
    title: "Business-first thinking",
    description:
      "We start by understanding the problem, users and business objective before deciding what to build.",
  },
  {
    index: "02",
    title: "Purposeful engineering",
    description:
      "We choose technologies and architecture around the requirements of the product — not the other way around.",
  },
  {
    index: "03",
    title: "Design that communicates",
    description:
      "Interfaces should make complicated products easier to understand, use and trust.",
  },
  {
    index: "04",
    title: "Built to evolve",
    description:
      "We build with the expectation that your product, users and requirements will change.",
  },
];

export default function WhyNexus() {
  return (
    <section className="section" aria-labelledby="why-heading" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Why Nexus-Tech</p>
          <h2 className="section-title" id="why-heading">
            Built for the Business Behind the Product.
          </h2>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            Good software isn&apos;t simply functional. It should make the
            business behind it better.
          </p>
        </Reveal>

        <div className="pillars">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.index} delay={i * 70}>
              <div className="card pillar">
                <p className="pillar-index">{pillar.index}</p>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
