import { pageMeta, coursesItemListSchema } from "@/lib/seo";
import { LocalLanding } from "@/components/local-landing";

export const metadata = pageMeta({
  title: "AI Course With Placement in Pondicherry",
  description:
    "AI course with placement in Pondicherry: a guaranteed internship, certificate and placement support. AGS AI Academy students joined Qualcomm, Capgemini & more.",
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
          plus <strong className="text-ink">placement support until you&apos;re hired</strong>.
        </>
      }
      longBody={[
        "Placement isn't a marketing word here — it's how the academy is built. Because AGS AI Academy is the training arm of AgileSoftLabs, every student works on live client projects and a real internship, then gets hands-on placement help: resume and portfolio reviews, mock interviews, and direct introductions to companies hiring AI engineers. Recent students joined Qualcomm, Capgemini, LMTEQ and Excelcom — not because of a certificate, but because they could prove they can build.",
        "You'll leave with three things employers actually want: a GitHub portfolio of deployed AI projects, an internship certificate with real references, and the ability to explain your work in an interview. That combination is what turns an 'AI course with placement' from a promise into an outcome.",
        "Honest note: no genuine academy can guarantee a specific job or salary. What we guarantee is an internship and real, ongoing placement support — and we're transparent about it. The rest is the work you put in, with mentors beside you the whole way.",
      ]}
      chips={["Guaranteed Internship", "Certificate", "GitHub Portfolio", "Mock Interviews", "Resume Reviews", "Referrals", "Placement Support"]}
      whyTitle="Placement done"
      whyAccent="honestly."
      whyCards={[
        { title: "Internship included", body: "Every student does a structured internship on real projects — the bridge that turns learning into a job." },
        { title: "A portfolio, not just a certificate", body: "You graduate with deployed projects on GitHub. That's what gets you through interviews." },
        { title: "Support until you're hired", body: "Resume and portfolio reviews, mock interviews, and direct referrals to hiring partners across India." },
      ]}
      learn={{
        title: "How placement",
        accent: "actually works.",
        intro: "A clear, honest path from learning to hired — not a vague promise.",
        items: [
          { t: "1. Learn by building", b: "Master the AI stack — Python, ML, LangChain, RAG, agents — through real projects." },
          { t: "2. Internship", b: "Work on live client projects as a structured intern, with mentors and deadlines." },
          { t: "3. Build a portfolio", b: "Deploy your projects and put them on GitHub — your real qualification." },
          { t: "4. Get a certificate", b: "A completion certificate plus an internship certificate and reference letter." },
          { t: "5. Interview prep", b: "Mock interviews, resume reviews and portfolio feedback from working engineers." },
          { t: "6. Referrals & introductions", b: "Direct introductions to hiring partners looking for AI engineers." },
          { t: "7. Support until hired", b: "We keep helping after graduation until you sign an offer." },
          { t: "8. Or launch a startup", b: "Prefer to build your own product? Our incubation track supports that too." },
        ],
      }}
      whoFor={{
        title: "Who this is",
        accent: "for.",
        items: [
          { t: "Students wanting a job", b: "Graduate with proof of skill and real placement support." },
          { t: "Career switchers", b: "Move into AI with an internship and a portfolio that opens doors." },
          { t: "Engineering graduates", b: "Any branch — turn your degree into an AI career." },
          { t: "Ambitious beginners", b: "Start from zero and finish job-ready." },
        ],
      }}
      showReviews
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
          q: "What placement support do I actually get?",
          a: "Portfolio and resume reviews, mock interviews, direct referrals to hiring partners, and ongoing support after graduation until you sign an offer.",
        },
        {
          q: "Will I get a certificate?",
          a: "Yes — a completion certificate, an internship certificate, a letter of recommendation, and project references.",
        },
        {
          q: "Where have students been placed?",
          a: "Recent AGS AI Academy students joined companies including Qualcomm, Capgemini, LMTEQ and Excelcom.",
        },
        {
          q: "How do I get the fees and EMI details?",
          a: "Fees vary by program. We walk you through the full fee, EMI options and any scholarships on your free counselling call. There's also a 7-day full refund if it's not the right fit.",
        },
      ]}
      faqTitle="AI course with placement —"
      faqAccent="your questions."
      related={[
        { href: "/ai-course-in-pondicherry", label: "AI Course in Pondicherry" },
        { href: "/internship", label: "AI Internship Program" },
        { href: "/success-stories", label: "Student Success Stories" },
        { href: "/projects", label: "Student Projects" },
      ]}
      ctaTitle="Get trained, get an internship, get hired."
      ctaBody="Real projects, a real internship, and placement support until you land the job. Apply now or book free counselling."
      extraSchema={[coursesItemListSchema()]}
    />
  );
}
