import Link from "next/link";
import {
  site,
  stats,
  whyFeatures,
  programs,
  journey,
  projects,
  techStack,
  studentReviews,
} from "@/lib/data";
import { ButtonGhost, ButtonPrimary, Chip, Pill, SectionHead } from "@/components/ui";
import { ArrowRight, FeatureIcon, Spark, Check } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhySection />
      <AgencySection />
      <ProgramsSection />
      <JourneySection />
      <ProjectsSection />
      <StackSection />
      <TestimonialsSection />
      <CtaBand />
    </>
  );
}

/* ---------------------------------- HERO --------------------------------- */

function Hero() {
  return (
    <section className="hero-atmosphere grain relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-20">
        {/* Left — copy */}
        <div>
          <div className="rise rise-1 flex flex-wrap items-center gap-2.5">
            <Pill>AI Academy · Puducherry</Pill>
            <a
              href={site.parent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 font-tech text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft transition-colors hover:border-crimson/40 hover:text-crimson"
            >
              Part of <span className="font-semibold text-ink">{site.parent.name}</span>
              <ArrowRight className="size-3" />
            </a>
          </div>
          <h1 className="rise rise-2 font-display mt-6 text-balance text-[2.6rem] font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.1rem]">
            Learn AI By{" "}
            <span className="font-tech font-semibold text-crimson">
              Building Real Products
            </span>
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-[16.5px] leading-relaxed text-ink-soft sm:text-lg">
            Become an AI Engineer through real-world projects, internships, and
            mentorship — not slides. From your first week you&apos;ll ship
            agents, RAG systems and automation for real clients.
          </p>
          <div className="rise rise-4 mt-9 flex flex-col gap-3.5 sm:flex-row">
            <ButtonPrimary href="/apply">Apply Now</ButtonPrimary>
            <ButtonGhost href="/contact#counselling">Book Free Counselling</ButtonGhost>
          </div>
          <div className="rise rise-5 mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-crimson" /> Guaranteed internship
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-crimson" /> 0% EMI plans
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-crimson" /> Placement assistance
            </span>
          </div>
        </div>

        {/* Right — bento dashboard */}
        <HeroBento />
      </div>
    </section>
  );
}

function HeroBento() {
  return (
    <div className="rise rise-3 relative" aria-hidden>
      <div className="grid grid-cols-3 gap-3">
        {/* Sparkline card */}
        <div className="col-span-2 rounded-2xl border border-line bg-surface/90 p-4 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between">
            <span className="font-tech text-[10px] uppercase tracking-[0.14em] text-ink/45">
              Student placements
            </span>
            <span className="font-tech text-[11px] font-semibold text-crimson">▲ 70%</span>
          </div>
          <div className="mt-3 flex h-16 items-end gap-1.5">
            {[35, 48, 42, 60, 55, 72, 66, 85, 78, 92, 88, 100].map((h, i) => (
              <div
                key={i}
                className="bar-grow flex-1 rounded-sm bg-gradient-to-t from-crimson/70 to-crimson/25"
                style={{ height: `${h}%`, animationDelay: `${0.4 + i * 0.06}s` }}
              />
            ))}
          </div>
          <p className="mt-2 text-[11px] text-ink/40">Batch 1 → Batch 12</p>
        </div>

        {/* Rating tile */}
        <div className="flex flex-col justify-between rounded-2xl bg-crimson p-4 text-white shadow-[0_16px_36px_-14px_rgba(169,31,36,0.55)]">
          <Spark className="size-5 opacity-80" />
          <div>
            <p className="font-tech text-2xl font-bold leading-none">4.9</p>
            <p className="mt-1 text-[10.5px] leading-tight text-white/75">student rating</p>
          </div>
        </div>

        {/* Projects tile */}
        <div className="rounded-2xl border border-line bg-surface/90 p-4 shadow-sm backdrop-blur">
          <p className="font-tech text-[22px] font-bold leading-none text-ink">500+</p>
          <p className="mt-1.5 text-[10.5px] leading-tight text-ink/50">
            projects shipped annually
          </p>
          <div className="mt-3 flex -space-x-1.5">
            {["bg-rose-soft", "bg-gold/40", "bg-crimson/25", "bg-ink/15"].map((c, i) => (
              <span key={i} className={`size-5 rounded-full border-2 border-surface ${c}`} />
            ))}
            <span className="flex size-5 items-center justify-center rounded-full border-2 border-surface bg-ink text-[8px] font-bold text-white">
              +
            </span>
          </div>
        </div>

        {/* Agent terminal card */}
        <div className="col-span-2 rounded-2xl border border-ink/90 bg-ink p-4 font-tech text-[11.5px] leading-relaxed shadow-lg">
          <div className="mb-2 flex gap-1.5">
            <span className="size-2 rounded-full bg-crimson" />
            <span className="size-2 rounded-full bg-gold" />
            <span className="size-2 rounded-full bg-white/20" />
          </div>
          <p className="text-white/40">
            <span className="text-crimson">agent</span>
            <span className="text-white/70">.deploy</span>(<span className="text-gold">&quot;support-bot&quot;</span>)
          </p>
          <p className="text-white/40">
            status <span className="text-white/70">→</span>{" "}
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400 pulse-dot" /> live in production
            </span>
          </p>
          <p className="text-white/40">
            built by <span className="text-rose-soft">batch_9.students</span>
          </p>
        </div>

        {/* Tracks tile */}
        <div className="flex flex-col justify-between gap-2 rounded-2xl border border-line bg-surface/90 p-4 shadow-sm backdrop-blur">
          <span className="font-tech text-[10px] uppercase tracking-[0.14em] text-ink/45">
            Tracks
          </span>
          <div className="flex flex-wrap gap-1.5">
            {["RAG", "Agents", "MCP"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-rose-tint px-2 py-0.5 font-tech text-[9.5px] font-semibold text-crimson-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Internship strip */}
        <div className="col-span-3 flex items-center justify-between rounded-2xl border border-line bg-surface/90 px-5 py-3.5 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-xl bg-rose-tint">
              <FeatureIcon name="internship" className="size-4 text-crimson" />
            </span>
            <div>
              <p className="text-[12.5px] font-semibold">AI Internship Program</p>
              <p className="text-[10.5px] text-ink/45">Real client work · every student</p>
            </div>
          </div>
          <span className="font-tech rounded-full bg-emerald-50 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-wider text-emerald-600">
            ● Enrolling
          </span>
        </div>
      </div>

      {/* floating accents */}
      <div className="absolute -right-6 -top-6 -z-10 size-40 rounded-full bg-crimson/10 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 -z-10 size-44 rounded-full bg-gold/15 blur-2xl" />
    </div>
  );
}

/* -------------------------------- STATS BAR ------------------------------- */

function StatsBar() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-line px-5 sm:grid-cols-4 sm:divide-x lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="reveal px-2 py-9 text-center sm:px-6">
            <p className="font-tech text-3xl font-bold text-crimson sm:text-4xl">{s.value}</p>
            <p className="mt-1.5 text-[12.5px] font-medium uppercase tracking-wide text-ink/50">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- WHY SECTION ------------------------------ */

function WhySection() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          pill="Why AGS AI Academy"
          title="Not a training institute."
          accent="A product studio you learn inside."
          body="Traditional institutes teach syllabus. We run real AI projects — and train you by putting you on them."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyFeatures.map((f, i) => (
            <div
              key={f.title}
              className="reveal lift group rounded-3xl border border-line bg-surface p-7"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-rose-tint transition-colors group-hover:bg-crimson">
                <FeatureIcon
                  name={f.icon}
                  className="size-6 text-crimson transition-colors group-hover:text-white"
                />
              </div>
              <h3 className="font-display mt-5 text-[19px] font-bold">{f.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ AGENCY (AgileSoftLabs) ------------------------------ */

function AgencySection() {
  return (
    <section className="px-5 pb-24 lg:px-8">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-line bg-surface-warm">
        <div className="grid items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left — story */}
          <div className="p-9 sm:p-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-crimson/15 bg-rose-tint px-4 py-1.5 font-tech text-[11px] font-medium uppercase tracking-[0.14em] text-crimson-ink">
              <span className="size-1.5 rounded-full bg-crimson pulse-dot" />
              Powered by a real AI agency
            </span>
            <h2 className="font-display mt-6 text-balance text-3xl font-bold leading-[1.1] sm:text-4xl">
              We&apos;re the training arm of{" "}
              <a
                href={site.parent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-tech font-semibold text-crimson underline decoration-crimson/30 underline-offset-4 transition-colors hover:decoration-crimson"
              >
                {site.parent.name}
              </a>
              .
            </h2>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
              AGS AI Academy is part of{" "}
              <span className="font-semibold text-ink">{site.parent.name}</span> —{" "}
              {site.parent.blurb}. That means our students don&apos;t practise on toy
              datasets. You get the opportunity to work on{" "}
              <span className="font-semibold text-ink">real-time, live client projects</span>{" "}
              shipping inside an actual agency, alongside engineers who do it for a living.
            </p>

            <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
              {[
                "Work on live agency client projects",
                "Sit in real sprints, standups & code reviews",
                "Ship to production, not to a grade",
                "Mentored by working AgileSoftLabs engineers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-crimson" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={site.parent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-[14.5px] font-semibold text-crimson hover:text-crimson-deep"
            >
              Visit {site.parent.name}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right — relationship visual */}
          <div className="relative flex items-center justify-center border-t border-line bg-ink p-9 text-white sm:p-12 lg:border-l lg:border-t-0">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl border border-white/12 bg-white/[0.05] p-5 text-center">
                <p className="font-display text-lg font-bold">{site.parent.name}</p>
                <p className="mt-1 text-[12px] text-white/55">AI-native software agency</p>
              </div>
              <div className="my-3 flex flex-col items-center text-white/30">
                <span className="h-5 w-px bg-white/20" />
                <span className="font-tech rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-rose-soft">
                  trains
                </span>
                <span className="h-5 w-px bg-white/20" />
              </div>
              <div className="rounded-2xl border border-crimson/30 bg-crimson/15 p-5 text-center">
                <p className="font-display text-lg font-bold">
                  AGS <span className="text-crimson">AI</span> Academy
                </p>
                <p className="mt-1 text-[12px] text-white/55">you, on real client work</p>
              </div>
              <div className="mt-5 rounded-2xl bg-white/[0.04] p-4 font-tech text-[11.5px] leading-relaxed text-white/60">
                <span className="text-crimson">student</span>.join(
                <span className="text-gold">&quot;live_project&quot;</span>) →{" "}
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400 pulse-dot" /> real
                  client, real stakes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PROGRAMS ------------------------------ */

function ProgramsSection() {
  return (
    <section className="bg-surface-warm px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          pill="Programs"
          title="Pick your track."
          accent="Every one ends in shipped products."
          body="Four programs, one philosophy: you learn AI by building it. All tracks include mentorship, projects and portfolio reviews."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((p, i) => (
            <Link
              key={p.slug}
              href={`/courses#${p.slug}`}
              className={`reveal lift group relative flex flex-col rounded-3xl border p-7 ${
                p.featured
                  ? "border-crimson/30 bg-ink text-white shadow-[0_24px_60px_-24px_rgba(169,31,36,0.45)]"
                  : "border-line bg-surface"
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {p.featured && (
                <span className="font-tech absolute -top-3 right-6 rounded-full bg-crimson px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                  Most Popular
                </span>
              )}
              <span
                className={`font-tech text-[12px] font-semibold ${
                  p.featured ? "text-rose-soft/60" : "text-crimson/50"
                }`}
              >
                {p.badge}
              </span>
              <h3 className="font-display mt-3 text-[21px] font-bold leading-tight">{p.name}</h3>
              <p
                className={`mt-2 text-[13.5px] leading-relaxed ${
                  p.featured ? "text-white/65" : "text-ink-soft"
                }`}
              >
                {p.tagline}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.modules.slice(0, 4).map((m) => (
                  <span
                    key={m}
                    className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                      p.featured
                        ? "bg-white/10 text-white/80"
                        : "bg-rose-tint text-crimson-ink"
                    }`}
                  >
                    {m}
                  </span>
                ))}
                {p.modules.length > 4 && (
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                      p.featured ? "bg-white/10 text-white/60" : "bg-surface-warm text-ink/50"
                    }`}
                  >
                    +{p.modules.length - 4} more
                  </span>
                )}
              </div>
              <div
                className={`mt-auto flex items-center justify-between border-t pt-5 ${
                  p.featured ? "border-white/10" : "border-line"
                } mt-6`}
              >
                <div>
                  <p className={`font-tech text-[17px] font-bold ${p.featured ? "text-white" : ""}`}>
                    {p.price}
                  </p>
                  <p className={`text-[11px] ${p.featured ? "text-white/50" : "text-ink/45"}`}>
                    {p.duration}
                  </p>
                </div>
                <span
                  className={`flex size-9 items-center justify-center rounded-full transition-all group-hover:translate-x-1 ${
                    p.featured ? "bg-crimson text-white" : "bg-rose-tint text-crimson"
                  }`}
                >
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- JOURNEY ------------------------------- */

function JourneySection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 lg:px-8">
      <div className="dotted-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <SectionHead
          pill="Student Journey"
          title="Five steps."
          accent="One outcome: hired."
          body="A deliberately simple path. Each phase has clear milestones, mentor checkpoints, and something real to show at the end."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {journey.map((j, i) => (
            <div key={j.step} className="reveal relative" style={{ transitionDelay: `${i * 90}ms` }}>
              {/* connector */}
              {i < journey.length - 1 && (
                <div
                  className="absolute right-[-18px] top-9 hidden text-crimson/40 lg:block"
                  aria-hidden
                >
                  <ArrowRight className="size-5" />
                </div>
              )}
              <div className="lift h-full rounded-3xl border border-line bg-surface p-6">
                <span className="font-tech flex size-11 items-center justify-center rounded-full bg-crimson text-[14px] font-bold text-white">
                  {j.step}
                </span>
                <h3 className="font-display mt-4 text-lg font-bold">{j.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{j.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PROJECTS ------------------------------- */

function ProjectsSection() {
  return (
    <section className="bg-ink px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="reveal max-w-2xl">
            <Pill className="!border-white/15 !bg-white/10 !text-rose-soft">Featured Projects</Pill>
            <h2 className="font-display mt-5 text-balance text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
              Built by students.{" "}
              <span className="font-tech font-semibold text-crimson">Running in production.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/60">
              Every project below was shipped by AGS AI Academy students for real
              users — with the metrics to prove it.
            </p>
          </div>
          <Link
            href="/projects"
            className="reveal group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:border-crimson hover:text-rose-soft"
          >
            Explore All Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href="/projects"
              className="reveal group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all hover:-translate-y-1 hover:border-crimson/50 hover:bg-white/[0.07]"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-tech rounded-full bg-crimson/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-rose-soft">
                  {p.category}
                </span>
                <ArrowRight className="size-4 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-crimson" />
              </div>
              <h3 className="font-display mt-5 text-[19px] font-bold leading-snug">{p.name}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/55">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
                <div>
                  <p className="font-tech text-2xl font-bold text-crimson">{p.metric}</p>
                  <p className="text-[11px] text-white/45">{p.metricLabel}</p>
                </div>
                <p className="text-right text-[11px] text-white/40">
                  by {p.students.join(" & ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ TECH STACK ------------------------------ */

function StackSection() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          pill="Curriculum Stack"
          title="Trained on the best"
          accent="AI infrastructure."
          body="We teach frontier models, production-grade orchestration and enterprise vector infrastructure — the same stack used by companies that will hire you."
        />
        <div className="mt-14 space-y-9">
          {techStack.map((g, gi) => (
            <div key={g.group} className="reveal" style={{ transitionDelay: `${gi * 60}ms` }}>
              <p className="font-tech mb-3.5 text-center text-[10.5px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                {g.group}
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {g.items.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TESTIMONIALS ----------------------------- */

function TestimonialsSection() {
  return (
    <section className="bg-surface-warm px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          pill="Testimonials"
          title="What our interns"
          accent="actually say."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {studentReviews.slice(0, 3).map((t, i) => (
            <figure
              key={t.name}
              className="reveal lift flex flex-col rounded-3xl border border-line bg-surface p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-tech text-4xl leading-none text-crimson">&ldquo;</div>
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <p className="font-display text-[15px] font-bold">{t.name}</p>
                <p className="mt-0.5 text-[12.5px] text-ink-soft">
                  AGS AI Academy Intern · {t.focus}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="reveal mt-10 text-center">
          <Link
            href="/success-stories"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-crimson hover:text-crimson-deep"
          >
            Read full success stories
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
