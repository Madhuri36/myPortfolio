"use client";
import { motion } from "framer-motion";

const PageTransition = () => {
  const panelVariants = {
    initial: { scaleY: 1 },
    animate: (i) => ({
      scaleY: 0,
      transition: {
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1],
        delay: i * 0.1, // Stagger effect
      },
    }),
    exit: { scaleY: 1 },
  };

  return (
    <div className="fixed inset-0 flex pointer-events-none z-[100]">
      {/* 5 sliding panels for a "shutter" entrance */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          variants={panelVariants}
          custom={i}
          initial="initial"
          animate="animate"
          className="relative w-full h-full bg-[#1e90ff] origin-top"
          style={{ backgroundColor: i % 2 === 0 ? '#1e90ff' : '#0a0e27' }} // Alternating colors
        />
      ))}
    </div>
  );
};

export default PageTransition;