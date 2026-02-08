"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";

const MIN_LOADING_TIME = 3200; // increase / decrease (3000–4000 feels good)

const PreLoader = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [minTimePassed, setMinTimePassed] = useState(false);

 useEffect(() => {
  if (isVisible) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isVisible]);


  // Minimum loading time
  useEffect(() => {
    const minTimer = setTimeout(() => {
      setMinTimePassed(true);
    }, MIN_LOADING_TIME);

    return () => clearTimeout(minTimer);
  }, []);

  // Counter logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 8) + 2, 100);
      });
    }, 90);

    return () => clearInterval(timer);
  }, []);

  // Exit only after count + min time
  useEffect(() => {
    if (count === 100 && minTimePassed) {
      setTimeout(() => setIsVisible(false), 700);
    }
  }, [count, minTimePassed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{
            clipPath: "inset(0% 0% 100% 0%)",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#010102] text-white"
        >
          {/* Counter */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-7xl md:text-9xl font-thin tracking-tighter"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            >
              {count}%
            </motion.h1>
          </div>

          {/* Bottom Bar */}
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
                Initializing
              </span>
              <div className="w-36 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: count / 100 }}
                  transition={{ ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </div>
            </div>

            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
              © 2026
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
