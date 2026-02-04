"use client";

import React from 'react';
import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import Grainient from '../components/ui/Grainient';
import RotatingText from '../components/ui/RotatingText';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0a0e27]">
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
          saturation={1.2} // Increased for more visible colors
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      {/* Content Layer - Vertically Centered, Left Aligned */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen pl-16 md:pl-32 pr-8">
        
        {/* Sidebar Icons - Enhanced visibility */}
        <div className="absolute left-6 md:left-10 flex flex-col items-center gap-6">
          <div className="w-[1px] h-24 bg-gradient-to-t from-white/60 to-transparent mb-4" />
          <div className="flex flex-col gap-6 text-white/70">
            <a href="#" className="inline-block transition-all duration-500 ease-in-out hover:text-white hover:rotate-180 transform-gpu">
              <Github size={20} />
            </a>
            <a href="#" className="inline-block transition-all duration-500 ease-in-out hover:text-white hover:rotate-180 transform-gpu">
              <Linkedin size={20} />
            </a>
            <a href="#" className="inline-block transition-all duration-500 ease-in-out hover:text-white hover:rotate-180 transform-gpu">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Main Text Content */}
        <div className="max-w-full overflow-hidden flex flex-col items-start text-left">
          <div className="flex flex-col items-start">
            <p className="text-white/80 font-light text-xl md:text-2xl mb-1 tracking-tight">
              Hey there! I am a
            </p>
            
            <div className="overflow-visible py-2">
              <RotatingText
                texts={[
                  'Web Developer', 
                  'UI/UX Designer', 
                  'AI/ML Enthusiast', 
                  'OS Contributor', 
                  'DSA Practitioner'
                ]}
                mainClassName="text-5xl md:text-[110px] font-bold text-white leading-none tracking-tighter whitespace-nowrap"
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
          
          {/* Subtext - More visible */}
          <div className="mt-8 flex flex-col gap-1 items-start">
            <p className="text-white/70 max-w-lg text-base md:text-lg font-light leading-relaxed">
              Focused on building scalable applications and 
              crafting seamless digital experiences through 
              clean, efficient code.
            </p>

            {/* View My Resume CTA - Parallel Lines with Arrow */}
            <div className="mt-12 group cursor-pointer inline-flex flex-col items-start">
              {/* Top Line */}
              <div className="w-12 h-[1px] bg-white/60 transition-all duration-500 group-hover:w-full group-hover:bg-white" />
              
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="py-4 flex items-center gap-4 text-white/80 group-hover:text-white transition-colors duration-300"
              >
                <span className="text-xs font-bold uppercase tracking-[0.4em]">View My Resume</span>
                <div className="relative overflow-hidden w-5 h-5 flex items-center justify-center">
                   <ArrowUpRight size={20} className="absolute transition-transform duration-300 group-hover:-translate-y-full group-hover:translate-x-full" />
                   <ArrowUpRight size={20} className="absolute -translate-x-full translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-hover:translate-x-0" />
                </div>
              </a>

              {/* Bottom Line */}
              <div className="w-full h-[1px] bg-white/60 transition-all duration-500 group-hover:bg-white" />
            </div>
          </div>
        </div>

        {/* Bottom Center Scroll Mouse Indicator - More visible */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer">
          <div className="w-[30px] h-[50px] border-2 border-white/40 rounded-full relative flex justify-center">
            <div className="w-1.5 h-3 bg-white/80 rounded-full absolute top-2 animate-scroll-dot" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold">
            Scroll
          </span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-dot {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(22px); opacity: 0; }
        }
        .animate-scroll-dot {
          animation: scroll-dot 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;