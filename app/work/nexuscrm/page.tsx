import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "NexusCRM | Real Estate CRM Software",
  description:
    "NexusCRM is a real estate CRM for property agencies. Leads, property inventory, deals, payment plans, commissions and owner earnings in one place. Try the live demo.",
  alternates: { canonical: "/work/nexuscrm/" },
};

const LIVE_DEMO_URL = "https://nexuscrm-jet.vercel.app";

const WHY = [
  {
    title: "Never lose a lead",
    description:
      "Every buyer and renter is recorded, assigned to an agent, and followed up on time. Overdue follow-ups turn red until they are done.",
  },
  {
    title: "Know your stock",
    description:
      "Every plot, house and shop on your books, with its price, status and owner, searchable in seconds while the client is still on the phone.",
  },
  {
    title: "End commission disputes",
    description:
      "The agent share is fixed when the deal is made, not reconstructed from chat history later. Paid and pending are tracked for everyone.",
  },
  {
    title: "See your real profit",
    description:
      "As the owner, you see what you actually kept: commission received, minus agent shares paid, minus office expenses. Month by month.",
  },
];

const TOUR = [
  {
    image: {
      src: "/work/nexuscrm-leads.webp",
      alt: "NexusCRM leads list showing prospects with Buy or Rent intent, stage, area, assigned agent and budget",
    },
    title: "Leads that never slip away",
    intro:
      "A lead in NexusCRM is a person with a name, a budget and an agent who owns the relationship, not a number in someone's phone.",
    points: [
      "Buy or Rent, kept separate. Renters never get mixed into your buyer lists.",
      "Every stage visible: New, Contacted, Viewing, Negotiating, Deal, Token Paid, Closed.",
      "Find anyone instantly. Search by name, phone, neighbourhood or budget.",
    ],
  },
  {
    image: {
      src: "/work/nexuscrm-inventory.webp",
      alt: "NexusCRM inventory grid of property cards with status, prices and rent per month",
    },
    title: "Inventory you can quote with confidence",
    intro:
      "Answer a client on the spot: what is available, where, and for how much, without calling three colleagues first.",
    points: [
      "Sale and rental stock together. Price for sales, rent per month for rentals.",
      "Sized your way: square feet, marla, kanal, acres and more, from city plots to agricultural land, in the units your market uses.",
      "Always current: Available, Blocked, Booked, Sold or Rented. A closed rental marks itself Rented.",
    ],
  },
  {
    image: {
      src: "/work/nexuscrm-deals.webp",
      alt: "NexusCRM deals pipeline with deal values, stages and bayana token money",
    },
    title: "Deals and commission, settled in advance",
    intro:
      "The money terms are agreed once, when the deal opens. From then on, NexusCRM keeps the score, for you and for your agents.",
    points: [
      "Your commission, your way: a percentage of the deal, or a fixed amount.",
      "Agent share set upfront, as an amount or a percentage, agreed before the work starts.",
      "Token money tracked on every deal: bayana, earnest money or booking deposit, whatever your market calls it, from first payment to closing.",
    ],
  },
  {
    image: {
      src: "/work/nexuscrm-followups.webp",
      alt: "NexusCRM follow-ups list with due dates and overdue highlights",
    },
    title: "Follow-ups that make sure it happens",
    intro:
      "Deals are won on the second and third call. NexusCRM makes sure those calls get made.",
    points: [
      "Due dates on everything: call-backs, viewings, instalment reminders.",
      "Overdue turns red. Nothing quietly expires in a diary nobody opened.",
      "Linked to the record. Each follow-up sits with the lead, contact or deal it belongs to.",
    ],
  },
];

const MODULES = [
  {
    title: "Dashboard",
    description:
      "Your whole business on one screen: commission earned, pending and paid, active leads, and your pipeline by stage. No reports to run.",
  },
  {
    title: "Leads",
    description:
      "Buyers and renters, from first call to token money, with intent, stage, neighbourhood, budget and the agent responsible for each one.",
  },
  {
    title: "Contacts",
    description:
      "Buyers, sellers, owners and landlords in one directory, so the owner of any property is one search away when you need them.",
  },
  {
    title: "Inventory",
    description:
      "Plots, houses, shops and land, for sale or for rent, with flexible sizing in square feet, marla, kanal, acres and more, and a live status on every property.",
  },
  {
    title: "Deals",
    description:
      "Each deal carries its value, token money, commission and agent share from day one. Sales and rentals alike, all in one pipeline.",
  },
  {
    title: "Payments",
    description:
      "Instalments and receipts recorded against the deal they belong to, so you always know what has been paid and what is still due.",
  },
  {
    title: "Commissions",
    description:
      "Total, paid and pending, for the agency and for each agent. Everyone can see their own numbers; nobody argues about them.",
  },
  {
    title: "Expenses",
    description:
      "Salaries, rent, marketing, utilities. Every office cost recorded by category, so your profit figure is honest, not a guess.",
  },
  {
    title: "Follow-ups",
    description:
      "Call-backs and instalment reminders with due dates, linked to the lead or deal they belong to. Miss one, and it shows, in red.",
  },
];

const STEPS = [
  {
    index: "01",
    title: "Add the lead",
    description:
      "Name, phone, Buy or Rent, neighbourhood and budget, assigned to an agent in seconds.",
  },
  {
    index: "02",
    title: "Work it through",
    description:
      "Calls, viewings and negotiation, stage by stage, with follow-ups so nobody goes cold.",
  },
  {
    index: "03",
    title: "Match a property",
    description:
      "Pick from live inventory that fits the budget, sale or rental, priced and available.",
  },
  {
    index: "04",
    title: "Close the deal",
    description:
      "Token money recorded, commission and agent share fixed. The paperwork trail is already there.",
  },
  {
    index: "05",
    title: "See your profit",
    description:
      "Payments land, shares are tracked, and your earnings update. No month-end scramble.",
  },
];

const ROLES = [
  {
    title: "Owners",
    description:
      "The full picture without asking anyone for it: earnings, commission, expenses and what every agent is working on, from your phone, wherever you are.",
  },
  {
    title: "Managers",
    description:
      "Hand out leads fairly, watch every stage, and step in before a deal stalls. The pipeline tells you where the office stands today.",
  },
  {
    title: "Agents",
    description:
      "Your leads, your follow-ups and your commission share, clear, current and yours to check anytime. On site, on your phone, on the move.",
  },
];

const FAQ = [
  {
    q: "Does NexusCRM handle rentals as well as sales?",
    a: "Yes. Rentals are first-class, not an afterthought. Renters are tracked as their own leads, rental properties show rent per month, and when a rental deal closes, the property marks itself Rented.",
  },
  {
    q: "How do commissions and agent shares work?",
    a: "Each deal carries its commission, a percentage of the value or a fixed amount, and the agent share, agreed when the deal opens. NexusCRM then tracks what has been received and what has been paid out, for the agency and for each agent separately.",
  },
  {
    q: "Who can see what I earned?",
    a: "Only you. Your earnings are visible on the owner's account alone. Managers run the pipeline, agents see their own leads and their own share. Your bottom line stays yours.",
  },
  {
    q: "Does it work on my phone?",
    a: "Fully. NexusCRM is built for the phone as much as the desk. Navigation, quick actions and every screen work on a mobile, so an agent on site has the same information as the office.",
  },
  {
    q: "Will it work for my market and country?",
    a: "Yes, wherever your agency is. NexusCRM adapts to local practice anywhere: housing societies and phases or neighbourhoods and districts, plot sizes in marla, kanal, acres or square feet, token money on deals, bayana, earnest money or booking deposit, and rent by the month. It works in any currency, including PKR, and was built in Lahore, shaped by real agency workflows, for agencies worldwide.",
  },
  {
    q: "How do I get started?",
    a: "Open the live demo and take it for a spin. Every screen on this page is in there. When you are ready, message us on WhatsApp and we will get your agency set up.",
  },
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NexusCRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: LIVE_DEMO_URL,
  author: {
    "@type": "Organization",
    name: "Nexus-Tech Solutions",
    url: "https://globalnexus.tech/",
  },
  description:
    "NexusCRM is a real estate CRM for property agencies. Leads, property inventory, deals, payment plans, commissions and owner earnings in one place.",
  featureList: [
    "Lead management with Buy or Rent intent and full pipeline stages",
    "Property inventory with live Available, Blocked, Booked, Sold and Rented status",
    "Deals with token money, commission and agent share fixed upfront",
    "Payment plans, instalments and receipts",
    "Commission tracking for the agency and each agent",
    "Owner earnings: commission received, minus agent shares paid, minus expenses",
    "Follow-ups with due dates and overdue highlights",
    "Role-based access for owners, managers and agents",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function NexusCrmPage() {
  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="page-hero">
        <p>
          <Link href="/work/" className="text-link">
            ← All Work
          </Link>
        </p>
        <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
          Real Estate CRM Software
        </p>
        <h1 className="hero-title">NexusCRM</h1>
        <p className="lead">
          The CRM property agencies run on. Leads, inventory, deals, payment
          plans, commissions and owner earnings in one place, in any
          currency.
        </p>
        <div className="hero-ctas">
          <a
            href={LIVE_DEMO_URL}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try the Live Demo{" "}
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <Link href="/contact/" className="btn btn-secondary">
            Start a Project{" "}
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal>
          <figure className="case-figure" style={{ margin: 0 }}>
            <Image
              src="/work/nexuscrm-dashboard.webp"
              alt="NexusCRM dashboard showing total commission, pending commission, commission paid, active leads and the Owner's Total Earnings"
              width={1600}
              height={789}
              sizes="(max-width: 800px) 100vw, 1100px"
              priority
            />
          </figure>
          <p
            style={{
              color: "var(--color-muted)",
              marginTop: "0.75rem",
              fontSize: "0.9375rem",
            }}
          >
            The NexusCRM dashboard. Real screens from the live product, with
            demo data.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <p className="eyebrow">Why agencies switch</p>
          <h2 className="section-title">The leaks NexusCRM plugs.</h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Most agencies do not lose money on bad properties. They lose it in
            the gaps: a call never returned, a listing quoted from memory, a
            commission argued over at month-end.
          </p>
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

      <section className="section">
        <Reveal>
          <p className="eyebrow">Take the tour</p>
          <h2 className="section-title">
            Built for the work your team does every day.
          </h2>
        </Reveal>
        {TOUR.map((block, i) => (
          <Reveal key={block.title}>
            <div
              className={`tour-block${i % 2 === 1 ? " flip" : ""}`}
              style={{ marginTop: "3rem" }}
            >
              <figure className="case-figure" style={{ margin: 0 }}>
                <Image
                  src={block.image.src}
                  alt={block.image.alt}
                  width={1600}
                  height={789}
                  sizes="(max-width: 900px) 100vw, 560px"
                  loading="lazy"
                />
              </figure>
              <div>
                <h3 className="card-title">{block.title}</h3>
                <p
                  style={{ color: "var(--color-muted)", marginTop: "0.75rem" }}
                >
                  {block.intro}
                </p>
                <ul
                  style={{
                    marginTop: "1rem",
                    paddingLeft: "1.25rem",
                    color: "var(--color-muted)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {block.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="section">
        <Reveal>
          <p className="eyebrow">What it does</p>
          <h2 className="section-title">
            Everything your agency runs on, connected.
          </h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Leads are people. Inventory is properties. NexusCRM keeps the two
            straight and connects them into deals, then accounts for every
            payment along the way, in any currency.
          </p>
        </Reveal>
        <div className="card-grid cols-3" style={{ marginTop: "2.5rem" }}>
          {MODULES.map((mod, i) => (
            <Reveal key={mod.title} delay={(i % 3) * 90}>
              <div className="card" style={{ height: "100%" }}>
                <h3 className="card-title">{mod.title}</h3>
                <p
                  style={{ color: "var(--color-muted)", marginTop: "0.75rem" }}
                >
                  {mod.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="eyebrow">For the owner</p>
          <h2 className="section-title">Know what you actually earned.</h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Commission on paper is not money in your pocket. NexusCRM counts
            only what actually moved, and shows you the result, month by
            month.
          </p>
        </Reveal>
        <Reveal delay={90}>
          <div
            className="card"
            style={{
              marginTop: "2.5rem",
              textAlign: "center",
              fontSize: "1.125rem",
            }}
          >
            <p style={{ fontWeight: 600 }}>Commission received</p>
            <p style={{ color: "var(--color-muted)" }}>Money in from clients</p>
            <p style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>−</p>
            <p style={{ fontWeight: 600 }}>Agent shares paid</p>
            <p style={{ color: "var(--color-muted)" }}>Money out to agents</p>
            <p style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>−</p>
            <p style={{ fontWeight: 600 }}>Office expenses</p>
            <p style={{ color: "var(--color-muted)" }}>
              Salaries, rent, marketing
            </p>
            <p style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>=</p>
            <p style={{ fontWeight: 700, fontSize: "1.25rem" }}>Your earnings</p>
            <p style={{ color: "var(--color-muted)" }}>
              What you actually keep
            </p>
          </div>
        </Reveal>
        <div className="card-grid cols-3" style={{ marginTop: "1.25rem" }}>
          {[
            {
              title: "Month by month, at a glance",
              description:
                "A clear monthly view of what came in, what went out, and what stayed, so you can spot a good month and a leaky one.",
            },
            {
              title: "Any period you want",
              description:
                "Check the last 3, 6 or 12 months, all time, or any dates you choose.",
            },
            {
              title: "Yours alone",
              description:
                "Earnings are for the owner's eyes only. Your team sees their own work and their own share, never your bottom line.",
            },
          ].map((item, i) => (
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
        <Reveal delay={90}>
          <figure className="case-figure" style={{ marginTop: "2.5rem" }}>
            <Image
              src="/work/nexuscrm-commissions.webp"
              alt="NexusCRM commissions page with total, paid and unpaid commission and agent share totals"
              width={1600}
              height={785}
              sizes="(max-width: 800px) 100vw, 1100px"
              loading="lazy"
            />
          </figure>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">From first call to commission.</h2>
        </Reveal>
        <div className="card-grid cols-3" style={{ marginTop: "2.5rem" }}>
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) * 90}>
              <div className="card" style={{ height: "100%" }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    color: "var(--color-muted)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {step.index}
                </p>
                <h3 className="card-title" style={{ marginTop: "0.75rem" }}>
                  {step.title}
                </h3>
                <p
                  style={{ color: "var(--color-muted)", marginTop: "0.75rem" }}
                >
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="eyebrow">Who it is for</p>
          <h2 className="section-title">One system for the whole office.</h2>
        </Reveal>
        <div className="card-grid cols-3" style={{ marginTop: "2.5rem" }}>
          {ROLES.map((role, i) => (
            <Reveal key={role.title} delay={i * 90}>
              <div className="card" style={{ height: "100%" }}>
                <h3 className="card-title">{role.title}</h3>
                <p
                  style={{ color: "var(--color-muted)", marginTop: "0.75rem" }}
                >
                  {role.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={90}>
          <p className="lead" style={{ marginTop: "2rem" }}>
            Built for local markets, ready for anywhere. Housing societies and
            phases, plots in marla and kanal, token money, bayana, earnest
            money or a booking deposit, before the deal, rent by the month,
            commission by the deal. NexusCRM handles the way your market
            works, wherever that market is. Built in Lahore and shaped by real
            agency workflows in markets like Pakistan&apos;s, it adapts to any
            currency, including PKR, any unit of area, and any local practice,
            for agencies worldwide.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <p className="eyebrow">Questions</p>
          <h2 className="section-title">Good to know.</h2>
        </Reveal>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            marginTop: "2.5rem",
          }}
        >
          {FAQ.map((item) => (
            <Reveal key={item.q}>
              <div>
                <h3 className="card-title">{item.q}</h3>
                <p
                  style={{ color: "var(--color-muted)", marginTop: "0.5rem" }}
                >
                  {item.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="cta-band">
            <h2 className="section-title">
              Ready to run your agency on NexusCRM?
            </h2>
            <p className="lead" style={{ margin: "1.25rem auto 0" }}>
              Try the live demo. It is the real product, every module
              included. Or talk to us first: tell us how your agency works
              today, and we will show you exactly what changes.
            </p>
            <div className="hero-ctas">
              <a
                href={LIVE_DEMO_URL}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the Live Demo{" "}
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
              <Link href="/contact/" className="btn btn-secondary">
                Talk to Us{" "}
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <style>{`
        .tour-block { display: grid; gap: 1.5rem; }
        @media (min-width: 900px) {
          .tour-block { grid-template-columns: 1fr 1fr; align-items: center; gap: 2.5rem; }
          .tour-block.flip figure { order: 2; }
        }
      `}</style>
    </div>
  );
}
