"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { projects } from '../constants'; // Importing your constants

const Projects = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative bg-[#010102]">
      {/* 1. CUSTOM CURSOR - Isolated to Image */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`fixed pointer-events-none z-[999] flex flex-col items-center gap-1 transition-opacity duration-300 ${
          isImageHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-12 h-[1px] bg-white" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-white font-bold px-2">view</span>
        <div className="w-12 h-[1px] bg-white" />
      </motion.div>

      {/* 2. STICKY BACKGROUND WRAPPER */}
      <div className="relative w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-32 pb-24 overflow-hidden pointer-events-none z-0">
          <div className="px-8 md:px-16 flex justify-between items-start w-full relative pointer-events-auto">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2 border border-white/20 rounded-full w-fit px-6 py-2 bg-[#010102]">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-[12px] md:text-[14px] uppercase tracking-[0.3em] text-white font-bold">Featured Projects</span>
              </div>
              <p className="text-white/40 max-w-lg text-lg md:text-xl font-light leading-relaxed">
                Discover a selection of projects designed to inspire, engage, and deliver results across multiple industries.
              </p>
            </div>
          </div>

          {/* Opaque Background Text */}
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden px-4">
            <h2 className="text-[18vw] font-thin text-white leading-none tracking-[-0.01em] translate-y-[5%] select-none uppercase w-full text-center">
              Projects
            </h2>
          </div>
        </div>

        {/* 3. SCROLLING CONTENT LAYER */}
        {/* pb-[5vh] ensures the last card stops exactly where the "Projects" text is anchored */}
        <div className="relative z-10 flex flex-col items-center gap-[10vh] pb-[5vh] -mt-screen">
          {projects.map((project, index) => (
            <div key={index} className="w-full flex justify-center px-8">
              <ProjectCard 
                project={project} 
                onImageEnter={() => setIsImageHovered(true)} 
                onImageLeave={() => setIsImageHovered(false)}
                isImageHovered={isImageHovered}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, onImageEnter, onImageLeave, isImageHovered }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-4xl flex flex-col bg-[#010102] border border-white/10 group overflow-hidden shadow-2xl"
    >
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`relative w-full aspect-video overflow-hidden block ${isImageHovered ? 'cursor-none' : 'cursor-default'}`}
        onMouseEnter={onImageEnter}
        onMouseLeave={onImageLeave}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        />
      </a>

      <div className="w-full p-8 md:p-14 flex flex-col items-center text-center gap-8 border-t border-white/10">
        <p className="text-white/70 text-base md:text-xl font-light leading-relaxed max-w-2xl">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-10 bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold border-l border-r border-white/20 px-8">
            {project.techStack.join(" | ")}
          </span>
          <div className="h-[1px] w-10 bg-white/20" />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;