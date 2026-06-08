import type { Metadata } from "next";
import { programs } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { ButtonPrimary, SectionHead } from "@/components/ui";
import { Check } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — AI Course Fees in Pondicherry with 0% EMI",
  description:
    "Transparent AI course fees at AGS Academy Pondicherry: AI Foundations ₹15,000, Professional AI Engineer ₹49,000, AI Startup Builder ₹99,000. 0% EMI and scholarships available.",
};

const included = [
  "Mentor-led live sessions",
  "Real client project work",
  "Internship track access",
  "Portfolio & GitHub reviews",
  "Placement assistance",
  "Events & community access",
  "Course materials & tools",
  "Completion certificate",
];

export default function PricingPage() {
  const studentPrograms = programs.filter((p) => p.slug !== "corporate-ai-training");
  const corporate = programs.find((p) => p.slug === "corporate-ai-training")!;

  return (
    <>
      <PageHero
        pill="Pricing"
        title="Transparent fees."
        accent="Zero hidden costs."
        body="One fee covers everything — training, projects, internship, placement support. 0% EMI on every program, scholarships every batch."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {studentPrograms.map((p, i) => (
              <div
                key={p.slug}
                className={`reveal lift relative flex flex-col rounded-[2rem] border p-8 ${
                  p.featured
                    ? "border-crimson/30 bg-ink text-white shadow-[0_30px_70px_-28px_rgba(169,31,36,0.5)]"
                    : "border-line bg-surface"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {p.featured && (
                  <span className="font-tech absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-crimson px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    Most Popular
                  </span>
                )}
                <h2 className="font-display text-[22px] font-bold">{p.name}</h2>
                <p className={`mt-1.5 text-[13.5px] ${p.featured ? "text-white/60" : "text-ink-soft"}`}>
                  {p.tagline}
                </p>
                <div className="mt-7 flex items-baseline gap-2">
                  <span className="font-tech text-[2.6rem] font-bold leading-none">{p.price}</span>
                  <span className={`text-[13px] ${p.featured ? "text-white/50" : "text-ink/45"}`}>
                    / {p.duration.toLowerCase()}
                  </span>
                </div>
                <p
                  className={`font-tech mt-2 text-[12.5px] font-medium ${
                    p.featured ? "text-rose-soft" : "text-crimson"
                  }`}
                >
                  EMI: {p.emi} · 0% interest
                </p>
                <div className={`my-7 border-t ${p.featured ? "border-white/10" : "border-line"}`} />
                <ul className="space-y-3">
                  {p.outcomes.map((o) => (
                    <li
                      key={o}
                      className={`flex items-start gap-2.5 text-[14px] ${
                        p.featured ? "text-white/80" : "text-ink/80"
                      }`}
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-crimson" />
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <ButtonPrimary href="/apply" className="w-full !py-3 !text-[14.5px]">
                    Enroll Now
                  </ButtonPrimary>
                </div>
              </div>
            ))}
          </div>

          {/* Corporate */}
          <div className="reveal mt-6 flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-line bg-surface-warm p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="font-display text-2xl font-bold">{corporate.name}</h2>
              <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
                {corporate.description}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 bg-surface px-7 py-3.5 text-[15px] font-semibold text-ink transition-all hover:border-crimson/40 hover:text-crimson"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-surface-warm px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHead
            pill="All-Inclusive"
            title="Every program includes"
            accent="everything."
            body="No upsells for 'placement add-ons' or 'project packs'. One fee, the whole experience."
          />
          <div className="reveal mt-12 grid gap-3.5 rounded-[2rem] border border-line bg-surface p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[14px] font-medium text-ink/80">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-rose-tint">
                  <Check className="size-3.5 text-crimson" />
                </span>
                {item}
              </div>
            ))}
          </div>

          <div className="reveal mt-8 grid gap-5 sm:grid-cols-3">
            {[
              { t: "0% EMI", b: "Split any program fee into monthly installments at no extra cost." },
              { t: "Scholarships", b: "Merit scholarships up to 30% each batch — ask during counselling." },
              { t: "7-Day Refund", b: "Full refund within the first week if the program isn't right for you." },
            ].map((c) => (
              <div key={c.t} className="rounded-3xl border border-line bg-surface p-6 text-center">
                <p className="font-tech text-lg font-bold text-crimson">{c.t}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Invest ₹15,000 in yourself. Recover it with your first month's salary."
        body="Our counsellors will help you pick a track and an EMI plan that fits — free, no pressure."
      />
    </>
  );
}
