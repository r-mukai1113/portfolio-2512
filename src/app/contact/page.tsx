"use client";

import { GlobalHeader } from "@/components/GlobalHeader";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Copyright } from "@/components/Copyright";

export default function Contact() {
  useThemeColor("#F0F2F5");
  
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/contact/thank-you");
      } else {
        alert("送信に失敗しました。もう一度お試しください。");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("送信に失敗しました。もう一度お試しください。");
      setIsSubmitting(false);
    }
  };

  // =================================================================
  // デザインシステム
  // =================================================================

  const ACCENT_COLOR = "#F37022"; 

  const glassClass = "bg-white/50 border border-white/60 backdrop-blur-md";
  const cardClass = `rounded-[12px] md:rounded-[16px] w-full transition-colors duration-500 ${glassClass}`;
  const gridGapClass = "mb-2 md:mb-[12px]";
  const cardPaddingClass = "py-[32px] px-[20px] md:py-[56px] md:px-[40px]";

  // shadcn/ui inspired input style
  const inputClass = "w-full bg-transparent border border-[#D4D4D8] rounded-[6px] px-3 py-2.5 text-[12px] md:text-[14px] text-[#333] placeholder-[#A1A1AA] outline-none focus:border-[#F37022] focus:shadow-[0_0_0_3px_rgba(243,112,34,0.15)] transition-all duration-200 font-noto";

  // shadcn/ui inspired label style
  const labelClass = "block text-[12px] md:text-[14px] font-medium font-noto text-[#333] mb-2";

  const requiredMark = <span style={{ color: ACCENT_COLOR }} className="opacity-80 text-[12px] align-top ml-1">※</span>;

  return (
    <>
      <GlobalHeader />

      <main className="w-full min-h-screen bg-[#F0F2F5] pt-[72px] pb-8 md:pb-10 transition-colors duration-500">
        <div className="max-w-[880px] mx-auto w-full px-5 md:px-20 text-[#333]">

          {/* =================================================
              1. Header Card
          ================================================= */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            <div className="mb-[16px]">
              <h1 className="font-inter font-bold text-[32px] md:text-[48px] leading-none mb-6">
                Contact
              </h1>
            </div>

            <div className="font-noto text-[12px] md:text-[14px] leading-[2.0] opacity-80">
              <p className="mb-4 text-[#333]">
                お仕事のご依頼やご相談は以下のフォームよりお気軽にお問い合わせください。
              </p>
              <p className="text-[#333] opacity-60 text-[11px] md:text-[13px]">
                1〜3日以内にお返事いたします。もし返信がない場合、何らかの理由でメールが受信されていない可能性がありますので、お手数ですがSNSのDMにてその旨をご連絡いただけますと幸いです。
              </p>
            </div>
          </section>

          {/* =================================================
              2. Form Card
          ================================================= */}
          <section className={`${cardClass} ${cardPaddingClass} ${gridGapClass}`}>
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              
              {/* お名前 */}
              <div>
                <label htmlFor="name" className={labelClass}>
                  お名前 {requiredMark}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="例) 山田 太郎"
                  required
                  className={inputClass}
                />
              </div>

              {/* 企業名・屋号など */}
              <div>
                <label htmlFor="company" className={labelClass}>
                  企業名・屋号など
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="例) 株式会社〇〇"
                  className={inputClass}
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  メールアドレス {requiredMark}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="例) xxx@sample.com"
                  required
                  className={inputClass}
                />
              </div>

              {/* お問い合わせ種別 */}
              <div>
                <label htmlFor="type" className={labelClass}>
                  お問い合わせ種別 {requiredMark}
                </label>
                <div className="relative">
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer`}
                    required
                  >
                    <option value="" disabled className="text-gray-400">
                      選択してください
                    </option>
                    <option value="production">Web制作のご依頼</option>
                    <option value="consulting">ご相談・お見積り</option>
                    <option value="other">その他</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.5 0.5L5 5L9.5 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* 相談したい内容 */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  相談したい内容 {requiredMark}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  placeholder="ご要望や参考サイトなどございましたらご記入ください。"
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              {/* 送信ボタン */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: ACCENT_COLOR }}
                  className="w-full text-white font-medium font-noto text-[14px] md:text-[16px] py-3 rounded-[6px] hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </button>
              </div>

            </form>
          </section>

          {/* Footer (Copyright) */}
          <Copyright className="mt-10 md:mt-12" />

        </div>
      </main>
    </>
  );
}
