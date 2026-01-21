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

        {/* SP Hamburger Button */}
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
            ? "opacity-100 visible backdrop-blur-md bg-[#1A1A1A]/80" // 透明度を80%に変更し、ガラス感アップ
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Center Content (Menu & SNS) */}
        <div className="w-full px-5 flex flex-col items-center">

          {/* Main Navigation */}
          {/* Gapは 40px を維持 */}
          <nav className="flex flex-col items-center gap-[40px]">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-inter font-medium text-[16px] tracking-[0.05em] text-white transition-all duration-500 transform hover:opacity-60 ${
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

          {/* Sub Info (Instagram & Mail) */}
          {/* ① mt-16 -> mt-[56px] (指定値) */}
          {/* ② gap-8 -> gap-6 (24px) */}
          <div
            className={`mt-[56px] flex flex-col items-center gap-6 transition-all duration-700 delay-300 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Instagram */}
            <a
              href="https://www.instagram.com/mutalog_muji/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[12px] tracking-wider text-white opacity-60 hover:opacity-100 transition-opacity"
            >
              Instagram
            </a>

            {/* Mail */}
            <a
              href="mailto:r.mukai@mutalog.com"
              className="font-inter text-[12px] tracking-wider text-white opacity-60 hover:opacity-100 transition-opacity"
            >
              r.mukai@mutalog.com
            </a>
          </div>

        </div>

        {/* Copyright (Fixed Bottom) */}
        <div
          className={`absolute bottom-8 left-0 w-full text-center transition-opacity duration-700 delay-500 ${
            isOpen ? "opacity-40" : "opacity-0"
          }`}
        >
          <p className="font-inter text-[10px] tracking-widest text-white">
            © 2026 R.MUKAI
          </p>
        </div>
      </div>
    </>
  );
};
