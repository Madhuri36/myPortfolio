"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSending(true);
    // Simulate sending — hook up to your backend/EmailJS/Resend as needed
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  };

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 px-6 sm:px-12 md:px-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #05050a 0%, #070712 60%, #05050a 100%)" }}
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

      {/* Background radial */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,102,255,0.07) 0%, transparent 70%)" }}
      />

      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto"
      >
        {/* Label */}
        <motion.div variants={item} className="mb-16 md:mb-24">
          <span className="section-label">
            <span className="w-8 h-[1px] bg-[#00d4ff]/50" />
            Contact
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT — CTA copy */}
          <div className="flex flex-col gap-10">
            <motion.h2
              variants={item}
              className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-[64px]"
            >
              Let's build{" "}
              <span className="text-[#00d4ff]">something</span>{" "}
              <span className="italic font-light text-white/50">great</span>{" "}
              together.
            </motion.h2>

            <motion.p variants={item} className="text-white/45 text-base md:text-lg font-light leading-relaxed max-w-md">
              I'm open to internship opportunities, research collaborations, freelance projects,
              and interesting conversations. Don't hesitate to reach out!
            </motion.p>

            <motion.div variants={item} className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Find me at</p>
              {[
                { label: "s.madhuri2k23@gmail.com", href: "mailto:s.madhuri2k23@gmail.com", icon: Mail },
                { label: "github.com/Madhuri36", href: "https://github.com/Madhuri36", icon: Github },
                { label: "linkedin.com/in/sai-madhuri-bodapati", href: "https://www.linkedin.com/in/sai-madhuri-bodapati", icon: Linkedin },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 border border-white/10 group-hover:border-[#00d4ff]/30 bg-transparent group-hover:bg-[#00d4ff]/5 flex items-center justify-center transition-all duration-300">
                    <Icon size={15} className="text-white/40 group-hover:text-[#00d4ff] transition-colors duration-300" />
                  </div>
                  <span className="text-white/50 text-sm group-hover:text-[#00d4ff] transition-colors duration-300 font-mono">
                    {label}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Form */}
          <motion.div variants={item}>
            {sent ? (
              <div className="cyber-card p-10 flex flex-col items-center justify-center gap-6 text-center min-h-[380px]">
                <div className="w-14 h-14 border border-[#00d4ff]/30 bg-[#00d4ff]/10 flex items-center justify-center">
                  <Send size={22} className="text-[#00d4ff]" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl mb-2 font-heading">Message sent!</p>
                  <p className="text-white/40 text-sm">I'll get back to you as soon as possible.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name */}
                <div className="group">
                  <label className="block text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mb-3">
                    Your Name
                  </label>
                  <div className="border-b border-white/15 group-focus-within:border-[#00d4ff]/50 transition-colors duration-300">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sai Madhuri..."
                      required
                      className="w-full bg-transparent outline-none text-white placeholder:text-white/20 py-3 text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mb-3">
                    Your Email
                  </label>
                  <div className="border-b border-white/15 group-focus-within:border-[#00d4ff]/50 transition-colors duration-300">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full bg-transparent outline-none text-white placeholder:text-white/20 py-3 text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mb-3">
                    Message
                  </label>
                  <div className="border-b border-white/15 group-focus-within:border-[#00d4ff]/50 transition-colors duration-300">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi, I'd love to collaborate on..."
                      rows={4}
                      required
                      className="w-full bg-transparent outline-none text-white placeholder:text-white/20 py-3 text-sm resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Message"}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;