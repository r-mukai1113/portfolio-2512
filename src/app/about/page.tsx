"use client";

import { useState } from "react";
import Link from "next/link";
import { GlobalHeader } from "@/components/GlobalHeader";
import { useThemeColor } from "@/hooks/useThemeColor";
import { likesData, LikeItem } from "@/data/likes";

export default function ProfilePage() {
  useThemeColor("#F0F2F5");

  const [selectedLike, setSelectedLike] = useState<LikeItem | null>(null);
  
  // アクセントカラー定義
  const ACCENT_COLOR = "#F37022";

  const currentIndex = selectedLike
    ? likesData.findIndex((item) => item.id === selectedLike.id)
    : -1;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== -1 && currentIndex < likesData.length - 1) {
      setSelectedLike(likesData[currentIndex + 1]);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedLike(likesData[currentIndex - 1]);
    }
  };

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedLike(null);
  }

  // =================================================================
  // デザインシステム
  // =================================================================

  const TEXT_STYLES = {
    LABEL: "font-inter text-[12px] md:text-[14px] leading-none tracking-[-0.01em] opacity-40 mb-4 block",
    CARD_TITLE: "font-noto font-bold text-[16px] md:text-[20px] leading-[1.3] tracking-[0.02em]",
    BODY: "font-noto text-[12px] md:text-[14px] leading-[1.8] tracking-[0.02em] opacity-80",
  };

  const glassClass = "bg-white/50 border border-white/60 backdrop-blur-md";
  const cardClass = `rounded-[12px] md:rounded-[16px] w-full transition-colors duration-500 ${glassClass}`;
  const gridGapClass = "mb-2 md:mb-[12px]";
  const cardPaddingClass = "py-[32px] px-[20px] md:py-[56px] md:px-[40px]";

  const navButtonPadding = "px-[20px] md:px-[40px]";
  const baseNavButtonClass = `group flex flex-col items-start justify-center ${cardClass} ${navButtonPadding} h-[72px] md:h-[120px] hover:-translate-y-1`;

  const modalTitleClass = "font-noto font-bold text-[16px] md:text-[20px] text-[#333] mb-4 text-center leading-[1.3] tracking-[0.02em]";
  const modalBodyClass = "font-noto text-[12px] md:text-[14px] text-[#666] leading-relaxed opacity-75 text-center";
  const modalNavButtonClass = "font-inter text-[10px] md:text-[12px] font-bold text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1 p-2";

  return (
    <>
      <GlobalHeader />

      <style jsx global>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-modal-overlay {
          animation: modalFadeIn 0.4s ease-out forwards;
        }
        .animate-modal-content {
          animation: modalSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <main className="w-full min-h-screen bg-[#F0F2F5] pt-[72px] pb-8 md:pb-10 transition-colors duration-500">
        
        <div className="max-w-[880px] mx-auto w-full px-5 md:px-20 text-[#333]">

          {/* 1. Main Identity */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            
            <div className="w-full aspect-[16/9] rounded-[4px] overflow-hidden mb-[24px] md:mb-[40px]">
              <img src="/images/2026portfolio_profile_2_1.png" alt="RYUTA MUKAI Profile" className="w-full h-full object-cover"/>
            </div>

            <div className="mb-[16px]">
              <span 
                className="block font-inter font-bold text-[12px] md:text-[16px] tracking-[0.02em] opacity-80 mb-[12px] md:mb-[16px]"
                style={{ color: ACCENT_COLOR }}
              >
                Web Designer
              </span>
              <h1 className="font-inter font-bold text-[32px] md:text-[48px] leading-none">
                RYUTA MUKAI
              </h1>
            </div>

            <div className="mt-8">
              <span className={TEXT_STYLES.LABEL}>Profile</span>
              <div className={TEXT_STYLES.BODY}>
                <p className="mb-6">
                  2000年生まれ、千葉県出身。Webデザイナー。<br />
                  装飾を極限まで削ぎ落とし、情報の「本質」だけを際立たせるミニマルなデザインを追求しています。
                </p>
                <p>
                  私の原点は、エンジニアとしての論理的思考と、機能美への探求心にあります。<br />
                  デザインとは単なる装飾ではなく、複雑な課題を解決するための「翻訳言語」です。クライアントの想いや価値を整理し、受け取り手にとって最もノイズレスで、心地よい形で届ける。そのための制作を続けています。
                </p>
              </div>
            </div>
          </section>

          {/* 2. mutalog */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className={TEXT_STYLES.LABEL}>Personal Media</span>
                <h2 className={`${TEXT_STYLES.CARD_TITLE} mb-6 whitespace-nowrap`}>暮らしの記録、ムタログ。</h2>
                
                <div className={`${TEXT_STYLES.BODY} mb-6`}>
                  <p className="mb-6">
                    生活のノイズを減らし、心に余白を作るためのライフログです。<br className="hidden md:block"/>
                    モノを厳選し、日々の小さな選択を整えることで生まれるエネルギーを大切にしています。
                  </p>
                  <p>
                    無印良品の機能美を通じ、心地よい暮らしのヒントを探究しています。<br className="hidden md:block"/>
                    部屋を整えることは、毎日を軽くすることだと考えています。
                  </p>
                </div>
              </div>
              
              {/* 修正: font-bold を削除し、font-medium (標準的な太さ) に変更 */}
              <a 
                href="https://www.instagram.com/mutalog_muji/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 font-inter font-medium text-[12px] md:text-[14px] opacity-60 hover:opacity-100 transition-opacity"
              >
                View Instagram <span className="text-[14px] md:text-[16px] mb-[2px]">›</span>
              </a>
            </div>
          </section>

          {/* 3. Identity */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            <div className="mb-6">
              <span className={TEXT_STYLES.LABEL}>
                Identity
              </span>
              <p className={TEXT_STYLES.BODY}>好奇心が旺盛で、食わず嫌いをしないのが自慢です。</p>
            </div>
            
            <div className="flex flex-wrap gap-2 md:gap-[10px]">
              {likesData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedLike(item)}
                  className="group px-[13px] py-[8px] md:px-[21px] md:py-[8px] bg-[#EEF0F2] hover:bg-[#E4E4E7] rounded-full text-[#333] flex items-center gap-[4px] md:gap-[8px] transition-colors duration-200"
                >
                  <span className="text-[12px] md:text-[14px]">{item.emoji}</span>
                  <span className="font-bold font-noto text-[10px] md:text-[12px] tracking-wide">{item.text}</span>
                  <span className="opacity-40 text-[10px] md:text-[12px] group-hover:scale-110 transition-transform">
                    +
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* 4. Footer Nav (1:2 Ratio) */}
          <div className="flex flex-row gap-[8px] md:gap-[12px] mt-2 md:mt-[12px]">
            <Link href="/" className={`flex-1 ${baseNavButtonClass}`}>
              <span className="font-inter font-bold text-[14px] md:text-[20px] tracking-wider group-hover:opacity-60 transition-opacity">‹ Works</span>
            </Link>

            <Link 
              href="/contact" 
              className={`flex-[2] ${baseNavButtonClass}`}
            >
              <div className="flex items-center gap-1 group-hover:opacity-60 transition-opacity">
                <span className="font-inter font-bold text-[14px] md:text-[20px] tracking-wider">Contact</span>
                <span className="font-inter text-[14px] md:text-[20px] mb-[2px]">›</span>
              </div>
            </Link>
          </div>

          {/* 5. Copyright */}
          <footer className="mt-10 md:mt-12 text-center">
             <p className="font-inter text-[10px] md:text-[12px] opacity-40">
               ©2025 Ryuta Mukai
             </p>
          </footer>

        </div>
      </main>

      {/* Identity Modal */}
      {selectedLike && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center px-5"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-modal-overlay" />
          
          <div 
            className="relative w-full max-w-[500px] bg-white rounded-[8px] md:rounded-[12px] px-6 pb-8 md:px-8 md:pb-10 shadow-2xl animate-modal-content"
            style={{ paddingTop: "28px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end items-center mb-6 md:mb-8">
              <button
                onClick={handleClose}
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-black/40 hover:text-black transition-colors"
              >
                <span className="text-xl leading-none font-light">✕</span>
              </button>
            </div>

            <div className="flex flex-col items-center mb-8">
              <div className="w-full max-w-[280px] md:max-w-[320px] aspect-square rounded-[4px] overflow-hidden mb-6 bg-gray-50">
                <img 
                  src={selectedLike.image} 
                  alt={selectedLike.text}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full max-w-[280px] md:max-w-[320px]">
                <h3 className={modalTitleClass}>
                  <span className="mr-2">{selectedLike.emoji}</span>
                  {selectedLike.text}
                </h3>
                <p className={modalBodyClass}>
                  {selectedLike.comment}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center w-full min-h-[32px]">
              {currentIndex > 0 ? (
                <button onClick={handlePrev} className={modalNavButtonClass}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  PREV
                </button>
              ) : (
                <div />
              )}
              {currentIndex < likesData.length - 1 ? (
                <button onClick={handleNext} className={modalNavButtonClass}>
                  NEXT
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
