"use client";

import { GlobalHeader } from "@/components/GlobalHeader";
import { works } from "@/data/works";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WorkDetail() {
  const params = useParams();
  const slug = params.slug as string;

  // データ取得
  const currentIndex = works.findIndex((work) => work.slug === slug);
  const currentWork = works[currentIndex];
  const nextIndex = (currentIndex + 1) % works.length;
  const nextWork = works[nextIndex];

  // クライアントサイドでのレンダリング待機
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!currentWork) {
    notFound();
    return null;
  }

  if (!mounted) return null;

  // =================================================================
  // スタイル定義
  // =================================================================

  // ガラスの質感
  const glassClass = currentWork.theme.isLight
    ? "bg-white/50 border border-white/60 backdrop-blur-md" // Light
    : "bg-white/[0.04] border border-white/10 backdrop-blur-[20px]"; // Dark

  // 共通カードクラス
  // SP: 12px, PC: 16px
  const cardClass = `rounded-[12px] md:rounded-[16px] w-full transition-colors duration-500 ${glassClass}`;

  // Gap設定 (Bento Grid ごとの余白)
  // PC: 12px, SP: 8px
  const gridGapClass = "mb-2 md:mb-[12px]";

  // Bento Grid 内の余白 (PC: 上下56px 左右40px / SP: 上下32px 左右20px)
  const cardPaddingClass = "py-[32px] px-[20px] md:py-[56px] md:px-[40px]";

  // テキストカラー
  const textColor = { color: currentWork.detailTheme.text };

  // ギャラリー画像があるかどうかの判定 (メイン以外の画像があるか)
  const hasGalleryImages = currentWork.images && currentWork.images.length > 1;

  return (
    <>
      <GlobalHeader />

      <main
        className="w-full min-h-screen transition-colors duration-500 pt-[72px] pb-20"
        style={{ backgroundColor: currentWork.detailTheme.bg }}
      >
        {/* コンテナ: Max 880px (コンテンツ実質720px + padding 160px) */}
        <div className="max-w-[880px] mx-auto px-5 md:px-20 w-full" style={textColor}>

          {/* =================================================
              1. Hero Card
          ================================================= */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            {/* タイトル */}
            <h1 className="font-inter font-bold text-[44px] md:text-[72px] leading-[1.1] tracking-[0.04em] mb-6 md:mb-[28px] break-words">
              {currentWork.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-20 mb-6 md:mb-8">
              {/* Meta Info */}
              <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full">
                {/* Category */}
                <div className="flex flex-col gap-3 md:gap-2">
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40">Category</span>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[0.02em]">{currentWork.category}</span>
                </div>
                {/* Role */}
                <div className="flex flex-col gap-3 md:gap-2">
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40">Role</span>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[0.02em]">{currentWork.role}</span>
                </div>
                {/* Year */}
                <div className="flex flex-col gap-3 md:gap-2">
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40">Date</span>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[0.02em]">{currentWork.year}</span>
                </div>
              </div>

              {/* Visit Website Button */}
              {/* ★修正: URLがある場合のみ表示 */}
              {currentWork.url && (
                <div className="shrink-0 mt-2 md:mt-0">
                  <a
                    href={currentWork.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-inter font-medium text-[14px] md:text-[16px] leading-none tracking-[0.02em] hover:opacity-60 transition-opacity group"
                    style={{ color: currentWork.detailTheme.text }}
                  >
                    Visit Website
                    <span className="group-hover:translate-x-1 transition-transform">›</span>
                  </a>
                </div>
              )}
            </div>

            {/* Main Visual */}
            <div className="mt-[24px] md:mt-[32px] w-full">
               {currentWork.images && currentWork.images[0] && (
                  <img
                    src={currentWork.images[0]}
                    alt="Main Visual"
                    className="block w-full aspect-[16/10] object-cover rounded-sm"
                  />
               )}
            </div>
          </section>

          {/* =================================================
              2. Context Card (Overview, Insight, Idea)
          ================================================= */}
          {currentWork.desc && (
            <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass} font-noto`}>
              
              <div className="max-w-[720px] mx-auto">
                {/* Overview */}
                <div className="mb-6 md:mb-[40px]">
                   <h3 className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40 mb-[12px] md:mb-[16px]">Overview</h3>
                   <p className="text-[12px] md:text-[14px] leading-[1.8] tracking-[0.02em] opacity-75 whitespace-pre-wrap">{currentWork.desc.overview}</p>
                </div>
                {/* Insight */}
                <div className="mb-6 md:mb-[40px]">
                   <h3 className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40 mb-[12px] md:mb-[16px]">Insight</h3>
                   <h4 className="text-[16px] md:text-[20px] leading-[1.3] tracking-[0.02em] font-medium mb-[12px] md:mb-[16px]">{currentWork.desc.insight}</h4>
                   <p className="text-[12px] md:text-[14px] leading-[1.8] tracking-[0.02em] opacity-75 whitespace-pre-wrap">{currentWork.desc.insightText}</p>
                </div>
                {/* Idea */}
                <div>
                   <h3 className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40 mb-[12px] md:mb-[16px]">Idea</h3>
                   <h4 className="text-[16px] md:text-[20px] leading-[1.3] tracking-[0.02em] font-medium mb-[12px] md:mb-[16px]">{currentWork.desc.idea}</h4>
                   <p className="text-[12px] md:text-[14px] leading-[1.8] tracking-[0.02em] opacity-75 whitespace-pre-wrap">{currentWork.desc.ideaText}</p>
                </div>
              </div>

            </section>
          )}

          {/* =================================================
              3. Gallery Cards
          ================================================= */}
          {/* ★修正: メイン以外の画像がある場合のみセクションを表示 */}
          {hasGalleryImages && (
            <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
               <div className="flex flex-col gap-[24px] md:gap-[40px]">
                 {/* slice(1) で2枚目以降を表示 */}
                 {currentWork.images.slice(1).map((imgUrl, idx) => (
                   <img key={idx} src={imgUrl} alt={`Gallery ${idx + 1}`} className="w-full h-auto rounded-sm" />
                 ))}
               </div>
            </section>
          )}

          {/* =================================================
              4. Navigation Footer
          ================================================= */}
          <div className="flex flex-col md:flex-row gap-[8px] md:gap-[12px] mt-2 md:mt-[12px]">
            
            {/* TOP Button */}
            <Link
              href="/"
              className={`group md:w-1/3 w-full flex flex-col items-start justify-center py-[28px] px-[20px] md:py-[48px] md:px-[40px] transition-transform duration-300 hover:-translate-y-1 ${cardClass}`}
            >
              <span className="font-inter font-medium text-[14px] md:text-[20px] tracking-wider group-hover:opacity-60 transition-opacity">
                ‹ TOP
              </span>
            </Link>

            {/* Next Project Button */}
            <Link
              href={`/works/${nextWork.slug}`}
              className={`group md:flex-1 w-full flex flex-col items-start justify-center py-[40px] px-[20px] md:py-[48px] md:px-[40px] transition-transform duration-300 hover:-translate-y-1 ${cardClass}`}
            >
              <div className="flex flex-row items-center gap-2 md:gap-4 w-full">
                 <span className="font-inter font-medium text-[14px] md:text-[20px] tracking-wider whitespace-nowrap shrink-0">
                   Next Project <span className="ml-1">›</span>
                 </span>
                 <span className="font-inter text-[12px] md:text-[20px] opacity-60 break-all">
                   {nextWork.title}
                 </span>
              </div>
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
