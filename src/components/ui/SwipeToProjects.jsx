"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Projects from '../../sections/Projects';

const SwipeToProjects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Swipe logic: 
  // From the moment the container enters the screen until it is halfway through,
  // we move the Projects section from 100% right to 0%.
  const x = useTransform(scrollYProgress, [0.1, 0.5], ["100%", "0%"]);
  
  // Optional: Add a slight scale-down to the About section as it gets covered
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [1, 0.9]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-[#010102]">
      {/* 
         The Sticky Wrapper: This holds the 'Projects' section 
         in place while it swipes. 
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* The 'Projects' Container that swipes in */}
        <motion.div 
          style={{ x }} 
          className="absolute inset-0 z-20 w-full h-full"
        >
          {/* We wrap the actual Projects content here */}
          <div className="h-full w-full bg-[#010102] border-l border-white/20 shadow-[-50px_0_100px_rgba(0,0,0,0.9)] overflow-y-auto custom-scrollbar">
            <Projects />
          </div>
        </motion.div>

        {/* 
           Background Hint: You can put a "Next Section: Projects" text 
           here so it shows briefly as the swipe happens.
        */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#010102]">
             <h2 className="text-white/10 text-[15vw] font-bold uppercase tracking-tighter">
                Selected
             </h2>
        </div>
      </div>
    </div>
  );
};

export default SwipeToProjects;