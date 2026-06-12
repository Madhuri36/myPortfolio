"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ZoomPortal = ({ children }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // This scales the 'hole' from 1 to 100. 
  // At 100, the letter is so big the user is "inside" the hole.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#010102]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* The Content that will be revealed "inside" the letter */}
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 z-0"
        >
          {children}
        </motion.div>

        {/* The Mask Layer (The Letter 'P') */}
        <motion.div
          style={{ scale }}
          className="relative z-10 pointer-events-none select-none"
        >
          {/* We use an SVG with a mask to create a true 'see-through' letter */}
          <svg className="w-[150px] h-[150px] md:w-[300px] md:h-[300px]" viewBox="0 0 100 100">
            <defs>
              <mask id="letterMask">
                <rect x="0" y="0" width="100" height="100" fill="white" />
                {/* This is the shape of the letter 'P'. 
                    When it's black inside a white mask, it becomes a hole. */}
                <text 
                  x="50%" 
                  y="50%" 
                  fontWeight="900" 
                  fontSize="80" 
                  textAnchor="middle" 
                  alignmentBaseline="middle" 
                  fill="black"
                  fontFamily="Arial, sans-serif"
                >
                  P
                </text>
              </mask>
            </defs>
            <rect 
              x="0" 
              y="0" 
              width="100" 
              height="100" 
              fill="#010102" 
              mask="url(#letterMask)" 
            />
          </svg>
        </motion.div>

        {/* Helper text to guide the user */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 uppercase tracking-[0.5em] text-[10px]">Keep Scrolling</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export default ZoomPortal;