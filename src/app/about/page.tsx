import { BottomNav } from "@/components/BottomNav";

export default function About() {
  return (
    <main className="relative min-h-screen bg-[#FCFCFC] text-slate-900">
      <div className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[48px] lg:px-[80px] pt-[88px] md:pt-[120px] pb-[120px] min-h-[calc(100vh-200px)]">
        {/* ページタイトル */}
        <div className="flex items-center gap-[12px] md:gap-[16px] mb-12 md:mb-16">
          <h1 className="font-inter font-normal text-[40px] md:text-[88px] tracking-tight leading-none">
            Profile
          </h1>
          <div className="text-[28px] md:text-[56px] flex items-center mb-[3px] md:mb-0">
            👟
          </div>
        </div>

        {/* コンテンツプレースホルダー */}
        <div className="max-w-[800px]">
          {/* ここに将来的にプロフィール内容を追加 */}
        </div>
      </div>

      {/* Footer (Copyright) */}
      <footer className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[48px] lg:px-[80px] pb-[88px] md:pb-[120px]">
        <p className="text-center text-xs text-slate-400 font-inter">
          ©2025 Ryuta Mukai
        </p>
      </footer>

      <BottomNav />
    </main>
  );
}
