import Reveal from "@/components/Reveal";

const STEPS = [
  {
    index: "01",
    title: "DISCOVER",
    description: "Understand the business, users, requirements and goals.",
  },
  {
    index: "02",
    title: "PLAN",
    description: "Define scope, priorities, architecture and project direction.",
  },
  {
    index: "03",
    title: "DESIGN",
    description: "Create the user experience, interface and product structure.",
  },
  {
    index: "04",
    title: "BUILD",
    description: "Develop, integrate, test and refine the product.",
  },
  {
    index: "05",
    title: "LAUNCH",
    description: "Deploy, monitor and continue improving where needed.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section" aria-labelledby="process-heading" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">How We Work</p>
          <h2 className="section-title" id="process-heading">
            From Idea to Launch.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <ol className="process-steps" style={{ listStyle: "none", padding: 0 }}>
            {STEPS.map((step) => (
              <li key={step.index} className="process-step">
                <p className="step-index">{step.index}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
