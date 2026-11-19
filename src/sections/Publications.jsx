"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award } from "lucide-react";
import { publications, certifications } from "../constants";

const Publications = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="publications"
      className="relative py-28 md:py-36 px-6 sm:px-12 md:px-20 bg-[#05050a] overflow-hidden"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,102,255,0.04) 0%, transparent 70%)" }}
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
            Publications & Certifications
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT — Publication */}
          <div className="lg:col-span-7">
            <motion.h2 variants={item} className="section-heading text-4xl sm:text-5xl md:text-[52px] mb-14">
              Research &{" "}
              <span className="text-[#00d4ff]">Publications.</span>
            </motion.h2>

            <div className="space-y-6">
              {publications.map((pub, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="cyber-card group relative p-8 md:p-10"
                >
                  {/* Blue top border */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#00d4ff] via-[#0066ff] to-transparent" />

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 border border-[#00d4ff]/20 bg-[#00d4ff]/5 flex items-center justify-center shrink-0 mt-0.5">
                      <BookOpen size={16} className="text-[#00d4ff]" />
                    </div>
                    <div>
                      <span className="inline-block text-[9px] uppercase tracking-[0.4em] text-[#00d4ff] font-bold border border-[#00d4ff]/20 bg-[#00d4ff]/5 px-3 py-1 mb-3">
                        {pub.status}
                      </span>
                      <h3 className="text-white font-bold text-lg md:text-xl leading-snug font-heading tracking-tight">
                        {pub.title}
                      </h3>
                    </div>
                  </div>

                  <div className="ml-0 md:ml-14 space-y-3">
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      <span className="text-white/60 font-medium">{pub.authors}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-white/35 font-bold w-14 shrink-0 pt-0.5">Venue</span>
                      <span className="text-white/50 text-sm leading-relaxed italic">{pub.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-white/35 font-bold w-14 shrink-0">Year</span>
                      <span className="text-[#00d4ff]/70 text-sm font-bold">{pub.year}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 ml-0 md:ml-14 flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-[0.25em] text-[#00d4ff]/50 border border-[#00d4ff]/15 bg-[#00d4ff]/5 px-3 py-1 font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Certifications */}
          <div className="lg:col-span-5">
            <motion.h2 variants={item} className="section-heading text-3xl sm:text-4xl md:text-[40px] mb-10">
              Certifi&shy;cations.
            </motion.h2>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="cyber-card group p-5 flex items-start gap-4 relative"
                >
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00d4ff] transition-all duration-500 group-hover:w-full" />
                  <div className="w-8 h-8 border border-[#00d4ff]/15 bg-[#00d4ff]/5 flex items-center justify-center shrink-0">
                    <Award size={13} className="text-[#00d4ff]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold leading-tight mb-1">{cert.title}</p>
                    <p className="text-white/40 text-xs">{cert.issuer}</p>
                  </div>
                  <span className="text-[9px] text-white/25 font-bold tracking-widest shrink-0 mt-0.5">
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stat */}
            <motion.div variants={item} className="mt-8 p-6 border border-dashed border-white/10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-2 font-bold">
                Also contributed to
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                GirlScript Summer of Code (GSSoC'24) — ranked top 200 contributors nationwide for open-source work.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Publications;
