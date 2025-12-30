import Link from "next/link";
import { works } from "@/data/works";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Web Designer &
            <br />
            Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            デザインと実装、両面からビジネス課題を解決します
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#works"
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              実績を見る
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            個人事業主・小規模事業者向けのWebサイト制作を得意としています。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            デザインだけでなく、フロントエンド開発も対応可能。
            Figmaでのデザイン設計から、Next.js / TypeScript /
            TailwindCSSを用いた実装まで、一貫して担当できます。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            「課題 → 解決策 → 結果」のプロセスを大切にし、
            ビジネス成果に繋がるWebサイトを制作します。
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Design */}
            <div className="p-6 border-2 border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            {/* Frontend Development */}
            <div className="p-6 border-2 border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>HTML / CSS / JavaScript</li>
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
                <li>Shopify / Shopify Liquid</li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="p-6 border-2 border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Tools & Others</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Git / GitHub</li>
                <li>Vercel</li>
                <li>Studio</li>
                <li>ESLint / Prettier</li>
                <li>Web Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work) => (
              <div
                key={work.id}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail (Placeholder) */}
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image Placeholder</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{work.client}</p>

                  {/* Role Tags */}
                  <div className="flex gap-2 mb-4">
                    {work.role.map((r) => (
                      <span
                        key={r}
                        className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                      >
                        {r}
                      </span>
                    ))}
                  </div>

                  {/* Challenge */}
                  <div className="mb-4">
                    <h4 className="font-bold text-sm mb-1">課題</h4>
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {work.challenge}
                    </p>
                  </div>

                  {/* Result */}
                  <div>
                    <h4 className="font-bold text-sm mb-1">結果</h4>
                    <p className="text-sm text-gray-700 line-clamp-2">
                      {work.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お気軽にお問い合わせください
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Webサイト制作・リニューアルのご相談を承ります
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
