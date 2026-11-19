import {
  SiC, SiCplusplus, SiJavascript, SiTypescript, SiPython, SiOcaml,
  SiHtml5, SiCss3, SiLatex, SiMarkdown,
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiSass, SiJquery, SiWebgl, SiVite, SiFramer,
  SiNodedotjs, SiExpress, SiEjs, SiJsonwebtokens, SiNpm, SiNodemon, SiMongodb, SiMysql, SiPostgresql, SiSupabase,
  SiFirebase, SiVercel, SiNetlify, SiRender, SiHeroku,
  SiOpencv, SiOpengl, SiScikitlearn, SiNumpy, SiPandas, SiStreamlit,
  SiGit, SiGithub, SiFigma, SiCanva, SiBlender,
  SiPytorch, SiTensorflow, SiDocker, SiApachekafka, SiFastapi,
  SiAmazonwebservices,
} from "react-icons/si";
import { FaJava, FaCube } from "react-icons/fa";
import { Bot, Atom, Network, TrendingUp, MessageSquare, ShoppingBag } from "lucide-react";

/* ─────────────────────────────────────────
   EXPERIENCE
───────────────────────────────────────── */
export const experience = [
  {
    role: "Undergraduate Researcher",
    company: "ABV-IIITM Gwalior",
    department: "Department of Computer Science & Engineering",
    location: "Gwalior, Madhya Pradesh",
    duration: "May 2026 — Jul 2026",
    type: "Research",
    bullets: [
      "Led independent research on quantum machine learning under faculty supervision, resulting in a first-author paper accepted at IEEE ICMICPS 2026.",
      "Reproduced 3 state-of-the-art quantum ML baselines under a unified experimental protocol, enabling fair benchmarking before proposing novel architecture and training improvements.",
      "Presented results and methodology in weekly research reviews, iterating on quantum circuit design and evaluation protocols based on advisor feedback.",
    ],
    tags: ["Quantum ML", "PyTorch", "PennyLane", "Research"],
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    department: "GSSoC'24 — Extended Program",
    location: "Remote",
    duration: "May 2024 — Aug 2024",
    type: "Open Source",
    bullets: [
      "Ranked among the top 200 contributors nationwide out of thousands of participants in GSSoC'24.",
      "Contributed to multiple open-source repositories, delivering bug fixes, feature additions, and documentation improvements.",
      "Collaborated with global maintainers and mentors, following open-source best practices for code review and pull requests.",
    ],
    tags: ["Open Source", "Git", "GitHub", "Collaboration"],
  },
];

/* ─────────────────────────────────────────
   EDUCATION
───────────────────────────────────────── */
export const education = [
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "ABV-Indian Institute of Information Technology and Management",
    location: "Gwalior, Madhya Pradesh",
    duration: "2023 — 2027",
    gpa: null,
    courses: [
      "Data Structures & Algorithms",
      "Artificial Intelligence & Machine Learning",
      "Data Analytics & Visualization",
      "Big Data Analytics",
      "Operating Systems",
      "Database Management",
      "Software Engineering",
      "Object-Oriented Programming",
    ],
  },
  {
    degree: "CBSE — High School",
    institution: "Bright Riders School",
    location: "Abu Dhabi, UAE",
    duration: "2018 — 2023",
    gpa: null,
    courses: [],
  },
];

/* ─────────────────────────────────────────
   PROJECTS (symbolic representations instead of screenshots)
───────────────────────────────────────── */
export const projects = [
  {
    id: "01",
    title: "Prepify",
    tagline: "AI-Powered Mock Interview Platform",
    category: "Full Stack · AI Agents",
    icon: Bot,
    symbol: "VOICE // AGENT",
    description:
      "A full-stack web app delivering personalized, role-specific practice rounds via Next.js and Supabase. Integrated Groq LLMs for adaptive questioning and Vapi for live voice conversation. Built automated scoring with analytics dashboards and persistent history tracking.",
    techStack: ["Next.js", "Supabase", "Groq LLM", "Vapi", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Madhuri36/Prepify",
    live: null,
    duration: "Dec 2025 — Jan 2026",
    color: "#00d4ff",
  },
  {
    id: "02",
    title: "CBQCL-HAR",
    tagline: "Quantum Contrastive Learning for HAR",
    category: "AI / ML · Quantum Computing",
    icon: Atom,
    symbol: "8-QUBIT // ANSATZ",
    description:
      "Designed an 8-qubit variational architecture with data re-uploading, ring entanglement, and Focal-SupCon loss for fall detection. Achieved 97.04% macro F1 on UniMiB-SHAR with just 2,128 parameters — beating baseline by 10.41 points.",
    techStack: ["PennyLane", "PyTorch", "Python", "Quantum ML", "Scikit-learn"],
    github: "#",
    live: null,
    duration: "May 2026 — Jul 2026",
    color: "#a855f7",
  },
  {
    id: "03",
    title: "RiskGraph",
    tagline: "Open-Source Ecosystem Health & Dependency Risk Analysis",
    category: "Data Engineering · Distributed Systems",
    icon: Network,
    symbol: "KAFKA // 15.3M EVENTS",
    description:
      "Built a distributed ingestion pipeline streaming 15.3M+ GitHub Archive events using Kafka and RustFS. Leveraged Apache Spark to construct a graph of 8,819 nodes and 15,456 edges, mapping transitive dependency relationships and cascade simulations.",
    techStack: ["Apache Kafka", "Apache Spark", "NetworkX", "FastAPI", "Docker"],
    github: "#",
    live: null,
    duration: "Sep 2026 — Oct 2026",
    color: "#10b981",
  },
  {
    id: "04",
    title: "CrediSense",
    tagline: "ML-Based Credit Risk Prediction",
    category: "Machine Learning · Analytics",
    icon: TrendingUp,
    symbol: "ENSEMBLE // ML",
    description:
      "Predicts credit risk using ensemble machine learning models with an interactive analytics dashboard. Features model comparison, feature importance visualization, and an end-to-end ML pipeline.",
    techStack: ["Python", "Streamlit", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
    github: "https://github.com/Madhuri36/CrediSense",
    live: null,
    duration: "2025",
    color: "#f59e0b",
  },
  {
    id: "05",
    title: "Infera AI",
    tagline: "Gemini-Powered AI Chatbot",
    category: "Full Stack · Generative AI",
    icon: MessageSquare,
    symbol: "GEMINI // MERN",
    description:
      "A modern AI chatbot with secure authentication, persistent chat history, and theme customization. Full-stack MERN application powered by Google Gemini API with a fast, responsive interface.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Gemini API"],
    github: "https://github.com/Madhuri36/Infera-AI",
    live: null,
    duration: "2025",
    color: "#ec4899",
  },
  {
    id: "06",
    title: "Urban Couture",
    tagline: "Full-Stack Fashion E-Commerce",
    category: "Full Stack Web · Payments",
    icon: ShoppingBag,
    symbol: "MERN // STRIPE",
    description:
      "Fashion e-commerce with JWT authentication, product browsing, Stripe payments, and an admin dashboard. Built on a scalable MERN architecture with COD and Stripe payment gateway integration.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/Madhuri36/Urban-Couture",
    live: null,
    duration: "2024",
    color: "#3b82f6",
  },
];

/* ─────────────────────────────────────────
   PUBLICATIONS
───────────────────────────────────────── */
export const publications = [
  {
    title:
      "CBQCL-HAR: Class-Balanced Quantum Contrastive Learning for Human Activity Recognition with Enhanced Variational Quantum Circuits",
    authors: "S. M. Bodapati and V. Tiwari",
    venue: "IEEE International Conference on Machine Intelligence and Cyber Physical Systems (ICMICPS)",
    year: "2026",
    status: "Accepted & Presented",
    tags: ["Quantum Computing", "Machine Learning", "HAR", "IEEE"],
    doi: null,
  },
];

/* ─────────────────────────────────────────
   ACHIEVEMENTS
───────────────────────────────────────── */
export const achievements = [
  {
    metric: "Top 10%",
    label: "Flipkart GRID 8.0",
    detail: "Round 2 qualifier from 160,000+ participants nationwide",
  },
  {
    metric: "600+",
    label: "LeetCode Problems",
    detail: "Contest rating of 1,665 (DSA Practitioner)",
  },
  {
    metric: "Top 200",
    label: "GSSoC'24 Contributors",
    detail: "GirlScript Summer of Code — open-source contributions",
  },
  {
    metric: "2,500+",
    label: "Codess.Cafe Mentee",
    detail: "Selected from a competitive pool of applicants",
  },
];

/* ─────────────────────────────────────────
   CERTIFICATIONS
───────────────────────────────────────── */
export const certifications = [
  { title: "McKinsey Forward Program", issuer: "McKinsey & Company", year: "2026" },
  { title: "Supervised ML: Regression & Classification", issuer: "DeepLearning.AI", year: "2025" },
  { title: "Introduction to Generative AI with AWS", issuer: "Udacity", year: "2025" },
  { title: "Responsive Web Design", issuer: "FreeCodeCamp", year: "2024" },
];

/* ─────────────────────────────────────────
   TECH STACK (marquee rows)
───────────────────────────────────────── */
export const techStack = {
  row1: [
    { icon: FaJava,        title: "Java",          color: "#E76F00" },
    { icon: SiPython,      title: "Python",        color: "#3776AB" },
    { icon: SiJavascript,  title: "JavaScript",    color: "#F7DF1E" },
    { icon: SiTypescript,  title: "TypeScript",    color: "#3178C6" },
    { icon: SiCplusplus,   title: "C++",           color: "#00599C" },
    { icon: SiC,           title: "C",             color: "#A8B9CC" },
    { icon: SiOcaml,       title: "OCaml",         color: "#EC6813" },
    { icon: SiHtml5,       title: "HTML5",         color: "#E34F26" },
    { icon: SiCss3,        title: "CSS3",          color: "#1572B6" },
    { icon: SiReact,       title: "React",         color: "#61DAFB" },
    { icon: SiNextdotjs,   title: "Next.js",       color: "#ffffff" },
    { icon: SiTailwindcss, title: "Tailwind CSS",  color: "#38BDF8" },
  ],
  row2: [
    { icon: SiNodedotjs,   title: "Node.js",       color: "#339933" },
    { icon: SiExpress,     title: "Express.js",    color: "#ffffff" },
    { icon: SiFastapi,     title: "FastAPI",        color: "#009688" },
    { icon: SiMongodb,     title: "MongoDB",        color: "#47A248" },
    { icon: SiMysql,       title: "MySQL",          color: "#4479A1" },
    { icon: SiPostgresql,  title: "PostgreSQL",     color: "#4169E1" },
    { icon: SiSupabase,    title: "Supabase",       color: "#3ECF8E" },
    { icon: SiAmazonwebservices, title: "AWS",      color: "#FF9900" },
    { icon: SiDocker,      title: "Docker",         color: "#2496ED" },
    { icon: SiApachekafka, title: "Apache Kafka",   color: "#231F20" },
    { icon: SiVercel,      title: "Vercel",         color: "#ffffff" },
    { icon: SiGit,         title: "Git",            color: "#F05032" },
  ],
  row3: [
    { icon: SiPytorch,     title: "PyTorch",        color: "#EE4C2C" },
    { icon: SiTensorflow,  title: "TensorFlow",     color: "#FF6F00" },
    { icon: SiScikitlearn, title: "Scikit-learn",   color: "#F7931E" },
    { icon: SiNumpy,       title: "NumPy",          color: "#013243" },
    { icon: SiPandas,      title: "Pandas",         color: "#150458" },
    { icon: SiOpencv,      title: "OpenCV",         color: "#5C3EE8" },
    { icon: SiStreamlit,   title: "Streamlit",      color: "#FF4B4B" },
    { icon: FaCube,        title: "Three.js",       color: "#ffffff" },
    { icon: SiFramer,      title: "Framer Motion",  color: "#0055FF" },
    { icon: SiGithub,      title: "GitHub",         color: "#ffffff" },
    { icon: SiFigma,       title: "Figma",          color: "#F24E1E" },
    { icon: SiVite,        title: "Vite",           color: "#646CFF" },
  ],
};
