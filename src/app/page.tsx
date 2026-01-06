import { Header } from "@/components/Header";
import { EmojiSwitcher } from "@/components/EmojiSwitcher";
import { BottomNav } from "@/components/BottomNav";
import { works } from "@/data/works";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FCFCFC] font-sans text-slate-900 selection:bg-yellow-200 selection:text-slate-900">
      <Header />

      {/* First View (Hero) */}
      <section className="h-screen w-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight font-en">
            Ryuta Mukai
            <EmojiSwitcher />
          </h1>
          <p className="mt-6 text-sm md:text-base text-slate-500 font-medium flex items-center gap-2 font-en">
            🏡 Web Designer based in Yokohama
          </p>
        </div>
      </section>

      {/* Works Section */}
      <section
        id="works"
        className="py-20 px-6 md:px-20 max-w-7xl mx-auto min-h-screen"
      >
        <h2 className="text-2xl font-bold mb-10 font-en">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {works.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-slate-200 rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold group-hover:underline decoration-1 underline-offset-4">
                {work.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{work.client}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ナビゲーション */}
      <BottomNav />
    </main>
  );
}
