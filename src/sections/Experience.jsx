"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import { experience } from "../constants";

const Experience = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="experience"
      className="relative py-28 md:py-36 px-6 sm:px-12 md:px-20 bg-[#05050a] overflow-hidden"
    >
      {/* BG accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto"
      >
        {/* Label */}
        <motion.div variants={item} className="mb-16 md:mb-24">
          <span className="section-label">
            <span className="w-8 h-[1px] bg-[#00d4ff]/50" />
            Experience
          </span>
        </motion.div>

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <motion.div variants={item} className="lg:col-span-5">
            <h2 className="section-heading text-4xl sm:text-5xl md:text-[56px]">
              Where I've{" "}
              <span className="text-[#00d4ff]">worked.</span>
            </h2>
          </motion.div>
          <motion.div variants={item} className="lg:col-span-7 flex items-end">
            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-lg">
              Hands-on contributions across quantum ML research, distributed data pipelines, and production open-source ecosystems.
            </p>
          </motion.div>
        </div>

        {/* Experience entries */}
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="cyber-card group relative p-8 md:p-10"
            >
              {/* Blue left border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#00d4ff] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#00d4ff]/20 bg-[#00d4ff]/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase size={16} className="text-[#00d4ff]" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-bold font-heading tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-[#00d4ff] text-sm font-medium mt-0.5">{exp.company}</p>
                    <p className="text-white/40 text-xs mt-0.5">{exp.department}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold border border-white/10 px-3 py-1">
                    {exp.duration}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#00d4ff]/60 font-bold">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-4 ml-0 md:ml-14">
                {exp.bullets.map((b, bi) => (
                  <div key={bi} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-[#00d4ff] mt-2.5 shrink-0" />
                    <p className="text-white/55 text-sm md:text-base leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-8 ml-0 md:ml-14 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] uppercase tracking-[0.25em] text-[#00d4ff]/60 border border-[#00d4ff]/15 bg-[#00d4ff]/5 px-3 py-1 font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status note */}
        <motion.div variants={item} className="mt-10">
          <div className="border border-dashed border-white/10 p-8 flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-light">
                Graduating 2027 (Pre-final / Final year) — actively exploring new SWE, AI/ML, and Research opportunities.
              </p>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
