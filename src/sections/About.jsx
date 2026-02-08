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
      institution: "ABV-Institute of Information Technology, Gwalior, India",
      duration: "2023 — 2027",
      details: "Specializing in Full Stack Development and AI."
    },
    {
      degree: "Central Board of Secondary Education",
      institution: "Bright Riders School, Abu Dhabi, UAE",
      duration: "2018 — 2023",
      details: "Focus on Physics, Chemistry, Mathematics and Computer Science."
    }
  ];

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-screen bg-[#010102] py-24 px-8 md:px-16 overflow-hidden">
      
      {/* Ambient gradients */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#1e90ff]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#ff4757]/10 blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVars}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-white/30" />
          <span className="text-white/50 uppercase tracking-[0.4em] text-xs font-bold">
            About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT — BIO */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            <motion.h2
              variants={itemVars}
              className="text-5xl md:text-7xl font-bold leading-none tracking-tighter text-white"
            >
              Merging <span className="text-white/40">Logic</span> <br />
              With <span className="italic font-light">Aesthetics.</span>
            </motion.h2>

            <motion.div
              variants={itemVars}
              className="space-y-6 text-white/70 text-lg md:text-xl font-light leading-relaxed"
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

            {/* SOCIAL LINKS */}
            <motion.div
              variants={itemVars}
              className="flex items-center gap-8 pt-6"
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
                  aria-label={label}
                  className="
                    relative group
                    text-white/50
                    transition-colors duration-300
                    hover:text-white
                  "
                >
                  {/* Gradient glow */}
                  <span className="
                    absolute inset-0
                    rounded-full
                    bg-gradient-to-r from-[#1e90ff]/40 via-[#ff4757]/40 to-[#1e90ff]/40
                    blur-lg
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                  " />
                  
                  <Icon size={22} className="relative z-10" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — CARDS */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">

            {/* TECH STACK */}
            <motion.div
              variants={itemVars}
              whileHover={{ scale: 1.01, rotate: 0.5 }}
              className="p-8 border border-white/20 bg-white/[0.02] backdrop-blur-md group transition-all duration-500 hover:border-white/50"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Code2 size={18} className="text-[#1e90ff]" />
                  <h3 className="uppercase tracking-[0.2em] text-xs font-bold text-white">
                    Tech Stack
                  </h3>
                </div>
                <Brain size={16} className="text-white/20 group-hover:text-white/60 transition-colors" />
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="relative overflow-hidden px-4 py-2 text-[10px] uppercase tracking-widest border border-white/10 text-white/50 transition-all duration-300 hover:text-white hover:border-white/30"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#1e90ff]/30 via-[#ff4757]/30 to-[#1e90ff]/30 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-md" />
                    <span className="relative z-10">{tech}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* EDUCATION */}
            <motion.div
              variants={itemVars}
              whileHover={{ scale: 1.01, rotate: -0.5 }}
              className="p-8 border border-white/20 bg-white/[0.02] backdrop-blur-md transition-all duration-500 hover:border-white/50"
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap size={18} className="text-[#ff4757]" />
                <h3 className="uppercase tracking-[0.2em] text-xs font-bold text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="relative pl-6 border-l border-white/10 transition-all duration-500 hover:border-white/40"
                  >
                    <div className="absolute -left-6 top-0 h-full w-[2px] bg-gradient-to-b from-[#1e90ff] to-[#ff4757] opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 bg-white/30 rounded-full transition-all duration-300 hover:bg-white hover:shadow-[0_0_12px_rgba(255,71,87,0.8)]" />

                    <h4 className="text-white font-bold text-lg leading-tight">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-col md:flex-row md:justify-between mt-1 italic">
                      <span className="text-white/40 text-sm">
                        {edu.institution}
                      </span>
                      <span className="text-white/60 font-mono text-[10px] uppercase tracking-tighter">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-white/30 text-xs mt-3 leading-relaxed max-w-md">
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
