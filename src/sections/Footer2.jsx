"use client";

import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[#010102] pt-20 pb-0 flex flex-col justify-end">
      {/* Massive Call to Action Area */}
      <div className="px-6 md:px-16 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <h2 className="text-white text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] uppercase">
              Let's <br />
              <span className="text-white/20">Collaborate.</span>
            </h2>
          </div>
          
          <a 
            href="mailto:your@email.com" 
            className="group relative px-8 py-4 border border-white/20 rounded-full overflow-hidden transition-all duration-500 hover:border-white"
          >
            <span className="relative z-10 text-white text-xs font-bold uppercase tracking-widest transition-colors duration-500 group-hover:text-black">
              Get in touch
            </span>
            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
          </a>
        </div>
      </div>

      {/* Decorative "Connect" text */}
      <div className="w-full overflow-hidden select-none pointer-events-none mb-[-2vw]">
        <h2 className="text-[25vw] font-bold text-white/[0.03] leading-none tracking-tighter whitespace-nowrap uppercase text-center">
          Connect
        </h2>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 border-t border-white/10 pt-8 pb-10 md:py-8 mx-0 md:mx-10">
        
        {/* Copyright */}
        <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold order-2 md:order-1">
          © SM 2026 | All Rights Reserved
        </p>

        {/* Made With - Animated Heart */}
        <div className="flex items-center gap-2 group cursor-default order-3 md:order-2">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium">
            Made with
          </span>
          <div className="group-hover:animate-heart-blink transition-all duration-300 relative">
            <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/30 blur-md rounded-full transition-all duration-300" />
            <Heart
              size={14}
              className="text-white/40 fill-white/10 group-hover:text-pink-500 group-hover:fill-pink-500 transition-all duration-300 relative z-10"
            />
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6 sm:gap-8 text-white/60 order-1 md:order-3">
          <a href="#" className="hover:text-white transition-colors uppercase text-[10px] font-bold tracking-[0.2em]">
            Github
          </a>
          <a href="#" className="hover:text-white transition-colors uppercase text-[10px] font-bold tracking-[0.2em]">
            Linkedin
          </a>
          <a href="#" className="hover:text-white transition-colors uppercase text-[10px] font-bold tracking-[0.2em]">
            Twitter
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes heart-blink {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px rgba(236, 72, 153, 0)); }
          50% { transform: scale(1.3); filter: drop-shadow(0 0 8px rgba(236, 72, 153, 0.6)); }
        }
        .group:hover .group-hover\:animate-heart-blink {
          animation: heart-blink 0.8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer2;