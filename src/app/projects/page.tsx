import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ProjectsGrid } from "./projects-grid";

export const metadata = pageMeta({
  title: "Student AI Projects Portfolio",
  description:
    "Real AI projects built by AGS AI Academy students in Pondicherry — AI agents, automation, cyber security, cloud SaaS and blockchain. Several led to placements.",
  path: "/projects",
});

export default function ProjectsPage() {
  const stats = [
    { value: "100+", label: "projects shipped" },
    { value: "40+", label: "students placed" },
    { value: "5", label: "domains covered" },
    { value: "100%", label: "built hands-on" },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", path: "/" }, { name: "Projects" }]}
        pill="Projects Portfolio"
        title="Real projects."
        accent="Real student engineers."
        body="Capstone and internship builds from our students plus flagship academy products — AI agents, automation, cyber security, cloud SaaS and blockchain. Filter by domain. Several led directly to placements and internships."
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

      {/* All projects — one filterable grid */}
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
