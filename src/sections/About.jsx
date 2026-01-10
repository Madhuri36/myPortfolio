import React from "react";

const About = () => {
  return (
    <section className="relative min-h-screen">
      {/* Soft background bleed to connect sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />

      {/* Main About Card */}
      <div
        className="
          relative
          min-h-screen
          rounded-tl-[64px] rounded-tr-[64px]
          bg-white/90
          backdrop-blur-xl
          shadow-[0_-30px_80px_-40px_rgba(0,0,0,0.15)]
          flex items-center
        "
      >
        <div
          className="
            about-text
            main-container
            py-16 lg:py-28
            font-heading
            text-[#111827]
            text-[1.35rem]
            sm:text-2xl
            md:text-3xl
            xl:text-[2.75rem]
            leading-[1.35]
            max-w-[62ch]
          "
        >
          <p>
            My approach is driven by intentional design, scalable engineering,
            and deep problem understanding. As a full-stack developer and an
            AI/ML enthusiast, I build modern web experiences that balance
            performance, usability, and long-term impact.
          </p>

          <p className="mt-8 text-black/70">
            I focus on creating work that looks refined, functions seamlessly,
            and delivers real value through thoughtful execution and attention
            to detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
