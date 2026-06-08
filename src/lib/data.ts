export const site = {
  name: "AGS AI Academy",
  tagline: "Learn AI By Building Real Products",
  phone: "+91 90000 00000",
  whatsapp: "https://wa.me/919000000000",
  email: "hello@agsacademy.in",
  address: "First Floor, 208, 100 Feet Road, Mudaliarpet, Puducherry, 605004, India",
  city: "Puducherry",
  parent: {
    name: "AgileSoftLabs",
    url: "https://www.agilesoftlabs.com/",
    blurb:
      "an AI-native software agency building production systems for healthcare, fintech and e-commerce clients",
  },
};

export const stats = [
  { value: "500+", label: "Portfolio Projects Built" },
  { value: "70%", label: "Placement Rate" },
  { value: "50+", label: "Students Per Batch" },
  { value: "4.9/5", label: "Student Rating" },
];

export const whyFeatures = [
  {
    icon: "curriculum",
    title: "Industry-Driven Curriculum",
    body: "Built with hiring managers, not textbooks. LangChain, RAG, AI agents, MCP servers — the stack companies actually ship with in 2026.",
  },
  {
    icon: "projects",
    title: "Real Client Projects",
    body: "You don't simulate work — you do it. Students build production systems for real clients from month one, with code reviews and deadlines.",
  },
  {
    icon: "internship",
    title: "Internship Opportunities",
    body: "Every program routes into a structured AI internship — internal products, client work, or open source — with a certificate and references.",
  },
  {
    icon: "startup",
    title: "Startup Incubation",
    body: "Have an idea? We help you take it from prompt to product: MVP development, customer discovery, and fundraising fundamentals.",
  },
  {
    icon: "portfolio",
    title: "Portfolio Building",
    body: "Graduate with a GitHub recruiters actually read — deployed apps, live demos, and case studies that prove you can build.",
  },
  {
    icon: "placement",
    title: "Placement Assistance",
    body: "Interview prep, portfolio reviews, and direct introductions to companies hiring AI engineers across India.",
  },
];

export type Program = {
  slug: string;
  badge: string;
  name: string;
  duration: string;
  weeks: string;
  price: string;
  emi: string;
  tagline: string;
  description: string;
  modules: string[];
  outcomes: string[];
  audience: string;
  featured?: boolean;
};

export const programs: Program[] = [
  {
    slug: "ai-foundations",
    badge: "01",
    name: "AI Foundations",
    duration: "3 Months",
    weeks: "12 Weeks",
    price: "₹15,000",
    emi: "₹2,500/mo × 6",
    tagline: "Zero to AI-literate, with projects to prove it.",
    description:
      "The launchpad. Learn how AI actually works — Python, data, machine learning fundamentals and prompt engineering — by building small, real tools every single week.",
    modules: [
      "AI Basics",
      "Python Programming",
      "Data Handling",
      "Machine Learning Basics",
      "Prompt Engineering",
    ],
    outcomes: [
      "Build 6+ mini AI projects",
      "Read & write production Python",
      "Understand the modern AI landscape",
      "Foundation for the Professional track",
    ],
    audience: "College students, beginners, career switchers",
  },
  {
    slug: "professional-ai-engineer",
    badge: "02",
    name: "Professional AI Engineer",
    duration: "6 Months",
    weeks: "24 Weeks",
    price: "₹49,000",
    emi: "₹8,200/mo × 6",
    tagline: "The complete path to a hireable AI engineer.",
    description:
      "Our flagship program. Go deep on machine learning, deep learning, LangChain, vector databases, RAG pipelines, AI agents and MCP servers — then deploy everything you build for real clients during your internship.",
    modules: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "LangChain",
      "Vector Databases",
      "RAG",
      "AI Agents",
      "MCP Servers",
      "AI Deployment",
    ],
    outcomes: [
      "Ship 10+ deployed AI products",
      "Guaranteed internship placement",
      "Production GitHub portfolio",
      "Placement assistance until hired",
    ],
    audience: "Engineering students, graduates, working professionals",
    featured: true,
  },
  {
    slug: "ai-startup-builder",
    badge: "03",
    name: "AI Startup Builder",
    duration: "6 Months",
    weeks: "24 Weeks",
    price: "₹99,000",
    emi: "₹16,500/mo × 6",
    tagline: "Don't get hired. Get funded.",
    description:
      "For founders. Design AI products, build SaaS MVPs, talk to customers, grow your user base, and learn fundraising basics — inside our startup incubation track with mentor office hours.",
    modules: [
      "AI Product Design",
      "SaaS Development",
      "MVP Development",
      "Customer Discovery",
      "Growth Hacking",
      "Fundraising Basics",
    ],
    outcomes: [
      "Launch a live AI SaaS MVP",
      "Real users & revenue experiments",
      "Pitch deck + demo day",
      "Incubation & investor introductions",
    ],
    audience: "Entrepreneurs, founders, ambitious builders",
  },
  {
    slug: "corporate-ai-training",
    badge: "04",
    name: "Corporate AI Training",
    duration: "Custom",
    weeks: "Custom Programs",
    price: "Custom",
    emi: "Talk to us",
    tagline: "Upskill your team on the AI stack that matters.",
    description:
      "Tailored AI enablement for companies — from prompt engineering for business teams to agentic automation for engineering orgs. Delivered on-site in Puducherry or remote.",
    modules: [
      "AI for Business Teams",
      "Agentic Automation",
      "GenAI Engineering",
      "AI Strategy Workshops",
    ],
    outcomes: [
      "Custom curriculum for your stack",
      "Hands-on team workshops",
      "Automation roadmap",
      "Ongoing advisory",
    ],
    audience: "Companies & teams",
  },
];

export const journey = [
  {
    step: "01",
    title: "Learn",
    body: "Master the fundamentals with mentor-led, hands-on sessions — never recorded-lecture fatigue.",
  },
  {
    step: "02",
    title: "Build",
    body: "Apply every concept the same week on real products with code reviews from working engineers.",
  },
  {
    step: "03",
    title: "Intern",
    body: "Join client projects and internal products as a paid-style intern with real deadlines.",
  },
  {
    step: "04",
    title: "Launch Portfolio",
    body: "Graduate with deployed apps, a strong GitHub, and case studies that prove your skills.",
  },
  {
    step: "05",
    title: "Get Hired",
    body: "Interview prep, referrals, and placement assistance until you sign an offer — or launch your startup.",
  },
];

export type Project = {
  slug: string;
  name: string;
  category: "AI Agents" | "LLM Apps" | "Automation" | "SaaS" | "Blockchain AI";
  description: string;
  tech: string[];
  students: string[];
  metric: string;
  metricLabel: string;
};

export const projects: Project[] = [
  {
    slug: "ai-customer-support-agent",
    name: "AI Customer Support Agent",
    category: "AI Agents",
    description:
      "Autonomous support agent handling 80% of tickets for a D2C brand — RAG over help docs, order lookups via tools, and human handoff.",
    tech: ["LangChain", "GPT-4o", "Pinecone", "Next.js"],
    students: ["Priya R.", "Arjun K."],
    metric: "80%",
    metricLabel: "tickets auto-resolved",
  },
  {
    slug: "ai-resume-builder",
    name: "AI Resume Builder",
    category: "LLM Apps",
    description:
      "Generates ATS-optimized resumes from a conversational interview, with role-targeted rewriting and PDF export. 2,000+ resumes generated.",
    tech: ["Claude API", "React", "Tailwind", "Supabase"],
    students: ["Divya S.", "Mohan V."],
    metric: "2,000+",
    metricLabel: "resumes generated",
  },
  {
    slug: "ai-marketing-automation",
    name: "AI Marketing Automation Tool",
    category: "Automation",
    description:
      "Multi-agent pipeline that drafts, schedules and A/B tests social campaigns for a local agency — cut campaign production time by 70%.",
    tech: ["CrewAI", "Python", "Meta API", "Postgres"],
    students: ["Karthik N.", "Sneha P."],
    metric: "70%",
    metricLabel: "faster campaign production",
  },
  {
    slug: "ai-voice-assistant",
    name: "AI Voice Assistant",
    category: "AI Agents",
    description:
      "Tamil + English voice assistant for a clinic's appointment line — speech-to-speech with real-time booking and reminders.",
    tech: ["Whisper", "ElevenLabs", "FastAPI", "Twilio"],
    students: ["Rahul D."],
    metric: "1,200+",
    metricLabel: "calls handled monthly",
  },
  {
    slug: "ai-legal-research-bot",
    name: "AI Legal Research Bot",
    category: "LLM Apps",
    description:
      "Case-law research copilot for a Chennai law firm — citation-grounded answers over 50k judgments with paragraph-level sources.",
    tech: ["RAG", "Qdrant", "LlamaIndex", "Next.js"],
    students: ["Ananya M.", "Vikram S."],
    metric: "50k",
    metricLabel: "judgments indexed",
  },
  {
    slug: "ai-healthcare-assistant",
    name: "AI Healthcare Assistant",
    category: "SaaS",
    description:
      "Patient-intake and triage assistant deployed at two clinics — multilingual symptom capture with structured summaries for doctors.",
    tech: ["Claude API", "React Native", "FHIR", "AWS"],
    students: ["Deepak R.", "Lakshmi K."],
    metric: "2",
    metricLabel: "clinics in production",
  },
];

export const projectCategories = [
  "All",
  "AI Agents",
  "LLM Apps",
  "Automation",
  "SaaS",
  "Blockchain AI",
] as const;

export const techStack: { group: string; items: string[] }[] = [
  {
    group: "Foundation Models",
    items: ["OpenAI GPT-4o", "Anthropic Claude", "Google Gemini", "Meta Llama 3", "Mistral"],
  },
  {
    group: "Orchestration & Agents",
    items: ["LangChain", "LlamaIndex", "CrewAI", "AutoGen", "LangGraph", "MCP Servers"],
  },
  {
    group: "Vector & Memory",
    items: ["Pinecone", "Weaviate", "Chroma", "pgvector", "Qdrant"],
  },
  {
    group: "Cloud AI Platforms",
    items: ["AWS Bedrock", "Azure OpenAI", "Google Vertex AI", "Vercel AI SDK"],
  },
  {
    group: "ML & Fine-Tuning",
    items: ["Hugging Face", "PyTorch", "TensorFlow", "LoRA / QLoRA"],
  },
  {
    group: "Infra & Deployment",
    items: ["FastAPI", "Docker", "Kubernetes", "Next.js", "Supabase"],
  },
];

export const internshipTracks = [
  {
    icon: "dev",
    title: "AI Development",
    body: "Build and ship LLM applications — RAG pipelines, agent systems, evals — on real client codebases.",
  },
  {
    icon: "fullstack",
    title: "Full Stack AI",
    body: "Own features end to end: Next.js frontends, FastAPI backends, and the AI layer in between.",
  },
  {
    icon: "automation",
    title: "AI Automation",
    body: "Design agentic workflows that automate real business operations — sales, support, content, ops.",
  },
  {
    icon: "product",
    title: "AI Product Management",
    body: "Run discovery, write specs, prioritize roadmaps and ship AI products with engineering teams.",
  },
];

export const internshipWork = [
  { title: "Internal Products", body: "Work on AGS AI Academy's own AI tools used by hundreds of students." },
  { title: "Client Projects", body: "Real deliverables for real businesses — with deadlines, standups and code review." },
  { title: "Open Source", body: "Contribute to AI open source projects and build a public engineering reputation." },
  { title: "Startup Projects", body: "Join incubation-track startups as early team members building MVPs." },
];

export const internshipBenefits = [
  "Internship Certificate",
  "GitHub Portfolio",
  "Project Experience",
  "Industry Mentorship",
  "Letter of Recommendation",
  "Placement References",
];

export type StudentReview = {
  name: string;
  focus: string;
  quote: string;
};

// Real intern reviews from AgileSoftLabs / AGS AI Academy (summarized).
export const studentReviews: StudentReview[] = [
  {
    name: "Kaviraj",
    focus: "Real-Time Projects",
    quote:
      "A truly enriching experience. I got to work on real-time projects that let me apply my knowledge and gain valuable hands-on skills. The team was incredibly supportive — everyone was approachable and always ready to help.",
  },
  {
    name: "Kesaba Barik",
    focus: "Industry Tools & Tech",
    quote:
      "An incredibly rewarding internship. The team was supportive and knowledgeable, guiding me on real-world projects. I gained practical experience with industry tools and technologies in a collaborative environment that sharpened both my technical and soft skills.",
  },
  {
    name: "Murugadoss",
    focus: "AI & Web Development",
    quote:
      "I learned various AI technologies and gained practical knowledge by working on real-time projects. The mentors gave clear guidance whenever needed, improving my skills in AI, web development and project implementation. A professional, friendly and encouraging place to grow.",
  },
  {
    name: "Suvetha A",
    focus: "AI Concepts & Hands-On Work",
    quote:
      "A great place to gain practical experience in AI concepts and real-time projects. The environment was friendly and supportive, with good guidance throughout — very helpful for building skills and getting hands-on with industry-based work.",
  },
  {
    name: "Yuvasri G",
    focus: "AI & Real-Time Development",
    quote:
      "A great learning experience. The mentors are very supportive and guide interns in a friendly way. I'm learning new technologies including Artificial Intelligence and real-time development skills, which is building my technical knowledge and confidence for my IT career.",
  },
  {
    name: "Siva Ranjani",
    focus: "AI & Software Development",
    quote:
      "Great exposure to modern technologies, especially Artificial Intelligence and real-time applications. The mentors guide you step by step, which makes it easy for beginners. I worked on practical projects and improved my AI and development skills in a friendly, motivating environment. Highly recommended for students building a career in AI.",
  },
  {
    name: "K. Ramachandran",
    focus: "Mentorship & Project Exposure",
    quote:
      "Excellent place for an IT internship — hands-on project exposure, strong mentorship, and a flexible yet professional environment. I learned far more than I expected, and the team truly values intern growth. Highly recommended for anyone starting out in tech.",
  },
  {
    name: "Surendhar T",
    focus: "AI & Real-Time Projects",
    quote:
      "A great experience. The team is supportive and encouraging, and I'm learning a lot through real-time projects. I'm also gaining hands-on experience in AI, which is enhancing my technical skills and knowledge.",
  },
  {
    name: "Shoubi",
    focus: "AI Concepts & Skill Building",
    quote:
      "A friendly and supportive environment with good facilities. I was given real responsibilities that helped me learn new skills, with great opportunities to explore AI concepts and many platforms to improve my knowledge. A great place for beginners to gain experience.",
  },
  {
    name: "Mohamed Magaroos",
    focus: "Full Stack, Security & Cloud",
    quote:
      "An amazing opportunity. The staff was very cooperative and gave me exposure to full stack development, cyber security, cloud technologies and live projects. I built a secure file-sharing system using the latest technologies, with extremely helpful mentors throughout.",
  },
  {
    name: "V. Thiruvasanth",
    focus: "Full-Stack & Real-Time Apps",
    quote:
      "An extremely enriching experience that improved my technical proficiency, project-development knowledge and confidence with real-time applications. I got proper guidance on my tourism platform project while learning full-stack development — a friendly, practical learning culture with real industry exposure.",
  },
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const posts: Post[] = [
  {
    slug: "what-is-rag-explained",
    title: "RAG Explained: How AI Apps Answer From Your Own Data",
    category: "AI Tutorials",
    excerpt:
      "Retrieval-Augmented Generation is the most in-demand GenAI skill of 2026. Here's how it works, with a build-along example.",
    date: "June 2, 2026",
    readTime: "8 min",
  },
  {
    slug: "ai-engineer-roadmap-2026",
    title: "The AI Engineer Roadmap 2026: Skills That Actually Get You Hired",
    category: "Career Advice",
    excerpt:
      "We analyzed 400+ AI job postings in India. These are the skills that appear again and again — and the ones that don't matter.",
    date: "May 26, 2026",
    readTime: "12 min",
  },
  {
    slug: "student-built-voice-agent",
    title: "How a Second-Year Student Built a Voice Agent Handling 1,200 Calls a Month",
    category: "Student Projects",
    excerpt:
      "Rahul's clinic voice assistant started as a week-6 assignment. Here's the architecture, the failures, and the launch.",
    date: "May 19, 2026",
    readTime: "10 min",
  },
  {
    slug: "mcp-servers-beginners",
    title: "MCP Servers for Beginners: Giving AI Agents Real-World Hands",
    category: "AI Tutorials",
    excerpt:
      "Model Context Protocol is becoming the USB standard for AI tools. Learn what MCP servers are and build your first one.",
    date: "May 12, 2026",
    readTime: "9 min",
  },
  {
    slug: "engineering-to-ai-career-switch",
    title: "From Mechanical to ML: A Realistic Guide to Switching Into AI",
    category: "Career Advice",
    excerpt:
      "You don't need a CS degree. You need a portfolio. A practical path for non-CS engineers moving into AI roles.",
    date: "May 5, 2026",
    readTime: "11 min",
  },
  {
    slug: "ai-news-india-roundup",
    title: "AI in India This Month: Funding, Jobs & What It Means For You",
    category: "AI News",
    excerpt:
      "Indian AI startups raised $400M+ this quarter and AI job postings grew 38% YoY. The opportunity map for students.",
    date: "April 28, 2026",
    readTime: "6 min",
  },
];

export const blogCategories = [
  "All",
  "AI Tutorials",
  "Career Advice",
  "AI News",
  "Student Projects",
  "Startup Insights",
];

export type Event = {
  slug: string;
  title: string;
  type: "Workshop" | "Hackathon" | "Bootcamp" | "Demo Day";
  date: string;
  time: string;
  location: string;
  description: string;
  seats: string;
  free: boolean;
};

export const events: Event[] = [
  {
    slug: "build-your-first-ai-agent",
    title: "Build Your First AI Agent",
    type: "Workshop",
    date: "June 14, 2026",
    time: "10:00 AM – 1:00 PM",
    location: "AGS AI Academy Campus, Puducherry",
    description:
      "Hands-on workshop: build and deploy a working AI agent with tool use in 3 hours. Bring a laptop, leave with a live demo link.",
    seats: "40 seats",
    free: true,
  },
  {
    slug: "pondy-ai-hackathon",
    title: "Pondy AI Hackathon 2026",
    type: "Hackathon",
    date: "June 27–28, 2026",
    time: "48 hours",
    location: "AGS AI Academy Campus, Puducherry",
    description:
      "48 hours, real problem statements from local businesses, ₹1,00,000 prize pool. Top teams get incubation track interviews.",
    seats: "120 builders",
    free: true,
  },
  {
    slug: "genai-weekend-bootcamp",
    title: "GenAI Weekend Bootcamp",
    type: "Bootcamp",
    date: "July 11–12, 2026",
    time: "9:00 AM – 6:00 PM",
    location: "Hybrid — Campus + Online",
    description:
      "Two intensive days covering prompt engineering, RAG and LLM app development. Certificate on completion.",
    seats: "60 seats",
    free: false,
  },
  {
    slug: "demo-day-batch-9",
    title: "Demo Day — Batch 9",
    type: "Demo Day",
    date: "July 25, 2026",
    time: "4:00 PM – 7:00 PM",
    location: "AGS AI Academy Campus, Puducherry",
    description:
      "Batch 9 presents their capstone products to hiring partners, investors and the Pondy tech community. Open to recruiters.",
    seats: "Open invite",
    free: true,
  },
];

export const faqs: { q: string; a: string; group: string }[] = [
  {
    group: "Admissions",
    q: "Do I need a coding background to join?",
    a: "No. AI Foundations starts from absolute zero — we teach Python from the first line. For the Professional AI Engineer track, basic programming familiarity helps but isn't mandatory; many of our placed students started with none.",
  },
  {
    group: "Admissions",
    q: "Who can apply? Is there an age or degree requirement?",
    a: "Anyone 17+ can apply: college students (any branch — CSE, IT, ECE, EEE, Mechanical, Civil), fresh graduates, working professionals and entrepreneurs. There is no degree requirement; there is a short aptitude conversation before admission.",
  },
  {
    group: "Admissions",
    q: "How do admissions work?",
    a: "Apply online → free counselling call to pick the right track → short aptitude conversation → seat confirmation. Batches start monthly and are capped at 50 students.",
  },
  {
    group: "Programs",
    q: "How is AGS AI Academy different from other AI courses?",
    a: "We are a build-first academy. From week one you work on real products — client projects, internal tools, open source — not toy datasets. You graduate with deployed projects, an internship, and a GitHub portfolio, not just a certificate.",
  },
  {
    group: "Programs",
    q: "Are classes online or offline?",
    a: "Our core programs run in-person at our Puducherry campus because building together is faster. Select programs and bootcamps run hybrid. Corporate training can be fully remote.",
  },
  {
    group: "Programs",
    q: "What does a typical week look like?",
    a: "Roughly 40% mentor-led sessions, 60% building. You'll have weekly project milestones, code reviews with working engineers, and a Friday demo where you ship something visible.",
  },
  {
    group: "Internship & Placement",
    q: "Is the internship guaranteed?",
    a: "Yes — every Professional AI Engineer and Startup Builder student enters a structured internship track (internal products, client projects, or open source). You'll receive an internship certificate and project references.",
  },
  {
    group: "Internship & Placement",
    q: "What placement support do you provide?",
    a: "Portfolio and resume reviews, mock interviews, referrals to hiring partners, and direct introductions. Our current placement rate is 70%+ within 6 months of graduation. We support you until you're hired.",
  },
  {
    group: "Fees",
    q: "What are the fees? Is EMI available?",
    a: "AI Foundations is ₹15,000, Professional AI Engineer is ₹49,000, and AI Startup Builder is ₹99,000. All programs have 0%-interest EMI plans. Merit scholarships are available each batch.",
  },
  {
    group: "Fees",
    q: "Is there a refund policy?",
    a: "Yes — a full refund within the first 7 days of the batch if the program isn't right for you, no questions asked.",
  },
];

export const courseInterests = [
  "AI Foundations (3 Months)",
  "Professional AI Engineer (6 Months)",
  "AI Startup Builder (6 Months)",
  "Corporate AI Training",
  "AI Internship Program",
  "Not sure yet — need counselling",
];
