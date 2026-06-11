import { pageMeta, coursesItemListSchema, jsonLd } from "@/lib/seo";
import { programs, studentReviews } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { ButtonGhost, ButtonPrimary, Pill, SectionHead } from "@/components/ui";
import { Check } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import Link from "next/link";

const courseFaqs = [
  {
    q: "Which AI course should I choose?",
    a: "Beginners start with AI Foundations (12 weeks). To become a hireable AI engineer, the Professional AI Engineer track (24 weeks) is our flagship. Founders take AI Startup Builder. Not sure? A free counselling call maps your background to the right one.",
  },
  {
    q: "Do I need a coding background?",
    a: "No. AI Foundations and the Professional track both teach Python from the very first line. Students from any branch and any stream regularly start with zero coding experience.",
  },
  {
    q: "Are the courses online or in-person?",
    a: "Our core AI courses run in-person at our Puducherry campus because building together is faster. Select programs and bootcamps run hybrid; corporate training can be remote.",
  },
  {
    q: "Do the courses include an internship and placement?",
    a: "Yes. The Professional AI Engineer and AI Startup Builder tracks include a structured internship on real projects, plus placement support — portfolio reviews, mock interviews and referrals — until you're hired.",
  },
];

const courseFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: courseFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const metadata = pageMeta({
  title: "AI Courses in Pondicherry",
  description:
    "AI courses in Pondicherry at AGS AI Academy — AI Foundations, Professional AI Engineer (LangChain, RAG, agents) & Startup Builder. Real projects + internships.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(coursesItemListSchema())} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(courseFaqSchema)} />
      <PageHero
        crumbs={[{ name: "Home", path: "/" }, { name: "Courses" }]}
        pill="Courses"
        title="Programs engineered for"
        accent="one outcome: you, shipping AI."
        body="Three student tracks and a corporate program. Every course is project-first — you'll build from week one and graduate with a deployed portfolio."
      >
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <Check className="size-4 text-crimson" /> Small batches (max 50)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="size-4 text-crimson" /> In-person in Puducherry
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="size-4 text-crimson" /> Internship + placement support
          </span>
        </div>
      </PageHero>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          {programs.map((p) => (
            <article
              id={p.slug}
              key={p.slug}
              className={`reveal grid scroll-mt-24 gap-10 rounded-[2rem] border p-8 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] ${
                p.featured
                  ? "border-crimson/25 bg-ink text-white shadow-[0_30px_80px_-30px_rgba(169,31,36,0.4)]"
                  : "border-line bg-surface"
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`font-tech text-[13px] font-bold ${
                      p.featured ? "text-rose-soft/60" : "text-crimson/50"
                    }`}
                  >
                    PROGRAM {p.badge}
                  </span>
                  {p.featured && (
                    <span className="font-tech rounded-full bg-crimson px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                      Most Popular
                    </span>
                  )}
                </div>
                <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">{p.name}</h2>
                <p
                  className={`font-tech mt-2 text-[15px] font-medium ${
                    p.featured ? "text-rose-soft" : "text-crimson"
                  }`}
                >
                  {p.tagline}
                </p>
                <p
                  className={`mt-4 text-[15px] leading-relaxed ${
                    p.featured ? "text-white/65" : "text-ink-soft"
                  }`}
                >
                  {p.description}
                </p>

                <h3
                  className={`font-tech mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                    p.featured ? "text-white/40" : "text-ink/40"
                  }`}
                >
                  What you&apos;ll master
                </h3>
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {p.modules.map((m) => (
                    <span
                      key={m}
                      className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium ${
                        p.featured
                          ? "border border-white/15 bg-white/5 text-white/85"
                          : "bg-rose-tint text-crimson-ink"
                      }`}
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <h3
                  className={`font-tech mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                    p.featured ? "text-white/40" : "text-ink/40"
                  }`}
                >
                  Outcomes
                </h3>
                <ul className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                  {p.outcomes.map((o) => (
                    <li
                      key={o}
                      className={`flex items-start gap-2.5 text-[14px] ${
                        p.featured ? "text-white/80" : "text-ink/80"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${
                          p.featured ? "text-crimson" : "text-crimson"
                        }`}
                      />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Side card */}
              <aside
                className={`flex h-fit flex-col rounded-3xl border p-7 lg:sticky lg:top-24 ${
                  p.featured ? "border-white/12 bg-white/[0.05]" : "border-line bg-surface-warm"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <span
                    className={`font-tech text-[11px] uppercase tracking-[0.16em] ${
                      p.featured ? "text-white/40" : "text-ink/40"
                    }`}
                  >
                    Duration
                  </span>
                  <span className="font-display text-lg font-bold">{p.weeks}</span>
                </div>
                <div
                  className={`my-5 border-t ${p.featured ? "border-white/10" : "border-line"}`}
                />
                <div className="flex items-baseline justify-between">
                  <span
                    className={`font-tech text-[11px] uppercase tracking-[0.16em] ${
                      p.featured ? "text-white/40" : "text-ink/40"
                    }`}
                  >
                    Fees
                  </span>
                  <span className={`text-right text-[13px] font-semibold ${p.featured ? "text-white/80" : "text-ink/70"}`}>
                    Shared on your free counselling call
                  </span>
                </div>
                <div
                  className={`my-5 border-t ${p.featured ? "border-white/10" : "border-line"}`}
                />
                <p
                  className={`text-[13px] leading-relaxed ${
                    p.featured ? "text-white/55" : "text-ink-soft"
                  }`}
                >
                  <span className="font-semibold">Best for:</span> {p.audience}
                </p>
                <div className="mt-7 flex flex-col gap-3">
                  <ButtonPrimary href="/apply" className="!px-5 !py-3 !text-[14px]">
                    Apply for this track
                  </ButtonPrimary>
                  <ButtonGhost
                    href="/contact#counselling"
                    className={`!px-5 !py-3 !text-[14px] ${
                      p.featured
                        ? "!border-white/20 !bg-transparent !text-white hover:!border-white/50 hover:!text-white"
                        : ""
                    }`}
                  >
                    Talk to a counsellor
                  </ButtonGhost>
                </div>
              </aside>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison strip */}
      <section className="bg-surface-warm px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Pill>Not sure which track?</Pill>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Take the free AI career assessment
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15.5px] text-ink-soft">
            A 10-minute conversation with our counsellors maps your background and
            goals to the right program — free, no pressure.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <ButtonPrimary href="/contact#counselling">Book Free Assessment</ButtonPrimary>
            <ButtonGhost href="/faqs">Read FAQs</ButtonGhost>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHead pill="Student Reviews" title="What our students" accent="say." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {studentReviews.slice(0, 3).map((r) => (
              <figure key={r.name} className="lift rounded-3xl border border-line bg-surface p-7">
                <blockquote className="text-[15px] leading-relaxed text-ink/80">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <p className="font-display text-[15px] font-bold">{r.name}</p>
                  <p className="mt-0.5 text-[12.5px] text-ink-soft">AGS AI Academy · {r.focus}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-[14px] text-ink-soft">
            <Link href="/success-stories" className="font-semibold text-crimson hover:text-crimson-deep">
              Read all student reviews →
            </Link>
          </p>
        </div>
      </section>

      {/* Course FAQ */}
      <section className="bg-surface-warm px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHead pill="FAQs" title="AI courses —" accent="your questions." />
          <div className="mt-10 space-y-4">
            {courseFaqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-display text-[16px] font-bold">{f.q}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
