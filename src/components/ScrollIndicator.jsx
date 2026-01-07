"use client";

import React from "react";

const ScrollIndicator = () => {
  return (
    <div className="relative mt-6 flex items-center justify-center">
      {/* Rotating text */}
      <svg
        className="animate-spin-slow"
        width="140"
        height="140"
        viewBox="0 0 140 140"
      >
        <defs>
          <path
            id="circlePath"
            d="
              M 70, 70
              m -50, 0
              a 50,50 0 1,1 100,0
              a 50,50 0 1,1 -100,0
            "
          />
        </defs>

        <text
          fill="#2D3B5E"
          fontSize="12"
          fontWeight="600"
          letterSpacing="3"
        >
          <textPath href="#circlePath">
            SCROLL DOWN • SCROLL DOWN •
          </textPath>
        </text>
      </svg>

      {/* Center arrow */}
      <div className="absolute text-[#1A2642] text-3xl animate-bounce">
        ↓
      </div>
    </div>
  );
};

export default ScrollIndicator;
