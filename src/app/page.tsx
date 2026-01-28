"use client";

import { useState, useEffect, useRef } from "react";
import { GlobalHeader } from "@/components/GlobalHeader";
import { works } from "@/data/works";
import Link from "next/link";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Copyright } from "@/components/Copyright";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [bgColor, setBgColor] = useState(works[0].theme.bg);
  // ★追加: テキストカラーの状態管理
  const [textColor, setTextColor] = useState(works[0].theme.text);
  
  const [imgHeight, setImgHeight] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const spContainerRef = useRef<HTMLDivElement>(null);

  const CARD_GAP = 80;

  useThemeColor(bgColor);

  // 画像高さ取得
  useEffect(() => {
    const updateHeight = () => {
      if (imgRef.current) {
        setImgHeight(imgRef.current.clientHeight);
      }
    };

    updateHeight();
    const img = imgRef.current;
    if (img) {
        img.onload = updateHeight;
    }

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // マウスホイール操作 (PC)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth <= 768) return;
      if (isScrolling) return;

      setIsScrolling(true);

      if (e.deltaY > 0) {
        if (currentIndex < works.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          setCurrentIndex(0);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        } else {
          setCurrentIndex(works.length - 1);
        }
      }

      setTimeout(() => setIsScrolling(false), 800);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isScrolling, currentIndex]);

  // キーボード操作 (PC)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth <= 768) return;
      if (isScrolling) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setIsScrolling(true);
        if (currentIndex < works.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          setCurrentIndex(0);
        }
        setTimeout(() => setIsScrolling(false), 800);
      } 
      else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setIsScrolling(true);
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        } else {
          setCurrentIndex(works.length - 1);
        }
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isScrolling, currentIndex]);

  // テーマカラー更新
  useEffect(() => {
    setBgColor(works[currentIndex].theme.bg);
    setTextColor(works[currentIndex].theme.text);
  }, [currentIndex]);

  // SP: スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      if (!spContainerRef.current) return;
      const scrollCenter =
        spContainerRef.current.scrollTop + window.innerHeight / 2;

      const sections =
        spContainerRef.current.querySelectorAll(".sp-card-section");
      sections.forEach((sec, i) => {
        const element = sec as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollCenter >= top && scrollCenter < bottom) {
          setBgColor(works[i].theme.bg);
        }
      });
    };

    const container = spContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const currentWork = works[currentIndex];

  return (
    <div className="overflow-hidden">
      <style jsx>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up-fade {
          animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div
        className="fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ backgroundColor: bgColor }}
      />

      <GlobalHeader />

      {/* ==============================================
          PC View
      ============================================== */}
      <main
        className="hidden md:flex h-screen w-full pt-[72px]"
        // ★ここが重要: 全体の文字色をテーマカラーに連動させる
        style={{ color: textColor }}
      >
        <div className="w-[600px] shrink-0 h-full flex items-center pl-20 pr-12 relative z-10">
          <div key={currentWork.id} className="w-full break-words animate-slide-up-fade">
            <h1 className="font-inter text-[72px] leading-[1.1] tracking-[0.04em] font-bold mb-8 break-words">
              {currentWork.title}
            </h1>

            <div className="font-inter text-[14px] leading-[1.0] tracking-[0.02em] opacity-60 mb-6">
              <span>{currentWork.category}</span>
              <span className="mx-2">|</span>
              <span>{currentWork.year}</span>
            </div>

            <p className="font-noto text-[16px] leading-[2.0] tracking-[0.04em] opacity-80 mb-10 font-normal break-words">
              {currentWork.desc.overview}
            </p>

            <Link
              href={`/works/${currentWork.slug}`}
              className="inline-flex items-center gap-2 text-[14px] font-medium no-underline hover:opacity-70 transition-opacity"
              // Linkの色も明示的に適用
              style={{ color: textColor }}
            >
              View Project
              <span className="text-[16px] leading-none pb-[2px]">›</span>
            </Link>
          </div>
        </div>

        <div className="flex-1 h-full flex pr-20 relative min-w-0">
          <div className="flex-1 h-full relative overflow-hidden">
            <div
              className="absolute left-0 w-full transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                top: "50%",
                transform: `translateY(-${currentIndex * (imgHeight + CARD_GAP) + (imgHeight / 2)}px)`,
              }}
            >
              {works.map((work, index) => (
                <div
                  key={work.id}
                  className="w-full"
                  style={{ marginBottom: `${CARD_GAP}px` }}
                >
                  <Link href={`/works/${work.slug}`} className="block w-full">
                    <img
                      ref={index === 0 ? imgRef : null}
                      src={work.thumbnail}
                      alt={work.title}
                      className={`block w-full aspect-[16/10] object-cover rounded-sm transition-all duration-[800ms] ${
                        index === currentIndex
                          ? "opacity-100 grayscale-0 scale-100"
                          : "opacity-30 grayscale scale-95"
                      }`}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="ml-8 h-full flex flex-col justify-center items-center gap-4 z-10 w-2 shrink-0">
            {works.map((work, index) => (
              <button
                key={work.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-1 transition-all duration-500 rounded-full ${
                  index === currentIndex
                    ? "h-12"
                    : "h-2 opacity-30 hover:opacity-60"
                }`}
                // ★ここが重要: インジケーターの色をテーマカラーに連動
                style={{ backgroundColor: textColor }}
                aria-label={`Go to ${work.title}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* ==============================================
          SP View (元のデザインを維持)
      ============================================== */}
      <main
        ref={spContainerRef}
        className="md:hidden h-screen overflow-y-scroll snap-y snap-mandatory"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {works.map((work, index) => (
          <div
            key={work.id}
            className="sp-card-section w-full snap-start pt-[72px] pb-5 px-5"
          >
            <div
              className={`w-full h-auto rounded-[12px] flex flex-col transition-all duration-500 py-10 px-5 ${
                work.theme.isLight
                  ? "bg-white/50 border border-white/60"
                  : "bg-white/[0.04] backdrop-blur-[20px] border border-white/10"
              }`}
              style={{ color: work.theme.isLight ? "#333" : "#FFF" }}
            >
              <Link href={`/works/${work.slug}`} className="block mb-8">
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="w-full aspect-[16/10] object-cover rounded"
                />
              </Link>

              <div className="break-words">
                <h2 className="font-inter text-[32px] leading-[1.05] font-bold mb-6">
                  {work.title}
                </h2>

                <div className="font-inter text-[12px] opacity-60 mb-4 tracking-[0.02em]">
                  {work.category} | {work.year}
                </div>

                <p className="font-noto text-[14px] opacity-80 leading-[1.8] mb-4 break-words">
                  {work.desc.overview}
                </p>

                <Link
                  href={`/works/${work.slug}`}
                  className="text-[14px] flex items-center gap-2 font-medium no-underline hover:opacity-70 transition-opacity"
                  style={{ color: work.theme.isLight ? "#333" : "#FFF" }}
                >
                  View Project
                  <span className="text-[16px] leading-none pb-[2px]">›</span>
                </Link>
              </div>
            </div>

            {index === works.length - 1 && (
              <Copyright className="mt-8 mb-4 text-white mix-blend-difference" />
            )}
          </div>
        ))}
      </main>
    </div>
  );
}