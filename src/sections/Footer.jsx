"use client";

import React from "react";
import { Github, Linkedin, Twitter, ArrowRight, Heart } from "lucide-react";
import Grainient from "../components/ui/Grainient";

const Footer = () => {
  return (
    <div className="relative w-full h-auto overflow-hidden bg-[#0a0e27] flex flex-col justify-between pt-20 pb-0">
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
      <div id="contact" className="relative z-10 px-6 sm:px-12 md:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
          {/* Left Column - Minimalist Form */}
          <div className="flex flex-col gap-6 w-full max-w-lg order-2 lg:order-1">
            <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium">
              Drop a message
            </p>

            <form className="flex flex-col gap-5">
              <div className="border-b border-white/30 focus-within:border-white transition-colors">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent w-full outline-none text-white placeholder:text-white/40 py-3 text-sm"
                />
              </div>
              <div className="border-b border-white/30 focus-within:border-white transition-colors">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent w-full outline-none text-white placeholder:text-white/40 py-3 text-sm"
                />
              </div>
              <div className="border-b border-white/30 focus-within:border-white transition-colors">
                <textarea
                  placeholder="Your Message"
                  rows={1}
                  className="bg-transparent w-full outline-none text-white placeholder:text-white/40 py-3 text-sm resize-none"
                />
              </div>

              <button
                type="button"
                className="group/btn cursor-pointer inline-flex flex-col items-start w-fit mt-4 outline-none"
              >
                <div className="w-8 h-[1px] bg-white/60 transition-all duration-500 group-hover/btn:w-full group-hover/btn:bg-white" />
                <div className="py-3 flex items-center gap-3 text-white/80 group-hover/btn:text-white transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                    Send Message
                  </span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </div>
                <div className="w-full h-[1px] bg-white/60 transition-all duration-500 group-hover/btn:bg-white" />
              </button>
            </form>
          </div>

          {/* Right Column - Mission Statement */}
          <div className="max-w-md lg:ml-auto order-1 lg:order-2">
            <h3 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter">
              Get in touch and let&apos;s turn our digital vision into reality
            </h3>
            <p className="mt-6 text-white/60 italic font-light tracking-wide text-xs md:text-sm">
              Available for Opportunities & Collaborations
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Layout Group */}
      <div className="relative z-10 w-full flex flex-col justify-end mt-20 lg:mt-0">
        <div className="w-full overflow-hidden select-none pointer-events-none">
          {/* Scaled text: 22vw for mobile, 25vw for desktop */}
          <h2 className="text-[22vw] md:text-[25vw] font-bold text-white leading-none tracking-tighter opacity-80 translate-y-[20%] whitespace-nowrap text-center">
            Let&apos;s talk
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 border-t border-white/20 pt-8 pb-10 md:py-6 mx-0 md:mx-8">
          <p className="text-white text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold order-2 md:order-1">
            © SM 2026 | All Rights Reserved
          </p>

          <div className="flex items-center gap-2 group cursor-default order-3 md:order-2">
            <span className="text-white/70 text-[10px] uppercase tracking-[0.2em] font-medium">
              Made with
            </span>
            <div className="group-hover:animate-heart-blink transition-all duration-300 relative">
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/40 blur-md rounded-full transition-all duration-300" />
              <Heart
                size={14}
                className="text-white fill-white group-hover:text-pink-400 group-hover:fill-pink-400 transition-all duration-300 relative z-10"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 text-white order-1 md:order-3">
            <a
              href="#"
              className="hover:text-white/60 transition-colors uppercase text-[10px] font-bold tracking-[0.2em]"
            >
              Github
            </a>
            <a
              href="#"
              className="hover:text-white/60 transition-colors uppercase text-[10px] font-bold tracking-[0.2em]"
            >
              Linkedin
            </a>
            <a
              href="#"
              className="hover:text-white/60 transition-colors uppercase text-[10px] font-bold tracking-[0.2em]"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes heart-blink {
          0%,
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 2px rgba(244, 114, 182, 0));
          }
          50% {
            transform: scale(1.3);
            filter: drop-shadow(0 0 10px rgba(244, 114, 182, 0.9));
          }
        }
        .group:hover .group-hover\:animate-heart-blink {
          animation: heart-blink 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Footer;
