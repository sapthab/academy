import { pageMeta, coursesItemListSchema } from "@/lib/seo";
import { LocalLanding } from "@/components/local-landing";

export const metadata = pageMeta({
  title: "Python Course in Pondicherry",
  description:
    "Python course in Pondicherry for beginners at AGS AI Academy. Learn Python from scratch and build toward an AI career — real projects, internships and placement.",
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
          projects.
        </>
      }
      longBody={[
        "Many Python classes in Pondicherry teach you to print 'hello world' and stop there. Ours treats Python as the door into a real career. You start from absolute zero — variables, loops, functions — and quickly move to using Python for real things: automating tasks, working with data, calling APIs, and building small AI tools. Every concept becomes a tiny project you can show.",
        "The course runs in-person at our Mudaliarpet campus, with code reviews and mentor support so you never get stuck for long. Because Python is the foundation of AI and data science, your Python course flows directly into our AI programs — meaning the same skills that get you comfortable coding also set you up to become an AI engineer.",
        "Whether you're a student, a beginner with no coding background, or a professional adding Python to your skillset, this Python course in Pondicherry gives you a strong, practical foundation and a clear next step toward an AI career.",
      ]}
      chips={["Python Basics", "Functions & Logic", "Data Handling", "Automation", "APIs", "Machine Learning", "AI Projects"]}
      whyTitle="Why learn Python"
      whyAccent="with us."
      whyCards={[
        { title: "From zero, genuinely", body: "No prior coding needed. We start from the first line and make sure you're comfortable before moving on." },
        { title: "Python that leads to AI", body: "You don't stop at basics. Python becomes your tool for machine learning, automation and real AI projects." },
        { title: "Build a real portfolio", body: "Every concept becomes a small project. You leave with code on GitHub that proves your skill." },
      ]}
      learn={{
        title: "What you'll",
        accent: "actually learn.",
        intro: "A practical Python foundation that flows straight into AI and data science.",
        items: [
          { t: "Python Fundamentals", b: "Variables, loops, functions and logic — the building blocks, taught from scratch." },
          { t: "Working with Data", b: "Read, process and analyse data with Python's most-used libraries." },
          { t: "Automation", b: "Write Python that automates boring, repetitive tasks." },
          { t: "APIs & the Web", b: "Connect Python to the internet and other services." },
          { t: "Intro to Machine Learning", b: "Use Python to build your first models that learn from data." },
          { t: "AI Tools with Python", b: "Build small AI tools and chatbots using Python and modern AI libraries." },
          { t: "Real Projects", b: "Finish with a portfolio of working Python projects on GitHub." },
          { t: "Path to AI Engineer", b: "A clear next step from Python into our full AI programs." },
        ],
      }}
      whoFor={{
        title: "Who this course is",
        accent: "built for.",
        items: [
          { t: "Absolute beginners", b: "Never coded before? Python is the friendliest place to start." },
          { t: "College students", b: "Any branch. Build a skill that stands out and leads to AI." },
          { t: "Career switchers", b: "Add Python and open the door to AI, data and automation roles." },
          { t: "Future AI engineers", b: "Get the foundation every AI engineer needs." },
        ],
      }}
      showReviews
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
          q: "Do I need any maths background?",
          a: "Not to start Python. You learn the basic maths needed for AI and data science step by step, later in the journey.",
        },
        {
          q: "Will I build real projects?",
          a: "Yes. Every concept becomes a small project, and you finish with a GitHub portfolio of working Python code.",
        },
        {
          q: "How do I get the fees?",
          a: "Python is taught as part of our AI programs. We share full fees, EMI options and any scholarships on your free counselling call.",
        },
      ]}
      faqTitle="Python in Pondicherry —"
      faqAccent="your questions."
      related={[
        { href: "/ai-course-in-pondicherry", label: "AI Course in Pondicherry" },
        { href: "/data-science-course-in-pondicherry", label: "Data Science Course" },
        { href: "/courses", label: "All Courses" },
        { href: "/internship", label: "AI Internship" },
      ]}
      ctaTitle="Learn Python the right way in Pondicherry."
      ctaBody="Start from zero and build toward a real AI career. Apply now or book free counselling."
      extraSchema={[coursesItemListSchema()]}
    />
  );
}
