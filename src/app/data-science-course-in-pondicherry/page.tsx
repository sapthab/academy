import { pageMeta, coursesItemListSchema } from "@/lib/seo";
import { LocalLanding } from "@/components/local-landing";

export const metadata = pageMeta({
  title: "Data Science Course in Pondicherry",
  description:
    "Data science course in Pondicherry at AGS AI Academy — Python, statistics, machine learning and real projects, with internships and placement support. Job-ready.",
  path: "/data-science-course-in-pondicherry",
});

export default function DataSciencePondicherryPage() {
  return (
    <LocalLanding
      crumbLabel="Data Science Course in Pondicherry"
      pill="Data Science · Puducherry"
      titleLead="The hands-on data science course in"
      titleAccent="Pondicherry."
      heroBody="Learn data science and AI the practical way in Puducherry — Python, data handling, machine learning and real projects, with internships and placement support. Beginner-friendly."
      intro={
        <>
          Data science is about turning <strong className="text-ink">data into decisions</strong> —
          using Python and machine learning to find patterns and make predictions. At AGS AI Academy,
          data science isn&apos;t taught from slides. You learn it by building real projects, the same
          way our engineers do at AgileSoftLabs.
        </>
      }
      longBody={[
        "Most data science courses in Pondicherry stop at theory and a certificate. Ours is built around doing: you'll clean real datasets, build and test machine-learning models, create clear visualisations, and ship projects that solve actual problems. Because data science and AI share the same foundation — Python, statistics and machine learning — you graduate ready for data scientist, ML engineer and AI engineer roles alike.",
        "The course is open to complete beginners and runs in-person at our Mudaliarpet campus. You'll work through hands-on modules, get code reviews from working engineers, and finish with a GitHub portfolio plus a structured internship on real client data. That practical experience is exactly what employers in data science look for.",
        "Whether you're a college student, a fresh graduate, or a professional moving into analytics and AI, this data science course in Pondicherry gives you a clear, project-first path from beginner to job-ready in 6–12 months.",
      ]}
      chips={["Python", "Statistics", "Data Handling", "Data Visualization", "Machine Learning", "Deep Learning", "Real Projects"]}
      whyTitle="Why learn data science"
      whyAccent="with us."
      whyCards={[
        { title: "Project-first, not theory-first", body: "You build real data and AI projects every week — the portfolio employers actually want to see." },
        { title: "Data science + AI together", body: "The skills overlap, so you graduate ready for data science, machine learning and AI engineer roles alike." },
        { title: "Internship & placement", body: "A structured internship on real projects, plus placement support until you're hired. Students joined Qualcomm, Capgemini and more." },
      ]}
      learn={{
        title: "What you'll",
        accent: "actually learn.",
        intro: "A complete data science foundation — taught by building, not memorising.",
        items: [
          { t: "Python for Data Science", b: "The language and libraries every data scientist uses, taught from scratch." },
          { t: "Statistics & Probability", b: "The maths that lets you understand data and trust your results — explained simply." },
          { t: "Data Handling & Cleaning", b: "Real data is messy. Learn to collect, clean and prepare it for analysis." },
          { t: "Data Visualization", b: "Turn numbers into clear charts and stories that drive decisions." },
          { t: "Machine Learning", b: "Build models that learn from data to predict and classify." },
          { t: "Deep Learning & AI", b: "Go beyond classic ML into the models powering modern AI." },
          { t: "Real Projects", b: "Apply everything to live datasets and client problems during your internship." },
          { t: "Deployment", b: "Ship your work so it's usable — and visible to recruiters." },
        ],
      }}
      whoFor={{
        title: "Who this course is",
        accent: "built for.",
        items: [
          { t: "College students", b: "Any branch. Build a data science portfolio before you graduate." },
          { t: "Fresh graduates", b: "Enter data science and AI with real projects and an internship." },
          { t: "Working professionals", b: "Move into analytics, data science or AI roles." },
          { t: "Beginners", b: "No prior coding or maths required — we start from zero." },
        ],
      }}
      showReviews
      faqs={[
        {
          q: "Is there a data science course in Pondicherry?",
          a: "Yes. AGS AI Academy runs hands-on data science and AI training at our campus on 100 Feet Road, Mudaliarpet, Puducherry. You learn Python, statistics, machine learning and build real projects — with internships and placement support.",
        },
        {
          q: "What is the difference between data science and AI?",
          a: "Data science focuses on understanding data and making predictions from it. AI is about building systems that act on that understanding. They share most of the same skills — Python, statistics and machine learning — which is why our program prepares you for both.",
        },
        {
          q: "Do I need maths or coding to start data science?",
          a: "No prior coding is needed — we teach Python from the first line. You'll learn the basic statistics required step by step. Students from any branch and any stream can start.",
        },
        {
          q: "How long is the data science course?",
          a: "Programs run from 12 to 24 weeks. The Professional AI Engineer track (24 weeks) covers the full data science to AI journey. Most beginners reach job-ready in 6–12 months.",
        },
        {
          q: "Does it include an internship and placement?",
          a: "Yes — a structured internship on real client data, plus placement support including portfolio reviews, mock interviews and referrals, until you're hired.",
        },
        {
          q: "How do I get the fee details?",
          a: "Fees depend on the program. We share full fees, EMI options and any scholarships on your free counselling call.",
        },
      ]}
      faqTitle="Data science in Pondicherry —"
      faqAccent="your questions."
      related={[
        { href: "/ai-course-in-pondicherry", label: "AI Course in Pondicherry" },
        { href: "/python-course-in-pondicherry", label: "Python Course" },
        { href: "/courses", label: "All Courses" },
        { href: "/internship", label: "AI Internship" },
      ]}
      ctaTitle="Start your data science career in Pondicherry."
      ctaBody="Learn data science and AI by building real projects. Apply now or talk to a counsellor — it's free."
      extraSchema={[coursesItemListSchema()]}
    />
  );
}
