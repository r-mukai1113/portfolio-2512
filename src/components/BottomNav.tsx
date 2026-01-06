"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const NAV_ITEMS = [
  { name: "制作実例", href: "#works", icon: "👨‍💻" },
  { name: "プロフィール", href: "#", icon: "🎨" },
  { name: "お問い合せ", href: "/contact", icon: "🖐️" },
];

export const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("制作実例");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <nav className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={clsx(
          "bg-slate-900/72 backdrop-blur-md text-white shadow-2xl flex items-center justify-center border border-slate-700/50",
          "h-[44px] md:h-[56px]",
          "rounded-[6px] md:rounded-[8px]",
          "px-[20px] md:px-[28px]",
          "gap-[20px]"
        )}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActiveTab(item.name)}
            onMouseEnter={() => setHoveredTab(item.name)}
            onMouseLeave={() => setHoveredTab(null)}
            className="relative flex flex-col items-center justify-center h-full"
          >
            <span
              className={clsx(
                "font-noto font-medium transition-colors duration-200 flex items-center whitespace-nowrap",
                "text-[11px] md:text-[14px]",
                "tracking-[0.02em]",
                "gap-[4px]",
                activeTab === item.name
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              )}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </span>

            {(activeTab === item.name || hoveredTab === item.name) && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-[2px] left-0 right-0 h-[2px] bg-white rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};
