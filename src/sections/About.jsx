"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Brain,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

const About = () => {
  const techStack = [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Node.js", "Python", "C++", "MongoDB",
    "Machine Learning", "Three.js", "Git", "Express.js"
  ];

  const education = [
    {
      degree: "Bachelor of Technology in CS",
      institution: "ABV-IIITM Gwalior, India",
      duration: "2023 — 2027",
      details: "Specializing in Full Stack Development and AI."
    },
    {
      degree: "CBSE - High School",
      institution: "Bright Riders School, Abu Dhabi, UAE",
      duration: "2018 — 2023",
      details: "Focus on Physics, Chemistry, Mathematics and Computer Science."
    }
  ];

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-screen bg-[#010102] py-20 md:py-32 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      
      {/* Ambient gradients - Adjusted size for mobile performance */}
      <div className="absolute top-0 right-0 w-[60%] md:w-[40%] h-[40%] bg-[#1e90ff]/10 blur-[80px] md:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] h-[30%] bg-[#ff4757]/10 blur-[80px] md:blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVars}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <div className="h-[1px] w-8 md:w-12 bg-white/30" />
          <span className="text-white/50 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">
            About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT — BIO */}
          <div className="lg:col-span-6 flex flex-col gap-8 md:gap-10">
            <motion.h2
              variants={itemVars}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter text-white"
            >
              Merging <span className="text-white/40">Logic</span> <br className="hidden sm:block" />
              With <span className="italic font-light">Aesthetics.</span>
            </motion.h2>

            <motion.div
              variants={itemVars}
              className="space-y-6 text-white/70 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl"
            >
              <p>
                I am a developer who believes that code is more than just
                instructions for a machine — it's a medium for{" "}
                <span className="text-white font-medium">creative expression</span>.
              </p>
              <p>
                My approach focuses on building scalable, performant systems while
                ensuring the user interface feels
                <span className="text-[#1e90ff]"> fluid</span> and
                <span className="text-[#ff4757]"> intuitive</span>.
              </p>
            </motion.div>

            {/* SOCIAL LINKS - Centered on mobile, left on desktop */}
            <motion.div
              variants={itemVars}
              className="flex items-center justify-start gap-6 sm:gap-8 pt-4"
            >
              {[
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-white/50 transition-colors duration-300 hover:text-white"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e90ff]/40 to-[#ff4757]/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon size={20} className="relative z-10 md:w-[22px] md:h-[22px]" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — CARDS */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* TECH STACK */}
            <motion.div
              variants={itemVars}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-500 hover:border-white/30"
            >
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <Code2 size={16} className="text-[#1e90ff]" />
                  <h3 className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold text-white">
                    Tech Stack
                  </h3>
                </div>
                <Brain size={16} className="text-white/20" />
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 md:px-4 md:py-2 text-[9px] md:text-[10px] uppercase tracking-widest border border-white/5 text-white/40 transition-all duration-300 hover:text-white hover:border-white/20 bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* EDUCATION */}
            <motion.div
              variants={itemVars}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-500 hover:border-white/30"
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <GraduationCap size={16} className="text-[#ff4757]" />
                <h3 className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-6 md:space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-5 border-l border-white/10">
                    <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 bg-white/30 rounded-full" />
                    
                    <h4 className="text-white font-bold text-base md:text-lg leading-tight">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-col mt-1">
                      <span className="text-white/40 text-xs md:text-sm">
                        {edu.institution}
                      </span>
                      <span className="text-white/60 font-mono text-[9px] mt-1 uppercase tracking-wider">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-white/30 text-[11px] mt-3 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;