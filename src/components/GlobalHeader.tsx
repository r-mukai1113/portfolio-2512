"use client";

import Link from "next/link";
import { useState } from "react";

export const GlobalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-[100] mix-blend-exclusion">
      <Link href="/" className="text-white font-semibold tracking-wider no-underline">
        R.MUKAI
      </Link>

      {/* PC Navigation */}
      <nav className="hidden md:flex gap-8">
        <Link href="/" className="text-white no-underline font-semibold text-sm tracking-wider hover:opacity-70 transition-opacity">
          Works
        </Link>
        <Link href="/about" className="text-white no-underline font-semibold text-sm tracking-wider hover:opacity-70 transition-opacity">
          Profile
        </Link>
        <Link href="/contact" className="text-white no-underline font-semibold text-sm tracking-wider hover:opacity-70 transition-opacity">
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
