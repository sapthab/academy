import { pageMeta, coursesItemListSchema } from "@/lib/seo";
import { LocalLanding } from "@/components/local-landing";

export const metadata = pageMeta({
  title: "Python Course in Pondicherry — Beginner to AI-Ready",
  description:
    "Learn Python in Pondicherry with AGS AI Academy. A hands-on Python course for beginners that leads straight into AI and data science — with real projects, internships and placement support.",
  path: "/python-course-in-pondicherry",
});

export default function PythonPondicherryPage() {
  return (
    <LocalLanding
      crumbLabel="Python Course in Pondicherry"
      pill="Python · Puducherry"
      titleLead="The hands-on Python course in"
      titleAccent="Pondicherry."
      heroBody="Python is the first step into AI and data science. Learn it properly in Puducherry — from the very first line of code to building real projects — with mentors and a clear path into an AI career."
      intro={
        <>
          Python is the world&apos;s most popular language for AI, and one of the{" "}
          <strong className="text-ink">easiest to learn</strong> — it reads almost like simple
          English. At AGS AI Academy, you don&apos;t just learn Python syntax. You learn it the way
          working engineers use it, and you keep going — into machine learning, AI agents and real
          projects. Python here is the <strong className="text-ink">door into an AI career</strong>,
          not a dead-end certificate.
        </>
      }
      chips={["Python Basics", "Data Handling", "Automation", "APIs", "Machine Learning", "AI Projects"]}
      whyTitle="Why learn Python"
      whyAccent="with us."
      whyCards={[
        {
          title: "From zero, genuinely",
          body: "No prior coding needed. We start from the first line and make sure you're comfortable before moving on.",
        },
        {
          title: "Python that leads to AI",
          body: "You don't stop at basics. Python becomes your tool for machine learning, automation and real AI projects.",
        },
        {
          title: "Build a real portfolio",
          body: "Every concept becomes a small project. You leave with code on GitHub that proves your skill.",
        },
      ]}
      faqs={[
        {
          q: "Where can I learn Python in Pondicherry?",
          a: "AGS AI Academy teaches Python hands-on at our campus on 100 Feet Road, Mudaliarpet, Puducherry. We start from absolute zero and take you all the way to building real AI and automation projects.",
        },
        {
          q: "Is Python hard to learn for beginners?",
          a: "No. Python is designed to be readable and beginner-friendly — many compare it to writing simple English. Most students learn the basics in a few weeks with steady practice.",
        },
        {
          q: "What can I do after learning Python?",
          a: "Python opens the door to AI, data science, machine learning, automation and web development. At AGS AI Academy, your Python course flows directly into our AI and data science programs.",
        },
        {
          q: "How do I get the Python course fees in Pondicherry?",
          a: "Python is taught as part of our AI programs. We share the full fees, EMI options and any scholarships on your free counselling call — so you start with a plan that fits you.",
        },
      ]}
      faqTitle="Python in Pondicherry —"
      faqAccent="your questions."
      ctaTitle="Learn Python the right way in Pondicherry."
      ctaBody="Start from zero and build toward a real AI career. Apply now or book free counselling."
      extraSchema={[coursesItemListSchema()]}
    />
  );
}
