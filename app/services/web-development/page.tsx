import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Web Development Company",
  description:
    "Nexus-Tech Solutions builds high-performance business websites, web applications and custom web platforms designed for speed, usability and growth.",
  alternates: { canonical: "/services/web-development/" },
};

const OFFERINGS = [
  { title: "Business Websites", description: "Fast, clear websites that turn visitors into enquiries." },
  { title: "Corporate Websites", description: "Professional web presence for established businesses." },
  { title: "Web Applications", description: "Interactive apps that run entirely in the browser." },
  { title: "SaaS Interfaces", description: "Product interfaces for software-as-a-service platforms." },
  { title: "Landing Pages", description: "Focused pages engineered to convert." },
  { title: "Custom Web Platforms", description: "Bespoke platforms built around your workflows." },
  { title: "Website Redesigns", description: "Rebuilds that fix slow, outdated or underperforming sites." },
  { title: "Performance Optimization", description: "Audits and fixes for speed and Core Web Vitals." },
];

export default function WebDevelopmentPage() {
  return (
    <ServicePage
      h1="Web Development Built for Performance, Users and Growth."
      intro="Websites that do more than look good — built for speed, usability, responsive design, a solid SEO foundation, conversion and long-term maintainability."
      offerings={OFFERINGS}
    />
  );
}
