"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, X } from 'lucide-react';

const NAV_ITEMS = [
  { href: '#hero',         label: 'Home' },
  { href: '#about',        label: 'About' },
  { href: '#experience',   label: 'Experience' },
  { href: '#education',    label: 'Education' },
  { href: '#techstack',    label: 'Tech Stack' },
  { href: '#projects',     label: 'Projects' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact',      label: 'Contact' },
];

const RESUME_LINK = "https://drive.google.com/file/d/16cHIO6xopWuoqqdfJzsnxm2Z0Bm1Go7r/view?usp=sharing";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (menuOpen) return;
      setScrolled(currentScrollY > 40);
      if (currentScrollY < 10) setIsVisible(true);
      else if (currentScrollY > lastScrollY + 10) setIsVisible(false);
      else if (currentScrollY < lastScrollY - 10) setIsVisible(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Main Navbar Header ── */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${scrolled ? 'bg-[#05050a]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : ''}`}
      >
        <div className="flex justify-between items-center px-6 sm:px-10 md:px-16 py-4 md:py-5">
          {/* Pure Typography Logo */}
          <a href="#hero" className="group flex items-center gap-2">
            <span className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-none group-hover:text-white transition-colors">
              smb<span className="text-[#00d4ff]">.</span>
            </span>
          </a>

          {/* Right actions: Desktop shortcuts + Side Menu Toggle */}
          <div className="flex items-center gap-6 md:gap-8">
            <div className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-widest text-white/75">
              <a href="#about" className="hover:text-[#00d4ff] transition-colors">About</a>
              <a href="#experience" className="hover:text-[#00d4ff] transition-colors">Experience</a>
              <a href="#projects" className="hover:text-[#00d4ff] transition-colors">Projects</a>
              <a href="#contact" className="hover:text-[#00d4ff] transition-colors">Contact</a>
            </div>

            {/* Menu Drawer Toggle */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu drawer"
              className="group flex items-center gap-3 cursor-pointer outline-none bg-white/[0.04] hover:bg-[#00d4ff]/10 border border-white/10 hover:border-[#00d4ff]/40 px-3.5 py-2 transition-all duration-300"
            >
              <span className="text-white/90 text-[10px] uppercase tracking-widest font-bold">
                Menu
              </span>
              <div className="relative w-5 flex flex-col gap-1.5">
                <span className="block w-full h-[1.5px] bg-[#00d4ff]" />
                <span className="block w-3/4 ml-auto h-[1.5px] bg-white group-hover:w-full transition-all duration-200" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Backdrop Overlay ── */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm transition-opacity duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* ── Slide-in Side Drawer (opens on the right side) ── */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[120] w-[320px] sm:w-[380px] bg-[#070712] border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.85)] flex flex-col justify-between p-7 sm:p-9 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
          <span className="font-heading font-extrabold text-lg text-white tracking-tight">
            sai madhuri<span className="text-[#00d4ff]">.</span>
          </span>
          <button
            onClick={closeMenu}
            aria-label="Close menu drawer"
            className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col gap-2 my-auto py-4">
          {NAV_ITEMS.map(({ href, label }, idx) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="group flex items-center justify-between py-2 text-white/80 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-[9px] text-[#00d4ff]/60 font-mono tracking-widest group-hover:text-[#00d4ff] transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight group-hover:translate-x-1.5 transition-transform duration-200">
                  {label}
                </span>
              </div>
              <span className="text-[#00d4ff] text-sm opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-white/[0.08] pt-5 flex items-center justify-between">
          <div className="flex items-center gap-4 text-white/70">
            <a
              href="https://github.com/Madhuri36"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#00d4ff] transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-madhuri-bodapati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#00d4ff] transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:s.madhuri2k23@gmail.com"
              aria-label="Email"
              className="hover:text-[#00d4ff] transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>

          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest text-[#00d4ff] font-bold hover:underline"
          >
            Resume ↗
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;