import Link from "next/link";
import { programs, site, studentReviews } from "@/lib/data";
import { PageHero } from "./page-hero";
import { SectionHead, ButtonPrimary, ButtonGhost, Chip } from "./ui";
import { Check, ArrowRight } from "./icons";
import { CtaBand } from "./cta-band";
import { jsonLd } from "@/lib/seo";

export type LandingFaq = { q: string; a: string };
export type LandingWhy = { title: string; body: string };
export type LandingItem = { t: string; b: string };

export type LocalLandingProps = {
  crumbLabel: string;
  pill: string;
  titleLead: string;
  titleAccent: string;
  heroBody: string;
  intro: React.ReactNode;
  /** Extra paragraphs of unique, depth-building copy under the intro. */
  longBody?: string[];
  chips: string[];
  whyTitle: string;
  whyAccent: string;
  whyCards: LandingWhy[];
  /** "What you'll learn" — detailed, keyword-rich curriculum block. */
  learn?: { title: string; accent: string; intro: string; items: LandingItem[] };
  /** "Who is this for" block. */
  whoFor?: { title: string; accent: string; items: LandingItem[] };
  /** Show a 3-up student reviews block. */
  showReviews?: boolean;
  faqs: LandingFaq[];
  faqTitle: string;
  faqAccent: string;
  /** Contextual internal links (keyword anchors). */
  related?: { href: string; label: string }[];
  ctaTitle: string;
  ctaBody: string;
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

      {/* Intro + depth paragraphs */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center text-[16.5px] leading-relaxed text-ink-soft">{props.intro}</div>
          {props.longBody?.length ? (
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-ink-soft">
              {props.longBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : null}
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

      {/* What you'll learn */}
      {props.learn ? (
        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHead
              pill="Syllabus"
              title={props.learn.title}
              accent={props.learn.accent}
              body={props.learn.intro}
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {props.learn.items.map((it, i) => (
                <div key={it.t} className="reveal flex gap-4 rounded-2xl border border-line bg-surface p-6" style={{ transitionDelay: `${(i % 2) * 70}ms` }}>
                  <span className="font-tech flex size-9 shrink-0 items-center justify-center rounded-xl bg-ink text-[13px] font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[16px] font-bold">{it.t}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">{it.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Who it's for */}
      {props.whoFor ? (
        <section className="bg-surface-warm px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHead pill="Who it's for" title={props.whoFor.title} accent={props.whoFor.accent} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {props.whoFor.items.map((it, i) => (
                <div key={it.t} className="reveal rounded-3xl border border-line bg-surface p-6" style={{ transitionDelay: `${(i % 4) * 70}ms` }}>
                  <h3 className="font-display text-[16px] font-bold">{it.t}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{it.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
                    <p className="font-tech text-[17px] font-bold">{p.duration}</p>
                    <p className="text-[11px] text-ink/45">{p.weeks}</p>
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

      {/* Reviews */}
      {props.showReviews ? (
        <section className="bg-ink px-5 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-center text-3xl font-bold sm:text-4xl">
              What our students <span className="font-tech font-semibold text-crimson">say.</span>
            </h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {studentReviews.slice(0, 3).map((r) => (
                <figure key={r.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <blockquote className="text-[15px] leading-relaxed text-white/80">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-white/10 pt-4">
                    <p className="font-display text-[15px] font-bold">{r.name}</p>
                    <p className="mt-0.5 text-[12.5px] text-white/50">AGS AI Academy · {r.focus}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-8 text-center text-[14px] text-white/60">
              <Link href="/success-stories" className="font-semibold text-rose-soft hover:text-white">
                Read all student reviews →
              </Link>
            </p>
          </div>
        </section>
      ) : null}

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

      {/* Related links */}
      {props.related?.length ? (
        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-tech text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/45">
              Explore more
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {props.related.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-line bg-surface px-5 py-2.5 text-[14px] font-semibold text-ink/75 transition-colors hover:border-crimson/40 hover:text-crimson"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand title={props.ctaTitle} body={props.ctaBody} />
    </>
  );
}
