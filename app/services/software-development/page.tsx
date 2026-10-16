import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Custom Software Development in Lahore",
  description:
    "Nexus-Tech Solutions builds custom business software, SaaS platforms, dashboards and internal systems \u2014 software that adapts to your business, not the other way around.",
  alternates: { canonical: "/services/software-development/" },
};

export default function SoftwareDevelopmentPage() {
  return (
    <ServicePage
      h1="Custom Software Built Around Your Business."
      intro="Stop adapting your business to software. We build business platforms, dashboards, SaaS products and internal systems around the way you actually work."
      problemHeading="Stop Adapting Your Business to Software."
      problemCopy={[
        "Off-the-shelf tools force your team into someone else\u2019s workflow: five subscriptions that don\u2019t talk to each other, spreadsheets holding critical processes together, manual work that should have been automated years ago.",
        "Custom software flips it around \u2014 the system adapts to your business: your processes, your terminology, your edge cases.",
      ]}
      offerings={[
        { title: "Business Management Systems", description: "One system for operations instead of five." },
        { title: "CRM Platforms", description: "Organize leads, customers and sales workflows." },
        { title: "SaaS Products", description: "Multi-tenant software products, end to end." },
        { title: "Dashboards & Analytics", description: "The numbers that run your business, in one view." },
        { title: "Internal Tools", description: "Tools that remove repetitive manual work." },
        { title: "Workflow Automation", description: "Automate the processes slowing your team down." },
        { title: "API Integrations", description: "Connect new software to the tools you already use." },
        { title: "Custom Platforms", description: "Platforms designed around your exact requirements." },
      ]}
      capabilitiesHeading="Our Software Development Capabilities"
      capabilities={[
        { title: "Business Management Systems", description: "One coherent system for operations instead of a patchwork of tools." },
        { title: "Dashboards & Reporting", description: "Clear, trustworthy views of the numbers that run your business." },
        { title: "Workflow Automation", description: "Remove the repetitive manual work your team shouldn\u2019t be doing." },
        { title: "API Integrations", description: "New software that talks to the tools you already rely on." },
        { title: "SaaS Product Development", description: "Multi-tenant products designed, built and launched end to end." },
        { title: "Data Migration", description: "Move off spreadsheets and legacy tools safely, without losing history." },
      ]}
      relatedWork={[
        { name: "NexusPOS", category: "SaaS / Business Software" },
        { name: "PharmaNexus", category: "Healthcare / Business Software" },
        { name: "NexusCRM", category: "CRM / Business Software" },
        { name: "CliniX AI", category: "Healthcare / AI" },
      ]}
      faqs={[
        {
          q: "How do we know if we need custom software?",
          a: "If your team bends its processes to fit tools, pays for several tools that don\u2019t integrate, or runs critical work on spreadsheets \u2014 it\u2019s time for a conversation.",
        },
        {
          q: "Who owns the code?",
          a: "You do. Full ownership with a documented handover \u2014 no lock-in, no hostage situations.",
        },
        {
          q: "How long does custom software take?",
          a: "A focused MVP in weeks; larger platforms in months. We deliver in phases so value lands early, not all at the end.",
        },
        {
          q: "Can it work with our existing tools?",
          a: "Yes. We map every integration during discovery and build on APIs \u2014 your software joins your stack instead of replacing it.",
        },
        {
          q: "What happens after launch?",
          a: "Support and iteration plans. Software is never truly \u201cdone\u201d \u2014 we stay for what\u2019s next.",
        },
      ]}
    />
  );
}
