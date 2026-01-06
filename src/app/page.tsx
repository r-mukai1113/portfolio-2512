import Link from "next/link";
import { works } from "@/data/works";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="px-6 py-8 md:px-12 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="font-en">Ryuta Mukai</span> 👨🏻‍💻
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600">
          <span className="font-en">Web Designer based in Yokohama</span>
        </p>
      </header>

      {/* Works Section */}
      <section className="px-6 pb-20 md:px-12 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {works.map((work) => (
              <div
                key={work.id}
                className="bg-gray-100 rounded-lg overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">🖼️</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-600">{work.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-en">
            ©2025 Ryuta Mukai
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="text-sm hover:underline font-en"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-sm hover:underline font-en"
            >
              プロフィール
            </Link>
            <a
              href="https://github.com/r-mukai1113"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline font-en"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
