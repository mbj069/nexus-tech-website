import Link from "next/link";
import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    className: "svc-web",
    index: "01",
    href: "/services/web-development/",
    name: "Web Development",
    description:
      "Modern, responsive websites and web applications designed for performance, usability and growth.",
  },
  {
    className: "svc-software",
    index: "02",
    href: "/services/software-development/",
    name: "Custom Software",
    description:
      "Business platforms, dashboards and internal systems built around your workflows.",
  },
  {
    className: "svc-mobile",
    index: "03",
    href: "/services/mobile-app-development/",
    name: "Mobile Apps",
    description:
      "User-focused mobile applications for businesses, startups and digital products.",
  },
  {
    className: "svc-ecom",
    index: "04",
    href: "/services/ecommerce-development/",
    name: "E-Commerce",
    description:
      "High-performing online stores and custom commerce experiences built to sell.",
  },
  {
    className: "svc-ai",
    index: "05",
    href: "/services/ai-solutions/",
    name: "AI Solutions",
    description:
      "AI integrations, automation and intelligent workflows built around practical business use cases.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section" aria-labelledby="services-heading" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title" id="services-heading">
            What We Build
          </h2>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            From customer-facing websites to internal business systems, we
            build digital products designed to work in the real world.
          </p>
        </Reveal>

        <div className="services-asymmetric">
          {SERVICES.map((service, i) => (
            <Reveal key={service.href} delay={Math.min(i, 3) * 70} className={service.className}>
              <Link href={service.href} className="service-card" style={{ height: "100%" }}>
                <span className="svc-index">{service.index}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="svc-link">
                  Explore <span className="card-arrow" aria-hidden="true">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
