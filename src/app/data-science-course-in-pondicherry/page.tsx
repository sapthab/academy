import { pageMeta, coursesItemListSchema } from "@/lib/seo";
import { LocalLanding } from "@/components/local-landing";

export const metadata = pageMeta({
  title: "Data Science Course in Pondicherry — Hands-On AI & Data Training",
  description:
    "Looking for a data science course in Pondicherry? AGS AI Academy teaches data science and AI hands-on — Python, machine learning, real projects, internships and placement support in Puducherry.",
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
          way our engineers do at AgileSoftLabs. Because data science and AI overlap so much, you
          graduate ready for both <strong className="text-ink">data science and AI engineering</strong>{" "}
          roles.
        </>
      }
      chips={["Python", "Statistics", "Data Handling", "Machine Learning", "Deep Learning", "Visualization", "Real Projects"]}
      whyTitle="Why learn data science"
      whyAccent="with us."
      whyCards={[
        {
          title: "Project-first, not theory-first",
          body: "You build real data and AI projects every week — the portfolio employers actually want to see.",
        },
        {
          title: "Data science + AI together",
          body: "The skills overlap, so you graduate ready for data science, machine learning and AI engineer roles alike.",
        },
        {
          title: "Internship & placement",
          body: "A structured internship on real projects, plus placement support until you're hired. Recent students joined Qualcomm, Capgemini and more.",
        },
      ]}
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
          a: "No prior coding is needed — we teach Python from the first line. You'll learn the basic statistics required step by step. Students from any branch (CSE, IT, ECE, EEE, Mechanical, Civil) and any stream can start.",
        },
        {
          q: "What is the data science course duration, and how do I get the fees?",
          a: "Our programs run from 12 to 24 weeks. The Professional AI Engineer track (24 weeks) covers the full data science to AI journey. We share fees, EMI options and scholarships on your free counselling call.",
        },
      ]}
      faqTitle="Data science in Pondicherry —"
      faqAccent="your questions."
      ctaTitle="Start your data science career in Pondicherry."
      ctaBody="Learn data science and AI by building real projects. Apply now or talk to a counsellor — it's free."
      extraSchema={[coursesItemListSchema()]}
    />
  );
}
