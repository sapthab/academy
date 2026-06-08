import type { Metadata } from "next";
import { stories, testimonials } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { SectionHead } from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Success Stories — Placements, Startups & Career Transformations",
  description:
    "Real AGS AI Academy student outcomes: placements at Zoho, TCS and Freshworks, startup launches, and career restarts. Before-and-after journeys from Puducherry's AI academy.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        pill="Success Stories"
        title="Before AGS. After AGS."
        accent="The difference is a career."
        body="ECE students who became AI engineers. Mechanical engineers who became founders. Career gaps that became career restarts. These are their stories."
      />

      {/* Stories */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          {stories.map((s, i) => (
            <article
              key={s.name}
              className="reveal lift grid gap-8 rounded-[2rem] border border-line bg-surface p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr]"
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              {/* Identity + before/after */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-crimson font-display text-xl font-bold text-white">
                    {s.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold">{s.name}</h2>
                    <p className="text-[13.5px] text-ink-soft">
                      {s.role} · {s.company}
                    </p>
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  <div className="rounded-2xl border border-line bg-surface-warm p-4">
                    <p className="font-tech text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40">
                      Before
                    </p>
                    <p className="mt-1 text-[14px] text-ink/75">{s.before}</p>
                  </div>
                  <div className="flex justify-center text-crimson/50">
                    <ArrowRight className="size-4 rotate-90" />
                  </div>
                  <div className="rounded-2xl border border-crimson/20 bg-rose-tint p-4">
                    <p className="font-tech text-[10px] font-semibold uppercase tracking-[0.16em] text-crimson/60">
                      After
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-crimson-ink">{s.after}</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="font-tech text-5xl leading-none text-crimson">&ldquo;</div>
                  <blockquote className="mt-2 text-[16.5px] leading-relaxed text-ink/85 sm:text-lg">
                    {s.quote}
                  </blockquote>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6">
                  <span className="rounded-full bg-rose-tint px-3.5 py-1.5 text-[12px] font-semibold text-crimson-ink">
                    {s.program}
                  </span>
                  {s.hike && (
                    <span className="font-tech rounded-full bg-ink px-3.5 py-1.5 text-[11px] font-semibold text-white">
                      {s.hike}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Employer voices */}
      <section className="bg-surface-warm px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            pill="Employer Reviews"
            title="The people who hire"
            accent="our graduates."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="reveal lift flex flex-col rounded-3xl border border-line bg-surface p-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <blockquote className="flex-1 text-[15px] leading-relaxed text-ink/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <p className="font-display text-[15px] font-bold">{t.name}</p>
                  <p className="mt-0.5 text-[12.5px] text-ink-soft">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="The next success story should be yours."
        body="Every student on this page started with a counselling call. Book yours — it's free."
      />
    </>
  );
}
