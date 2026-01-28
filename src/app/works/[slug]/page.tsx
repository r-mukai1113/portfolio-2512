"use client";

import { GlobalHeader } from "@/components/GlobalHeader";
import { works } from "@/data/works";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Copyright } from "@/components/Copyright";

export default function WorkDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const currentIndex = works.findIndex((work) => work.slug === slug);
  const currentWork = works[currentIndex];
  const nextIndex = (currentIndex + 1) % works.length;
  const nextWork = works[nextIndex];

  useThemeColor(currentWork?.detailTheme?.bg || "");

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
  // Figma準拠のスタイル定義
  // =================================================================

  // 背景色
  const bgColor = "#ebebeb";
  const textColor = "#1e1e1e";
  const textColorMuted = "#333";

  // ガラスカードスタイル
  const glassCardClass = `
    rounded-[16px] w-full
    bg-gradient-to-r from-white/20 to-white/[0.32]
    border border-white/30
    backdrop-blur-md
  `;

  const cardPaddingClass = "py-[56px] px-[20px] md:px-[40px]";
  const gridGapClass = "mb-[12px]";

  // descV2がある場合はそちらを使用、なければdescから生成
  const descV2 = currentWork.descV2 || {
    overview: currentWork.desc?.overview || "",
    background: currentWork.desc?.insight ? {
      title: currentWork.desc.insight,
      text: currentWork.desc.insightText || "",
      image: currentWork.images?.[1]
    } : undefined,
    solution: currentWork.desc?.idea ? {
      title: currentWork.desc.idea,
      text: currentWork.desc.ideaText || "",
      image: currentWork.images?.[2]
    } : undefined,
  };

  const hasGalleryImages = currentWork.images && currentWork.images.length > 1;

  return (
    <>
      <GlobalHeader />

      <main
        className="w-full min-h-screen pt-[72px] pb-[40px]"
        style={{ backgroundColor: bgColor }}
      >
        <div className="max-w-[880px] mx-auto px-5 md:px-20 w-full relative">

          {/* =================================================
              TOPへ戻るボタン（左上に配置）
          ================================================= */}
          <Link
            href="/"
            className="absolute left-5 md:left-0 top-0 -translate-x-0 md:-translate-x-full flex items-center gap-1 font-noto font-bold text-[14px] tracking-[0.02em] text-black hover:opacity-60 transition-opacity"
          >
            <span className="rotate-180 text-[12px]">›</span>
            <span>TOP</span>
          </Link>

          {/* =================================================
              1. Hero Card
          ================================================= */}
          <section className={`${glassCardClass} ${cardPaddingClass} ${gridGapClass}`}>
            <div className="flex flex-col gap-[28px]">
              {/* Title */}
              <h1
                className="font-inter font-semibold text-[32px] md:text-[48px] leading-[1.1] tracking-[0.04em]"
                style={{ color: textColor }}
              >
                {currentWork.title}
              </h1>

              {/* Meta Info + Visit Button */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 max-w-[640px]">
                {/* Meta Items */}
                <div className="flex flex-wrap gap-6 md:gap-8 font-inter font-medium" style={{ color: textColorMuted }}>
                  {/* Category */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[14px] leading-none tracking-[-0.01em] opacity-40">Category</span>
                    <span className="text-[12px] leading-none tracking-[0.02em]">{currentWork.category}</span>
                  </div>
                  {/* Date */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[14px] leading-none tracking-[-0.01em] opacity-40">Date</span>
                    <span className="text-[12px] leading-none tracking-[0.02em]">{currentWork.year}</span>
                  </div>
                  {/* Role */}
                  <div className="flex flex-col gap-3 flex-1 min-w-[120px]">
                    <span className="text-[14px] leading-none tracking-[-0.01em] opacity-40">Role</span>
                    <span className="text-[12px] leading-[1.3] tracking-[0.02em]">{currentWork.role}</span>
                  </div>
                </div>

                {/* Visit Website Button */}
                {currentWork.url && (
                  <a
                    href={currentWork.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-[2px] font-inter font-medium text-[14px] leading-none tracking-[0.02em] hover:opacity-60 transition-opacity shrink-0"
                    style={{ color: textColor }}
                  >
                    Visit Website
                    <span className="text-[16px]">›</span>
                  </a>
                )}
              </div>
            </div>

            {/* Main Thumbnail */}
            <div className="mt-[32px]">
              {currentWork.images && currentWork.images[0] ? (
                <img
                  src={currentWork.images[0]}
                  alt="Main Visual"
                  className="block w-full aspect-[1920/1200] object-cover bg-[#c0c0c0]"
                />
              ) : (
                <div className="w-full aspect-[1920/1200] bg-[#c0c0c0]" />
              )}
            </div>
          </section>

          {/* =================================================
              2. Content Card (Overview, Background, Solution, Result)
          ================================================= */}
          <section className={`${glassCardClass} ${cardPaddingClass} ${gridGapClass}`}>
            <div className="flex flex-col gap-[40px]">

              {/* Overview */}
              {descV2.overview && (
                <div className="flex flex-col gap-3">
                  <span
                    className="font-inter font-medium text-[14px] leading-none tracking-[-0.01em] opacity-40"
                    style={{ color: textColorMuted }}
                  >
                    Overview
                  </span>
                  <p
                    className="font-noto font-medium text-[14px] md:text-[16px] leading-[1.8] tracking-[0.02em] opacity-75"
                    style={{ color: textColor }}
                  >
                    {descV2.overview}
                  </p>
                </div>
              )}

              {/* Background */}
              {descV2.background && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <span
                      className="font-inter font-medium text-[14px] leading-none tracking-[-0.01em] opacity-40"
                      style={{ color: textColorMuted }}
                    >
                      Background
                    </span>
                    <h3
                      className="font-noto font-bold text-[18px] md:text-[20px] leading-[1.3] tracking-[0.02em]"
                      style={{ color: textColor }}
                    >
                      {descV2.background.title}
                    </h3>
                    {descV2.background.image && (
                      <img
                        src={descV2.background.image}
                        alt="Background"
                        className="w-full aspect-[1600/900] object-cover bg-[#c0c0c0]"
                      />
                    )}
                  </div>
                  <p
                    className="font-noto font-medium text-[14px] md:text-[16px] leading-[1.8] tracking-[0.02em] opacity-75"
                    style={{ color: textColor }}
                  >
                    {descV2.background.text}
                  </p>
                </div>
              )}

              {/* Solution */}
              {descV2.solution && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <span
                      className="font-inter font-medium text-[14px] leading-none tracking-[-0.01em] opacity-40"
                      style={{ color: textColorMuted }}
                    >
                      Solution
                    </span>
                    <h3
                      className="font-noto font-bold text-[18px] md:text-[20px] leading-[1.3] tracking-[0.02em]"
                      style={{ color: textColor }}
                    >
                      {descV2.solution.title}
                    </h3>
                    {descV2.solution.image && (
                      <img
                        src={descV2.solution.image}
                        alt="Solution"
                        className="w-full aspect-[1600/900] object-cover bg-[#c0c0c0]"
                      />
                    )}
                  </div>
                  <p
                    className="font-noto font-medium text-[14px] md:text-[16px] leading-[1.8] tracking-[0.02em] opacity-75"
                    style={{ color: textColor }}
                  >
                    {descV2.solution.text}
                  </p>
                </div>
              )}

              {/* Result */}
              {descV2.result && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <span
                      className="font-inter font-medium text-[14px] leading-none tracking-[-0.01em] opacity-40"
                      style={{ color: textColorMuted }}
                    >
                      Result
                    </span>
                    <h3
                      className="font-noto font-bold text-[18px] md:text-[20px] leading-[1.3] tracking-[0.02em]"
                      style={{ color: textColor }}
                    >
                      {descV2.result.title}
                    </h3>
                  </div>
                  <p
                    className="font-noto font-medium text-[14px] md:text-[16px] leading-[1.8] tracking-[0.02em] opacity-75"
                    style={{ color: textColor }}
                  >
                    {descV2.result.text}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* =================================================
              3. Process Card
          ================================================= */}
          {descV2.processes && descV2.processes.length > 0 && (
            <section className={`${glassCardClass} ${cardPaddingClass} ${gridGapClass}`}>
              <span
                className="font-inter font-medium text-[14px] leading-none tracking-[-0.01em] opacity-40 block mb-3"
                style={{ color: textColorMuted }}
              >
                Process
              </span>
              <div className="flex flex-col gap-[40px]">
                {descV2.processes.map((process, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                      <h3
                        className="font-noto font-bold text-[18px] md:text-[20px] leading-[1.3] tracking-[0.02em]"
                        style={{ color: textColor }}
                      >
                        {process.title}
                      </h3>
                      {process.image && (
                        <img
                          src={process.image}
                          alt={process.title}
                          className="w-full aspect-[1600/900] object-cover bg-[#c0c0c0]"
                        />
                      )}
                    </div>
                    <p
                      className="font-noto font-bold text-[14px] md:text-[16px] leading-[1.8] tracking-[0.02em] opacity-75"
                      style={{ color: textColor }}
                    >
                      {process.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* =================================================
              4. Gallery Card
          ================================================= */}
          {hasGalleryImages && (
            <section className={`${glassCardClass} ${cardPaddingClass} ${gridGapClass}`}>
              <div className="flex flex-col gap-[40px]">
                {currentWork.images.slice(1, 6).map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-auto object-cover bg-[#c0c0c0]"
                  />
                ))}
              </div>
            </section>
          )}

          {/* =================================================
              5. Tools Card
          ================================================= */}
          {currentWork.tools && currentWork.tools.length > 0 && (
            <section className={`${glassCardClass} ${cardPaddingClass} ${gridGapClass}`}>
              <div className="flex flex-col gap-3">
                <span
                  className="font-inter font-medium text-[14px] leading-none tracking-[-0.01em] opacity-40"
                  style={{ color: textColorMuted }}
                >
                  Tools
                </span>
                <p
                  className="font-noto font-bold text-[14px] leading-[1.8] tracking-[0.02em] opacity-75"
                  style={{ color: textColor }}
                >
                  {currentWork.tools.join(" / ")}
                </p>
              </div>
            </section>
          )}

          {/* =================================================
              6. Navigation Footer
          ================================================= */}
          <div className="flex flex-row gap-[12px] mt-0">
            {/* Works Button */}
            <Link
              href="/"
              className={`${glassCardClass} flex items-center gap-1 px-[20px] md:px-[40px] py-[32px] md:py-[48px] w-[180px] md:w-[284px] hover:-translate-y-1 transition-transform`}
            >
              <span className="rotate-180 text-[24px]" style={{ color: textColor }}>›</span>
              <span
                className="font-inter font-bold text-[16px] md:text-[20px] leading-none tracking-[0.02em]"
                style={{ color: textColor }}
              >
                Works
              </span>
            </Link>

            {/* Next Project Button */}
            <Link
              href={`/works/${nextWork.slug}`}
              className={`${glassCardClass} flex items-center gap-2 md:gap-4 px-[20px] md:px-[40px] py-[32px] md:py-[48px] flex-1 hover:-translate-y-1 transition-transform`}
            >
              <span
                className="font-inter font-bold text-[14px] md:text-[20px] leading-none tracking-[0.02em] whitespace-nowrap"
                style={{ color: textColor }}
              >
                Next Project
              </span>
              <span className="text-[24px]" style={{ color: textColor }}>›</span>
              <span
                className="font-inter font-semibold text-[14px] md:text-[20px] leading-none tracking-[0.02em] opacity-60 truncate"
                style={{ color: textColor }}
              >
                #{nextWork.title}
              </span>
            </Link>
          </div>

          {/* =================================================
              7. Copyright
          ================================================= */}
          <div className="mt-10 md:mt-12 w-full">
            <Copyright className="text-[#8c959f]" />
          </div>

        </div>
      </main>
    </>
  );
}
