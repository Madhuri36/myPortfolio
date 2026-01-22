import {
  // Languages & Core
  SiC,
  SiCplusplus,
  // SiJava,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOcaml,

  // Markup & Docs
  SiHtml5,
  SiCss3,
  SiLatex,
  SiMarkdown,

  // Frontend
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiJquery,
  SiWebgl,
  SiVite,
  SiFramer,

  // Backend
  SiNodedotjs,
  SiExpress,
  SiEjs,
  SiJsonwebtokens,
  SiNpm,
  SiNodemon,

  // Databases
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSupabase,

  // Cloud / Deployment
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiRender,
  SiHeroku,

  // AI / ML
  SiOpencv,
  SiOpengl,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  // SiMatplotlib,
  SiStreamlit,

  // Tools & Design
  SiGit,
  SiGithub,
  SiFigma,
  SiCanva,
  SiBlender
} from "react-icons/si";

import { FaJava,FaCube } from "react-icons/fa";

export const PROJECTS = [
  /* =========================
     1️⃣ Electric Lavender (Matches Hero Base)
  ========================== */
  {
    title: "Prepify",
    tagline: "AI-powered mock interview platform with instant feedback.",
    description:
      "Prepify is an AI-driven interview preparation platform that enables users to practice mock interviews using voice agents, receive real-time feedback, and track performance through a modern dashboard.",
    gradient: "from-[#8B5CF6] via-[#A78BFA] to-[#DDD6FE]", 
    accentBg: "bg-[#8B5CF6]",
    accentText: "text-[#F5F3FF]",
    features: [
      "AI-powered mock interviews using voice agents",
      "Instant feedback with transcripts and insights",
      "User authentication and interview session tracking",
      "Clean dashboard for practice history",
      "Modern, distraction-free UI"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Supabase", "Vapi AI", "Gemini API", "shadcn/ui"],
    image: "../src/assets/images/p3.png",
    github: "https://github.com/Madhuri36/Prepify"
  },

  /* =========================
     2️⃣ Neon Mint / Cyan
  ========================== */
  {
    title: "CrediSense",
    tagline: "ML-based credit risk prediction with real-time insights.",
    description:
      "CrediSense predicts credit risk using ensemble machine learning models and presents insights through an interactive analytics dashboard.",
    gradient: "from-[#06B6D4] via-[#22D3EE] to-[#A5F3FC]", 
    accentBg: "bg-[#06B6D4]",
    accentText: "text-[#ECFEFF]",
    features: [
      "Credit risk prediction using ML models",
      "Interactive analytics dashboard",
      "Model comparison and metrics",
      "Feature importance visualization",
      "End-to-end ML pipeline"
    ],
    techStack: ["Python", "Streamlit", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
    image: "../src/assets/images/p6.png",
    github: "https://github.com/Madhuri36/CrediSense"
  },

  /* =========================
     3️⃣ Cyber Sunset (Bright Orange/Pink)
  ========================== */
  {
    title: "Infera AI",
    tagline: "Gemini-powered AI chatbot with modern UX.",
    description:
      "Infera AI is a modern AI chatbot application with user authentication, persistent chat history, and customizable themes powered by Gemini.",
    gradient: "from-[#F43F5E] via-[#FB7185] to-[#FECDD3]", 
    accentBg: "bg-[#F43F5E]",
    accentText: "text-[#FFF1F2]",
    features: [
      "AI-powered chat using Gemini",
      "Secure user authentication",
      "Persistent chat history",
      "Theme customization",
      "Fast, responsive interface"
    ],
    techStack: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Express", "MongoDB", "Gemini API"],
    image: "../src/assets/images/p1.png",
    github: "https://github.com/Madhuri36/Infera-AI"
  },

  /* =========================
     4️⃣ Cosmic Indigo (Nova-X)
  ========================== */
  {
    title: "Nova-X",
    tagline: "Immersive 3D obstacle game with physics.",
    description:
      "Nova-X is a space-themed 3D obstacle game built using React Three Fiber and physics-based interactions, featuring low-poly visuals and smooth gameplay.",
    gradient: "from-[#6366F1] via-[#818CF8] to-[#C7D2FE]", 
    accentBg: "bg-[#EF4444]", // Red ball accent remains for gameplay clarity
    accentText: "text-[#EEF2FF]",
    features: [
      "Physics-based 3D rolling ball gameplay",
      "Low-poly space-themed environments",
      "React Three Fiber rendering",
      "Rapier physics integration",
      "Smooth controls and immersive visuals"
    ],
    techStack: ["React", "Three.js", "React Three Fiber", "Rapier Physics", "CSS"],
    image: "../src/assets/images/p4.png",
    github: "https://github.com/Madhuri36/Nova-X"
  },

  /* =========================
     5️⃣ Neon Flamingo
  ========================== */
  {
    title: "Urban Couture",
    tagline: "Full-stack fashion e-commerce platform.",
    description:
      "Urban Couture is a fashion e-commerce platform with authentication, secure payments, and an admin dashboard for managing products and orders.",
    gradient: "from-[#D946EF] via-[#E879F9] to-[#F5D0FE]", 
    accentBg: "bg-[#D946EF]",
    accentText: "text-[#FDF4FF]",
    features: [
      "JWT-based authentication",
      "Product browsing and checkout",
      "Stripe & COD payments",
      "Admin dashboard",
      "Scalable MERN architecture"
    ],
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe API"],
    image: "../src/assets/images/p2.png",
    github: "https://github.com/Madhuri36/Urban-Couture"
  },

  /* =========================
     6️⃣ Hyper Teal
  ========================== */
  {
    title: "WanderLust",
    tagline: "Airbnb-style vacation rental platform.",
    description:
      "WanderLust is a vacation rental platform enabling users to explore properties, manage listings, and leave reviews with a clean server-rendered UI.",
    gradient: "from-[#14B8A6] via-[#2DD4BF] to-[#99F6E4]", 
    accentBg: "bg-[#14B8A6]",
    accentText: "text-[#F0FDFA]",
    features: [
      "Property listings & browsing",
      "Role-based authentication",
      "Booking & review system",
      "Server-side rendering with EJS",
      "Clean rental UX"
    ],
    techStack: ["Node.js", "Express", "MongoDB", "EJS Templates", "Passport.js", "CSS"],
    image: "../src/assets/images/p5.png",
    github: "https://github.com/Madhuri36/WanderLust"
  }
];


export const techStack = {
  /* =====================
     ROW 1 — FRONTEND + UI
  ====================== */
  row1: [
    { icon: FaJava, title: "Java", color: "#E76F00" },
    { icon: SiJavascript, title: "JavaScript", color: "#F7DF1E" },
    { icon: SiTypescript, title: "TypeScript", color: "#3178C6" },
    { icon: SiHtml5, title: "HTML5", color: "#E34F26" },
    { icon: SiCss3, title: "CSS3", color: "#1572B6" },
    { icon: SiReact, title: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, title: "Next.js", color: "#000000" },
    { icon: SiTailwindcss, title: "Tailwind CSS", color: "#38BDF8" },
    { icon: SiBootstrap, title: "Bootstrap", color: "#7952B3" },
    { icon: SiSass, title: "Sass", color: "#CC6699" },
    { icon: SiJquery, title: "jQuery", color: "#0769AD" },
    { icon: FaCube, title: "Three.js", color: "#111827" },
  ],

  /* =====================
     ROW 2 — BACKEND + CLOUD
  ====================== */
  row2: [
    { icon: SiNodedotjs, title: "Node.js", color: "#339933" },
    { icon: SiExpress, title: "Express.js", color: "#000000" },
    { icon: SiEjs, title: "EJS", color: "#B4CA65" },
    { icon: SiJsonwebtokens, title: "JWT", color: "#000000" },
    { icon: SiNpm, title: "npm", color: "#CB3837" },
    { icon: SiNodemon, title: "Nodemon", color: "#76D04B" },
    { icon: SiMongodb, title: "MongoDB", color: "#47A248" },
    { icon: SiMysql, title: "MySQL", color: "#4479A1" },
    { icon: SiPostgresql, title: "PostgreSQL", color: "#4169E1" },
    { icon: SiSupabase, title: "Supabase", color: "#3ECF8E" },
    { icon: SiFirebase, title: "Firebase", color: "#FFCA28" },
    { icon: SiVercel, title: "Vercel", color: "#000000" },
    { icon: SiNetlify, title: "Netlify", color: "#00C7B7" },
    { icon: SiRender, title: "Render", color: "#46E3B7" },
    { icon: SiHeroku, title: "Heroku", color: "#430098" },
  ],

  /* =====================
     ROW 3 — TOOLS + AI / ML
  ====================== */
  row3: [
    { icon: SiPython, title: "Python", color: "#3776AB" },
    { icon: SiScikitlearn, title: "Scikit-learn", color: "#F7931E" },
    { icon: SiOpencv, title: "OpenCV", color: "#5C3EE8" },
    { icon: SiOpengl, title: "OpenGL", color: "#5586A4" },
    { icon: SiWebgl, title: "WebGL", color: "#990000" },
    { icon: SiStreamlit, title: "Streamlit", color: "#FF4B4B" },
    { icon: SiVite, title: "Vite", color: "#646CFF" },
    { icon: SiFramer, title: "Framer Motion", color: "#0055FF" },
    { icon: SiGit, title: "Git", color: "#F05032" },
    { icon: SiGithub, title: "GitHub", color: "#181717" },
    { icon: SiFigma, title: "Figma", color: "#F24E1E" },
    { icon: SiCanva, title: "Canva", color: "#00C4CC" },
    { icon: SiBlender, title: "Blender", color: "#F5792A" },
  ],
};

