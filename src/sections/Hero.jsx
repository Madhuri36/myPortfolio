"use client";

import React from 'react';
import { Github, Linkedin, ArrowUpRight, Mail } from 'lucide-react';
import Grainient from '../components/ui/Grainient';
import RotatingText from '../components/ui/RotatingText';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#05050a"
          color2="#0066ff"
          color3="#00d4ff"
          timeSpeed={0.2}
          colorBalance={0.1}
          warpStrength={0.8}
          warpFrequency={4}
          warpSpeed={1.5}
          warpAmplitude={60}
          blendAngle={30}
          blendSoftness={0.08}
          rotationAmount={400}
          noiseScale={2.5}
          grainAmount={0.08}
          grainScale={2}
          grainAnimated={false}
          contrast={1.4}
          gamma={1}
          saturation={1.1}
          centerX={0.5}
          centerY={0.5}
          zoom={0.85}
        />
      </div>

      {/* ── Subtle Contrast Overlay (keeps background glowing while making text pop) ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#05050a]/40 via-[#05050a]/60 to-[#05050a]" />

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Content (Centered) ── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 md:px-20 text-center w-full max-w-5xl py-24">
        
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 border border-[#00d4ff]/40 bg-[#05050a]/80 backdrop-blur-md px-5 py-2 mb-8 shadow-[0_0_25px_rgba(0,212,255,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#00d4ff] font-bold">
            Available for Opportunities
          </span>
        </div>

        {/* Name */}
        <div className="mb-3">
          
          <p className="text-white/90 text-sm sm:text-base md:text-lg uppercase tracking-[0.45em] font-medium drop-shadow-md">
            Sai Madhuri Bodapati
          </p>
        </div>

        {/* Rotating title focused on Full Stack, Data & AI/ML */}
        <div className="flex flex-col items-center mb-6 w-full">
          <p className="text-white/80 font-light text-xl sm:text-2xl md:text-3xl mb-2 drop-shadow-md">
            Hey there! I am a
          </p>
          <div className="overflow-visible py-2 w-full flex justify-center">
            <RotatingText
              texts={[
                'Full Stack Developer',
                'Data Engineer',
                'AI / ML Engineer',
                'OS Contributor',
                'DSA Practitioner',
              ]}
              mainClassName="text-4xl sm:text-6xl lg:text-7xl xl:text-[84px] font-bold text-white leading-none tracking-tighter font-heading drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.02}
              splitBy="characters"
              rotationInterval={2200}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </div>
        </div>

        {/* Description emphasizing Full Stack, Data & AI/ML */}
        <p className="text-white/90 max-w-2xl text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Computer Science undergrad at <span className="text-white font-semibold underline decoration-[#00d4ff]/60 underline-offset-4">ABV-IIITM Gwalior</span> — building end-to-end full stack web platforms, high-throughput data pipelines, and intelligent AI/ML solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="https://drive.google.com/file/d/16cHIO6xopWuoqqdfJzsnxm2Z0Bm1Go7r/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Resume
            <ArrowUpRight size={15} />
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-7 mt-12 text-white/70">
          <SocialLinks />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer">
          <div className="w-6 h-10 border border-white/35 bg-[#05050a]/40 backdrop-blur-sm rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-2.5 bg-[#00d4ff] rounded-full animate-scroll-dot shadow-[0_0_8px_#00d4ff]" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/60 font-bold">
            Scroll
          </span>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#05050a] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

const SocialLinks = () => (
  <>
    {[
      { href: "https://github.com/Madhuri36", icon: Github, label: "GitHub" },
      { href: "https://www.linkedin.com/in/sai-madhuri-bodapati", icon: Linkedin, label: "LinkedIn" },
      { href: "mailto:s.madhuri2k23@gmail.com", icon: Mail, label: "Email" },
    ].map(({ href, icon: Icon, label }) => (
      <a
        key={label}
        href={href}
        target={href.startsWith('mailto') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        aria-label={label}
        className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/75 hover:text-[#00d4ff] hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/10 hover:scale-110 transition-all duration-300"
      >
        <Icon size={18} strokeWidth={1.75} />
      </a>
    ))}
  </>
);

export default Hero;