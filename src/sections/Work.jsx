import React from "react";
import { StickyScroll } from "../components/ui/StickyScroll";
import { PROJECTS } from "../constants";

const Work = () => {
  return (
    <section className="bg-[#0b0613] py-12 lg:py-24">
      <div className="main-container mb-12 lg:mb-16">
        <h1 className="font-heading text-5xl md:text-8xl font-bold text-white tracking-tighter">
          Projects <span className="text-zinc-700 italic font-light">I have done</span>
        </h1>
      </div>
      
      <StickyScroll content={PROJECTS} />
    </section>
  );
};

export default Work;