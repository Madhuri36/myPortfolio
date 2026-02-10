"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants';

const Projects = () => {
  const toggleCursor = (active, text = "View Case_") => {
    const event = new CustomEvent("cursorHover", { 
      detail: { active, text } 
    });
    if (typeof window !== 'undefined') window.dispatchEvent(event);
  };

  return (
    <section className="relative pb-10 bg-[#010102] cursor-none">
      {/* SVG NOISE FILTER */}
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.6" 
            numOctaves="3" 
            stitchTiles="stitch" />
        </filter>
      </svg>

      <div className="relative w-full">
        {/* STICKY HEADER */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-16 pb-24 overflow-hidden pointer-events-none z-0">
          
          {/* --- BLUE & RED GRADIENT STRIP --- */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
            {/* The Gradient Beam - Blue to Red */}
            <div 
              className="absolute top-[-18%] left-[-12%] w-[95%] h-[55%] origin-top-left"
              style={{
                background: `linear-gradient(to right, 
                  rgba(30, 144, 255, 0.28) 0%,   /* Blue #1e90ff */
                  rgba(255, 71, 87, 0.22) 25%,   /* Red #ff4757 */
                  transparent 65%)`,
                transform: 'rotate(32deg)', 
                filter: 'blur(90px)',
              }}
            />
            
            {/* The Noise Overlay Layer */}
            <div 
              className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none"
              style={{ filter: 'url(#noiseFilter)' }}
            />
          </div>

          <div className="px-8 md:px-16 flex justify-between items-start w-full relative pointer-events-auto">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2 border border-white/20 rounded-full w-fit px-6 py-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-[12px] md:text-[14px] uppercase tracking-[0.3em] text-white font-bold">Featured Projects</span>
              </div>
              <p className="text-white/40 max-w-lg text-lg md:text-xl font-light leading-relaxed">
                Discover a selection of projects designed to inspire, engage, and deliver results.
              </p>
            </div>

            {/* <div className="hidden md:flex flex-col items-end pointer-events-auto">
              <div className="w-32 h-[1px] bg-white/40 mb-3" />
              <a 
                href="#" 
                className="group flex items-center gap-2 text-white/80 text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors py-1"
              >
                see all works 
                <span className="text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
              <div className="w-32 h-[1px] bg-white/40 mt-3" />
            </div> */}
          </div>

          {/* THE BIG TEXT */}
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden px-4">
            <h2 className="text-[18vw] font-thin text-white leading-none tracking-[-0.01em] translate-y-[5%] select-none uppercase w-full text-center">
              Projects
            </h2>
          </div>
        </div>

        {/* SCROLLING CONTENT LAYER */}
        <div className="relative z-10 flex flex-col items-center gap-[15vh] pb-[5vh] -mt-screen">
          {projects.map((project, index) => (
            <div key={index} className="w-full flex justify-center px-8">
              <ProjectCard 
                project={project} 
                onEnter={() => toggleCursor(true, "View Project")} 
                onLeave={() => toggleCursor(false)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, onEnter, onLeave }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-2xl flex flex-col bg-[#010102] border border-white/60 group overflow-hidden shadow-2xl"
    >
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative w-full aspect-[16/10] overflow-hidden block"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        />
      </a>

      <div className="w-full p-6 md:p-8 flex flex-col items-center text-center gap-8 border-t border-white/10 bg-white/[0.01]">
        <p className="text-white/60 text-sm md:text-base font-light leading-relaxed w-full">
          {project.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-2">
          {project.techStack.map((tech, i) => (
            <div key={i} className="flex items-center justify-center px-3 py-1 border border-white/10">
              <span className="text-[8px] uppercase tracking-[0.25em] text-white/30 font-medium whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;