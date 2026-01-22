"use client";

import React, { useCallback } from "react";
import LogoLoop from "../components/ui/LogoLoop";
import { techStack } from "../constants";

const Techstack = () => {
  // 👇 Tell LogoLoop how to render each tech item
  const renderTechItem = useCallback((item) => {
  const Icon = item.icon;

  return (
    <span
      className="
        inline-flex items-center justify-center
        transition-transform duration-300
        group-hover/item:scale-125
        text-[length:var(--logoloop-logoHeight)]
      "
      title={item.title}
      aria-label={item.title}
    >
      <Icon
        className="w-[1em] h-[1em]"
        color={item.color}
        aria-hidden
      />
    </span>
  );
}, []);


  return (
    <section
      className="
      min-h-screen
        relative
        py-20 lg:py-28
        rounded-tl-[64px] rounded-tr-[64px]
        bg-white/90
      "
    >
      {/* Section Heading */}
      <div className="main-container mb-14 lg:mb-20">
        <div className="flex flex-col items-center text-center">
          <p className="font-heading text-sm md:text-base text-black/50 mb-3">
            Technologies & Tools
          </p>

          <h1
            className="
              font-heading
              font-semibold
              tracking-tight
              leading-tight
              text-[clamp(2.2rem,4.5vw,3.5rem)]
              text-[#1A0F2E]
            "
          >
            Tech Stack I’ve Worked With
          </h1>
        </div>
      </div>

      {/* Logo Rows */}
      <div className="space-y-10 overflow-hidden">
        {/* Row 1 — Left */}
        <LogoLoop
          logos={techStack.row1}
          renderItem={renderTechItem}
          speed={40}
          direction="left"
          logoHeight={70}
          gap={56}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="bg-white/90"
          ariaLabel="Primary technologies"
        />

        {/* Row 2 — Right */}
        <LogoLoop
          logos={techStack.row2}
          renderItem={renderTechItem}
          speed={40}
          direction="right"
          logoHeight={70}
          gap={56}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="bg-white/90"
          ariaLabel="Backend and infrastructure technologies"
        />

        {/* Row 3 — Left */}
        <LogoLoop
          logos={techStack.row3}
          renderItem={renderTechItem}
          speed={40}
          direction="left"
          logoHeight={70}
          gap={56}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="bg-white/90"
          ariaLabel="AI, tools and platforms"
        />
      </div>
    </section>
  );
};

export default Techstack;
