import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Custom Software Development Company",
  description:
    "Nexus-Tech Solutions builds custom business software, SaaS platforms, dashboards and internal systems — software that adapts to your business, not the other way around.",
  alternates: { canonical: "/services/software-development/" },
};

const OFFERINGS = [
  { title: "Business Management Systems", description: "Systems that run your operations in one place." },
  { title: "CRM Platforms", description: "Organize leads, customers and sales workflows." },
  { title: "SaaS Products", description: "Multi-tenant software products, end to end." },
  { title: "Dashboards & Analytics", description: "Clear views of the numbers that run your business." },
  { title: "Internal Tools", description: "Tools that remove repetitive manual work." },
  { title: "Workflow Automation", description: "Automate the processes slowing your team down." },
  { title: "API Integrations", description: "Connect your software to the services you already use." },
  { title: "Custom Platforms", description: "Platforms designed around your exact requirements." },
];

export default function SoftwareDevelopmentPage() {
  return (
    <ServicePage
      h1="Custom Software Built Around Your Business."
      intro="Stop adapting your business to software. We build business platforms, dashboards, SaaS products and internal systems around the way you actually work."
      offerings={OFFERINGS}
    />
  );
}
