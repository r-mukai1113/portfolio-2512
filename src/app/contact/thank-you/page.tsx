import Link from "next/link";
import { GlobalHeader } from "@/components/GlobalHeader";

export default function ThankYou() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#FCFCFC]" />

      <GlobalHeader />

      <main className="relative min-h-screen text-slate-900">
        <div className="flex flex-col items-center justify-center min-h-screen px-[20px]">
        <div className="text-center max-w-[600px]">
          <h1 className="font-inter font-bold text-[64px] md:text-[96px] leading-none tracking-[-0.02em] mb-[10px]">
            Thank You
          </h1>

          <p className="font-inter font-normal text-[16px] md:text-[20px] uppercase tracking-[0.15em] mb-[40px] text-slate-900">
            Message Sent
          </p>

          <p className="font-noto font-normal text-[12px] md:text-[14px] leading-relaxed text-slate-900 mb-[20px]">
            お問い合わせありがとうございます。<br />
            3日以内にメールにてご連絡いたします。
          </p>

          <p className="font-noto font-normal text-[11px] md:text-[13px] leading-relaxed text-slate-500 mb-[50px]">
            お返事が遅れている場合は、お手数ですが<br className="md:hidden" />
            <a
              href="https://www.instagram.com/mutalog_muji/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 border-b border-slate-300 hover:border-slate-900 transition-colors font-medium"
            >
              Instagram
            </a>
            のDMに一言いただけますと幸いです。
          </p>

          <Link
            href="/"
            className="inline-block font-inter text-[12px] uppercase tracking-[0.1em] border-b border-slate-900 pb-[2px] hover:opacity-60 transition-opacity"
          >
            Back to Top
          </Link>
        </div>
        </div>
      </main>
    </>
  );
}
