"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Grainient from "../components/ui/Grainient";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.1] px-6 sm:px-10 md:px-16 lg:px-20 py-8 md:py-10">
      {/* ── Background: Preserved Grainient with bookend effect ── */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#05050a"
          color2="#0066ff"
          color3="#00d4ff"
          timeSpeed={0.15}
          colorBalance={0.1}
          warpStrength={0.6}
          warpFrequency={3}
          warpSpeed={1}
          warpAmplitude={40}
          blendAngle={30}
          blendSoftness={0.08}
          rotationAmount={300}
          noiseScale={2.5}
          grainAmount={0.08}
          grainScale={2}
          grainAnimated={false}
          contrast={1.4}
          gamma={1}
          saturation={1.0}
          centerX={0.5}
          centerY={0.5}
          zoom={0.9}
        />
      </div>

      {/* ── Dark contrast scrim to keep text crisp & legible ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#05050a]/80 via-[#05050a]/88 to-[#05050a]/95" />

      {/* Top cyan accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent z-[2]" />

      {/* ── Footer Main Single-Row Container (matches uploaded layout) ── */}
      <div className="relative z-10 max-w-[1500px] w-full mx-auto flex flex-col xl:flex-row items-center justify-between gap-6 py-2">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1 shrink-0">
          <div className="flex flex-col">
            <span className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight drop-shadow-md">
              Sai Madhuri <span className="text-[#00d4ff]">Bodapati</span>
            </span>
            <p className="text-white/80 text-xs sm:text-sm font-light max-w-md mt-1 leading-relaxed">
              Crafting elegant web experiences, robust data pipelines, and intelligent AI models from concept to production.
            </p>
          </div>
        </div>

        {/* Center: ALL Navigation Links in a SINGLE horizontal line */}
        <div className="flex flex-nowrap overflow-x-auto max-w-full items-center justify-center gap-4 sm:gap-6 lg:gap-7 text-xs uppercase tracking-widest font-semibold py-1 px-2">
          {[
            ["HOME", "#hero"],
            ["ABOUT", "#about"],
            ["EXPERIENCE", "#experience"],
            ["STACK", "#techstack"],
            ["PROJECTS", "#projects"],
            ["PUBLICATIONS", "#publications"],
            ["CONTACT", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-white/80 hover:text-[#00d4ff] whitespace-nowrap transition-colors duration-200 drop-shadow-sm font-mono text-[11px]"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right: Social Connections */}
        <div className="flex items-center gap-3.5 text-white/80 shrink-0">
          <a
            href="https://github.com/Madhuri36"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full border border-white/15 bg-white/[0.04] hover:border-[#00d4ff]/50 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:scale-110 transition-all duration-300"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-madhuri-bodapati"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full border border-white/15 bg-white/[0.04] hover:border-[#00d4ff]/50 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:s.madhuri2k23@gmail.com"
            aria-label="Email"
            className="p-2.5 rounded-full border border-white/15 bg-white/[0.04] hover:border-[#00d4ff]/50 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:scale-110 transition-all duration-300"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      {/* ── Sub Footer Bar ── */}
      <div className="relative z-10 max-w-[1500px] w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 mt-4 border-t border-white/[0.08] text-white/50 text-[10px] uppercase tracking-widest font-medium">
        <span>© {year} Sai Madhuri Bodapati — All Rights Reserved</span>
        <span>Built with React · GSAP · Lenis · Tailwind</span>
      </div>
    </footer>
  );
};

export default Footer;
