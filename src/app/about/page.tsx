"use client";

import { useState } from "react";
import Link from "next/link";
import { GlobalHeader } from "@/components/GlobalHeader";
import { useThemeColor } from "@/hooks/useThemeColor";
import { likesData, LikeItem } from "@/data/likes";

export default function ProfilePage() {
  useThemeColor("#F0F2F5");

  const [selectedLike, setSelectedLike] = useState<LikeItem | null>(null);

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

  // ガラスの質感を少し強める (背景のBlobをきれいに透かすため)
  const glassClass = "bg-white/60 border border-white/60 backdrop-blur-[12px]";
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

      {/* ★追加: Blobアニメーション用のスタイル */}
      <style jsx>{`
        .blob-bg-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0; /* 最背面 */
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .blob-svg {
          width: 180vmax; /* 画面からはみ出すくらい大きく */
          height: 180vmax;
          opacity: 0.15; /* 薄く表示 */
          filter: blur(40px); /* 柔らかくぼかす */
        }
        .blob-path {
          /* 落ち着いた色味 (ニュートラルなグレー) */
          fill: #A3A3A3; 
          /* 形の変化と回転を組み合わせる */
          animation: blobAnim 30s linear infinite, rotAnim 120s linear infinite;
          transform-origin: center;
        }

        /* CodePenから移植したパスアニメーション */
        @keyframes blobAnim {
          0% { d: path("M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z"); }
          25% { d: path("M67.8,-97.1C87.8,-78.8,103.8,-58.9,117.4,-34.1C130.9,-9.4,142,20.2,139.5,50.7C137,81.2,120.8,112.6,95.3,150.1C69.8,187.7,34.9,231.3,3.3,226.8C-28.2,222.2,-56.4,169.3,-91.6,134.9C-126.8,100.5,-169,84.6,-179.6,57.1C-190.2,29.7,-169.3,-9.3,-155.2,-49.7C-141,-90.1,-133.7,-132,-109,-148.8C-84.2,-165.6,-42.1,-157.3,-9.1,-144.8C23.9,-132.2,47.8,-115.5,67.8,-97.1Z"); }
          50% { d: path("M137.1,-191.3C172,-163.4,190.6,-115.7,197.2,-70.1C203.8,-24.4,198.5,19.2,178.9,51.5C159.3,83.9,125.5,105,93.3,129.6C61.1,154.1,30.6,182.1,1.1,180.6C-28.4,179.1,-56.8,148.2,-81.2,121.1C-105.6,94.1,-126.1,70.8,-141.6,41.6C-157.2,12.4,-168,-22.9,-153.9,-45C-139.8,-67,-100.7,-76,-70.9,-105.5C-41.1,-135,-20.6,-185,15.3,-206C51.1,-227.1,102.3,-219.1,137.1,-191.3Z"); }
          75% { d: path("M123.7,-157.1C162.4,-142.2,197.2,-108.8,202.8,-70.8C208.3,-32.9,184.5,9.7,169,54.2C153.6,98.7,146.4,145.2,119.7,162.7C92.9,180.2,46.4,168.6,-1.9,171.1C-50.2,173.7,-100.3,190.4,-122.2,171.3C-144.1,152.3,-137.7,97.5,-144.1,52.7C-150.6,7.9,-169.9,-26.8,-170.5,-64.8C-171,-102.8,-152.8,-144,-121.3,-161.3C-89.7,-178.5,-44.9,-171.8,-1.2,-170.1C42.5,-168.5,85,-172,123.7,-157.1Z"); }
          100% { d: path("M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z"); }
        }

        @keyframes rotAnim {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      {/* モーダル用スタイル (維持) */}
      <style jsx global>{`
        @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-modal-overlay { animation: modalFadeIn 0.4s ease-out forwards; }
        .animate-modal-content { animation: modalSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>


      {/* ★追加: 背景のBlob SVG構造 */}
      <div className="blob-bg-container">
        <svg className="blob-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(300,300)">
            <path className="blob-path" d="M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z" />
          </g>
        </svg>
      </div>


      {/* メインコンテンツ (relative と z-10 で背景の上に表示。背景色を少し透過させる) */}
      <main className="w-full min-h-screen bg-[#F0F2F5]/80 pt-[72px] pb-20 transition-colors duration-500 relative z-10 overflow-hidden">
        {/* 前回のオーブのコードは削除 */}
        
        <div className="max-w-[880px] mx-auto w-full px-5 md:px-20 text-[#333] relative">

          {/* 1. Main Identity */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            
            <div className="w-full aspect-[16/9] rounded-[4px] overflow-hidden mb-[24px] md:mb-[40px]">
              <img src="/images/2026portfolio_profile_2_1.png" alt="RYUTA MUKAI Profile" className="w-full h-full object-cover"/>
            </div>

            <div className="mb-[16px]">
              <span className="block font-inter font-bold text-[12px] md:text-[16px] tracking-[0.02em] opacity-80 mb-[12px] md:mb-[16px]">
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
              <a href="https://www.instagram.com/mutalog_muji/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-inter font-bold text-[12px] md:text-[14px] opacity-60 hover:opacity-100 transition-opacity">
                View Instagram <span className="text-[14px] md:text-[16px] mb-[2px]">›</span>
              </a>
            </div>
          </section>

          {/* 3. Likes */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            <div className="mb-6">
              <span className={TEXT_STYLES.LABEL}>Likes</span>
              <p className={TEXT_STYLES.BODY}>好奇心が旺盛で、食わず嫌いをしないのが自慢です。</p>
            </div>
            
            <div className="flex flex-wrap gap-1.5 md:gap-3">
              {likesData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedLike(item)}
                  className="group px-[10px] py-[8px] md:px-[20px] md:py-[8px] bg-[#EEF0F2] hover:bg-[#E4E4E7] rounded-full text-[#333] flex items-center gap-[3px] md:gap-[7px] transition-colors duration-200"
                >
                  <span className="text-[12px] md:text-[14px]">{item.emoji}</span>
                  <span className="font-bold font-noto text-[10px] md:text-[12px]">{item.text}</span>
                  <span className="opacity-40 text-[10px] md:text-[12px] group-hover:scale-110 transition-transform">+</span>
                </button>
              ))}
            </div>
          </section>

          {/* 4. Footer Nav (1:2 Ratio) */}
          <div className="flex flex-row gap-[8px] md:gap-[12px] mt-2 md:mt-[12px]">
            <Link href="/" className={`flex-1 ${baseNavButtonClass}`}>
              <span className="font-inter font-bold text-[14px] md:text-[20px] tracking-wider group-hover:opacity-60 transition-opacity">‹ Works</span>
            </Link>

            <Link href="/contact" className={`flex-[2] ${baseNavButtonClass}`}>
              <div className="flex items-center justify-between w-full">
                <span className="font-inter font-bold text-[14px] md:text-[20px] tracking-wider">Contact</span>
                <span className="font-inter text-[14px] md:text-[20px] mb-[2px]">›</span>
              </div>
            </Link>
          </div>

        </div>
      </main>

      {/* Likes Modal */}
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
