"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const GlobalHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // メニュー開閉時のスクロールロック
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // メニュー項目
  const navItems = [
    { label: "Works", href: "/" },
    { label: "Profile", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[72px] px-5 md:px-20 flex justify-between items-center z-[100] mix-blend-exclusion bg-transparent">
        {/* Logo */}
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

        {/* SP Hamburger Button (2本線 → ×) */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[6px] z-50 group"
          aria-label="Menu"
        >
          {/* 上の線 */}
          <span
            className={`w-6 h-[1.5px] bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "translate-y-[3.75px] rotate-45" : ""
            }`}
          />
          {/* 下の線 */}
          <span
            className={`w-6 h-[1.5px] bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "-translate-y-[3.75px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* Fullscreen Modal Menu (SP Only) */}
      <div
        className={`md:hidden fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500 ${
          isOpen
            ? "opacity-100 visible backdrop-blur-xl bg-black/80"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="w-full max-w-[880px] px-5 flex flex-col items-center gap-12 text-white">

          {/* Main Navigation */}
          <nav className="flex flex-col items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-inter font-medium text-[16px] tracking-[0.05em] transition-all duration-500 transform hover:opacity-60 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Sub Info (SNS & Copyright) */}
          <div
            className={`flex flex-col items-center gap-4 transition-all duration-700 delay-300 ${
              isOpen ? "opacity-60 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* SNS Link (Instagram Only) */}
            <div className="font-inter text-[12px] tracking-wider">
              <a
                href="https://www.instagram.com/mutalog_muji/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity flex items-center gap-2"
              >
                Instagram ↗
              </a>
            </div>

            {/* Copyright */}
            <p className="font-inter text-[10px] tracking-widest mt-4">
              © 2026 R.MUKAI
            </p>
          </div>

        </div>
      </div>
    </>
  );
};
