import { pageMeta, coursesItemListSchema } from "@/lib/seo";
import { LocalLanding } from "@/components/local-landing";

export const metadata = pageMeta({
  title: "AI Course With Placement in Pondicherry — Certificate & Internship",
  description:
    "Want an AI course with placement in Pondicherry? AGS AI Academy includes a guaranteed internship, certificate and placement support — real projects, real outcomes. Students placed at Qualcomm, Capgemini and more.",
  path: "/ai-course-with-placement-in-pondicherry",
});

export default function AiWithPlacementPondicherryPage() {
  return (
    <LocalLanding
      crumbLabel="AI Course With Placement"
      pill="AI Course + Placement · Puducherry"
      titleLead="An AI course with real"
      titleAccent="placement support."
      heroBody="In Puducherry, learn AI by building real products — and get a guaranteed internship, a recognised certificate and placement support until you're hired. Outcomes, not just attendance."
      intro={
        <>
          Many courses promise &ldquo;placement&rdquo; and deliver a certificate. We do it the other
          way around. At AGS AI Academy you build <strong className="text-ink">real client projects</strong>,
          do a <strong className="text-ink">structured internship</strong>, and graduate with a portfolio
          plus <strong className="text-ink">placement support until you&apos;re hired</strong>. Recent
          students joined Qualcomm, Capgemini, LMTEQ and Excelcom — because employers hire proof of
          skill, and that&apos;s exactly what you leave with.
        </>
      }
      chips={["Guaranteed Internship", "Certificate", "Portfolio", "Mock Interviews", "Referrals", "Placement Support"]}
      whyTitle="Placement done"
      whyAccent="honestly."
      whyCards={[
        {
          title: "Internship included",
          body: "Every student does a structured internship on real projects — the bridge that turns learning into a job.",
        },
        {
          title: "A portfolio, not just a certificate",
          body: "You graduate with deployed projects on GitHub. That's what gets you through interviews.",
        },
        {
          title: "Support until you're hired",
          body: "Resume and portfolio reviews, mock interviews, and direct referrals to hiring partners across India.",
        },
      ]}
      faqs={[
        {
          q: "Is there an AI course with placement in Pondicherry?",
          a: "Yes. AGS AI Academy's programs include a guaranteed internship, a completion certificate, and placement support — resume reviews, mock interviews and referrals — until you're hired. Recent students were placed at Qualcomm, Capgemini, LMTEQ and Excelcom.",
        },
        {
          q: "Do you guarantee a job?",
          a: "We guarantee an internship and provide genuine placement support until you're hired. No honest academy can guarantee a specific job or salary — but we maximise your chances with real projects, a portfolio and direct employer introductions.",
        },
        {
          q: "Will I get a certificate?",
          a: "Yes — you receive a completion certificate and, for the internship, an internship certificate plus a letter of recommendation and project references.",
        },
        {
          q: "What is the fee, and is EMI available?",
          a: "Programs start at ₹15,000 and go up to ₹99,000 depending on the track, all with 0% EMI and merit scholarships. There's also a 7-day full refund if it's not the right fit.",
        },
      ]}
      faqTitle="AI course with placement —"
      faqAccent="your questions."
      ctaTitle="Get trained, get an internship, get hired."
      ctaBody="Real projects, a real internship, and placement support until you land the job. Apply now or book free counselling."
      extraSchema={[coursesItemListSchema()]}
    />
  );
}
