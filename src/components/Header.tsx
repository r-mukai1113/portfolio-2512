"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // スクロール検知ロジック
  useEffect(() => {
    const toggleVisibility = () => {
      // 300px以上スクロールしたら表示
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <header className="hidden md:block fixed top-0 left-0 z-50 w-full pointer-events-none">
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[48px] lg:px-[80px] h-[64px] flex items-center">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="pointer-events-auto cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="text-sm font-medium tracking-wide text-slate-800 flex items-center overflow-hidden h-6 font-inter">
                <span>r</span>
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0
                  }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  yuta
                </motion.span>
                <span>.mukai</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
