"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const NAV_ITEMS = [
  { name: "Works", href: "#works", icon: "👨‍💻" },
  { name: "About", href: "#", icon: "🎨" },
  { name: "Contact", href: "/contact", icon: "🤝" },
];

export const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("Works");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <nav className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-slate-900/90 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-2xl flex gap-6 items-center border border-slate-700/50">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActiveTab(item.name)}
            onMouseEnter={() => setHoveredTab(item.name)}
            onMouseLeave={() => setHoveredTab(null)}
            className="relative flex flex-col items-center justify-center px-2 py-1"
          >
            <span
              className={clsx(
                "text-xs md:text-sm font-medium transition-colors duration-200 flex gap-2 items-center",
                activeTab === item.name
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              )}
            >
              <span className="text-base">{item.icon}</span>
              <span className="hidden md:inline">{item.name}</span>
            </span>

            {(activeTab === item.name || hoveredTab === item.name) && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-yellow-400 rounded-full"
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
