"use client";

import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    type: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理はここに実装
    console.log(formData);
  };

  return (
    <main className="relative min-h-screen bg-[#FCFCFC] text-slate-900 selection:bg-yellow-200 selection:text-slate-900">
      <Header />

      <div className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[48px] lg:px-[80px] pt-[100px] md:pt-[180px] pb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-20">
          {/* 左カラム：タイトル & 説明文 */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[120px]">
              <h1 className="font-inter font-normal text-[48px] md:text-[80px] tracking-tight leading-none mb-8 md:mb-12">
                Contact
              </h1>

              <div className="font-noto text-sm md:text-base leading-relaxed text-slate-700 space-y-6">
                <p>
                  お仕事のご依頼やご相談は以下のフォームよりお気軽にお問い合わせください。
                </p>
                <p className="text-xs md:text-sm text-slate-500">
                  1〜3日以内にお返事いたします。
                  もし返信がない場合、何らかの理由でメールが受信されていない可能性がありますので、お手数ですがSNSのDMにてその旨をご連絡いただけますと幸いです。
                </p>
              </div>
            </div>
          </div>

          {/* 右カラム：フォーム */}
          <div className="lg:col-span-7 w-full max-w-[640px] lg:ml-auto">
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              {/* お名前 */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-bold font-noto text-slate-800"
                >
                  お名前 <span className="text-red-400 ml-1">※</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="例) 山田 太郎"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 md:py-4 text-sm md:text-base outline-none focus:border-slate-400 transition-colors placeholder:text-slate-300"
                  required
                />
              </div>

              {/* 企業名・屋号など */}
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="block text-sm md:text-base font-bold font-noto text-slate-800"
                >
                  企業名・屋号など
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="例) 株式会社〇〇"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 md:py-4 text-sm md:text-base outline-none focus:border-slate-400 transition-colors placeholder:text-slate-300"
                />
              </div>

              {/* メールアドレス */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-bold font-noto text-slate-800"
                >
                  メールアドレス <span className="text-red-400 ml-1">※</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="例) xxx@sample.com"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 md:py-4 text-sm md:text-base outline-none focus:border-slate-400 transition-colors placeholder:text-slate-300"
                  required
                />
              </div>

              {/* お問い合わせ種別 */}
              <div className="space-y-2">
                <label
                  htmlFor="type"
                  className="block text-sm md:text-base font-bold font-noto text-slate-800"
                >
                  お問い合わせ種別 <span className="text-red-400 ml-1">※</span>
                </label>
                <div className="relative">
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 md:py-4 text-sm md:text-base outline-none focus:border-slate-400 transition-colors appearance-none cursor-pointer text-slate-800"
                    required
                  >
                    <option value="" disabled className="text-slate-300">
                      選択してください
                    </option>
                    <option value="production">Web制作のご依頼</option>
                    <option value="consulting">ご相談・お見積り</option>
                    <option value="other">その他</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 0.5L5 5L9.5 0.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 相談したい内容 */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm md:text-base font-bold font-noto text-slate-800"
                >
                  相談したい内容 <span className="text-red-400 ml-1">※</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  placeholder="ご要望や参考サイトなどございましたらご記入ください。"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 md:py-4 text-sm md:text-base outline-none focus:border-slate-400 transition-colors placeholder:text-slate-300 resize-none"
                  required
                />
              </div>

              {/* 送信ボタン */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#1a1a1a] text-white font-bold font-noto py-4 rounded-[6px] hover:bg-slate-800 transition-colors duration-200"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer (Copyright) */}
      <footer className="w-full max-w-[1600px] mx-auto px-[20px] md:px-[48px] lg:px-[80px] pb-[120px]">
        <p className="text-center text-xs text-slate-400 font-inter">
          ©2025 Ryuta Mukai
        </p>
      </footer>

      <BottomNav />
    </main>
  );
}
