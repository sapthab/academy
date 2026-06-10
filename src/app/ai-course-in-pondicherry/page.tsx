import Link from "next/link";
import { pageMeta, coursesItemListSchema, jsonLd } from "@/lib/seo";
import { programs, site } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { SectionHead, ButtonPrimary, ButtonGhost, Chip } from "@/components/ui";
import { Check, ArrowRight } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";

export const metadata = pageMeta({
  title: "AI Course in Pondicherry — Hands-On AI Training & Internships",
  description:
    "Looking for an AI course in Pondicherry? AGS AI Academy offers hands-on Artificial Intelligence training, real client projects, internships and placement assistance in Puducherry. Beginner to job-ready.",
  path: "/ai-course-in-pondicherry",
});

const localFaqs = [
  {
    q: "Where can I learn AI in Pondicherry?",
    a: "AGS AI Academy runs in-person AI courses at our campus on 100 Feet Road, Mudaliarpet, Puducherry. We're the training arm of AgileSoftLabs, so you learn by building real client projects, not just attending lectures.",
  },
  {
    q: "How do I find out the fees for an AI course in Pondicherry?",
    a: "Fees depend on the program you choose. We share full fee details — along with EMI options and any current scholarships — on your free counselling call, so you get the plan that fits your goals and budget.",
  },
  {
    q: "Do I need a coding background to join an AI course?",
    a: "No. AI Foundations starts from absolute zero and teaches Python from the first line. Engineering students from any branch — CSE, IT, ECE, EEE, Mechanical, Civil — and fresh graduates regularly start with no coding experience.",
  },
  {
    q: "Does the AI course include placement and internship?",
    a: "Yes. Every Professional AI Engineer and AI Startup Builder student enters a structured AI internship working on real projects, and gets placement assistance — portfolio reviews, mock interviews and referrals — until hired.",
  },
];

const localFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: localFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const whyLocal = [
  {
    title: "Metro-grade curriculum, in Pondy",
    body: "The same AI stack taught in Bangalore and Chennai bootcamps — LangChain, RAG, AI agents, MCP — without relocating or paying metro prices.",
  },
  {
    title: "Learn inside a real agency",
    body: "AGS AI Academy is part of AgileSoftLabs. You build live client projects alongside working engineers, from your first weeks.",
  },
  {
    title: "Placements & internships",
    body: "Guaranteed internship, a deployed portfolio, and placement support. Recent students joined Qualcomm, Capgemini, LMTEQ and more.",
  },
];

export default function AiCoursePondicherryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(coursesItemListSchema())} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(localFaqSchema)} />

      <PageHero
        crumbs={[{ name: "Home", path: "/" }, { name: "AI Course in Pondicherry" }]}
        pill="AI Course · Puducherry"
        title="The hands-on AI course in"
        accent="Pondicherry."
        body="Become an AI engineer in Puducherry through real client projects, internships and mentorship — not slides. Beginner-friendly, placement-focused, and built inside a working AI agency."
      >
        <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <ButtonPrimary href="/apply">Apply Now</ButtonPrimary>
          <ButtonGhost href="/contact#counselling">Book Free Counselling</ButtonGhost>
        </div>
      </PageHero>

      {/* Intro / local context */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[16.5px] leading-relaxed text-ink-soft">
            Students in Puducherry have long had to move to Chennai or Bangalore for serious AI
            training. <span className="font-semibold text-ink">AGS AI Academy changes that.</span>{" "}
            We teach Artificial Intelligence the way the industry actually works — by building and
            deploying real products — right here in Pondicherry, with mentors who ship AI for a
            living at AgileSoftLabs.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {["Python", "Machine Learning", "Generative AI", "LangChain", "RAG", "AI Agents", "MCP Servers", "Deployment"].map(
              (t) => (
                <Chip key={t}>{t}</Chip>
              )
            )}
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="bg-surface-warm px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            pill="Why Puducherry"
            title="World-class AI training,"
            accent="without leaving Pondy."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {whyLocal.map((c, i) => (
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
            pill="Courses"
            title="Choose your"
            accent="AI course."
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

      {/* Local FAQ */}
      <section className="bg-surface-warm px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHead pill="FAQs" title="AI course in Pondicherry —" accent="your questions." />
          <div className="mt-10 space-y-4">
            {localFaqs.map((f) => (
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

      <CtaBand
        title="Start your AI course in Pondicherry."
        body="Batches are capped at 50 students and fill fast. Apply now or talk to a counsellor — it's free."
      />
    </>
  );
}
