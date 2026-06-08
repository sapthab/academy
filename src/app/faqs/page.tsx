import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "./faq-list";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQs — Admissions, Programs, Internships & Fees",
  description:
    "Answers to common questions about AGS AI Academy Pondicherry: admissions process, coding prerequisites, internship guarantees, placement support, fees, EMI and refunds.",
};

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
        pill="FAQs"
        title="Questions?"
        accent="Straight answers."
        body="Everything students and parents ask us — admissions, prerequisites, internships, placements and fees."
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
