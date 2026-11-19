"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { education } from "../constants";

const Education = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 50%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
      id="education"
      className="relative py-28 md:py-36 px-6 sm:px-12 md:px-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #05050a 0%, #070710 50%, #05050a 100%)" }}
    >
      {/* BG glow */}
      <div
        className="absolute right-0 top-1/3 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)" }}
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
            Education
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT — Heading */}
          <motion.div variants={item} className="lg:col-span-5">
            <h2 className="section-heading text-4xl sm:text-5xl md:text-[56px] mb-6">
              Academic{" "}
              <span className="text-[#00d4ff]">background.</span>
            </h2>
            <p className="text-white/40 text-base font-light leading-relaxed">
              A strong foundation in CS theory and engineering, with deep coursework
              in AI/ML, algorithms, and systems.
            </p>
          </motion.div>

          {/* RIGHT — Timeline */}
          <div className="lg:col-span-7" ref={sectionRef}>
            <div className="relative pl-8">
              {/* Background line */}
              <div className="absolute left-0 top-3 bottom-3 w-[1px] bg-white/[0.06]" />
              {/* Animated line */}
              <motion.div
                style={{ scaleY: lineScaleY, originY: 0 }}
                className="absolute left-0 top-3 bottom-3 w-[1px] bg-gradient-to-b from-[#00d4ff] via-[#0066ff] to-transparent"
              />

              <div className="space-y-12">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[29px] top-3 w-3 h-3 rounded-full border-2 border-[#00d4ff] bg-[#05050a]" />
                    <div className="absolute -left-[27px] top-3.5 w-2 h-2 rounded-full bg-[#00d4ff]/40" />

                    {/* Card */}
                    <div className="cyber-card p-7 group">
                      {/* Blue bottom line on hover */}
                      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00d4ff] transition-all duration-500 group-hover:w-full" />

                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-9 h-9 border border-[#00d4ff]/20 bg-[#00d4ff]/5 flex items-center justify-center shrink-0">
                          <GraduationCap size={15} className="text-[#00d4ff]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                            <h3 className="text-white font-bold text-base md:text-lg leading-tight font-heading">
                              {edu.degree}
                            </h3>
                            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold border border-white/10 px-2 py-0.5 shrink-0">
                              {edu.duration}
                            </span>
                          </div>
                          <p className="text-[#00d4ff]/70 text-sm font-medium">{edu.institution}</p>
                          <p className="text-white/35 text-xs mt-0.5">{edu.location}</p>
                        </div>
                      </div>

                      {/* Courses */}
                      {edu.courses.length > 0 && (
                        <div className="mt-5 ml-13">
                          <div className="flex items-center gap-2 mb-3">
                            <BookOpen size={11} className="text-white/30" />
                            <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">
                              Key Coursework
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course) => (
                              <span
                                key={course}
                                className="text-[9px] uppercase tracking-widest text-white/40 border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-medium hover:text-[#00d4ff]/60 hover:border-[#00d4ff]/15 transition-colors duration-300"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
