import React from "react";
import ScrollVelocity from "../components/ui/ScrollVelocity";

const Marquee = () => {
  return (
    <div className="bg-[#010102] pb-45 pt-45">
        
      <ScrollVelocity
        texts={["Create. Design. Code.", "Inspire. Build. Evolve.",]}
        velocity={100}
        className="custom-scroll-text"
      />
    </div>
  );
};

export default Marquee;
