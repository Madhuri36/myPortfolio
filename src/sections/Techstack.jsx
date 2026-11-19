"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import LogoLoop from "../components/ui/LogoLoop";
import { techStack } from "../constants";

const Techstack = () => {
  const renderTechItem = useCallback((item) => {
    const Icon = item.icon;
    return (
      <span
        className="inline-flex items-center justify-center transition-all duration-300 group-hover/item:scale-125"
        style={{ fontSize: "var(--logoloop-logoHeight)" }}
        title={item.title}
        aria-label={item.title}
      >
        <Icon
          className="w-[1em] h-[1em]"
          color={item.color}
          aria-hidden
        />
      </span>
    );
  }, []);

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="techstack"
      className="relative py-28 md:py-36 overflow-hidden bg-[#05050a]"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Large watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[20vw] font-bold text-white/[0.015] tracking-tighter leading-none font-heading whitespace-nowrap"
        >
          STACK
        </span>
      </div>

      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10"
      >
        {/* Header */}
        <div className="px-6 sm:px-12 md:px-20 mb-16 md:mb-20">
          <motion.div variants={item} className="mb-8">
            <span className="section-label">
              <span className="w-8 h-[1px] bg-[#00d4ff]/50" />
              Tech Stack
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              variants={item}
              className="section-heading text-4xl sm:text-5xl md:text-[56px] max-w-xl"
            >
              Tools I build{" "}
              <span className="text-[#00d4ff]">with.</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-white/40 text-base font-light max-w-xs leading-relaxed"
            >
              Languages, frameworks, databases, cloud services,
              and AI/ML tools I use to ship.
            </motion.p>
          </div>
        </div>

        {/* Category labels + marquee rows */}
        <div className="space-y-10">
          {/* Row 1 */}
          <motion.div variants={item}>
            <div className="px-6 sm:px-12 md:px-20 mb-4">
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">
                Languages & Frontend
              </span>
            </div>
            <div className="border-y border-white/[0.05] py-5">
              <LogoLoop
                logos={techStack.row1}
                renderItem={renderTechItem}
                speed={40}
                direction="left"
                logoHeight={52}
                gap={56}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="bg-[#05050a]"
                ariaLabel="Languages and frontend technologies"
              />
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div variants={item}>
            <div className="px-6 sm:px-12 md:px-20 mb-4">
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">
                Backend, Databases & Cloud
              </span>
            </div>
            <div className="border-y border-white/[0.05] py-5">
              <LogoLoop
                logos={techStack.row2}
                renderItem={renderTechItem}
                speed={40}
                direction="right"
                logoHeight={52}
                gap={56}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="bg-[#05050a]"
                ariaLabel="Backend and infrastructure"
              />
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div variants={item}>
            <div className="px-6 sm:px-12 md:px-20 mb-4">
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">
                AI / ML & Tools
              </span>
            </div>
            <div className="border-y border-white/[0.05] py-5">
              <LogoLoop
                logos={techStack.row3}
                renderItem={renderTechItem}
                speed={40}
                direction="left"
                logoHeight={52}
                gap={56}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="bg-[#05050a]"
                ariaLabel="AI, ML and tooling"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
    </section>
  );
};

export default Techstack;
