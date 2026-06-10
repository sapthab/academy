import Link from "next/link";
import { programs, site } from "@/lib/data";
import { PageHero } from "./page-hero";
import { SectionHead, ButtonPrimary, ButtonGhost, Chip } from "./ui";
import { Check, ArrowRight } from "./icons";
import { CtaBand } from "./cta-band";
import { jsonLd } from "@/lib/seo";

export type LandingFaq = { q: string; a: string };
export type LandingWhy = { title: string; body: string };

export type LocalLandingProps = {
  crumbLabel: string;
  pill: string;
  titleLead: string;
  titleAccent: string;
  heroBody: string;
  intro: React.ReactNode;
  chips: string[];
  whyTitle: string;
  whyAccent: string;
  whyCards: LandingWhy[];
  faqs: LandingFaq[];
  faqTitle: string;
  faqAccent: string;
  ctaTitle: string;
  ctaBody: string;
  /** Extra JSON-LD blocks (e.g. Course ItemList) rendered before the FAQ schema. */
  extraSchema?: object[];
};

export function LocalLanding(props: LocalLandingProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {props.extraSchema?.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={jsonLd(s)} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />

      <PageHero
        crumbs={[{ name: "Home", path: "/" }, { name: props.crumbLabel }]}
        pill={props.pill}
        title={props.titleLead}
        accent={props.titleAccent}
        body={props.heroBody}
      >
        <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <ButtonPrimary href="/apply">Apply Now</ButtonPrimary>
          <ButtonGhost href="/contact#counselling">Book Free Counselling</ButtonGhost>
        </div>
      </PageHero>

      {/* Intro */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-[16.5px] leading-relaxed text-ink-soft">{props.intro}</div>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {props.chips.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-surface-warm px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHead pill="Why AGS AI Academy" title={props.whyTitle} accent={props.whyAccent} />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {props.whyCards.map((c, i) => (
              <div
                key={c.title}
                className="reveal lift rounded-3xl border border-line bg-surface p-7"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-rose-tint">
                  <Check className="size-5 text-crimson" />
                </div>
                <h3 className="font-display mt-5 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            pill="Programs"
            title="Pick your"
            accent="program."
            body="Three student programs plus corporate training — all hands-on, all in Puducherry."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((p) => (
              <Link
                key={p.slug}
                href={`/courses#${p.slug}`}
                className="lift group flex flex-col rounded-3xl border border-line bg-surface p-7"
              >
                <h3 className="font-display text-[19px] font-bold leading-tight">{p.name}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{p.tagline}</p>
                <div className="mt-auto flex items-center justify-between border-t border-line pt-5 mt-6">
                  <div>
                    <p className="font-tech text-[17px] font-bold">{p.price}</p>
                    <p className="text-[11px] text-ink/45">{p.duration}</p>
                  </div>
                  <span className="flex size-9 items-center justify-center rounded-full bg-rose-tint text-crimson transition-transform group-hover:translate-x-1">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-warm px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHead pill="FAQs" title={props.faqTitle} accent={props.faqAccent} />
          <div className="mt-10 space-y-4">
            {props.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-display text-[16px] font-bold">{f.q}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[14px] text-ink-soft">
            Visit us at {site.address} or{" "}
            <Link href="/contact#counselling" className="font-semibold text-crimson hover:text-crimson-deep">
              book a free counselling call
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand title={props.ctaTitle} body={props.ctaBody} />
    </>
  );
}
