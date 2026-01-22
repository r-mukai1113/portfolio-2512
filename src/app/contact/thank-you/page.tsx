"use client";

import Link from "next/link";
import { GlobalHeader } from "@/components/GlobalHeader";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Copyright } from "@/components/Copyright";

export default function ThankYou() {
  useThemeColor("#F0F2F5");

  const ACCENT_COLOR = "#F37022";

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#F0F2F5] transition-colors duration-500" />

      <GlobalHeader />

      {/* min-h-screen = min-height: 100vh 
         これで画面の高さいっぱいを確保します 
      */}
      <main className="relative min-h-screen text-[#333]">
        
        {/* コンテンツを上下左右中央に配置 
           pb-20 は、下のCopyrightと重ならないようにするための余白です
        */}
        <div className="flex flex-col items-center justify-center min-h-screen px-[20px] pb-20">
          <div className="text-center max-w-[600px]">
            
            <h1 className="font-inter font-bold text-[48px] md:text-[80px] leading-none tracking-[-0.02em] mb-[16px]">
              Thank You
            </h1>

            <p className="font-inter font-normal text-[14px] md:text-[16px] uppercase tracking-[0.15em] mb-[48px] opacity-60">
              Message Sent
            </p>

            <p className="font-noto font-normal text-[12px] md:text-[14px] leading-[2.0] opacity-80 mb-[24px]">
              お問い合わせありがとうございます。<br />
              3日以内にメールにてご連絡いたします。
            </p>

            <p className="font-noto font-normal text-[11px] md:text-[13px] leading-[2.0] opacity-60 mb-[56px]">
              お返事が遅れている場合は、お手数ですが<br className="md:hidden" />
              <a
                href="https://www.instagram.com/mutalog_muji/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[#333] hover:opacity-50 transition-opacity font-medium mx-1"
              >
                Instagram
              </a>
              のDMに一言いただけますと幸いです。
            </p>

            {/* Back to Top */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-inter text-[14px] font-medium hover:opacity-70 transition-opacity"
              style={{ color: ACCENT_COLOR }}
            >
              <span className="text-[16px] leading-none pb-[2px]">‹</span>
              <span className="pb-[1px]">Back to Top</span>
            </Link>

          </div>
        </div>


        <div className="absolute bottom-6 md:bottom-10 left-0 w-full">
          <Copyright />
        </div>

      </main>
    </>
  );
}
