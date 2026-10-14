import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "AI Development & AI Solutions",
  description:
    "Nexus-Tech Solutions builds practical AI integrations, assistants, automation and AI-powered applications around real business use cases.",
  alternates: { canonical: "/services/ai-solutions/" },
};

export default function AiSolutionsPage() {
  return (
    <ServicePage
      h1="AI That Solves Real Business Problems."
      intro="Beyond the chatbot \u2014 AI integrations, automation, intelligent workflows and AI-powered applications built around practical business use cases."
      problemHeading="Beyond the Chatbot."
      problemCopy={[
        "Most \u201cAI solutions\u201d are demos looking for a problem. The real value is quieter: triaging support requests, pulling answers from your own documents, drafting the repetitive writing, extracting data from paperwork.",
        "We build AI around practical business use cases \u2014 measured in hours saved and errors removed, not in how futuristic it sounds.",
      ]}
      offerings={[
        { title: "AI Integrations", description: "Add AI capabilities to the products you already ship." },
        { title: "AI Assistants", description: "Assistants that answer from your business knowledge." },
        { title: "AI Automation", description: "Automate document, data and communication workflows." },
        { title: "LLM Applications", description: "Production apps built on large language models." },
        { title: "Knowledge / RAG Systems", description: "Search and answers grounded in your own data." },
        { title: "Workflow Automation", description: "Intelligent pipelines across the tools you use." },
        { title: "AI-Powered Features", description: "Smart features inside your existing products." },
        { title: "Intelligent Business Tools", description: "Decision support built for your team." },
      ]}
      capabilitiesHeading="Our AI Capabilities"
      capabilities={[
        { title: "AI Assistants", description: "Assistants trained on your documentation, policies and knowledge." },
        { title: "Retrieval (RAG) Systems", description: "Accurate answers grounded in your data \u2014 not confident guesses." },
        { title: "Workflow Automation", description: "Intelligent pipelines that connect your tools and remove busywork." },
        { title: "Document Intelligence", description: "Extract structured data from unstructured documents." },
        { title: "LLM Integrations", description: "Production-grade integrations with leading AI providers." },
        { title: "Internal Copilots", description: "Decision support and drafting help for your team." },
      ]}
      relatedWork={[{ name: "CliniX AI", category: "Healthcare / AI" }]}
      faqs={[
        {
          q: "What can AI actually do for my business?",
          a: "Concrete things: answer customers from your documentation, summarize and draft, triage incoming requests, extract data from documents. We start from your workflows, not from the technology.",
        },
        {
          q: "Is our data safe?",
          a: "Your data stays yours. We design with access controls and don\u2019t train public models on your information.",
        },
        {
          q: "Do we need huge amounts of data?",
          a: "No. Retrieval-based systems work with the documents you already have \u2014 policies, manuals, past tickets.",
        },
        {
          q: "How much does it cost?",
          a: "We start with a scoped pilot so you see value before committing. Fixed quote after discovery.",
        },
      ]}
    />
  );
}
