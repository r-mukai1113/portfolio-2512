"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMOJIS = ["⚾️", "🏃‍♂️", "☕️", "🧑‍💻", "🪴"];

export const EmojiSwitcher = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % EMOJIS.length);
    }, 2500); // 2.5秒ごとに切り替え

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative inline-block w-8 h-8 md:w-12 md:h-12 align-middle ml-2 md:ml-4">
      <AnimatePresence mode="wait">
        <motion.span
          key={EMOJIS[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 text-3xl md:text-5xl"
        >
          {EMOJIS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
