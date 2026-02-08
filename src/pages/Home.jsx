"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Cursor from '../components/ui/Cursor.jsx';
import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Footer from '../sections/Footer.jsx';
import Projects from '../sections/Projects.jsx';
import Marquee from '../sections/Marquee.jsx';

const Home = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Optional: Make the Hero shrink slightly as About covers it for depth
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div className="cursor-none bg-[#010102]">
      <Cursor />
      
      {/* SCROLL CONTAINER 
          The height of this wrapper defines how long the 'Hero' stays visible 
      */}
      <div ref={containerRef} className="relative">
        
        {/* HERO SECTION: Sticky and stays at the bottom layer */}
        <motion.div 
          style={{ 
            scale: heroScale, 
            opacity: heroOpacity 
          }}
          className="sticky top-0 h-screen w-full z-0 overflow-hidden"
        >
          <Hero />
        </motion.div>

        {/* CONTENT WRAPPER: Has a higher Z-index to slide OVER the Hero */}
        <div className="relative z-10 bg-[#010102] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <About />
          <Projects />
          <Marquee />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;