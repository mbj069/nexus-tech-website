import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Mobile App Development Company",
  description:
    "Nexus-Tech Solutions designs and develops user-focused mobile applications for businesses and startups — from first concept to app store.",
  alternates: { canonical: "/services/mobile-app-development/" },
};

const OFFERINGS = [
  { title: "Android Applications", description: "Native-quality apps for the world's largest mobile audience." },
  { title: "iOS Applications", description: "Polished apps for Apple devices." },
  { title: "Cross-Platform Apps", description: "One codebase, both platforms, faster delivery." },
  { title: "Business Apps", description: "Mobile tools for teams and operations." },
  { title: "Customer-Facing Apps", description: "Apps your customers actually enjoy using." },
  { title: "MVPs", description: "Launchable first versions to validate your idea." },
  { title: "App Integrations", description: "Connect your app to APIs, payments and services." },
  { title: "Maintenance & Improvements", description: "Ongoing updates that keep your app healthy." },
];

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePage
      h1="Mobile Apps Designed to Be Used."
      intro="User-focused mobile applications for businesses, startups and digital products — from first concept to app store."
      offerings={OFFERINGS}
    />
  );
}
