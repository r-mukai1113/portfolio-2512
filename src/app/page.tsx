"use client";

import { GlobalHeader } from "@/components/GlobalHeader";
import { works } from "@/data/works";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [bgColor, setBgColor] = useState(works[0].theme.bg);
  const [textColor, setTextColor] = useState(works[0].theme.text);
  const spContainerRef = useRef<HTMLDivElement>(null);

  const currentWork = works[currentIndex];

  // PC: ホイールスクロールハンドラー
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth <= 768) return;
      if (isScrolling) return;

      setIsScrolling(true);

      if (e.deltaY > 0) {
        // 下スクロール: 次へ
        setCurrentIndex((prev) => (prev + 1) % works.length);
      } else {
        // 上スクロール: 前へ
        setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
      }

      setTimeout(() => setIsScrolling(false), 800);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isScrolling]);

  // PC: テーマカラー更新
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

      const sections = spContainerRef.current.querySelectorAll(".sp-card-section");
      sections.forEach((sec, i) => {
        const element = sec as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollCenter >= top && scrollCenter < bottom) {
          setBgColor(works[i].theme.bg);
          setTextColor(works[i].theme.text);
        }
      });
    };

    const container = spContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      {/* 背景色レイヤー */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ backgroundColor: bgColor }}
      />

      <GlobalHeader />

      {/* PC View */}
      <main
        className="hidden md:flex h-screen w-full pt-[72px]"
        style={{ color: textColor }}
      >
        {/* 左カラム: テキスト */}
        <div className="w-1/2 h-full flex items-center pl-20">
          <div className="max-w-[520px] w-full">
            {/* 1. タイトル */}
            <h1 className="font-inter text-[72px] leading-[1.1] tracking-[0.04em] font-semibold mb-8">
              {currentWork.title}
            </h1>

            {/* 2. サブ情報 */}
            <div className="font-inter text-[14px] leading-[1.0] tracking-[0.02em] opacity-60 mb-6">
              <span>{currentWork.category}</span>
              <span className="mx-2">|</span>
              <span>{currentWork.year}</span>
            </div>

            {/* 3. 説明文 */}
            <p
              className="font-noto text-[14px] leading-[2.0] tracking-[0.04em] opacity-80 mb-10 font-normal"
              dangerouslySetInnerHTML={{ __html: currentWork.desc }}
            />

            {/* 4. ボタン */}
            <a
              href={currentWork.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-medium no-underline hover:opacity-70 transition-opacity"
              style={{ color: textColor }}
            >
              View Project
              <span className="flex items-center justify-center w-6 h-6 border border-current rounded-full text-[10px]">
                →
              </span>
            </a>
          </div>
        </div>

        {/* 右カラム: 画像 */}
        <div className="w-1/2 h-full overflow-hidden relative">
          <div
            className="absolute top-1/2 left-[10%] w-[80%] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translateY(calc(-50% - ${currentIndex * (100 + 80)}px))`,
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            {works.map((work, index) => (
              <img
                key={work.id}
                src={work.thumbnail}
                alt={work.title}
                className={`block w-full aspect-[16/10] object-cover mb-20 rounded-sm transition-all duration-[800ms] ${
                  index === currentIndex
                    ? "opacity-100 grayscale-0 scale-100 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                    : "opacity-30 grayscale scale-95 shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ドットナビゲーション */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
          {works.map((work, index) => (
            <button
              key={work.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-all border-0 ${
                index === currentIndex
                  ? "opacity-100 scale-150"
                  : "opacity-30 hover:opacity-60 hover:scale-150"
              }`}
              style={{ backgroundColor: textColor }}
              aria-label={`Go to ${work.title}`}
            />
          ))}
        </div>
      </main>

      {/* SP View */}
      <main
        ref={spContainerRef}
        className="md:hidden h-screen overflow-y-scroll snap-y snap-mandatory pt-[72px]"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {works.map((work) => (
          <div
            key={work.id}
            className="sp-card-section h-screen w-full snap-start px-5 pt-4 flex items-start"
          >
            <div
              className={`w-full h-[90%] rounded-xl p-6 flex flex-col justify-between transition-all duration-500 ${
                work.theme.isLight
                  ? "bg-white/50 border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
                  : "bg-white/[0.04] backdrop-blur-[20px] border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
              }`}
              style={{ color: work.theme.isLight ? "#333" : "#FFF" }}
            >
              <img
                src={work.thumbnail}
                alt={work.title}
                className="w-full aspect-[16/10] object-cover rounded mb-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              />

              <div className="mt-auto">
                {/* 1. タイトル */}
                <h2 className="font-inter text-[44px] leading-[1.05] font-semibold mb-6">
                  {work.title}
                </h2>

                {/* 2. サブ情報 */}
                <div className="font-inter text-[12px] opacity-60 mb-4 tracking-[0.02em]">
                  {work.category} | {work.year}
                </div>

                {/* 3. 説明文 */}
                <p
                  className="font-noto text-[12px] opacity-80 leading-[1.8] mb-8"
                  dangerouslySetInnerHTML={{ __html: work.desc }}
                />

                {/* 4. ボタン */}
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] flex items-center gap-2 font-medium no-underline hover:opacity-70 transition-opacity"
                  style={{ color: work.theme.isLight ? "#333" : "#FFF" }}
                >
                  View Project
                  <span className="flex items-center justify-center w-6 h-6 border border-current rounded-full text-[10px]">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
