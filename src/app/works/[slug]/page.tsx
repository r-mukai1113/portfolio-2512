"use client";

import { GlobalHeader } from "@/components/GlobalHeader";
import { works } from "@/data/works";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Copyright } from "@/components/Copyright";

// ★重要: generateStaticParams が必要な場合はコメントアウトを外してください
/*
export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}
*/

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
  // スタイル定義
  // =================================================================

  const glassClass = currentWork.theme.isLight
    ? "bg-white/50 border border-white/60 backdrop-blur-md"
    : "bg-white/[0.04] border border-white/10 backdrop-blur-[20px]";

  const cardClass = `rounded-[12px] md:rounded-[16px] w-full transition-colors duration-500 ${glassClass}`;
  const gridGapClass = "mb-2 md:mb-[12px]";
  const cardPaddingClass = "py-[32px] px-[20px] md:py-[56px] md:px-[40px]";
  const textColor = { color: currentWork.detailTheme.text };
  
  const hasGalleryImages = currentWork.images && currentWork.images.length > 1;

  const metaItemGap = "flex flex-col gap-3 md:gap-[12px]";
  const navButtonPadding = "px-[20px] md:px-[40px]";
  const baseNavButtonClass = `group flex flex-col items-start justify-center ${cardClass} ${navButtonPadding} h-[72px] md:h-[120px] hover:-translate-y-1`;

  // 表示ロジック
  const showInsight = currentWork.desc?.insight || currentWork.desc?.insightText;
  const showIdea = currentWork.desc?.idea || currentWork.desc?.ideaText;
  
  // Tools がある場合のみ、下部のカードを表示する
  const showToolsCard = currentWork.tools && currentWork.tools.length > 0;

  return (
    <>
      <GlobalHeader />

      <main
        className="w-full min-h-screen transition-colors duration-500 pt-[72px] pb-20"
        style={{ backgroundColor: currentWork.detailTheme.bg }}
      >
        <div className="max-w-[880px] mx-auto px-5 md:px-20 w-full" style={textColor}>

          {/* =================================================
              1. Hero Card
          ================================================= */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            <h1 className="font-inter font-bold text-[32px] md:text-[64px] leading-[1.1] tracking-[0.04em] mb-6 md:mb-[28px] break-words">
              {currentWork.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-20 mb-6 md:mb-8">
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
                {/* Category */}
                <div className={metaItemGap}>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40">Category</span>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[0.02em]">{currentWork.category}</span>
                </div>
                {/* Role */}
                <div className={metaItemGap}>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40">Role</span>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[0.02em]">{currentWork.role}</span>
                </div>
                {/* Year */}
                <div className={metaItemGap}>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40">Year</span>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[0.02em]">{currentWork.year}</span>
                </div>
              </div>

              {/* Visit Website Button (Hero Card: 復活) */}
              {currentWork.url && (
                <div className="shrink-0 -mt-2 md:mt-0">
                  <a
                    href={currentWork.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-inter font-normal text-[14px] md:text-[16px] leading-none tracking-[0.02em] hover:opacity-60 transition-opacity group"
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
              2. Context Card
          ================================================= */}
          {currentWork.desc && (
            <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass} font-noto`}>
              <div className="max-w-[720px] mx-auto">
                <div className="mb-6 md:mb-[40px]">
                   <h3 className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40 mb-[12px] md:mb-[16px]">Overview</h3>
                   <p className="text-[12px] md:text-[14px] leading-[1.8] tracking-[0.02em] opacity-75 whitespace-pre-wrap">{currentWork.desc.overview}</p>
                </div>

                {showInsight && (
                  <div className="mb-6 md:mb-[40px]">
                    <h3 className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40 mb-[12px] md:mb-[16px]">Insight</h3>
                    {currentWork.desc.insight && (
                      <h4 className="text-[16px] md:text-[20px] leading-[1.3] tracking-[0.02em] font-medium mb-[12px] md:mb-[16px]">{currentWork.desc.insight}</h4>
                    )}
                    {currentWork.desc.insightText && (
                      <p className="text-[12px] md:text-[14px] leading-[1.8] tracking-[0.02em] opacity-75 whitespace-pre-wrap">{currentWork.desc.insightText}</p>
                    )}
                  </div>
                )}

                {showIdea && (
                  <div>
                    <h3 className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40 mb-[12px] md:mb-[16px]">Idea</h3>
                    {currentWork.desc.idea && (
                      <h4 className="text-[16px] md:text-[20px] leading-[1.3] tracking-[0.02em] font-medium mb-[12px] md:mb-[16px]">{currentWork.desc.idea}</h4>
                    )}
                    {currentWork.desc.ideaText && (
                      <p className="text-[12px] md:text-[14px] leading-[1.8] tracking-[0.02em] opacity-75 whitespace-pre-wrap">{currentWork.desc.ideaText}</p>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* =================================================
              3. Gallery Cards
          ================================================= */}
          {hasGalleryImages && (
            <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
               <div className="flex flex-col gap-[24px] md:gap-[40px]">
                 {currentWork.images.slice(1, 6).map((imgUrl, idx) => (
                   <img key={idx} src={imgUrl} alt={`Gallery ${idx + 1}`} className="w-full h-auto rounded-sm" />
                 ))}
               </div>
            </section>
          )}

          {/* =================================================
              ★新規: Tools Card (Toolsがある場合のみ表示)
          ================================================= */}
          {showToolsCard && (
            <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
              <div className="flex flex-col gap-6 md:gap-8">
                
                {/* Tools Section */}
                {/* showToolsCardの条件でToolsがあることは確定しているが、念のためチェック */}
                {currentWork.tools && currentWork.tools.length > 0 && (
                  <div className="flex flex-col gap-3 md:gap-4">
                     <h3 className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40">
                       Tools
                     </h3>
                     <p className="font-inter text-[14px] md:text-[16px] leading-relaxed tracking-[0.02em]">
                        {currentWork.tools.join(", ")}
                     </p>
                  </div>
                )}

                {/* Website Link Section (Bottom) */}
                {/* Toolsがあることが前提なので、上部にボーダーを入れて区切る */}
                {currentWork.url && (
                  <div className="border-t border-current/10 pt-6 md:pt-8">
                     <a
                        href={currentWork.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-inter font-normal text-[14px] md:text-[16px] leading-none tracking-[0.02em] hover:opacity-60 transition-opacity group"
                        style={{ color: currentWork.detailTheme.text }}
                      >
                        Visit Website
                        <span className="group-hover:translate-x-1 transition-transform">›</span>
                      </a>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* =================================================
              4. Navigation Footer
          ================================================= */}
          <div className="flex flex-row gap-[8px] md:gap-[12px] mt-2 md:mt-[12px]">
            <Link
              href="/"
              className={`flex-1 ${baseNavButtonClass}`}
            >
              {/* 修正: text-[14px] -> text-[12px] に変更 */}
              <span className="font-inter font-bold text-[12px] md:text-[20px] tracking-wider group-hover:opacity-60 transition-opacity">
                ‹ Works
              </span>
            </Link>

            <Link
              href={`/works/${nextWork.slug}`}
              className={`flex-[2] ${baseNavButtonClass}`}
            >
              <div className="flex flex-row items-center gap-2 md:gap-4 w-full overflow-hidden">
                  {/* 修正: text-[14px] -> text-[12px] に変更 */}
                  <span className="font-inter font-bold text-[12px] md:text-[20px] tracking-wider whitespace-nowrap shrink-0 group-hover:opacity-60 transition-opacity">
                    Next Project <span className="ml-1">›</span>
                  </span>
                  {/* 修正: text-[12px] -> text-[10px] に変更してメリハリをつける */}
                  <span className="font-inter text-[10px] md:text-[20px] opacity-60 truncate group-hover:opacity-40 transition-opacity">
                    {nextWork.title}
                  </span>
              </div>
            </Link>
          </div>

          {/* 5. Copyright */}
          <div className="mt-10 md:mt-12 w-full">
            <Copyright className="text-white mix-blend-difference" />
          </div>

        </div>
      </main>
    </>
  );
}
