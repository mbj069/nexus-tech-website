import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "AI Development & AI Solutions",
  description:
    "Nexus-Tech Solutions builds practical AI integrations, assistants, automation and AI-powered applications around real business use cases.",
  alternates: { canonical: "/services/ai-solutions/" },
};

const OFFERINGS = [
  { title: "AI Integrations", description: "Add AI capabilities to your existing products." },
  { title: "AI Assistants", description: "Assistants trained on your business knowledge." },
  { title: "AI Automation", description: "Automate document, data and communication workflows." },
  { title: "LLM Applications", description: "Production apps built on large language models." },
  { title: "Knowledge / RAG Systems", description: "Search and answers grounded in your own data." },
  { title: "Workflow Automation", description: "Intelligent pipelines across your tools." },
  { title: "AI-Powered Features", description: "Smart features inside the products you already ship." },
  { title: "Intelligent Business Tools", description: "Decision support built for your team." },
];

export default function AiSolutionsPage() {
  return (
    <ServicePage
      h1="AI That Solves Real Business Problems."
      intro="Beyond the chatbot — AI integrations, automation, intelligent workflows and AI-powered applications built around practical business use cases."
      offerings={OFFERINGS}
    />
  );
}
