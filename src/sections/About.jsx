"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

const About = () => {
  const scrollRef = useRef(null);

  // Scroll logic for the Education Timeline
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 80%", "end 50%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
    },
    {
      degree: "CBSE - High School",
      institution: "Bright Riders School, Abu Dhabi, UAE",
      duration: "2018 — 2023",
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
    <section id="about" className="relative min-h-screen bg-[#010102] py-20 md:py-32 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">

      <motion.div
        variants={containerVars}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <div className="h-[1px] w-8 md:w-12 bg-white/30" />
          <span className="text-white/50 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">
            About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: BIO & SOCIALS */}
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
                <span className="text-white font-medium underline decoration-[#1e90ff]/40 underline-offset-8">creative expression</span>.
              </p>
              <p>
                My approach focuses on building scalable systems while ensuring the UI feels
                <span className="text-[#1e90ff] font-medium"> fluid</span> and
                <span className="text-[#ff4757] font-medium"> intuitive</span>.
              </p>
            </motion.div>

            {/* SOCIAL LINKS (Synced Hero Hover) */}
            <motion.div
              variants={itemVars}
              className="flex items-center justify-start gap-8 pt-4"
            >
              {[
                { Icon: Github, href: "https://github.com/Madhuri36", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/sai-madhuri-bodapati", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white/50 transition-all duration-500 hover:text-white hover:rotate-[360deg] transform-gpu"
                >
                  <Icon size={22} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: TECH & EDUCATION */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* TECH STACK CARD */}
            <motion.div
              variants={itemVars}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-500 hover:border-white/20"
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <Code2 size={16} className="text-[#1e90ff]" />
                <h3 className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold text-white">
                  Tech Stack
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 md:px-4 md:py-2 text-[9px] md:text-[10px] uppercase tracking-widest border border-white/5 text-white/40 transition-all duration-300 hover:text-white hover:border-[#1e90ff]/40 hover:bg-[#1e90ff]/5 bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* EDUCATION CARD WITH TIMELINE */}
            <motion.div
              variants={itemVars}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-500 hover:border-white/20"
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap size={16} className="text-[#ff4757]" />
                <h3 className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold text-white">
                  Education
                </h3>
              </div>

              <div ref={scrollRef} className="relative space-y-12">
                {/* Static Background Line */}
                <div className="absolute left-[4.5px] top-2 bottom-2 w-[1px] bg-white/10" />
                
                {/* Scrolling Gradient Line */}
                <motion.div 
                  style={{ scaleY, originY: 0 }}
                  className="absolute left-[4.5px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#ff4757] via-[#1e90ff] to-[#1e90ff] z-0"
                />

                {education.map((edu, i) => (
                  <div key={i} className="relative pl-8 z-10">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-2 w-2.5 h-2.5 bg-[#010102] border border-white/20 rounded-full" />
                    
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