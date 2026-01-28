"use client";

import { GlobalHeader } from "@/components/GlobalHeader";
import { works, ContentBlock } from "@/data/works";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Copyright } from "@/components/Copyright";

// =================================================================
// 共通コンポーネント
// =================================================================
const SingleContentBlock = ({ block, headerMbClass }: { block: ContentBlock, headerMbClass: string }) => {
  if (!block) return null;

  return (
    <div className="flex flex-col gap-4">
      {block.title && (
         <h4 className={`text-[16px] md:text-[20px] leading-[1.3] tracking-[0.02em] font-medium`}>
           {block.title}
         </h4>
      )}
      {block.imageUrl && (
        <div className="">
          <img src={block.imageUrl} alt={block.title || "Image"} className="w-full h-auto rounded-sm object-cover" />
        </div>
      )}
      <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.02em] opacity-75 whitespace-pre-wrap">
        {block.text}
      </p>
    </div>
  );
};

const MultiContentBlocks = ({ blocks, headerMbClass }: { blocks: ContentBlock[], headerMbClass: string }) => {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      {blocks.map((block, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          {block.title && (
             <h4 className={`text-[16px] md:text-[20px] leading-[1.3] tracking-[0.02em] font-medium`}>
               {block.title}
             </h4>
          )}
          {block.imageUrl && (
            <div className="">
              <img src={block.imageUrl} alt={block.title || "Image"} className="w-full h-auto rounded-sm object-cover" />
            </div>
          )}
          <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.02em] opacity-75 whitespace-pre-wrap">
            {block.text}
          </p>
        </div>
      ))}
    </div>
  );
};

// =================================================================
// メインコンポーネント
// =================================================================
export default function WorkDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const workIndex = works.findIndex((work) => work.slug === slug);
  const currentWork = works[workIndex];
  const nextIndex = (workIndex + 1) % works.length;
  const nextWork = works[nextIndex];

  useThemeColor(currentWork?.detailTheme?.bg || "");

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!currentWork) {
    if (mounted) return notFound();
    return null;
  }

  if (!mounted) return null;

  // Styles
  const isDetailLightMode = currentWork.detailTheme.text !== "#FFFFFF";

  const glassClass = isDetailLightMode
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

  const summary = currentWork.desc?.summary;
  const sections = currentWork.desc?.sections;
  const hasBackground = !!summary?.background;
  const hasSolution = !!summary?.solution;
  const hasResult = !!summary?.result;
  const showIdeaBox = sections && sections.length > 0;
  const showSummaryBox = currentWork.desc?.overview || hasBackground || hasSolution || hasResult;
  const headerMbClass = "mb-[12px]";

  const showVisitButton = currentWork.url && currentWork.url !== "" && currentWork.url !== "#";

  return (
    <>
      <GlobalHeader />

      <main
        className="w-full min-h-screen transition-colors duration-500 pt-[72px] pb-20"
        style={{ backgroundColor: currentWork.detailTheme.bg }}
      >
        <div className="max-w-[880px] mx-auto px-5 md:px-20 w-full" style={textColor}>

          {/* 1. Hero Card */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            <h1 className="font-inter font-bold text-[32px] md:text-[64px] leading-[1.1] tracking-[0.04em] mb-6 md:mb-[28px] break-words">
              {currentWork.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-10 mb-6 md:mb-8">
              
              {/* ★修正: md:gap-8 (32px) に変更 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
                
                <div className={metaItemGap}>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40">Category</span>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[0.02em] whitespace-nowrap">{currentWork.category}</span>
                </div>
                
                <div className={metaItemGap}>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40">Date</span>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[0.02em] whitespace-nowrap">{currentWork.date}</span>
                </div>

                <div className={metaItemGap}>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40">Role</span>
                  <span className="font-inter text-[12px] md:text-[14px] leading-none tracking-[0.02em]">{currentWork.role}</span>
                </div>

              </div>

              {showVisitButton && (
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

            <div className="mt-[24px] md:mt-[32px] w-full">
               {currentWork.images && currentWork.images[0] && (
                  <img src={currentWork.images[0]} alt="Main Visual" className="block w-full aspect-[16/10] object-cover rounded-sm" />
               )}
            </div>
          </section>

          {/* 2. Overview & Summary */}
          {showSummaryBox && (
            <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass} font-noto`}>
              <div className="max-w-[720px] mx-auto">
                {currentWork.desc.overview && (
                  <div className="mb-3 md:mb-5">
                     <h3 className={`font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40 ${headerMbClass}`}>Overview</h3>
                     <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.02em] opacity-75 whitespace-pre-wrap">{currentWork.desc.overview}</p>
                  </div>
                )}
                {summary && (
                  <div className="flex flex-col gap-6 md:gap-10 pt-3 md:pt-5">
                    {hasBackground && summary.background && (
                      <div><h3 className={`font-inter text-[12px] md:text-[14px] opacity-40 ${headerMbClass}`}>Background</h3><SingleContentBlock block={summary.background} headerMbClass={headerMbClass} /></div>
                    )}
                    {hasSolution && summary.solution && (
                      <div><h3 className={`font-inter text-[12px] md:text-[14px] opacity-40 ${headerMbClass}`}>Solution</h3><SingleContentBlock block={summary.solution} headerMbClass={headerMbClass} /></div>
                    )}
                    {hasResult && summary.result && (
                      <div><h3 className={`font-inter text-[12px] md:text-[14px] opacity-40 ${headerMbClass}`}>Result</h3><SingleContentBlock block={summary.result} headerMbClass={headerMbClass} /></div>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 3. Process */}
          {showIdeaBox && (
            <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass} font-noto`}>
              <div className="max-w-[720px] mx-auto">
                <h3 className={`font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40 mb-3 md:mb-3`}>Process</h3>
                {sections && <MultiContentBlocks blocks={sections} headerMbClass={headerMbClass} />}
              </div>
            </section>
          )}

          {/* 4. Gallery */}
          {hasGalleryImages && (
            <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
               <div className="flex flex-col gap-[24px] md:gap-[40px]">
                 {currentWork.images.slice(1, 6).map((imgUrl, idx) => (
                   <img key={idx} src={imgUrl} alt={`Gallery ${idx + 1}`} className="w-full h-auto rounded-sm" />
                 ))}
               </div>
            </section>
          )}

          {/* 5. Tools Section */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            <div className="max-w-[720px] mx-auto">
               <h3 className="font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40 mb-4">Tools</h3>
               <p className="font-inter text-[14px] md:text-[16px] leading-[1.6] tracking-[0.02em] opacity-75">
                 {currentWork.tools.join(" / ")}
               </p>
            </div>
          </section>

          {/* 6. Footer Navigation */}
          <div className="flex flex-row gap-[8px] md:gap-[12px] mt-2 md:mt-[12px]">
            <Link href="/" className={`flex-1 ${baseNavButtonClass}`}>
              <span className="font-inter font-bold text-[12px] md:text-[20px] tracking-wider group-hover:opacity-60 transition-opacity">‹ Works</span>
            </Link>
            <Link href={`/works/${nextWork.slug}`} className={`flex-[2] ${baseNavButtonClass}`}>
              <div className="flex flex-row items-center gap-2 md:gap-4 w-full overflow-hidden">
                  <span className="font-inter font-bold text-[12px] md:text-[20px] tracking-wider whitespace-nowrap shrink-0 group-hover:opacity-60 transition-opacity">
                    Next Project <span className="ml-1">›</span>
                  </span>
                  <span className="font-inter text-[10px] md:text-[20px] opacity-60 truncate group-hover:opacity-40 transition-opacity">{nextWork.title}</span>
              </div>
            </Link>
          </div>
          <div className="mt-10 md:mt-12 w-full"><Copyright className="text-white mix-blend-difference" /></div>
        </div>
      </main>
    </>
  );
}