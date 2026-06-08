import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ProjectsGrid } from "./projects-grid";

export const metadata: Metadata = {
  title: "Student Projects Portfolio — AI Agents, LLM Apps & Automation",
  description:
    "Explore real AI products built by AGS Academy students in Pondicherry: customer support agents, RAG systems, voice assistants, automation tools and SaaS — all in production.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        pill="Projects Portfolio"
        title="Transforming students into"
        accent="shipped engineers."
        body="Not just learned — proven. Every project below was built by students, reviewed by mentors, and deployed for real users."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProjectsGrid />
        </div>
      </section>
      <CtaBand
        title="Your project could be on this page."
        body="Join the next batch and ship something real — with mentors, deadlines and users."
      />
    </>
  );
}
