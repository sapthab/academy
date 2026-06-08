import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { Check } from "@/components/icons";

export const metadata = pageMeta({
  title: "Apply Now — Admissions Open at AGS AI Academy Pondicherry",
  description:
    "Apply to AGS AI Academy's AI programs in Pondicherry. Simple 3-step admission: apply online, free counselling call, seat confirmation. Batches capped at 50 students.",
  path: "/apply",
});

const steps = [
  {
    t: "Apply online",
    b: "Fill the form — takes 2 minutes. No application fee.",
  },
  {
    t: "Counselling call",
    b: "A free call to map your background to the right track.",
  },
  {
    t: "Confirm your seat",
    b: "Pick a batch and an EMI plan. Done — see you at orientation.",
  },
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", path: "/" }, { name: "Apply" }]}
        pill="Admissions Open · Next Batch"
        title="Your AI career"
        accent="starts with this form."
        body="Batches are capped at 50 students and admissions close when seats fill. Apply now — counselling is free and there's no application fee."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Steps */}
          <div>
            <h2 className="reveal font-display text-2xl font-bold">How admission works</h2>
            <ol className="mt-8 space-y-7">
              {steps.map((s, i) => (
                <li key={s.t} className="reveal flex gap-5" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="flex flex-col items-center">
                    <span className="font-tech flex size-11 shrink-0 items-center justify-center rounded-full bg-crimson text-[14px] font-bold text-white">
                      0{i + 1}
                    </span>
                    {i < steps.length - 1 && (
                      <span className="mt-2 h-full w-px bg-line" aria-hidden />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-display text-lg font-bold">{s.t}</h3>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-ink-soft">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="reveal mt-10 rounded-3xl border border-line bg-surface-warm p-7" style={{ transitionDelay: "240ms" }}>
              <p className="font-tech text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">
                Good to know
              </p>
              <ul className="mt-4 space-y-2.5 text-[14px] text-ink/75">
                {[
                  "No coding background required for Foundations",
                  "0% EMI plans on every program",
                  "Merit scholarships up to 30%",
                  "Full refund within the first 7 days",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-crimson" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="reveal lg:sticky lg:top-24 h-fit" style={{ transitionDelay: "120ms" }}>
            <LeadForm heading="Application Form" submitLabel="Submit Application" />
          </div>
        </div>
      </section>
    </>
  );
}
