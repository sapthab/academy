import type { Metadata } from "next";
import { studentReviews } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Success Stories — What Our Interns Say",
  description:
    "Real reviews from AGS AI Academy interns: hands-on AI training, real-time client projects, and supportive mentorship at Puducherry's build-first AI academy, part of AgileSoftLabs.",
};

function initials(name: string) {
  return name
    .replace(/\./g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

const avatarTints = [
  "bg-crimson text-white",
  "bg-rose-tint text-crimson-ink",
  "bg-ink text-white",
  "bg-gold/20 text-amber-700",
];

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        pill="Success Stories"
        title="In our interns'"
        accent="own words."
        body="No scripted testimonials — these are real reviews from interns who learned AI by building real-time client projects with us. Supportive mentors, hands-on work, and skills that move careers forward."
      />

      {/* Stat strip */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-line px-5 sm:grid-cols-4 sm:divide-x lg:px-8">
          {[
            { value: "Real-time", label: "client projects" },
            { value: "1:1", label: "mentor guidance" },
            { value: "AI-first", label: "skill building" },
            { value: "Hands-on", label: "industry exposure" },
          ].map((s) => (
            <div key={s.label} className="reveal px-2 py-8 text-center sm:px-6">
              <p className="font-tech text-xl font-bold text-crimson sm:text-2xl">{s.value}</p>
              <p className="mt-1 text-[12.5px] font-medium uppercase tracking-wide text-ink/50">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews — masonry */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {studentReviews.map((r, i) => (
              <figure
                key={r.name}
                className="reveal lift break-inside-avoid rounded-3xl border border-line bg-surface p-7"
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-display flex size-11 items-center justify-center rounded-2xl text-[14px] font-bold ${
                        avatarTints[i % avatarTints.length]
                      }`}
                    >
                      {initials(r.name)}
                    </span>
                    <div>
                      <figcaption className="font-display text-[15px] font-bold leading-tight">
                        {r.name}
                      </figcaption>
                      <p className="text-[12px] text-ink-soft">AGS AI Academy Intern</p>
                    </div>
                  </div>
                  <Stars />
                </div>
                <blockquote className="mt-5 text-[14.5px] leading-relaxed text-ink/80">
                  {r.quote}
                </blockquote>
                <div className="mt-5 border-t border-line pt-4">
                  <span className="font-tech rounded-full bg-rose-tint px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-crimson-ink">
                    {r.focus}
                  </span>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="The next review on this page could be yours."
        body="Join AGS AI Academy and learn AI the way these interns did — on real-time projects, with mentors who have your back."
      />
    </>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="size-3.5 fill-gold">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}
