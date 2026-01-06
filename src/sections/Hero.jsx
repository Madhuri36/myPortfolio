"use client";

import React, { useEffect, useState } from "react";
import GradientButton from "../components/GradientButton";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { GridBackground } from "../components/ui/grid-background";

const roles = [
  "a Web Developer",
  "an AI / ML Enthusiast",
  "DSA Practitioner",
  "an Open Source Contributor",
  "a Designer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Grid background */}
      <GridBackground />

      {/* Dark overlay for contrast
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black z-10" /> */}

      {/* Content */}
      <div className="relative z-20 main-container h-full flex flex-col justify-center items-center text-center max-lg:pt-40">
        {/* Small tagline (like reference) */}
        <p className="uppercase tracking-[0.35em] text-xs text-muted-foreground mb-6">
          Code Architect • Algorithmic Thinker • Digital Builder
        </p>

        {/* Main headline (reference-inspired) */}
        <h1 className="font-heading font-bold leading-[1.05] mb-6
  text-[clamp(3rem,6vw,6.5rem)]">

          Engineering <span className="text-primary">Solutions</span>, <br />
          Debugging <span className="text-stroke">Possibilities</span>
        </h1>

        {/* Inline intro + rotating role */}
        <div className="flex items-baseline justify-center gap-3 text-xl sm:text-2xl lg:text-3xl font-heading text-muted-foreground mb-10">
          <span>Hi! I am</span>
          <span className="font-semibold text-white">Madhuri,</span>
          {/* <span>, a</span> */}

          {/* Rotating text */}
          <span className="inline-flex items-baseline font-semibold">
            <TextGenerateEffect
              key={roles[index]}
              words={roles[index]}
              className="leading-none"
            />
          </span>
        </div>

        {/* CTA */}
        <GradientButton />
      </div>
    </section>
  );
};

export default Hero;
