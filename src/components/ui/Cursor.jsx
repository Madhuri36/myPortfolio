"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("VIEW PROJECTS_");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Snappy spring config
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleSetHover = (e) => {
      setIsHovered(e.detail.active);
      if (e.detail.text) setHoverText(e.detail.text);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("cursorHover", handleSetHover);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("cursorHover", handleSetHover);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed pointer-events-none z-[1000] flex items-center justify-center mix-blend-difference"
    >
      <motion.div
        animate={{
          // Becomes a wide pill on hover, tiny dot otherwise
          width: isHovered ? 160 : 12,
          height: isHovered ? 45 : 12,
          borderRadius: isHovered ? "4px" : "100%", // Slightly squared for tech feel
          backgroundColor: "#fff",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="flex items-center justify-center overflow-hidden border border-white/20"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            letterSpacing: isHovered ? "0.2em" : "0.5em" 
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-[9px] font-black text-black uppercase whitespace-nowrap"
        >
          {hoverText}
        </motion.span>
      </motion.div>
      
      {/* Optional: Subtle outer ring for extra "polish" */}
      <motion.div 
        animate={{
          width: isHovered ? 180 : 0,
          height: isHovered ? 60 : 0,
          opacity: isHovered ? 0.3 : 0
        }}
        className="absolute border border-white rounded-sm pointer-events-none"
      />
    </motion.div>
  );
};

export default Cursor;