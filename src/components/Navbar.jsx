"use client";

import React from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 md:px-16">
      <div className="flex justify-between items-center py-10">
        {/* Logo - Matches the SM branding style */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-8 md:h-10 w-auto cursor-pointer object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
          />
        </div>

        {/* Refined Menu Button - Matches reference image_7a87c3.jpg */}
        <button className="group flex flex-col items-end gap-1.5 cursor-pointer outline-none">
          <div className="flex items-center gap-4">
            <div className="relative w-12 md:w-16">
              {/* Top Line */}
              <span className="block w-full h-[1.5px] bg-white transition-all duration-300 group-hover:translate-y-[2px]"></span>
              {/* Bottom Line (slightly shorter for style) */}
              <span className="block w-3/4 h-[1.5px] bg-white mt-1.5 ml-auto transition-all duration-300 group-hover:w-full group-hover:-translate-y-[2px]"></span>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;