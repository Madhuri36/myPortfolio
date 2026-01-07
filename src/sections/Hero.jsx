"use client";

import React, { useEffect, useState } from "react";
import GradientButton from "../components/GradientButton";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import Iridescence from "../components/ui/Iridescence";
import ScrollIndicator from "../components/ScrollIndicator";
import TextType from "../components/ui/TextType";


const roles = [
  "a Web Developer",
  "an AI / ML Enthusiast",
  "a DSA Practitioner",
  "an Open Source Contributor",
  "a Designer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setIndex((p) => (p + 1) % roles.length),
      2600
    );
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 🌈 Iridescence background (MUST receive mouse) */}
      <div className="absolute inset-0 z-0">
        <Iridescence
          color={[0.82, 0.74, 1.0]}
          amplitude={0.19}
          speed={0.9}
          mouseReact={true}
        />
      </div>

      {/* ✨ Content — DOES NOT capture mouse */}
      <div className="relative z-10 main-container h-full flex flex-col justify-center items-center text-center max-lg:pt-40 pointer-events-none">

  {/* Subtle tagline
  <p className="uppercase tracking-[0.35em] text-sm font-bold mb-6
    text-[#1A0F2E]">
    Crafting Experiences • Solving Problems • Building Impact
  </p> */}
  {/* Intro + rotating role */}
  <div
    className="flex items-baseline justify-center gap-3
    text-xl sm:text-2xl lg:text-3xl font-heading mb-10
    text-[#2A1F47]"
  >
    <span>Hey! I'm</span>

    <span className="font-semibold text-[#1F1538]">
      Madhuri,
    </span>

    <span className="inline-flex items-baseline font-semibold text-[#1A0F2E]">
      <TextGenerateEffect
        key={roles[index]}
        words={roles[index]}
        className="leading-none"
      />
    </span>
  </div>

  {/* Main headline */}
  <h1
    className="font-heading font-bold leading-[1.05] mb-6
    text-[clamp(3rem,6vw,6.5rem)]
    text-[#1A0F2E]"
  >
    Engineering{" "}
    <span className="text-[#251A40]">Solutions</span>, <br />
    Unlocking{" "}
    <span className="text-stroke text-[#2D1F4D]">
      Possibilities
    </span>
  </h1>

  

  {/* CTA */}
  <div className="pointer-events-auto">
    <ScrollIndicator />
  </div>
</div>

    </section>
  );
}