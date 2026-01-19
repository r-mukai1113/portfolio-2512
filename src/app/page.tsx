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
        if (currentIndex < works.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          // ループせず0に戻す（1枚目の上に表示させないため）
          setCurrentIndex(0);
        }
      } else {
        // 上スクロール: 前へ
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

      const sections =
        spContainerRef.current.querySelectorAll(".sp-card-section");
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

      {/* ==============================================
          PC View
      ============================================== */}
      <main
        className="hidden md:flex h-screen w-full pt-[72px]"
        style={{ color: textColor }}
      >
        {/* 左カラム: テキスト
            - pl-20 (80px)
            - pr-12 (48px) -> サムネイルとのGap
        */}
        <div className="w-1/2 h-full flex items-center pl-20 pr-12">
          <div className="max-w-[520px] w-full">
            {/* 1. タイトル (Bold 700) */}
            <h1 className="font-inter text-[72px] leading-[1.1] tracking-[0.04em] font-bold mb-8">
              {currentWork.title}
            </h1>

            {/* 2. サブ情報 */}
            <div className="font-inter text-[14px] leading-[1.0] tracking-[0.02em] opacity-60 mb-6">
              <span>{currentWork.category}</span>
              <span className="mx-2">|</span>
              <span className="mx-2">{currentWork.year}</span>
            </div>

            {/* 3. 説明文 */}
            <p
              className="font-noto text-[14px] leading-[2.0] tracking-[0.04em] opacity-80 mb-10 font-normal"
              dangerouslySetInnerHTML={{ __html: currentWork.desc }}
            />

            {/* 4. ボタン (変更) */}
            <a
              href={currentWork.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-medium no-underline hover:opacity-70 transition-opacity"
              style={{ color: textColor }}
            >
              View Project
              {/* アイコン変更: › , サイズ16px */}
              <span className="text-[16px] leading-none pb-[2px]">›</span>
            </a>
          </div>
        </div>

        {/* 右カラム: 画像 + ドット
            - 画像サイズをFlexで可変にする構成
            - 左(テキスト)とのGapは左カラムのpr-12で確保済み
        */}
        <div className="w-1/2 h-full flex">
          
          {/* 画像リストコンテナ (Flex-1: 残りの幅を埋める) */}
          <div className="flex-1 h-full relative overflow-hidden">
            <div
              className="absolute left-0 w-full transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                /* 中央配置の計算ロジック:
                   「画面中央(50%)」に「画像の中心」を合わせる
                   - currentIndex * (100% + 80px) でスライド
                   - 1枚目(index 0)の時は、画面中央に配置され、その上に画像は存在しない
                */
                top: "50%",
                transform: `translateY(calc(-50% - ${currentIndex * (100 + 80)}px))`, 
              }}
            >
              {works.map((work, index) => (
                <div
                    key={work.id}
                    className="w-full mb-[80px] last:mb-0" // 画像間の余白 80px
                >
                    <img
                        src={work.thumbnail}
                        alt={work.title}
                        className={`block w-full aspect-[16/10] object-cover rounded-sm transition-all duration-[800ms] ${
                        index === currentIndex
                            ? "opacity-100 grayscale-0 scale-100 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                            : "opacity-30 grayscale scale-95 shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
                        }`}
                    />
                </div>
              ))}
            </div>
          </div>

          {/* ドットナビゲーション & 右余白エリア 
             - Gap: 32px (ml-8) -> 画像との間
             - Button Width: 8px (w-2)
             - Right Margin: 80px (mr-20)
             => 合計で画面右端から120px程度の空間を確保
          */}
          <div className="ml-8 mr-20 h-full flex flex-col justify-center items-center gap-4 z-10 w-2 shrink-0">
            {works.map((work, index) => (
              <button
                key={work.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-4 rounded-full cursor-pointer transition-all border-0 ${
                  index === currentIndex
                    ? "opacity-100 bg-current"
                    : "opacity-30 bg-current hover:opacity-60"
                }`}
                style={{ backgroundColor: textColor }}
                aria-label={`Go to ${work.title}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* ==============================================
          SP View
      ============================================== */}
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
            className="sp-card-section h-screen w-full snap-start flex items-start justify-center"
          >
            {/* コンテナ余白: 画面左右20px (px-5) */}
            <div className="w-full h-full px-5 pb-5 pt-4"> 
                <div
                // カード内余白: 縦48px(py-12), 横20px(px-5)
                className={`w-full h-[90%] rounded-xl flex flex-col justify-between transition-all duration-500 py-12 px-5 ${
                    work.theme.isLight
                    ? "bg-white/50 border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
                    : "bg-white/[0.04] backdrop-blur-[20px] border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
                }`}
                style={{ color: work.theme.isLight ? "#333" : "#FFF" }}
                >
                <img
                    src={work.thumbnail}
                    alt={work.title}
                    // 画像とタイトルのGap: mb-8 (32px)
                    className="w-full aspect-[16/10] object-cover rounded mb-8 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                />

                <div className="mt-auto">
                    {/* 1. タイトル (Bold 700) */}
                    <h2 className="font-inter text-[44px] leading-[1.05] font-bold mb-6">
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

                    {/* 4. ボタン (変更) */}
                    <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] flex items-center gap-2 font-medium no-underline hover:opacity-70 transition-opacity"
                    style={{ color: work.theme.isLight ? "#333" : "#FFF" }}
                    >
                    View Project
                    {/* アイコン変更: › */}
                    <span className="text-[16px] leading-none pb-[2px]">›</span>
                    </a>
                </div>
                </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
