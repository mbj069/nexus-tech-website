import Reveal from "@/components/Reveal";

/**
 * Only technologies Nexus-Tech genuinely delivers with —
 * no aspirational logo wall.
 */
const CATEGORIES: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "PHP", "REST APIs", "SQLite", "PostgreSQL"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Flutter"],
  },
  {
    label: "Commerce",
    items: ["Shopify", "WooCommerce", "Custom Commerce"],
  },
  {
    label: "AI",
    items: ["LLM Integrations", "AI Assistants", "AI Automation"],
  },
];

export default function TechnologySection() {
  return (
    <section className="section" aria-labelledby="tech-heading" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">The Technology Behind the Work</p>
          <h2 className="section-title" id="tech-heading">
            The Right Stack for the Right Problem.
          </h2>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            We work with modern technologies across web, software, mobile,
            commerce and AI. The technology choice depends on the
            project&apos;s requirements — not the other way around.
          </p>
        </Reveal>

        <div className="tech-cats">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.label} delay={Math.min(i, 4) * 60}>
              <div className="tech-cat">
                <h3>{category.label}</h3>
                <p>
                  {category.items.map((item, j) => (
                    <span key={item}>
                      {item}
                      {j < category.items.length - 1 && (
                        <span className="sep" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
