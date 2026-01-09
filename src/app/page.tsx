import { EmojiSwitcher } from "@/components/EmojiSwitcher";
import { BottomNav } from "@/components/BottomNav";
import { works } from "@/data/works";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FCFCFC] text-slate-900">
      {/* First View (Hero) */}
      <section className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[48px] lg:px-[80px] pt-[88px] md:pt-[120px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end w-full">
          {/* 名前 + 絵文字エリア */}
          <div className="flex items-center gap-[12px] md:gap-[16px]">
            <h1 className="font-inter font-light text-[44px] md:text-[110px] tracking-[-0.01em] leading-tight text-slate-900">
              Ryuta Mukai
            </h1>
            <div className="text-[40px] md:text-[100px] flex items-center">
              <EmojiSwitcher />
            </div>
          </div>

          {/* 右側のテキスト */}
          <p className="mt-4 lg:mt-0 text-sm md:text-base text-[#565656] font-medium font-noto">
            🏡 Web Designer based in Yokohama
          </p>
        </div>
      </section>

      {/* Works Section */}
      <section
        id="works"
        className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[48px] lg:px-[80px] mt-[40px] md:mt-[64px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[40px] md:gap-y-[48px] md:gap-x-[48px]">
          {works.map((work) => (
            <a
              key={work.id}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] bg-slate-200 rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
              </div>

              <h3 className="font-noto font-normal text-[16px] tracking-[0.02em] group-hover:underline decoration-1 underline-offset-4">
                {work.title}
              </h3>

              <p className="font-noto font-normal text-[10px] tracking-[0.02em] text-slate-500 mt-2">
                {work.client}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer (Copyright) */}
      <footer className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[48px] lg:px-[80px] mt-[40px] md:mt-[100px] pb-[88px] md:pb-[120px]">
        <p className="text-center text-xs text-slate-400 font-inter">
          ©2025 Ryuta Mukai
        </p>
      </footer>

      <BottomNav />
    </main>
  );
}
