import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const GradientButton = () => {
  return (
    <a
      href="#"
      className="
        group inline-flex items-center gap-3
        font-heading text-lg
        text-white
        px-8 py-4
        border border-white/20
        rounded-full
        transition-all duration-300
        hover:border-white
      "
    >
      <span className="relative">
        Show my Resume
        <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
      </span>

      <BsArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  );
};

export default GradientButton;
