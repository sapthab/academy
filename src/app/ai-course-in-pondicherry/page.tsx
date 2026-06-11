import { pageMeta, coursesItemListSchema } from "@/lib/seo";
import { LocalLanding } from "@/components/local-landing";

export const metadata = pageMeta({
  title: "AI Course in Pondicherry",
  description:
    "Hands-on AI course in Pondicherry at AGS AI Academy. Learn Artificial Intelligence by building real projects, with guaranteed internships and placement support.",
  path: "/ai-course-in-pondicherry",
});

export default function AiCoursePondicherryPage() {
  return (
    <LocalLanding
      crumbLabel="AI Course in Pondicherry"
      pill="AI Course · Puducherry"
      titleLead="The hands-on AI course in"
      titleAccent="Pondicherry."
      heroBody="Become an AI engineer in Puducherry through real client projects, internships and mentorship — not slides. Beginner-friendly, placement-focused, and built inside a working AI agency."
      intro={
        <>
          Students in Puducherry have long had to move to Chennai or Bangalore for serious AI
          training. <strong className="text-ink">AGS AI Academy changes that.</strong> We teach
          Artificial Intelligence the way the industry actually works — by building and deploying
          real products — right here in Pondicherry, with mentors who ship AI for a living at
          AgileSoftLabs.
        </>
      }
      longBody={[
        "Most AI courses in Pondicherry are recorded videos or slide decks that leave you with a certificate and no real skill. Our AI course is different: from week one you write Python, train machine-learning models, and build working AI tools — chatbots, RAG systems, and AI agents — that you can show an employer. You learn by doing, with code reviews and weekly milestones, the same way professional engineers learn.",
        "The course runs in-person at our campus on 100 Feet Road, Mudaliarpet, and is open to complete beginners — we teach Python from the very first line. By the time you finish, you'll have a GitHub portfolio of deployed projects, a structured internship on real client work, and placement support until you're hired. Recent students have gone on to Qualcomm, Capgemini, LMTEQ and more.",
        "Whether you're a college student looking for a career edge, an engineering graduate wanting to switch into AI, or a working professional upskilling, this AI course in Pondicherry gives you a clear, job-focused path from beginner to AI engineer in 6–12 months.",
      ]}
      chips={["Python", "Machine Learning", "Deep Learning", "Generative AI", "LangChain", "RAG", "AI Agents", "MCP Servers", "Deployment"]}
      whyTitle="Why learn AI"
      whyAccent="with us in Pondy."
      whyCards={[
        {
          title: "Metro-grade curriculum",
          body: "The same AI stack taught in Bangalore and Chennai bootcamps — LangChain, RAG, AI agents, MCP — without relocating or paying metro prices.",
        },
        {
          title: "Learn inside a real agency",
          body: "AGS AI Academy is part of AgileSoftLabs. You build live client projects alongside working engineers, from your first weeks.",
        },
        {
          title: "Internship + placement",
          body: "A guaranteed internship, a deployed portfolio, and placement support. Recent students joined Qualcomm, Capgemini, LMTEQ and more.",
        },
      ]}
      learn={{
        title: "What you'll",
        accent: "actually learn.",
        intro: "A complete, modern AI curriculum — each topic taught by building something real.",
        items: [
          { t: "Python Programming", b: "From the first line to writing clean, production-style code — the foundation of all AI work." },
          { t: "Machine Learning", b: "How models learn from data: training, testing, and using ML to make real predictions." },
          { t: "Deep Learning", b: "Neural networks and the ideas behind modern AI — explained simply and applied in projects." },
          { t: "Generative AI", b: "Build with the models powering ChatGPT and Claude — text, image and code generation." },
          { t: "LangChain & RAG", b: "Connect AI to your own data so it answers from real documents, not guesses." },
          { t: "AI Agents & MCP", b: "Build AI that takes actions and uses tools — the most in-demand 2026 skill." },
          { t: "AI Deployment", b: "Ship your projects live so anyone can use them — and recruiters can see them." },
          { t: "Real Client Projects", b: "Apply everything on live agency work during your internship." },
        ],
      }}
      whoFor={{
        title: "Who this course is",
        accent: "built for.",
        items: [
          { t: "College students", b: "Any branch — CSE, IT, ECE, EEE, Mechanical, Civil. Build a career edge before you graduate." },
          { t: "Fresh graduates", b: "Switch into AI with a real portfolio and an internship that gets you hired." },
          { t: "Working professionals", b: "Upskill into AI and automation alongside your job." },
          { t: "Absolute beginners", b: "No coding background needed — we start from zero." },
        ],
      }}
      showReviews
      faqs={[
        {
          q: "Where can I learn AI in Pondicherry?",
          a: "AGS AI Academy runs in-person AI courses at our campus on 100 Feet Road, Mudaliarpet, Puducherry. We're the training arm of AgileSoftLabs, so you learn by building real client projects, not just attending lectures.",
        },
        {
          q: "Do I need a coding background to join an AI course?",
          a: "No. We teach Python from the very first line. Engineering students from any branch — CSE, IT, ECE, EEE, Mechanical, Civil — and fresh graduates regularly start with no coding experience.",
        },
        {
          q: "How long is the AI course?",
          a: "Programs run from 12 weeks (AI Foundations) to 24 weeks (Professional AI Engineer). With steady effort, most beginners go from zero to job-ready in about 6–12 months.",
        },
        {
          q: "Does the AI course include placement and internship?",
          a: "Yes. Every Professional AI Engineer and Startup Builder student enters a structured AI internship on real projects, and gets placement support — portfolio reviews, mock interviews and referrals — until hired.",
        },
        {
          q: "Are classes online or offline?",
          a: "Our core AI courses run in-person at our Puducherry campus, because building together is faster. Select programs and bootcamps run hybrid.",
        },
        {
          q: "Who can apply for the AI course?",
          a: "Anyone 17+ from any stream — Science, Commerce or Arts. College students, fresh graduates, working professionals and entrepreneurs are all welcome.",
        },
        {
          q: "How do I find out the fees?",
          a: "Fees depend on the program. We share full fee details, EMI options and any current scholarships on your free counselling call, so you get the plan that fits your goals.",
        },
      ]}
      faqTitle="AI course in Pondicherry —"
      faqAccent="your questions."
      related={[
        { href: "/courses", label: "All AI Courses" },
        { href: "/ai-course-with-placement-in-pondicherry", label: "AI Course with Placement" },
        { href: "/data-science-course-in-pondicherry", label: "Data Science Course" },
        { href: "/python-course-in-pondicherry", label: "Python Course" },
        { href: "/internship", label: "AI Internship" },
      ]}
      ctaTitle="Start your AI course in Pondicherry."
      ctaBody="Batches are capped at 50 students and fill fast. Apply now or talk to a counsellor — it's free."
      extraSchema={[coursesItemListSchema()]}
    />
  );
}
