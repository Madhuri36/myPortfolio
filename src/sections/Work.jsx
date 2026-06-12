import React from "react";
import { StickyScroll } from "../components/ui/StickyScroll";
import { PROJECTS } from "../constants";

const Work = () => {
  return (
    <section className="relative bg-[#0b0613] py-16 lg:py-24">
      
      {/* Section Heading */}
      <div className="main-container mb-14 lg:mb-20">
        <div className="flex flex-col items-center text-center">
          
          {/* Small intro line – same tone as hero */}
          <p className="font-heading text-sm md:text-base text-white/50 mb-3">
            Selected Work
          </p>

          {/* Main title – same fonting + restrained size */}
          <h1
            className="
              font-heading
              font-semibold
              tracking-tight
              leading-tight
              text-[clamp(2.2rem,4.5vw,3.5rem)]
              text-white
            "
          >
            Projects I’ve Done
          </h1>
        </div>
      </div>

      {/* Projects */}
      <StickyScroll content={PROJECTS} />
    </section>
  );
};

export default Work;
