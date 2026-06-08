import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ProjectsGrid } from "./projects-grid";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Student Projects Portfolio — AI Agents, Automation, Cyber Security & Cloud",
  description:
    "Explore real capstone and internship projects built by AGS AI Academy students in Pondicherry: AI agents, automation tools, cyber security systems, cloud SaaS and blockchain apps.",
};

export default function ProjectsPage() {
  const placedCount = projects.filter((p) => p.placed).length;
  const stats = [
    { value: `${projects.length}+`, label: "projects shipped" },
    { value: `${placedCount}`, label: "students placed" },
    { value: "5", label: "domains covered" },
    { value: "100%", label: "built hands-on" },
  ];

  return (
    <>
      <PageHero
        pill="Projects Portfolio"
        title="Real projects."
        accent="Real student engineers."
        body="These are capstone and internship projects built by our students — AI agents, automation, cyber security, cloud SaaS and blockchain. Several led directly to placements and internships."
      />

      {/* Stat strip */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-line px-5 sm:grid-cols-4 sm:divide-x lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="reveal px-2 py-8 text-center sm:px-6">
              <p className="font-tech text-2xl font-bold text-crimson sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-[12.5px] font-medium uppercase tracking-wide text-ink/50">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProjectsGrid />
        </div>
      </section>

      <CtaBand
        title="Your project could be on this page."
        body="Join the next batch and build something real — mentored by working engineers, with placements at the finish line."
      />
    </>
  );
}
