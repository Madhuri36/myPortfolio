"use client";

import React from 'react';
import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import Grainient from '../components/ui/Grainient';
import RotatingText from '../components/ui/RotatingText';

const Hero = () => {
  return (
    <div id="hero" className="relative w-full min-h-screen overflow-hidden bg-[#0a0e27]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#0a0e27"
          color2="#ff4757"
          color3="#1e90ff"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1.2}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      {/* Content Layer */}
      {/* Adjusted Padding: px-6 (Mobile), px-12 (Tablet), md:pl-32 (Desktop) */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 sm:px-12 md:pl-32 md:pr-8">
        
        {/* Sidebar Icons - Only shown on large desktops to avoid tablet crowding */}
        <div className="hidden lg:flex absolute left-6 md:left-10 flex-col items-center gap-6">
          <div className="w-[1px] h-24 bg-gradient-to-t from-white/60 to-transparent mb-4" />
          <div className="flex flex-col gap-6 text-white/70">
            <SocialLinks />
          </div>
        </div>

        {/* Main Text Content */}
        <div className="max-w-full flex flex-col items-start text-left">
          <div className="flex flex-col items-start w-full">
            <p className="text-white/80 font-light text-lg sm:text-xl md:text-2xl mb-1 tracking-tight">
              Hey there! I am a
            </p>
            
            <div className="overflow-visible py-2 w-full">
              <RotatingText
                texts={[
                  'Web Developer', 
                  'UI/UX Designer', 
                  'AI/ML Enthusiast', 
                  'OS Contributor', 
                  'DSA Practitioner'
                ]}
                /* RESPONSIVE SCALE:
                   - 4xl: Mobile
                   - 6xl: Small Tablet
                   - 8xl: Large Tablet/Small Laptop
                   - 110px: Large Desktop
                */
                mainClassName="text-4xl sm:text-6xl lg:text-8xl xl:text-[110px] font-bold text-white leading-none tracking-tighter whitespace-nowrap"
                staggerFrom={"last"}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.025}
                splitBy="characters"
                rotationInterval={2000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </div>
          </div>
          
          {/* Subtext */}
          <div className="mt-6 md:mt-8 flex flex-col gap-1 items-start">
            <p className="text-white/70 max-w-xs sm:max-w-md md:max-w-lg text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Focused on building scalable applications and 
              crafting seamless digital experiences through 
              clean, efficient code.
            </p>

            {/* View My Resume CTA */}
            <div className="mt-8 md:mt-12 group cursor-pointer inline-flex flex-col items-start w-fit">
              <div className="w-8 md:w-12 h-[1px] bg-white/60 transition-all duration-500 group-hover:w-full group-hover:bg-white" />
              
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="py-3 md:py-4 flex items-center gap-4 text-white/80 group-hover:text-white transition-colors duration-300"
              >
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] whitespace-nowrap">
                  View My Resume
                </span>
                <div className="relative overflow-hidden w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                   <ArrowUpRight size={18} className="absolute transition-transform duration-300 group-hover:-translate-y-full group-hover:translate-x-full" />
                   <ArrowUpRight size={18} className="absolute -translate-x-full translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-hover:translate-x-0" />
                </div>
              </a>

              <div className="w-full h-[1px] bg-white/60 transition-all duration-500 group-hover:bg-white" />
            </div>
          </div>
        </div>

        {/* Social Icons for Mobile & Tablet - Hidden only on large desktops */}
        <div className="flex lg:hidden mt-12 gap-8 text-white/60 justify-start w-full">
           <SocialLinks />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer">
          <div className="w-[24px] md:w-[30px] h-[40px] md:h-[50px] border-2 border-white/40 rounded-full relative flex justify-center">
            <div className="w-1 md:w-1.5 h-2 md:h-3 bg-white/80 rounded-full absolute top-2 animate-scroll-dot" />
          </div>
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold">
            Scroll
          </span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-dot {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(18px); opacity: 0; }
        }
        @media (min-width: 768px) {
          @keyframes scroll-dot {
            0% { transform: translateY(0); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateY(22px); opacity: 0; }
          }
        }
        .animate-scroll-dot {
          animation: scroll-dot 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </div>
  );
};

const SocialLinks = () => (
  <>
    <a href="#" className="inline-block transition-all duration-500 hover:text-white hover:rotate-[360deg] transform-gpu">
      <Github size={20} />
    </a>
    <a href="#" className="inline-block transition-all duration-500 hover:text-white hover:rotate-[360deg] transform-gpu">
      <Linkedin size={20} />
    </a>
    <a href="#" className="inline-block transition-all duration-500 hover:text-white hover:rotate-[360deg] transform-gpu">
      <Twitter size={20} />
    </a>
  </>
);

export default Hero;