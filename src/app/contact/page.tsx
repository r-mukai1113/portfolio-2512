"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        console.error("Error:", data.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-black mb-8"
          >
            ← トップページに戻る
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-lg text-gray-700">
            Webサイト制作・リニューアルのご相談を承ります。
            <br />
            お気軽にお問い合わせください。
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
            <p className="text-green-800 font-bold">
              お問い合わせありがとうございます！
            </p>
            <p className="text-green-700 mt-2">
              内容を確認次第、ご連絡させていただきます。
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-lg">
            <p className="text-red-800 font-bold">
              送信中にエラーが発生しました
            </p>
            <p className="text-red-700 mt-2">
              お手数ですが、しばらく時間をおいて再度お試しください。
            </p>
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold mb-2"
            >
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
              placeholder="山田 太郎"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold mb-2"
            >
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
              placeholder="example@email.com"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-bold mb-2"
            >
              件名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
              placeholder="Webサイト制作のご相談"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold mb-2"
            >
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={8}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
              placeholder="ご相談内容をご記入ください"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "送信中..." : "送信する"}
          </button>
        </form>

        {/* Additional Contact Info */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">その他の連絡先</h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>メール:</strong>{" "}
              <a
                href="mailto:your-email@example.com"
                className="text-blue-600 hover:underline"
              >
                your-email@example.com
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/r-mukai1113"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://github.com/r-mukai1113
              </a>
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            ※ 返信は1-2営業日以内に行います
          </p>
        </div>
      </div>
    </main>
  );
}
