import React, { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";

export const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Incremental approach: handles the transition logic at the 90vh height [cite: 2025-08-02]
    const index = Math.min(
        Math.floor(latest * content.length),
        content.length - 1
    );
    setActiveCard(index);
  });

  return (
    <div className="main-container" ref={containerRef}>
      <div className="flex flex-col lg:flex-row relative gap-12 lg:gap-16">
        
        {/* LEFT SECTION: BALANCED SPACING PROJECT BOXES */}
        <div className="relative w-full lg:w-[65%] space-y-12 lg:space-y-0">
          {content.map((item, index) => (
            /* Set to h-[90vh] for a balanced, professional distance */
            <div key={index} className="flex flex-col lg:h-[90vh] lg:items-center lg:justify-center">
              
              {/* THE 3D BOX */}
              <div className="w-full aspect-[16/11] min-h-[350px] md:min-h-[500px] p-2.5 rounded-[1.8rem] border border-white/5 bg-zinc-900/10 backdrop-blur-sm shadow-2xl relative mb-8 lg:mb-0">
                <motion.div 
                  className={`relative w-full h-full rounded-2xl pt-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${item.gradient} border border-white/20 shadow-xl`}
                  initial={{ opacity: 0.8, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.5 }} // Syncs precisely when the box is centered
                >
                  {/* TRANSLUCENT TAGLINE */}
                  <div className="flex justify-between items-start w-full relative z-10 px-8 lg:px-12">
                    <h3 className="font-body text-white/60 text-xs md:text-lg font-medium max-w-[70%] leading-snug tracking-tight">
                      {item.tagline}
                    </h3>
                    <div className="text-white/40 text-2xl font-light">→</div>
                  </div>

                  {/* BOTTOM ANCHORED IMAGE */}
                  <div className="absolute bottom-0 left-0 right-0 w-full h-[78%] px-4 lg:px-6">
                    <div className="w-full h-full rounded-t-xl overflow-hidden border-x border-t border-white/10 bg-black shadow-2xl translate-y-3">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover object-top" 
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* MOBILE TEXT: Visible Points */}
              <div className="lg:hidden space-y-5 px-4 pb-12">
                <div className="flex items-center gap-3">
                  <div className={`h-[2px] w-8 rounded-full ${item.accentBg}`} />
                  <h2 className="font-heading text-3xl font-bold text-white uppercase tracking-tighter">{item.title}</h2>
                </div>
                <p className="font-body text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                <ul className="space-y-3">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                      <span className={`text-base ${item.accentText}`}>✦</span>
                      <p className="font-body text-[0.85rem] leading-snug">{f}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.techStack.map((tech) => (
                    <span key={tech} className="font-body px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[9px] text-zinc-500 font-bold uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SECTION: COMPACT STICKY SIDEBAR */}
        <div className="hidden lg:flex sticky top-0 h-screen flex-col justify-center w-[35%] pl-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className={`h-[2px] w-10 rounded-full transition-colors duration-500 ${content[activeCard].accentBg}`} />
                <h2 className="font-heading text-4xl font-bold text-white tracking-tighter uppercase">{content[activeCard].title}</h2>
              </div>
              <p className="font-body text-zinc-400 text-[1.05rem] leading-relaxed">
                <span className={`transition-colors duration-500 ${content[activeCard].accentText}`}>🚀</span> {content[activeCard].description}
              </p>
              <ul className="space-y-3">
                {content[activeCard].features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-zinc-300">
                    <span className={`text-xl transition-colors duration-500 ${content[activeCard].accentText}`}>✦</span>
                    <p className="font-body text-[0.95rem] leading-snug">{f}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4">
                {content[activeCard].techStack.map((tech) => (
                  <div key={tech} className="font-body px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] text-zinc-400 font-semibold tracking-wider uppercase">
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};