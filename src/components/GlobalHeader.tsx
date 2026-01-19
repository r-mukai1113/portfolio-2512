"use client";

import Link from "next/link";
import { useState } from "react";

export const GlobalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // bg-transparent を追加しました
    <header className="fixed top-0 left-0 w-full h-[72px] px-5 md:px-20 flex justify-between items-center z-[100] mix-blend-exclusion bg-transparent">
      <Link href="/" className="text-white font-semibold text-[16px] md:text-[18px] tracking-[0.04em] no-underline">
        R.MUKAI
      </Link>

      {/* PC Navigation */}
      <nav className="hidden md:flex gap-8">
        <Link href="/" className="text-white no-underline font-medium text-[14px] hover:opacity-70 transition-opacity">
          Works
        </Link>
        <Link href="/about" className="text-white no-underline font-medium text-[14px] hover:opacity-70 transition-opacity">
          Profile
        </Link>
        <Link href="/contact" className="text-white no-underline font-medium text-[14px] hover:opacity-70 transition-opacity">
          Contact
        </Link>
      </nav>

      {/* SP Menu Icon */}
      <button
        className="md:hidden flex flex-col gap-1.5 w-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span className="w-full h-0.5 bg-white transition-all"></span>
        <span className="w-full h-0.5 bg-white transition-all"></span>
      </button>
    </header>
  );
};
