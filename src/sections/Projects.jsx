"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Github, ExternalLink, ArrowRight, Terminal } from "lucide-react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const totalScrollWidth = track.scrollWidth - window.innerWidth;

      if (window.__lenis) {
        window.__lenis.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(document.documentElement, {
          scrollTop(value) {
            if (arguments.length && window.__lenis) window.__lenis.scrollTo(value);
            return window.__lenis ? window.__lenis.scroll : window.scrollY;
          },
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
          pinType: "transform",
        });
      }

      const ctx = gsap.context(() => {
        gsap.to(track, {
          x: () => -totalScrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalScrollWidth + 200}`,
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, section);

      ScrollTrigger.refresh();

      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#05050a] overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent z-20 pointer-events-none" />

      {/* Fixed Header */}
      <div className="absolute top-0 left-0 right-0 z-20 px-6 sm:px-12 md:px-20 pt-14 pb-6 pointer-events-none">
        <div className="flex items-end justify-between">
          <div>
            <span className="section-label block mb-3">
              <span className="w-8 h-[1px] bg-[#00d4ff]/50 inline-block mr-3" />
              Featured Works
            </span>
            <h2 className="section-heading text-4xl sm:text-5xl md:text-[56px]">
              Things I've{" "}
              <span className="text-[#00d4ff]">Engineered.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/40 text-xs uppercase tracking-[0.3em] font-bold pointer-events-auto">
            <span>Scroll to explore</span>
            <ArrowRight size={12} className="animate-pulse text-[#00d4ff]" />
          </div>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 flex gap-6 h-screen items-center pt-36 pb-12 pl-6 sm:pl-12 md:pl-20 pr-20 h-scroll-track"
        style={{ width: "max-content" }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}

        {/* End spacer card */}
        <div className="w-[320px] h-[480px] flex flex-col items-center justify-center border border-dashed border-white/10 bg-white/[0.01] shrink-0 p-8 text-center">
          <Terminal size={32} className="text-[#00d4ff]/60 mb-4" />
          <p className="text-white/40 text-sm font-light mb-5">
            More open-source repositories & system architectures on GitHub.
          </p>
          <a
            href="https://github.com/Madhuri36"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] transition-all text-xs uppercase tracking-[0.25em] font-bold"
          >
            <Github size={14} />
            Explore All
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const IconComponent = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
      className="relative group shrink-0 w-[340px] sm:w-[390px] md:w-[430px]"
      style={{ height: "calc(100vh - 210px)", maxHeight: "550px" }}
    >
      {/* Card container */}
      <div className="relative w-full h-full flex flex-col border border-white/[0.08] bg-[#090915] overflow-hidden transition-all duration-500 group-hover:border-[#00d4ff]/40 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.08)]">
        
        {/* Accent glow on top */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />

        {/* ── Symbolic Visual Header (Replaces Static Images) ── */}
        <div
          className="relative w-full overflow-hidden flex flex-col justify-between p-6 border-b border-white/[0.06]"
          style={{
            height: "42%",
            background: `radial-gradient(ellipse at 80% 20%, ${project.color}18 0%, transparent 70%), linear-gradient(180deg, #0d0d1f 0%, #080814 100%)`,
          }}
        >
          {/* Subtle geometric pattern in background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(${project.color} 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Top row: Category tag & Project Index Number */}
          <div className="relative z-10 flex items-center justify-between">
            <span
              className="text-[9px] uppercase tracking-[0.25em] font-mono font-bold px-2.5 py-1 border rounded-sm"
              style={{
                borderColor: `${project.color}40`,
                backgroundColor: `${project.color}12`,
                color: project.color,
              }}
            >
              {project.category}
            </span>
            <span className="text-sm font-mono font-bold tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
              {project.id}
            </span>
          </div>

          {/* Center Symbol Icon */}
          <div className="relative z-10 flex items-center gap-4 my-auto">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center border transition-all duration-500 group-hover:scale-110"
              style={{
                borderColor: `${project.color}50`,
                backgroundColor: `${project.color}15`,
                boxShadow: `0 0 25px ${project.color}20`,
              }}
            >
              {IconComponent && <IconComponent size={28} style={{ color: project.color }} />}
            </div>
            <div>
              <span className="block text-[9px] font-mono tracking-[0.3em] uppercase text-white/40">
                Architecture Spec
              </span>
              <span
                className="block text-xs font-mono font-bold tracking-wider"
                style={{ color: project.color }}
              >
                {project.symbol}
              </span>
            </div>
          </div>

          {/* Bottom timeline badge */}
          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-white/40 uppercase tracking-widest">
            <span>Status: Verified</span>
            <span>{project.duration}</span>
          </div>
        </div>

        {/* ── Content Area ── */}
        <div className="flex flex-col flex-1 p-6 justify-between gap-4 bg-[#070712]">
          <div>
            <h3 className="text-white font-bold text-xl md:text-2xl font-heading tracking-tight leading-tight mb-1.5 group-hover:text-[#00d4ff] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/60">
              {project.tagline}
            </p>
          </div>

          <p className="text-white/65 text-sm leading-relaxed line-clamp-4 font-light">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-mono uppercase tracking-wider text-white/60 border border-white/[0.08] bg-white/[0.02] px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Card footer links */}
          <div className="flex items-center gap-4 pt-3 border-t border-white/[0.08]">
            {project.github && project.github !== "#" ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-[#00d4ff] transition-colors text-xs uppercase tracking-[0.2em] font-bold"
              >
                <Github size={13} />
                Repository
              </a>
            ) : (
              <span className="text-[10px] uppercase tracking-widest font-mono text-white/30">
                Academic Research
              </span>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/70 hover:text-[#00d4ff] transition-colors text-xs uppercase tracking-[0.2em] font-bold"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;