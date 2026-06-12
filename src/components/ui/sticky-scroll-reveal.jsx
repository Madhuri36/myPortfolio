"use client";
import React, { useRef, useState } from "react";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "../../lib/utils";

export const StickyScroll = ({ content, className }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_, index) => index / cardLength
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (
          distance <
          Math.abs(latest - cardsBreakpoints[acc])
        )
          return index;
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      ref={ref}
      className={cn(
        "h-screen w-full overflow-y-auto flex relative no-scrollbar",
        className
      )}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* LEFT — VISUAL */}
      <div className="relative flex items-start pl-4 pr-2 w-[62%]">
        <div className="w-full">
          {content.map((item, index) => (
            <div
              key={index}
              className="h-screen flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 0.96 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full aspect-[16/11] rounded-[2.2rem] p-4 bg-white/[0.04] border border-white/10 backdrop-blur-3xl shadow-[0_0_70px_-20px_rgba(255,255,255,0.05)] overflow-hidden"
              >
                <div
                  style={{ background: item.gradient }}
                  className="relative w-full h-full rounded-[2rem] p-8 pb-0 flex flex-col overflow-hidden border border-white/20 shadow-2xl"
                >
                  {/* HEADER */}
                  <div className="flex justify-between items-start mb-6">
                    <p className="text-white text-xl font-semibold max-w-[80%]">
                      {item.badge}
                    </p>
                    <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white text-xl">
                      →
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="flex-1 rounded-t-2xl overflow-hidden bg-black/75 border-x border-t border-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />
                </div>
              </motion.div>
            </div>
          ))}
          <div className="h-[20vh]" />
        </div>
      </div>

      {/* RIGHT — TEXT */}
      <div className="sticky top-0 h-screen w-[42%] flex flex-col justify-center px-10 lg:px-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.35 }}
            className="max-w-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-[2px] w-8"
                style={{ backgroundColor: content[activeCard].color }}
              />
              <h2 className="text-3xl lg:text-4xl font-semibold text-white">
                {content[activeCard].title}
              </h2>
            </div>

            <p className="text-gray-400 text-[15px] mb-6 leading-relaxed">
              {content[activeCard].description}
            </p>

            <div className="space-y-4 mb-8">
              {content[activeCard].features.map((f, i) => (
                <div key={i} className="flex gap-3">
                  <span
                    className="text-lg"
                    style={{ color: content[activeCard].color }}
                  >
                    ✦
                  </span>
                  <p className="text-gray-300 text-sm">{f}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {content[activeCard].tags.map((tag) => (
                <div
                  key={tag}
                  className="px-3 py-1.5 bg-[#111] border border-white/10 rounded-xl text-[9px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: content[activeCard].color }}
                  />
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
