import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "./faq-list";
import { faqs } from "@/lib/data";

export const metadata = pageMeta({
  title: "FAQs — AI Courses & Admissions",
  description:
    "FAQs about AGS AI Academy Pondicherry — admissions, coding prerequisites, internship guarantees, placement support and how to get fee details. Straight answers.",
  path: "/faqs",
});

export default function FaqsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        crumbs={[{ name: "Home", path: "/" }, { name: "FAQs" }]}
        pill="FAQs"
        title="Questions?"
        accent="Straight answers."
        body="Everything students and parents ask us — admissions, prerequisites, internships, placements and careers."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FaqList />
        </div>
      </section>
      <CtaBand
        title="Still have a question?"
        body="Ask a real human — our counsellors answer on WhatsApp, phone and email, usually within hours."
        primary={{ href: "/contact", label: "Contact Us" }}
        secondary={{ href: "/apply", label: "Apply Now" }}
      />
    </>
  );
}
