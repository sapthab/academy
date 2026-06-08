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

export type ProjectCategory =
  | "AI Agents"
  | "Automation"
  | "Cyber Security"
  | "Cloud & SaaS"
  | "Blockchain";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  student: string;
  placed?: string;
  featured?: boolean;
};

// Real capstone & internship projects built by AGS AI Academy students.
export const projects: Project[] = [
  {
    slug: "instagram-competitor-idea-scraper",
    name: "Instagram Competitor Idea Scraper",
    category: "Automation",
    description:
      "An automation tool that mines competitor Instagram content to surface high-performing post ideas, hooks and trends — giving marketers a steady content pipeline.",
    tech: ["Python", "Playwright", "LLMs", "PostgreSQL"],
    student: "Lerin",
    placed: "Qualcomm · Internship",
    featured: true,
  },
  {
    slug: "video-to-reels-generator",
    name: "Video-to-Reels Generator",
    category: "Automation",
    description:
      "An AI pipeline that clips long-form videos into short reels and auto-generates synced subtitles — turning one upload into a week of social content.",
    tech: ["Python", "Whisper", "FFmpeg", "MoviePy"],
    student: "Kesaba",
    placed: "Excelcom · Internship",
    featured: true,
  },
  {
    slug: "youtube-shorts-idea-scraper",
    name: "YouTube Shorts Idea Scraper",
    category: "Automation",
    description:
      "An automation that analyses competing YouTube Shorts to extract winning formats, titles and trending ideas for creators and brands.",
    tech: ["Python", "YouTube API", "LLMs", "PostgreSQL"],
    student: "Karthiga",
    placed: "LMTEQ · Internship",
    featured: true,
  },
  {
    slug: "instagram-warm-lead-scraper",
    name: "Instagram Warm Lead Scraper",
    category: "Automation",
    description:
      "A lead-generation agent that identifies and qualifies warm prospects from Instagram engagement signals, ready for sales outreach.",
    tech: ["Python", "Playwright", "LLMs", "FastAPI"],
    student: "Logitha",
    placed: "Capgemini",
    featured: true,
  },
  {
    slug: "netguard-ai-anomaly-detection",
    name: "NetGuard AI — Network Anomaly Detection",
    category: "Cyber Security",
    description:
      "A machine-learning system that monitors network traffic in real time and flags intrusions and anomalies before they escalate into breaches.",
    tech: ["Python", "Scikit-learn", "Suricata", "FastAPI"],
    student: "Praveen",
    featured: true,
  },
  {
    slug: "blockchain-online-voting",
    name: "Blockchain Online Voting System",
    category: "Blockchain",
    description:
      "A tamper-proof online voting platform on blockchain — every vote is immutable, auditable and verifiable end to end.",
    tech: ["Solidity", "Ethereum", "Web3.js", "React"],
    student: "Ramachandran K",
    featured: true,
  },
  {
    slug: "intelligent-recruitment-automation",
    name: "Intelligent Recruitment Automation",
    category: "AI Agents",
    description:
      "An AI hiring assistant that screens resumes, ranks candidates and automates interview scheduling — cutting manual shortlisting effort for recruiters.",
    tech: ["Python", "LLMs", "FastAPI", "React"],
    student: "Gowtham K",
  },
  {
    slug: "bias-free-interview-evaluation",
    name: "Bias-Free AI Interview Evaluation",
    category: "AI Agents",
    description:
      "An AI evaluator that scores interview performance objectively across skills and communication — removing human bias from candidate assessment.",
    tech: ["Python", "LLMs", "Whisper", "FastAPI"],
    student: "Murugadass",
  },
  {
    slug: "faq-chatbot-agent",
    name: "FAQ Chatbot Agent",
    category: "AI Agents",
    description:
      "A retrieval-augmented chatbot that answers customer questions from a knowledge base with grounded, source-cited responses.",
    tech: ["LangChain", "OpenAI", "Pinecone", "Next.js"],
    student: "Kavinila",
  },
  {
    slug: "instagram-ai-dm-generator",
    name: "Instagram AI DM Generator",
    category: "AI Agents",
    description:
      "An AI agent that crafts personalised Instagram direct messages at scale for outreach and engagement campaigns.",
    tech: ["Python", "LLMs", "Playwright", "FastAPI"],
    student: "Abbargithan",
  },
  {
    slug: "self-healing-cloud-infrastructure",
    name: "Self-Healing Cloud Infrastructure",
    category: "Automation",
    description:
      "An adaptive, multi-level system that detects infrastructure failures and auto-remediates them in real time — keeping services online without manual intervention.",
    tech: ["Kubernetes", "Python", "Prometheus", "Ansible"],
    student: "Shoubiya M",
  },
  {
    slug: "ai-workflow-automation",
    name: "AI Workflow Automation Suite",
    category: "Automation",
    description:
      "An AI automation suite that connects tools and agents to run repetitive business workflows end to end with minimal human input.",
    tech: ["Python", "LangChain", "n8n", "FastAPI"],
    student: "Kaviraj",
  },
  {
    slug: "youtube-competitor-idea-scraper",
    name: "YouTube Competitor Idea Scraper",
    category: "Automation",
    description:
      "A research agent that studies competitor YouTube channels to surface content gaps and high-potential video ideas.",
    tech: ["Python", "YouTube API", "LLMs", "PostgreSQL"],
    student: "Lokeshwari",
  },
  {
    slug: "secure-multimodal-steganography",
    name: "Secure Multi-Modal Steganography",
    category: "Cyber Security",
    description:
      "An AI-powered system that hides encrypted data across images, audio and text — combining steganography with cryptography for layered secure communication.",
    tech: ["Python", "OpenCV", "AES", "TensorFlow"],
    student: "Girija",
  },
  {
    slug: "ai-certificate-verification",
    name: "AI Certificate Verification (QR + OCR)",
    category: "Cyber Security",
    description:
      "A fraud-proof certificate validator that reads documents with OCR and verifies authenticity through QR codes — instant, tamper-evident verification.",
    tech: ["Python", "Tesseract OCR", "OpenCV", "Flask"],
    student: "Suvetha A",
  },
  {
    slug: "secure-cloud-file-sharing",
    name: "Secure Cloud File Sharing",
    category: "Cyber Security",
    description:
      "A cloud file-sharing platform with end-to-end encryption, AI-driven threat scanning and automated access controls for safe collaboration.",
    tech: ["AWS", "Node.js", "React", "AES"],
    student: "Mohamed Magaroos",
  },
  {
    slug: "ai-file-integrity-monitoring",
    name: "AI File Integrity Monitoring",
    category: "Cyber Security",
    description:
      "A security system that continuously monitors critical files and uses AI to detect unauthorised changes and potential tampering in real time.",
    tech: ["Python", "Hashing", "FastAPI", "SQLite"],
    student: "Akshaya M",
  },
  {
    slug: "cloudprotect-ai-backup-saas",
    name: "CloudProtect AI — Backup & Recovery",
    category: "Cloud & SaaS",
    description:
      "A cloud-based SaaS for automated file backup and disaster recovery, with AI scheduling that protects data and restores it on demand.",
    tech: ["AWS", "Node.js", "React", "S3"],
    student: "Surendhar T",
  },
  {
    slug: "student-academic-career-hub",
    name: "Student Academic & Career Hub",
    category: "Cloud & SaaS",
    description:
      "An all-in-one platform that recommends abroad-education paths and career options to students using AI-driven profiling and guidance.",
    tech: ["Next.js", "Python", "LLMs", "PostgreSQL"],
    student: "Yuvasri",
  },
  {
    slug: "cloud-blood-bank-management",
    name: "Cloud Blood Bank Management",
    category: "Cloud & SaaS",
    description:
      "A cloud platform connecting donors, hospitals and blood banks in real time — tracking inventory and matching urgent requests instantly.",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    student: "Sivaranjani",
  },
];

export const projectCategories = [
  "All",
  "AI Agents",
  "Automation",
  "Cyber Security",
  "Cloud & SaaS",
  "Blockchain",
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
