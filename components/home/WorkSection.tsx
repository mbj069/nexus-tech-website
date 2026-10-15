import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

/**
 * Real projects only: names, categories and technology tags verified
 * against actual work. No invented descriptions, metrics or clients —
 * case-study detail arrives in the work phase.
 */
const PROJECTS = [
  {
    name: "NexusPOS",
    category: "SaaS / Business Software",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/work/nexuspos-dashboard.webp",
  },
  {
    name: "PharmaNexus",
    category: "Healthcare / Business Software",
    tags: ["PHP", "Inventory", "Stock Tracking"],
    image: "/work/pharmanexus-inventory.webp",
  },
  {
    name: "NexusCRM",
    category: "CRM / Business Software",
    tags: ["TypeScript", "Express"],
    image: "/work/nexuscrm-pipeline.webp",
  },
  {
    name: "CliniX AI",
    category: "Healthcare / AI",
    tags: ["React", "Node.js", "SQLite", "AI Gateway"],
    image: "/work/clinixai-record.webp",
  },
  {
    name: "Neon Oroborus",
    category: "Experimental / Digital Product",
    tags: ["Canvas", "GSAP"],
    image: "/work/neon-oroborus-gameplay.webp",
  },
];

export default function WorkSection() {
  return (
    <section className="section" aria-labelledby="work-heading" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Selected Work</p>
          <h2 className="section-title" id="work-heading">
            Ideas We&apos;ve Turned Into Products.
          </h2>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            A selection of digital products and platforms developed by
            Nexus-Tech.
          </p>
        </Reveal>

        <div className="work-grid">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={Math.min(i, 3) * 70}>
              <article
                className="work-card"
                data-index={`0${i + 1}`}
                aria-label={`${project.name} — ${project.category}`}
              >
                <div className="work-thumb" aria-hidden="true">
                  <Image
                    src={project.image}
                    alt=""
                    width={800}
                    height={447}
                    sizes="(max-width: 700px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <p className="microcopy">{project.category}</p>
                <h3>{project.name}</h3>
                <div className="tag-list" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/work/" className="btn btn-secondary">
              View All Work <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
