"use client";

import { useState } from "react";
import Link from "next/link";
import { GlobalHeader } from "@/components/GlobalHeader";
import { useThemeColor } from "@/hooks/useThemeColor";

// ==========================================
// Data: Likes
// ==========================================
type LikeItem = {
  id: string;
  emoji: string;
  text: string;
  image: string;
  comment: string;
};

const likesData: LikeItem[] = [
  { id: "interior", emoji: "🪑", text: "インテリア", image: "https://placehold.co/600x400/D8C3B5/FFF?text=Interior", comment: "居心地の良い空間を作ることが趣味です。素材感のある家具が好きです。" },
  { id: "simple", emoji: "⬜️", text: "シンプルなもの", image: "https://placehold.co/600x400/eee/333?text=Simple", comment: "ノイズのないデザインに惹かれます。" },
  { id: "apple", emoji: "🍎", text: "Apple", image: "https://placehold.co/600x400/000/fff?text=Apple", comment: "製品の箱を開ける体験からデザインされています。" },
  { id: "sauna", emoji: "🧖", text: "サウナ", image: "https://placehold.co/600x400/aaa/333?text=Sauna", comment: "思考を整理する大切な時間です。" },
  { id: "running", emoji: "🏃", text: "ランニング", image: "https://placehold.co/600x400/004d40/fff?text=Running", comment: "心身のバランスを整えるための習慣です。" },
  { id: "baseball", emoji: "⚾️", text: "野球観戦", image: "https://placehold.co/600x400/004d40/fff?text=Baseball", comment: "スタジアムの雰囲気が好きです。" },
  { id: "soda", emoji: "🥤", text: "炭酸飲料", image: "https://placehold.co/600x400/f00/fff?text=Soda", comment: "リフレッシュしたい時に欠かせません。" },
  { id: "coffee", emoji: "☕️", text: "コーヒー", image: "https://placehold.co/600x400/3e3020/fff?text=Coffee", comment: "深煎りのコーヒーで集中力を高めます。" },
  { id: "ramen", emoji: "🍜", text: "ラーメン", image: "https://placehold.co/600x400/f00/fff?text=Ramen", comment: "意外と言われますが、ラーメン巡りも好きです。" },
  { id: "omelet", emoji: "🥚", text: "オムライス", image: "https://placehold.co/600x400/ff9/333?text=Omelet", comment: "卵料理には目がありません。" },
  { id: "sweets", emoji: "🍮", text: "甘いもの", image: "https://placehold.co/600x400/c69/fff?text=Sweets", comment: "作業の合間の糖分補給は欠かせません。" },
];

export default function ProfilePage() {
  // 背景色 (詳細ページのLightモードに近いグレー)
  useThemeColor("#F0F2F5");

  const [selectedLike, setSelectedLike] = useState<LikeItem | null>(null);

  // =================================================================
  // スタイル定義 (詳細ページから踏襲)
  // =================================================================

  // ガラスの質感 (Light Mode固定)
  const glassClass = "bg-white/50 border border-white/60 backdrop-blur-md";

  // 共通カードクラス
  // SP: 12px, PC: 16px
  const cardClass = `rounded-[12px] md:rounded-[16px] w-full transition-colors duration-500 ${glassClass}`;

  // Gap設定 (Bento Grid ごとの余白)
  // PC: 12px, SP: 8px
  const gridGapClass = "mb-2 md:mb-[12px]";

  // Bento Grid 内の余白 (PC: 上下56px 左右40px / SP: 上下32px 左右20px)
  const cardPaddingClass = "py-[32px] px-[20px] md:py-[56px] md:px-[40px]";

  // ナビゲーションボタン用クラス (カードクラスをベースにホバー効果追加)
  const navButtonClass = `group flex-1 flex flex-col items-start justify-center ${cardClass} ${cardPaddingClass} hover:-translate-y-1`;

  return (
    <>
      <GlobalHeader />

      <main className="w-full min-h-screen bg-[#F0F2F5] pt-[72px] pb-20 px-5 md:px-20 transition-colors duration-500">
        
        {/* コンテナ: Max 880px (詳細ページと統一) */}
        <div className="max-w-[880px] mx-auto w-full text-[#333]">

          {/* =================================================
              1. Main Identity (Photo & Bio)
          ================================================= */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            
            {/* Main Image */}
            <div className="w-full aspect-[16/9] rounded-[4px] overflow-hidden mb-[40px]">
              <img 
                src="/images/2026portfolio_profile_2_1.png" 
                alt="RYUTA MUKAI Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Role & Name */}
            {/* Gap 40px (img -> text) は mb-[40px] で確保 */}
            <div className="mb-[16px]">
              <span className="block font-inter font-bold text-[16px] tracking-[0.02em] opacity-80 mb-[16px]">
                Web Designer
              </span>
              <h1 className="font-inter font-bold text-[48px] leading-none">
                RYUTA MUKAI
              </h1>
            </div>

            {/* Profile Body */}
            <div className="mt-8">
              <span className="block font-inter text-xs opacity-40 mb-4 tracking-wider">
                Profile
              </span>
              <div className="font-noto text-sm leading-[2.0] opacity-80">
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

          {/* =================================================
              2. mutalog (Personal Media)
          ================================================= */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="block font-inter text-xs opacity-40 mb-4 tracking-wider">
                  Personal Media
                </span>
                {/* 見出し */}
                <h2 className="font-noto font-bold text-[24px] mb-6 leading-tight">
                  暮らしを整える記録、<br className="md:hidden" />ムタログ。
                </h2>
                {/* 本文 */}
                <div className="font-noto text-sm leading-[2.0] opacity-80 mb-8">
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
              
              <a 
                href="https://www.instagram.com/mutalog_muji/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-inter font-bold text-[14px] hover:opacity-60 transition-opacity"
              >
                View Instagram 
                <span className="text-[16px] mb-[2px]">›</span>
              </a>
            </div>
          </section>

          {/* =================================================
              3. Likes (Interactive Pills)
          ================================================= */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            <div className="mb-6">
              <span className="block font-inter text-xs opacity-40 mb-4 tracking-wider">
                Likes
              </span>
              <p className="font-noto text-sm opacity-80 leading-relaxed">
                好奇心が旺盛で、食わず嫌いをしないのが自慢です。
              </p>
            </div>

            {/* Tag List */}
            <div className="flex flex-wrap gap-3">
              {likesData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedLike(item)}
                  className="group px-4 py-2 bg-[#F5F5F7] hover:bg-[#E5E5E7] rounded-full text-[13px] text-[#333] flex items-center gap-2 transition-colors duration-200"
                >
                  <span className="text-[14px]">{item.emoji}</span>
                  <span className="font-bold font-noto text-[12px] md:text-[13px]">{item.text}</span>
                  <span className="opacity-40 text-[14px] group-hover:scale-110 transition-transform">
                    +
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* =================================================
              4. Navigation Footer
          ================================================= */}
          <div className="flex flex-col md:flex-row gap-[8px] md:gap-[12px] mt-2 md:mt-[12px]">
            {/* Left: < Works */}
            <Link href="/" className={navButtonClass}>
              <span className="font-inter font-bold text-[20px] tracking-wider group-hover:opacity-60 transition-opacity">
                ‹ Works
              </span>
            </Link>

            {/* Right: Contact > */}
            <Link href="/contact" className={navButtonClass}>
              <div className="flex items-center justify-between w-full">
                <span className="font-inter font-bold text-[20px] tracking-wider">
                  Contact
                </span>
                <span className="font-inter text-[20px] mb-[2px]">›</span>
              </div>
            </Link>
          </div>

        </div>
      </main>

      {/* =================================================
          Likes Modal (Overlay)
      ================================================= */}
      {selectedLike && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center px-5"
          onClick={() => setSelectedLike(null)}
        >
          {/* 背景 */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />

          {/* モーダル本体 (角丸などはここの世界観に合わせる) */}
          <div 
            className="relative w-full max-w-[400px] bg-white rounded-[24px] overflow-hidden shadow-2xl transform transition-all animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Area */}
            <div className="w-full aspect-[4/3] bg-gray-100">
               <img 
                 src={selectedLike.image} 
                 alt={selectedLike.text}
                 className="w-full h-full object-cover"
               />
            </div>

            {/* Text Area */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{selectedLike.emoji}</span>
                <h3 className="font-bold text-xl text-[#333] font-noto">{selectedLike.text}</h3>
              </div>
              <p className="text-sm text-[#666] leading-relaxed font-noto">
                {selectedLike.comment}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedLike(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black/20 hover:bg-black/40 rounded-full text-white backdrop-blur-md transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
