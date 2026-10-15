import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Web Development Company",
  description:
    "Nexus-Tech Solutions builds high-performance business websites, web applications and custom web platforms designed for speed, usability and growth.",
  alternates: { canonical: "/services/web-development/" },
};

export default function WebDevelopmentPage() {
  return (
    <ServicePage
      h1="Web Development Built for Performance, Users and Growth."
      intro="Websites that do more than look good — built for speed, usability, responsive design, a solid SEO foundation, conversion and long-term maintainability."
      problemHeading="When Off-the-Shelf Isn’t Enough."
      problemCopy={[
        "Templates and page builders get you online fast — then box you in. The same look as a thousand other businesses, pages that load slowly, plugins that break on update, and an SEO ceiling you can't punch through.",
        "When your website is how customers judge you, \u201cgood enough\u201d quietly costs you enquiries every single week.",
      ]}
      offerings={[
        { title: "Business Websites", description: "Fast, clear websites that turn visitors into enquiries." },
        { title: "Corporate Websites", description: "Professional web presence for established businesses." },
        { title: "Web Applications", description: "Interactive apps that run entirely in the browser." },
        { title: "SaaS Interfaces", description: "Product interfaces for software-as-a-service platforms." },
        { title: "Landing Pages", description: "Focused pages engineered to convert." },
        { title: "Custom Web Platforms", description: "Bespoke platforms built around your workflows." },
        { title: "Website Redesigns", description: "Rebuilds that fix slow, outdated or underperforming sites." },
        { title: "Performance Optimization", description: "Audits and fixes for speed and Core Web Vitals." },
      ]}
      capabilitiesHeading="Our Web Development Capabilities"
      capabilities={[
        { title: "Performance Engineering", description: "Core Web Vitals, fast load times and image optimization — speed as a feature, not an afterthought." },
        { title: "Technical SEO Foundations", description: "Semantic HTML, metadata, sitemaps and structured data built in from day one, not bolted on later." },
        { title: "Mobile-First Responsive", description: "Designed for phones first, where most of your visitors actually are." },
        { title: "Conversion-Focused Design", description: "Layouts that guide visitors toward contacting you — every section earns its place." },
        { title: "Redesigns & Migrations", description: "Fixing slow, outdated or underperforming sites without losing your search rankings." },
        { title: "Care Plans", description: "Updates, backups, monitoring and small improvements after launch." },
      ]}
      relatedWork={[
        { name: "NexusPOS", category: "SaaS / Business Software" },
        { name: "Neon Oroborus", category: "Experimental / Digital Product" },
      ]}
      faqs={[
        {
          q: "How long does a typical website take?",
          a: "A focused business website usually takes 2\u20134 weeks from kickoff to launch. Larger platforms take longer \u2014 you\u2019ll get an honest timeline after a short discovery call, not a guess.",
        },
        {
          q: "How much does a website cost?",
          a: "It depends on scope: pages, features and integrations. After discovery you get a fixed quote \u2014 no hourly-billing surprises.",
        },
        {
          q: "Will my website rank on Google?",
          a: "It\u2019s built with the foundations rankings need: speed, semantic structure, metadata and a sitemap. Rankings also depend on content, competition and time \u2014 we\u2019ll be straight with you about that.",
        },
        {
          q: "Can you redesign my existing website?",
          a: "Yes. We start with an audit of what\u2019s hurting you \u2014 speed, structure, conversion \u2014 then rebuild what matters and keep what works.",
        },
        {
          q: "Will it work properly on phones?",
          a: "It\u2019s designed mobile-first. Most of your visitors will arrive on a phone, so that\u2019s where we start.",
        },
        {
          q: "Do you look after the site after launch?",
          a: "Yes \u2014 care plans cover updates, backups, monitoring and small improvements.",
        },
      ]}
    />
  );
}
