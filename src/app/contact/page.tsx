import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { WhatsApp, SocialIcon } from "@/components/icons";
import { site, socialLinks } from "@/lib/data";

export const metadata = pageMeta({
  title: "Contact Us — Talk to a Counsellor at AGS AI Academy Pondicherry",
  description:
    "Contact AGS AI Academy in Puducherry: book a free counselling call, chat on WhatsApp, or visit our campus. Phone, email and address — we respond within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", path: "/" }, { name: "Contact" }]}
        pill="Contact Us"
        title="Talk to a human,"
        accent="not a chatbot."
        body="Questions about programs, internships or careers — our counsellors respond within 24 hours."
      />

      <section id="counselling" className="scroll-mt-24 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact channels */}
          <div className="space-y-4">
            <div className="reveal rounded-3xl border border-line bg-surface p-7">
              <h2 className="font-display text-xl font-bold">Visit the campus</h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{site.address}</p>
              <p className="mt-3 text-[13px] text-ink/50">
                Mon–Sat · 9:00 AM – 7:00 PM · Walk-ins welcome
              </p>
            </div>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal lift flex items-center gap-4 rounded-3xl border border-line bg-surface p-6"
              style={{ transitionDelay: "60ms" }}
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50">
                <WhatsApp className="size-6 text-[#25D366]" />
              </span>
              <div>
                <p className="font-display text-[16px] font-bold">WhatsApp us</p>
                <p className="text-[13.5px] text-ink-soft">Fastest replies, usually in minutes</p>
              </div>
            </a>

            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="reveal lift flex items-center gap-4 rounded-3xl border border-line bg-surface p-6"
              style={{ transitionDelay: "120ms" }}
            >
              <span className="font-tech flex size-12 items-center justify-center rounded-2xl bg-rose-tint text-lg text-crimson">
                ☎
              </span>
              <div>
                <p className="font-display text-[16px] font-bold">{site.phone}</p>
                <p className="text-[13.5px] text-ink-soft">Call for instant counselling</p>
              </div>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="reveal lift flex items-center gap-4 rounded-3xl border border-line bg-surface p-6"
              style={{ transitionDelay: "180ms" }}
            >
              <span className="font-tech flex size-12 items-center justify-center rounded-2xl bg-rose-tint text-lg text-crimson">
                @
              </span>
              <div>
                <p className="font-display text-[16px] font-bold">{site.email}</p>
                <p className="text-[13.5px] text-ink-soft">For detailed queries & brochures</p>
              </div>
            </a>

            <div
              className="reveal rounded-3xl bg-ink p-7 text-white"
              style={{ transitionDelay: "240ms" }}
            >
              <p className="font-tech text-[11px] uppercase tracking-[0.18em] text-rose-soft">
                Free counselling includes
              </p>
              <ul className="mt-4 space-y-2 text-[14px] text-white/75">
                <li>→ Career path mapping for your background</li>
                <li>→ Honest program recommendation</li>
                <li>→ Fees, EMI & scholarship guidance</li>
                <li>→ Campus tour (if you visit)</li>
              </ul>
            </div>

            <div
              className="reveal rounded-3xl border border-line bg-surface p-6"
              style={{ transitionDelay: "300ms" }}
            >
              <p className="font-tech text-[11px] uppercase tracking-[0.18em] text-ink/45">
                Follow us
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`AGS AI Academy on ${s.name}`}
                    className="flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink/60 transition-colors hover:border-crimson/40 hover:bg-rose-tint hover:text-crimson"
                  >
                    <SocialIcon name={s.icon} className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal" style={{ transitionDelay: "150ms" }}>
            <LeadForm heading="Send us a message" submitLabel="Send Message" />
          </div>
        </div>
      </section>
    </>
  );
}
