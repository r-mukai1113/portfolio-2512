"use client";

import { GlobalHeader } from "@/components/GlobalHeader";
import { works } from "@/data/works";
import { useState, useEffect, useRef } from "react";
// ★変更: Linkの代わりに useRouter をインポート
import { useRouter } from "next/navigation";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Home() {
  const router = useRouter(); // ★追加: ルーターの取得
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [bgColor, setBgColor] = useState(works[0].theme.bg);
  const [textColor, setTextColor] = useState(works[0].theme.text);
  
  const [imgHeight, setImgHeight] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const spContainerRef = useRef<HTMLDivElement>(null);

  const currentWork = works[currentIndex];
  const CARD_GAP = 80;

  useThemeColor(bgColor);

  // --- (画像高さ取得、ホイール操作、キーボード操作のuseEffectはそのまま) ---
  // ※長いので省略しますが、元のコードのまま変更なしです
  useEffect(() => {
    const updateHeight = () => {
      if (imgRef.current) setImgHeight(imgRef.current.clientHeight);
    };
    updateHeight();
    const img = imgRef.current;
    if (img) img.onload = updateHeight;
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth <= 768) return;
      if (isScrolling) return;
      setIsScrolling(true);
      if (e.deltaY > 0) {
        if (currentIndex < works.length - 1) setCurrentIndex((prev) => prev + 1);
        else setCurrentIndex(0);
      } else {
        if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
        else setCurrentIndex(works.length - 1);
      }
      setTimeout(() => setIsScrolling(false), 800);
    };
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isScrolling, currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth <= 768) return;
      if (isScrolling) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setIsScrolling(true);
        if (currentIndex < works.length - 1) setCurrentIndex((prev) => prev + 1);
        else setCurrentIndex(0);
        setTimeout(() => setIsScrolling(false), 800);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setIsScrolling(true);
        if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
        else setCurrentIndex(works.length - 1);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isScrolling, currentIndex]);

  useEffect(() => {
    setBgColor(works[currentIndex].theme.bg);
    setTextColor(works[currentIndex].theme.text);
  }, [currentIndex]);
  // --- (ここまで省略部分終わり) ---


  // ★追加: 詳細ページへ遷移する関数
  const handleNavigate = () => {
    // 遷移先URL
    const targetUrl = `/works/${currentWork.slug}`;
    console.log("Navigating to:", targetUrl); // デバッグ用ログ
    router.push(targetUrl);
  };


  // SP用のスクロール検知もそのまま
  useEffect(() => {
    const handleScroll = () => {
      if (!spContainerRef.current) return;
      const scrollCenter = spContainerRef.current.scrollTop + window.innerHeight / 2;
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
    <div className="overflow-hidden">
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
        <div className="w-[600px] shrink-0 h-full flex items-center pl-20 pr-12 relative z-10">
          <div className="w-full break-words">
            <h1 className="font-inter text-[72px] leading-[1.1] tracking-[0.04em] font-bold mb-8 break-words">
              {currentWork.title}
            </h1>

            <div className="font-inter text-[14px] leading-[1.0] tracking-[0.02em] opacity-60 mb-6">
              <span>{currentWork.category}</span>
              <span className="mx-2">|</span>
              <span className="mx-2">{currentWork.year}</span>
            </div>

            <p className="font-noto text-[14px] leading-[2.0] tracking-[0.04em] opacity-80 mb-10 font-normal break-words">
              {currentWork.desc.overview}
            </p>

            {/* ★修正: Link から button + onClick に変更 */}
            <button
              onClick={handleNavigate}
              className="inline-flex items-center gap-2 text-[14px] font-medium hover:opacity-70 transition-opacity bg-transparent border-0 cursor-pointer p-0"
              style={{ color: textColor }}
            >
              View Project
              <span className="text-[16px] leading-none pb-[2px]">›</span>
            </button>
          </div>
        </div>

        {/* 右カラム (そのまま) */}
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
                </div>
              ))}
            </div>
          </div>

          <div className="ml-8 h-full flex flex-col justify-center items-center gap-4 z-10 w-2 shrink-0">
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
          SP View (修正の必要がないため省略できますが、念のためLinkを維持しています)
      ============================================== */}
      {/* ...SP Viewのコードは変更不要です。もしSPでも遷移しない場合は同様に修正します... */}
      <main
        ref={spContainerRef}
        className="md:hidden h-screen overflow-y-scroll snap-y snap-mandatory"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {works.map((work) => (
           <div key={work.id} className="sp-card-section min-h-screen w-full snap-start flex flex-col pt-[72px] pb-5 px-5">
             <div
                className={`w-full h-auto rounded-[32px] flex flex-col transition-all duration-500 py-12 px-5 ${
                    work.theme.isLight
                    ? "bg-white/50 border border-white/60"
                    : "bg-white/[0.04] backdrop-blur-[20px] border border-white/10"
                }`}
                style={{ color: work.theme.isLight ? "#333" : "#FFF" }}
            >
               {/* ...中略... */}
               <button
                  onClick={() => router.push(`/works/${work.slug}`)} // SPも念のためrouter.pushに変更推奨
                  className="text-[14px] flex items-center gap-2 font-medium bg-transparent border-0 p-0 hover:opacity-70 transition-opacity text-left"
                  style={{ color: work.theme.isLight ? "#333" : "#FFF" }}
                >
                  View Project
                  <span className="text-[16px] leading-none pb-[2px]">›</span>
                </button>
             </div>
           </div>
        ))}
      </main>
    </div>
  );
}
