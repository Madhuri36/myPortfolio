"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Layers, Database, Cpu, GitBranch } from "lucide-react";
import { achievements } from "../constants";

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6 sm:px-12 md:px-20 bg-[#05050a] overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto"
      >
        {/* Label */}
        <motion.div variants={item} className="mb-14 md:mb-20">
          <span className="section-label">
            <span className="w-8 h-[1px] bg-[#00d4ff]/50" />
            About Me
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* LEFT — Bio focusing on Full Stack, Data Engineering & AI/ML */}
          <div className="flex flex-col gap-8">
            <motion.h2
              variants={item}
              className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-[60px]"
            >
              Architecting <span className="text-[#00d4ff]">intelligent systems</span> across the stack.
            </motion.h2>

            <motion.div
              variants={item}
              className="space-y-5 text-white/75 text-base md:text-lg font-light leading-relaxed"
            >
              <p>
                I am a developer and researcher at{" "}
                <span className="text-white font-medium">ABV-IIITM Gwalior</span> (Class of 2027),
                working across <span className="text-white font-medium">Full-Stack Web Development</span>,{" "}
                <span className="text-[#00d4ff] font-medium">Data Engineering</span>, and{" "}
                <span className="text-[#00d4ff] font-medium">AI/ML Engineering</span>.
              </p>
              <p>
                Whether it's building reactive web interfaces with Next.js and Supabase,
                processing millions of events through distributed Kafka and Spark streams,
                or training deep learning & quantum variational circuits, I bridge clean code architecture
                with scalable data systems.
              </p>
              <p>
                Beyond engineering, I am a <span className="text-white font-medium">mentee at Codess.Cafe</span>,
                an active open-source contributor (GSSoC'24 top 200), and a committed problem solver with{" "}
                <span className="text-[#00d4ff] font-medium">600+ solved DSA problems</span> (1,665 LeetCode rating).
              </p>
            </motion.div>

            {/* Core Domain Badges */}
            <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { title: "Full Stack", icon: Layers, desc: "React, Next.js, Node" },
                { title: "Data Eng", icon: Database, desc: "Kafka, Spark, SQL" },
                { title: "AI / ML", icon: Cpu, desc: "PyTorch, Quantum ML" },
                { title: "Open Source", icon: GitBranch, desc: "GSSoC'24, Git" },
              ].map(({ title, icon: Icon, desc }) => (
                <div key={title} className="p-3 border border-white/[0.08] bg-white/[0.02]">
                  <Icon size={16} className="text-[#00d4ff] mb-2" />
                  <p className="text-white text-xs font-bold font-mono uppercase">{title}</p>
                  <p className="text-white/40 text-[10px]">{desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-6 pt-2">
              {[
                { href: "https://github.com/Madhuri36", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/sai-madhuri-bodapati", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:s.madhuri2k23@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-[#00d4ff] transition-all duration-300 text-sm"
                >
                  <Icon size={16} strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-[0.2em]">{label}</span>
                </a>
              ))}
            </motion.div>

            {/* Resume CTA */}
            <motion.div variants={item}>
              <a
                href="https://drive.google.com/file/d/16cHIO6xopWuoqqdfJzsnxm2Z0Bm1Go7r/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] font-bold text-white/70 hover:text-[#00d4ff] transition-colors duration-300 group"
              >
                <span className="w-8 h-[1px] bg-current transition-all duration-500 group-hover:w-16" />
                View Full Resume
                <ExternalLink size={12} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Stats & Core Info */}
          <div className="flex flex-col gap-5">
            {/* Stat cards */}
            <motion.div variants={item} className="grid grid-cols-2 gap-4">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="cyber-card p-6 group"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-[#00d4ff] mb-1 font-heading tracking-tight">
                    {a.metric}
                  </p>
                  <p className="text-white text-sm font-semibold mb-1">{a.label}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{a.detail}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00d4ff] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </motion.div>

            {/* Quick facts card */}
            <motion.div variants={item} className="cyber-card p-7">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#00d4ff] font-bold mb-6">
                Technical Profile
              </p>
              <div className="space-y-4">
                {[
                  ["Core Focus", "Full Stack Development · Data Engineering · AI/ML"],
                  ["Interests", "Full Stack, Data, AI/ML, Open Source"],
                  ["Education", "B.Tech CSE @ IIITM Gwalior (Final Year, 2023–2027)"],
                  ["Community", "Mentee at Codess.Cafe · GSSoC'24 Contributor"],
                  ["LeetCode", "600+ solved · Contest Rating 1,665"],
                  ["Email", "s.madhuri2k23@gmail.com"],
                ].map(([key, val]) => (
                  <div key={key} className="flex gap-4 items-start">
                    <span className="text-[10px] uppercase tracking-widest text-[#00d4ff]/70 font-mono font-bold w-28 shrink-0 pt-0.5">
                      {key}
                    </span>
                    <span className="text-white/80 text-sm leading-relaxed">{val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;