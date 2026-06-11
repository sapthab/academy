import { pageMeta } from "@/lib/seo";
import { internshipTracks, internshipWork, internshipBenefits } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { ButtonGhost, ButtonPrimary, SectionHead } from "@/components/ui";
import { FeatureIcon, Check } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";

export const metadata = pageMeta({
  title: "AI Internship in Pondicherry",
  description:
    "AI internship in Pondicherry at AGS AI Academy — real client projects across four tracks, with a certificate, mentorship and a portfolio that gets you hired.",
  path: "/internship",
});

export default function InternshipPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", path: "/" }, { name: "AI Internship" }]}
        pill="AI Internship Program"
        title="The internship where you"
        accent="actually ship."
        body="No coffee runs, no fake certificates. AGS interns write production code, attend client standups, and graduate with work they can point to."
      >
        <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <ButtonPrimary href="/apply">Apply for Internship</ButtonPrimary>
          <ButtonGhost href="/projects">See Intern-Built Projects</ButtonGhost>
        </div>
      </PageHero>

      {/* What interns work on */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            pill="The Work"
            title="Four sources of"
            accent="real work."
            body="Interns rotate across genuine engineering surfaces — never simulated assignments."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {internshipWork.map((w, i) => (
              <div
                key={w.title}
                className="reveal lift rounded-3xl border border-line bg-surface p-7"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="font-tech text-[12px] font-bold text-crimson/50">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-2 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="bg-ink px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-tech text-[11px] font-medium uppercase tracking-[0.14em] text-rose-soft">
              <span className="size-1.5 rounded-full bg-crimson pulse-dot" />
              Internship Tracks
            </span>
            <h2 className="font-display mt-5 text-balance text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
              Choose your lane.{" "}
              <span className="font-tech font-semibold text-crimson">Go deep.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-white/60">
              Each track pairs you with a mentor and a live project matched to your
              program and career goals.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {internshipTracks.map((t, i) => (
              <div
                key={t.title}
                className="reveal group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all hover:-translate-y-1 hover:border-crimson/50 hover:bg-white/[0.07]"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-crimson/15 transition-colors group-hover:bg-crimson">
                  <FeatureIcon
                    name={t.icon}
                    className="size-6 text-rose-soft transition-colors group-hover:text-white"
                  />
                </div>
                <h3 className="font-display mt-5 text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works + benefits */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="reveal">
            <SectionHead
              align="left"
              pill="How It Works"
              title="From classroom to"
              accent="client standup."
            />
            <ol className="mt-9 space-y-6">
              {[
                {
                  t: "Qualify",
                  b: "Complete the build-phase of your program (or apply directly with a portfolio).",
                },
                {
                  t: "Match",
                  b: "We match you to a track and a live project based on your strengths and goals.",
                },
                {
                  t: "Ship",
                  b: "8–12 weeks of sprints, code reviews and demos — treated as a junior engineer, not a trainee.",
                },
                {
                  t: "Graduate",
                  b: "Leave with a certificate, references, a recommendation letter and shipped work on your GitHub.",
                },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-5">
                  <span className="font-tech flex size-11 shrink-0 items-center justify-center rounded-full bg-rose-tint text-[14px] font-bold text-crimson">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{s.t}</h3>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-ink-soft">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal lift h-fit rounded-[2rem] border border-line bg-surface-warm p-9 lg:sticky lg:top-24" style={{ transitionDelay: "120ms" }}>
            <h3 className="font-display text-2xl font-bold">Everything you leave with</h3>
            <ul className="mt-6 space-y-3.5">
              {internshipBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] font-medium text-ink/85">
                  <span className="flex size-7 items-center justify-center rounded-full bg-rose-tint">
                    <Check className="size-4 text-crimson" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-ink p-5 font-tech text-[12px] leading-relaxed text-white/70">
              <span className="text-crimson">intern</span>.complete() →{" "}
              <span className="text-emerald-400">portfolio.deployed ✓</span>
              <br />
              <span className="text-white/40"># hired_rate: 70%+ within 6 months</span>
            </div>
            <ButtonPrimary href="/apply" className="mt-7 w-full">
              Start Your Internship Path
            </ButtonPrimary>
          </div>
        </div>
      </section>

      <CtaBand
        title="Internships are earned here — and everyone gets the chance to earn one."
        body="Every AGS AI Academy program routes into the internship track. Apply, pick your program, and start building."
      />
    </>
  );
}
