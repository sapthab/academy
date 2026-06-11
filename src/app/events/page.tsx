import { pageMeta, eventSchema, jsonLd } from "@/lib/seo";
import { events } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { SectionHead } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";

export const metadata = pageMeta({
  title: "AI Events & Workshops in Pondicherry",
  description:
    "AI events in Pondicherry at AGS AI Academy — hands-on agent workshops, the Pondy AI Hackathon, GenAI bootcamps and student demo days. Free registration.",
  path: "/events",
});

const typeStyles: Record<string, string> = {
  Workshop: "bg-rose-tint text-crimson-ink",
  Hackathon: "bg-ink text-white",
  Bootcamp: "bg-gold/15 text-amber-700",
  "Demo Day": "bg-emerald-50 text-emerald-700",
};

export default function EventsPage() {
  return (
    <>
      {events.map((e) => (
        <script
          key={e.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(eventSchema(e))}
        />
      ))}
      <PageHero
        crumbs={[{ name: "Home", path: "/" }, { name: "Events" }]}
        pill="Events & Workshops"
        title="Pondy's AI scene"
        accent="meets here."
        body="Workshops, hackathons, bootcamps and demo days — open to students, builders and the curious. Most events are free."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Events list */}
          <div className="space-y-5">
            {events.map((e, i) => (
              <article
                key={e.slug}
                className="reveal lift rounded-3xl border border-line bg-surface p-7 sm:p-8"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`font-tech rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${typeStyles[e.type]}`}
                  >
                    {e.type}
                  </span>
                  {e.free && (
                    <span className="font-tech rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-600">
                      Free
                    </span>
                  )}
                  <span className="ml-auto font-tech text-[12px] font-semibold text-crimson">
                    {e.date}
                  </span>
                </div>
                <h2 className="font-display mt-4 text-2xl font-bold">{e.title}</h2>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">
                  {e.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1.5 border-t border-line pt-4 text-[13px] text-ink/55">
                  <span>🕐 {e.time}</span>
                  <span>📍 {e.location}</span>
                  <span>🎟 {e.seats}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Registration form */}
          <div className="reveal h-fit lg:sticky lg:top-24" style={{ transitionDelay: "150ms" }}>
            <LeadForm heading="Register for an event" submitLabel="Reserve My Seat" showMessage={false} />
            <div className="mt-5 rounded-2xl border border-line bg-surface-warm p-5 text-[13px] leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">Hosting tip:</span> seats at free
              workshops fill within days. Register early — confirmed seats get a
              WhatsApp reminder.
            </div>
          </div>
        </div>
      </section>

      {/* Past events strip */}
      <section className="bg-surface-warm px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            pill="Past Highlights"
            title="What happened at"
            accent="previous events."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              { stat: "300+", label: "builders at Pondy AI Hackathon 2025" },
              { stat: "24", label: "products demoed across 3 demo days" },
              { stat: "12", label: "hiring partners attended last demo day" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="reveal rounded-3xl border border-line bg-surface p-8 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-tech text-4xl font-bold text-crimson">{s.stat}</p>
                <p className="mt-2 text-[14px] text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Don't just attend events. Join the academy behind them."
        body="Students get front-row access to every workshop, hackathon and demo day — included in every program."
      />
    </>
  );
}
