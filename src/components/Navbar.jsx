"use client";

import React, { useState, useEffect } from 'react';
import logo from '/logo.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // 1. Always show at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // 2. Hide if scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } 
      // 3. Show if scrolling up
      else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 px-8 md:px-16 cursor-none transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center py-10">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-8 md:h-10 w-auto cursor-pointer object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
          />
        </div>

        {/* Menu Button */}
        <button className="group flex flex-col items-end gap-1.5 cursor-pointer outline-none">
          <div className="flex items-center gap-4">
            <div className="relative w-12 md:w-16">
              <span className="block w-full h-[1.5px] bg-white transition-all duration-300 group-hover:translate-y-[2px]"></span>
              <span className="block w-3/4 h-[1.5px] bg-white mt-1.5 ml-auto transition-all duration-300 group-hover:w-full group-hover:-translate-y-[2px]"></span>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;