"use client";

import React, { useState, useEffect } from 'react';
import logo from '/logo.png';
import FlowingMenu from '../components/ui/FlowingMenu'; 
import { Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const demoItems = [
    { link: '#hero', text: 'Home', image: './g1.png' },
    { link: '#about', text: 'About', image: './g2.png' },
    { link: '#projects', text: 'Projects', image: './g3.png' },
    { link: '#contact', text: 'Contact', image: './g4.png' }
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (menuOpen) return; 
      if (currentScrollY < 10) setIsVisible(true);
      else if (currentScrollY > lastScrollY) setIsVisible(false);
      else setIsVisible(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, menuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] px-6 sm:px-10 md:px-16 transition-transform duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center py-6 md:py-10">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-6 sm:h-8 md:h-10 w-auto cursor-pointer object-contain brightness-0 invert" 
            />
          </div>

          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="group flex flex-col items-end gap-1.5 cursor-pointer outline-none relative z-[110]"
          >
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-white text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity mr-1 md:mr-2 hidden xs:block">
                {menuOpen ? 'Close' : 'Menu'}
              </span>
              <div className="relative w-10 md:w-16">
                <span className={`block w-full h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4px] md:translate-y-[5px]' : ''}`}></span>
                <span className={`block h-[1.5px] bg-white mt-1.5 ml-auto transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4px] md:-translate-y-[5px] w-full' : 'w-3/4'}`}></span>
              </div>
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div 
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[90] bg-[#060010] transition-all duration-700 ease-[0.76, 0, 0.24, 1] flex flex-col items-center justify-center ${
            menuOpen ? 'clip-path-open' : 'clip-path-closed'
        }`}
      >
        
        {/* Responsive Menu Container */}
        <div className="w-full max-h-[70vh] flex items-center overflow-hidden menu-ultra-thin">
          <FlowingMenu 
            items={demoItems}
            speed={15}
            textColor="#ffffff"
            bgColor="transparent" 
            marqueeBgColor="#ffffff"
            marqueeTextColor="#060010"
            borderColor="rgba(255,255,255,0.05)"
          />
        </div>

        {/* Responsive Socials */}
        <div 
          className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-4 md:gap-6"
          onClick={(e) => e.stopPropagation()}
        >
            <div className="flex gap-8 md:gap-10 text-white/40">
                <SocialLinks />
            </div>
        </div>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .clip-path-closed { clip-path: inset(0 0 100% 0); }
        .clip-path-open { clip-path: inset(0 0 0% 0); }
        
        /* Base Styles for Mobile First */
        .menu-ultra-thin a {
          height: 60px !important; 
          padding: 0 !important;
          display: flex !important;
          align-items: center !important;
        }

        .menu-ultra-thin h2 {
          font-size: clamp(1.2rem, 8vw, 2.5rem) !important;
          line-height: 1 !important;
          margin: 0 !important;
          font-weight: 300 !important;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .menu-ultra-thin [class*="marquee"] {
          height: 60px !important;
          line-height: 60px !important;
        }

        /* Desktop Adjustments */
        @media (min-width: 768px) {
          .menu-ultra-thin a {
            height: 80px !important;
          }
          .menu-ultra-thin [class*="marquee"] {
            height: 80px !important;
            line-height: 80px !important;
          }
        }

        ${menuOpen ? 'body { overflow: hidden; }' : ''}
      `}</style>
    </>
  );
};

const SocialLinks = () => (
    <>
      <a href="#" className="inline-block transition-all duration-500 hover:text-white hover:rotate-[360deg] transform-gpu">
        <Github size={18} strokeWidth={1.5} className="md:w-5 md:h-5" />
      </a>
      <a href="#" className="inline-block transition-all duration-500 hover:text-white hover:rotate-[360deg] transform-gpu">
        <Linkedin size={18} strokeWidth={1.5} className="md:w-5 md:h-5" />
      </a>
      <a href="#" className="inline-block transition-all duration-500 hover:text-white hover:rotate-[360deg] transform-gpu">
        <Twitter size={18} strokeWidth={1.5} className="md:w-5 md:h-5" />
      </a>
    </>
  );

export default Navbar;