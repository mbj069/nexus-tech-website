import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Careers in Lahore & Remote",
  description:
    "Join Nexus-Tech Solutions. We're hiring a web development intern (remote, freshers welcome), a sales intern (remote, commission based) and a sales agent (remote, 1+ year experience). See open roles and apply.",
  alternates: { canonical: "/careers/" },
};

type Role = {
  id: string;
  index: string;
  title: string;
  tags: string[];
  intro: string;
  points: string[];
  lookingFor: string[];
};

const ROLES: Role[] = [
  {
    id: "web-dev-intern",
    index: "01",
    title: "Web Development Intern",
    tags: ["Remote", "Internship", "Freshers Welcome"],
    intro:
      "Learn by building. You'll work on real projects with our developers: websites and web apps in React and Next.js, with mentorship and code review. Freshers can apply.",
    points: [
      "Build features on real client projects, not toy exercises",
      "Learn React, Next.js and TypeScript by doing",
      "Take part in code reviews and ship work you can show",
    ],
    lookingFor: [
      "Solid HTML, CSS and JavaScript basics",
      "Curiosity and the habit of finishing things",
      "A project or portfolio to show us is a plus",
    ],
  },
  {
    id: "sales-intern",
    index: "02",
    title: "Sales Intern",
    tags: ["Remote", "Internship", "Commission Based"],
    intro:
      "Start your sales career with us. You'll learn outreach, follow ups and demos while working with real businesses. This role is commission based with no fixed salary.",
    points: [
      "Outbound outreach to small businesses on WhatsApp, email and calls",
      "Follow up and keep conversations warm until they're ready",
      "Qualify leads and book intro calls with the team",
      "Coordinate demos of our work for interested businesses",
    ],
    lookingFor: [
      "Clear written and spoken English",
      "Comfortable starting conversations with strangers",
      "Organised and persistent with follow ups",
      "Freshers and experienced applicants both welcome",
    ],
  },
  {
    id: "sales-agent",
    index: "03",
    title: "Sales Agent",
    tags: ["Remote", "Commission Based"],
    intro:
      "Bring your experience and earn on results. You'll run outreach and close deals with small businesses. This role is commission based with no fixed salary.",
    points: [
      "Outbound outreach to small businesses on WhatsApp, email and calls",
      "Follow up and keep conversations warm until they're ready",
      "Qualify leads and book intro calls",
      "Present demos and close deals with interested businesses",
    ],
    lookingFor: [
      "At least 1 year of sales experience",
      "Clear written and spoken English",
      "Comfortable starting conversations with strangers",
      "Organised and persistent with follow ups",
    ],
  },
];

const WHY = [
  {
    title: "Real products, real clients",
    description:
      "You work on products people actually use. NexusPOS, PharmaNexus, NexusCRM and CliniX AI, plus live client projects. Not internal demos.",
  },
  {
    title: "Small team, real responsibility",
    description:
      "We're a small team, so your work is visible and your decisions matter from your first week.",
  },
  {
    title: "Modern stack, real mentorship",
    description:
      "React, Next.js, TypeScript and Node.js, with code review and guidance from developers who ship.",
  },
];

/* JobPosting structured data. Helps the roles appear in Google for Jobs.
   Only verified facts: no salary figures (commission based, no fixed
   salary), no invented employment type for the sales agent, no
   application deadline. */
const jobPostingJsonLd = ROLES.map((role) => {
  const base = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: `${role.intro} ${role.points.join(" ")}`,
    datePosted: "2026-11-18",
    hiringOrganization: {
      "@type": "Organization",
      name: "Nexus-Tech Solutions",
      sameAs: "https://globalnexus.tech/",
      logo: "https://globalnexus.tech/logo.jpg",
    },
  };
  if (role.id === "sales-agent") {
    return { ...base, jobLocationType: "TELECOMMUTE" };
  }
  return { ...base, employmentType: "INTERN", jobLocationType: "TELECOMMUTE" };
});

export default function CareersPage() {
  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <section className="page-hero">
        <p className="eyebrow">Careers</p>
        <h1 className="hero-title">Come Build With Us.</h1>
        <p className="lead">
          Nexus-Tech Solutions is a software development company based in
          Lahore, Pakistan, building websites, custom software, mobile apps,
          e-commerce platforms and AI solutions for clients worldwide.
          We&apos;re growing and looking for people who want to build real
          products with real clients.
        </p>
        <div className="hero-ctas">
          <Link href="#open-roles" className="btn btn-primary">
            View Open Roles <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <a href="mailto:info@globalnexus.tech" className="btn btn-secondary">
            Email Us <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="eyebrow">Why Nexus-Tech</p>
          <h2 className="section-title">What working here is actually like.</h2>
        </Reveal>
        <div className="card-grid cols-3" style={{ marginTop: "2.5rem" }}>
          {WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="card" style={{ height: "100%" }}>
                <h3 className="card-title">{item.title}</h3>
                <p
                  style={{ color: "var(--color-muted)", marginTop: "0.75rem" }}
                >
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="open-roles">
        <Reveal>
          <p className="eyebrow">Open Roles</p>
          <h2 className="section-title">Open Roles</h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Pick a role below, then apply through the form at the bottom of
            this page. Your CV is required, and a short note on why
            you&apos;re a fit helps.
          </p>
        </Reveal>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            marginTop: "2.5rem",
          }}
        >
          {ROLES.map((role, i) => (
            <Reveal key={role.id} delay={i * 90}>
              <article className="card">
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    color: "var(--color-muted)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {role.index}
                </p>
                <div className="tag-list" style={{ marginTop: "0.75rem" }}>
                  {role.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="card-title" style={{ marginTop: "1rem" }}>
                  {role.title}
                </h3>
                <p
                  style={{ color: "var(--color-muted)", marginTop: "0.75rem" }}
                >
                  {role.intro}
                </p>
                <h4
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                  }}
                >
                  What you&apos;ll do
                </h4>
                <ul
                  style={{
                    marginTop: "0.5rem",
                    paddingLeft: "1.25rem",
                    color: "var(--color-muted)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <h4
                  style={{
                    marginTop: "1.25rem",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                  }}
                >
                  What we&apos;re looking for
                </h4>
                <ul
                  style={{
                    marginTop: "0.5rem",
                    paddingLeft: "1.25rem",
                    color: "var(--color-muted)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  {role.lookingFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className="btn btn-primary"
                  style={{ marginTop: "1.5rem" }}
                  href="#apply"
                  data-apply-role={role.id}
                >
                  Apply for This Role{" "}
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="apply">
        <Reveal>
          <p className="eyebrow">Apply</p>
          <h2 className="section-title">Apply Now</h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Fill in the form and attach your CV. Applications go straight to
            our inbox, and shortlisted applicants hear from us within one
            week.
          </p>
        </Reveal>
        <Reveal delay={90}>
          <div className="card" style={{ marginTop: "2.5rem" }}>
            <ApplyForm
              roles={ROLES.map(({ id, title }) => ({ id, title }))}
            />
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="cta-band">
            <h2 className="section-title">Don&apos;t see your role?</h2>
            <p className="lead" style={{ margin: "1.25rem auto 0" }}>
              Tell us what you do best. Write to{" "}
              <a href="mailto:info@globalnexus.tech">
                info@globalnexus.tech
              </a>{" "}
              with your work. We keep strong applications on file.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
