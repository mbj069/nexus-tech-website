import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Mobile App Development Company",
  description:
    "Nexus-Tech Solutions designs and develops user-focused mobile applications for businesses and startups \u2014 from first concept to app store.",
  alternates: { canonical: "/services/mobile-app-development/" },
};

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePage
      h1="Mobile Apps Designed to Be Used."
      intro="User-focused mobile applications for businesses, startups and digital products \u2014 from first concept to app store."
      problemHeading="Your Customers Live on Their Phones."
      problemCopy={[
        "For most businesses, the phone is the primary way customers interact \u2014 browsing, booking, buying, messaging. A clumsy mobile experience doesn\u2019t just annoy them; it sends them to a competitor.",
        "A well-built app puts your business on their home screen: faster than a website, working where connectivity doesn\u2019t, and able to reach them directly.",
      ]}
      offerings={[
        { title: "Android Applications", description: "Native-quality apps for the world\u2019s largest mobile audience." },
        { title: "iOS Applications", description: "Polished apps for Apple devices." },
        { title: "Cross-Platform Apps", description: "One codebase for both platforms \u2014 faster delivery, easier maintenance." },
        { title: "Business Apps", description: "Mobile tools for teams and operations." },
        { title: "Customer-Facing Apps", description: "Apps your customers actually enjoy using." },
        { title: "MVPs", description: "Launchable first versions to validate your idea before full investment." },
        { title: "App Integrations", description: "Connect your app to APIs, payments and services." },
        { title: "Maintenance & Improvements", description: "Ongoing updates that keep your app healthy." },
      ]}
      capabilitiesHeading="Our Mobile Development Capabilities"
      capabilities={[
        { title: "iOS Development", description: "Polished, reliable apps for iPhone and iPad." },
        { title: "Android Development", description: "Native-quality apps for the Android ecosystem." },
        { title: "Cross-Platform Builds", description: "One codebase, both stores \u2014 the smart default for most business apps." },
        { title: "App MVPs", description: "Scope tightly, launch fast, learn from real users." },
        { title: "Store Submission", description: "App Store and Play Store requirements handled for you \u2014 where many projects stall." },
        { title: "Updates & Maintenance", description: "OS updates, improvements and new features after launch." },
      ]}
      faqs={[
        {
          q: "Should we build native or cross-platform?",
          a: "For most business apps, cross-platform \u2014 one codebase, both stores \u2014 is the smart choice. We\u2019ll recommend based on your needs, not our preferences.",
        },
        {
          q: "How long does an app take?",
          a: "A focused MVP typically takes 6\u201312 weeks. You\u2019ll get a scoped timeline after discovery.",
        },
        {
          q: "Do you handle app store submission?",
          a: "Yes \u2014 including Apple\u2019s and Google\u2019s review requirements, which is where many projects stall.",
        },
        {
          q: "What does maintenance cost?",
          a: "Operating systems update constantly. Maintenance plans keep your app healthy, secure and improving.",
        },
      ]}
    />
  );
}
