import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHead, Pill } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { FeatureIcon, Check, ArrowRight } from "@/components/icons";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us — Puducherry's Build-First AI Academy",
  description:
    "AGS AI Academy's mission: equip students with practical AI skills that translate into real-world opportunities. Meet the team behind Puducherry's leading AI academy.",
};

const values = [
  {
    title: "Innovation",
    body: "We teach what the industry uses today and bet early on what it will use tomorrow — agents, MCP, multimodal AI.",
  },
  {
    title: "Practical Learning",
    body: "If you can't deploy it, you haven't learned it. Every concept is taught through building.",
  },
  {
    title: "Entrepreneurship",
    body: "We train builders, not just employees. Every student learns to think in products, users and value.",
  },
  {
    title: "Community",
    body: "Batches are small, alumni stay close, and Pondy's tech community grows with every demo day.",
  },
  {
    title: "Excellence",
    body: "Code reviews, real deadlines, honest feedback. We hold student work to professional standards.",
  },
];

const founderPoints = [
  "15+ years building software products across India and abroad",
  "Led AI & automation teams shipping production GenAI systems",
  "Founded and scaled technology ventures from zero to revenue",
  "Mentored 100+ engineers from fresher to senior roles",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        pill="About AGS AI Academy"
        title="We exist to close the gap between"
        accent="degrees and careers."
        body="Every year, lakhs of students graduate with theory and no proof of skill. AGS AI Academy was built to fix that — with real projects, real internships and real outcomes."
      />

      {/* Mission / Vision */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="reveal lift rounded-[2rem] border border-line bg-surface p-10">
            <Pill>Mission</Pill>
            <h2 className="font-display mt-5 text-3xl font-bold leading-tight">
              Practical AI skills that translate into{" "}
              <span className="text-crimson">real-world opportunity.</span>
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
              Equip students with practical AI skills that directly translate into
              real-world opportunities — jobs, internships, freelance income, and
              startups. No filler, no outdated syllabus, no certificates without proof.
            </p>
          </div>
          <div className="reveal lift rounded-[2rem] bg-ink p-10 text-white" style={{ transitionDelay: "100ms" }}>
            <Pill className="!border-white/15 !bg-white/10 !text-rose-soft">Vision</Pill>
            <h2 className="font-display mt-5 text-3xl font-bold leading-tight">
              South India&apos;s leading{" "}
              <span className="font-tech font-semibold text-crimson">AI Academy & Innovation Hub.</span>
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-white/65">
              A place where students don&apos;t just learn AI — they launch careers,
              products and companies from Puducherry to the world. The academy that
              made Pondy a name on India&apos;s AI map.
            </p>
          </div>
        </div>
      </section>

      {/* Parent company — AgileSoftLabs */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="reveal mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] border border-line bg-surface-warm p-9 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Pill>Part of {site.parent.name}</Pill>
            <h2 className="font-display mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Born inside a working{" "}
              <span className="font-tech font-semibold text-crimson">AI agency.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
              AGS AI Academy is the training arm of{" "}
              <a
                href={site.parent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-crimson/30 underline-offset-4 hover:text-crimson hover:decoration-crimson"
              >
                {site.parent.name}
              </a>
              , {site.parent.blurb}. We didn&apos;t bolt a &ldquo;projects module&rdquo;
              onto a syllabus — the academy grew out of a real agency that needed
              engineers who could build. So our students get something most institutes
              can&apos;t offer:{" "}
              <span className="font-semibold text-ink">
                the opportunity to work on real-time, live client projects
              </span>{" "}
              from day one, mentored by the engineers shipping them.
            </p>
            <a
              href={site.parent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-crimson hover:text-crimson-deep"
            >
              Explore {site.parent.name}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {[
              { t: "Live client work", b: "Real projects with real deadlines, not practice sets." },
              { t: "Agency mentors", b: "Learn from engineers who ship to production daily." },
              { t: "Production stack", b: "The exact tools AgileSoftLabs uses on client builds." },
              { t: "Real references", b: "Graduate with work and people who can vouch for you." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-line bg-surface p-5">
                <p className="font-display text-[15px] font-bold">{c.t}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-surface-warm px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <div className="relative mx-auto max-w-sm">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-rose-soft via-surface to-rose-tint">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-crimson font-display text-4xl font-bold text-white">
                      A
                    </div>
                    <p className="font-tech mt-4 text-[11px] uppercase tracking-[0.2em] text-ink/40">
                      Founder &amp; Chief Mentor
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl border border-line bg-surface px-5 py-4 shadow-lg">
                <p className="font-tech text-xl font-bold text-crimson">15+ yrs</p>
                <p className="text-[11px] text-ink/50">industry experience</p>
              </div>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <SectionHead
              align="left"
              pill="Founder"
              title="Built by an engineer"
              accent="who hires engineers."
              body="AGS AI Academy was founded on a simple frustration: interviewing hundreds of graduates who could recite algorithms but couldn't build anything."
            />
            <ul className="mt-8 space-y-3.5">
              {founderPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-ink/80">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-rose-tint">
                    <Check className="size-3.5 text-crimson" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <blockquote className="mt-8 rounded-2xl border-l-4 border-crimson bg-surface p-6 text-[15px] italic leading-relaxed text-ink/75">
              &ldquo;The industry doesn&apos;t hire certificates. It hires people who can
              ship. So that&apos;s exactly — and only — what we train.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            pill="Core Values"
            title="Five values."
            accent="Zero compromise."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="reveal lift rounded-3xl border border-line bg-surface p-6"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="font-tech text-[12px] font-bold text-crimson/50">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-2 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pondy */}
      <section className="bg-surface-warm px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            pill="Why Puducherry"
            title="World-class AI training,"
            accent="without leaving Pondy."
            body="Students from Puducherry have always had to move to Chennai or Bangalore for serious tech training. Not anymore."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: "curriculum",
                title: "Metro-grade curriculum",
                body: "The same stack taught in Bangalore bootcamps — at a fraction of the cost of relocating.",
              },
              {
                icon: "projects",
                title: "Local client network",
                body: "Pondy & Tamil Nadu businesses provide a steady stream of real AI projects for students.",
              },
              {
                icon: "startup",
                title: "A growing ecosystem",
                body: "Hackathons, demo days and meetups — we're building Pondy's tech community, batch by batch.",
              },
            ].map((c, i) => (
              <div
                key={c.title}
                className="reveal lift rounded-3xl border border-line bg-surface p-7"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-rose-tint">
                  <FeatureIcon name={c.icon} className="size-6 text-crimson" />
                </div>
                <h3 className="font-display mt-5 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
