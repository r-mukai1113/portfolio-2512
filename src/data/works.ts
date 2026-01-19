// 実績データ

export interface Work {
  id: string;
  slug: string; // URL用ID
  title: string;
  category: string;
  year: string;
  role: string; // 担当領域
  url: string;
  thumbnail: string;
  
  // トップページ用テーマ
  theme: {
    bg: string;
    text: string;
    isLight: boolean;
  };

  // 詳細ページ用テーマ (控えめな背景色)
  detailTheme: {
    bg: string;
    text: string;
  };

  // 詳細テキスト (Bento Grid用)
  desc: {
    overview: string;
    insight: string;     // 課題の見出し
    insightText: string; // 課題の本文
    idea: string;        // 解決策の見出し
    ideaText: string;    // 解決策の本文
  };

  // 詳細ページ用画像ギャラリー
  images: string[];
}

export const works: Work[] = [
  {
    id: "ytag",
    slug: "y-tag",
    title: "Y-Tag",
    category: "Online Store",
    year: "2025",
    role: "Design / Implementation",
    url: "https://ytag.jp/",
    thumbnail: "https://placehold.co/800x500/E6E6E6/333?text=Y-Tag",
    
    theme: {
      bg: "#F0F2F5",
      text: "#333333",
      isLight: true,
    },
    
    detailTheme: {
      bg: "#E5E7EB", // 少し濃いグレー
      text: "#333333",
    },

    desc: {
      overview: "「機能美」を追求したスマートトラッカー「Y-Tag」のブランドサイトリニューアル。プロダクト自体が持つ「白」の美しさとミニマルな形状を最大限に引き立てるため、装飾を極限まで削ぎ落とし、余白を大胆に活用したデザインを構築しました。",
      insight: "支援前の課題",
      insightText: "従来のデザインはスペック情報の羅列に終始しており、ブランドとしての情緒的価値が伝わっていませんでした。「単なる安価な電子機器」という認識を脱却し、ライフスタイルに馴染むプロダクトとしての再定義が必要でした。",
      idea: "余白による再定義",
      ideaText: "情報を詰め込むのではなく、あえて「余白」を多く取ることで、美術館の展示品のようにプロダクトを際立たせる構成を採用。ノイズとなる色や線を排除し、徹底した「白」の世界観でユーザーの視線誘導をスムーズにしました。",
    },

    images: [
      "https://placehold.co/1200x800/E6E6E6/333?text=Main+Visual",
      "https://placehold.co/1200x1800/F0F0F0/DDD?text=Gallery+1",
      "https://placehold.co/1200x800/333/FFF?text=Gallery+2",
    ],
  },
  {
    id: "monolith",
    slug: "monolith",
    title: "#MONOLITH",
    category: "Online Store",
    year: "2025",
    role: "Branding / Design",
    url: "https://monolith-tokyo.jp/",
    thumbnail: "https://placehold.co/800x500/111/FFF?text=Monolith",
    
    theme: {
      bg: "#111111",
      text: "#FFFFFF",
      isLight: false,
    },

    detailTheme: {
      bg: "#111111", // ダークグレー
      text: "#FFFFFF",
    },

    desc: {
      overview: "モノリスのような圧倒的な存在感をWebサイトで表現。デジタルとアナログの境界線を溶かすような、没入感のあるデザインを目指しました。",
      insight: "市場での埋没",
      insightText: "競合他社との差別化が難しく、商品自体のユニークさが伝わりきっていない状況でした。視覚的なインパクトと、ブランドが持つ哲学を直感的に伝える手法が求められていました。",
      idea: "黒の没入感",
      ideaText: "サイト全体を黒で統一し、商品を浮かび上がらせるライティングのような演出をWeb上で再現。スクロールに合わせて物語が展開するようなインタラクションを実装しました。",
    },

    images: [
      "https://placehold.co/1200x800/111/FFF?text=Monolith+Main",
      "https://placehold.co/1200x1800/000/333?text=Monolith+Gallery",
    ],
  },
  {
    id: "lily-r",
    slug: "lily",
    title: "Lily",
    category: "Brand Site",
    year: "2024",
    role: "Design",
    url: "https://lily-r-braids.studio.site/",
    thumbnail: "https://placehold.co/800x500/D8C3B5/FFF?text=Lily",
    
    theme: {
      bg: "#E8DCCA",
      text: "#333333",
      isLight: true,
    },

    detailTheme: {
      bg: "#E0D4C2",
      text: "#333333",
    },

    desc: {
      overview: "美しさと柔らかさを表現したブランドサイト。余白を活かした女性らしいデザイン。",
      insight: "Coming Soon",
      insightText: "詳細テキストは準備中です。",
      idea: "Coming Soon",
      ideaText: "詳細テキストは準備中です。",
    },

    images: [
       "https://placehold.co/1200x800/D8C3B5/FFF?text=Lily+Main",
    ],
  },
  {
    id: "yachicro",
    slug: "yachimata",
    title: "YACHIMATA COFFEE",
    category: "Brand Site",
    year: "2024",
    role: "Design / Coding",
    url: "https://www.yachicro.com/",
    thumbnail: "https://placehold.co/800x500/3E3A39/FFF?text=YACHIMATA",
    
    theme: {
      bg: "#3E3A39",
      text: "#FFFFFF",
      isLight: false,
    },

    detailTheme: {
      bg: "#33302F",
      text: "#FFFFFF",
    },

    desc: {
      overview: "香りと時間を楽しむための、ミニマルで温かいサイト。コーヒーの湯気を感じるような静かな佇まい。",
      insight: "Coming Soon",
      insightText: "詳細テキストは準備中です。",
      idea: "Coming Soon",
      ideaText: "詳細テキストは準備中です。",
    },

    images: [
      "https://placehold.co/1200x800/3E3A39/FFF?text=Yachimata+Main",
    ],
  },
  {
    id: "minz",
    slug: "minz",
    title: "Min'z",
    category: "Online Store",
    year: "2023",
    role: "Design / Dev",
    url: "https://minz.luluvision.jp/",
    thumbnail: "https://placehold.co/800x500/004D40/FFF?text=Min'z",
    
    theme: {
      bg: "#004D40",
      text: "#FFFFFF",
      isLight: false,
    },

    detailTheme: {
      bg: "#003D33",
      text: "#FFFFFF",
    },

    desc: {
      overview: "フレッシュで力強い印象を与えるオンラインストア。ユーザーの記憶に残るカラーリング。",
      insight: "Coming Soon",
      insightText: "詳細テキストは準備中です。",
      idea: "Coming Soon",
      ideaText: "詳細テキストは準備中です。",
    },

    images: [
      "https://placehold.co/1200x800/004D40/FFF?text=Minz+Main",
    ],
  },
  {
    id: "frame",
    slug: "frame",
    title: "frame",
    category: "Online Store",
    year: "2023",
    role: "Design",
    url: "https://frameinterior.net/",
    thumbnail: "https://placehold.co/800x500/000/FFF?text=frame",
    
    theme: {
      bg: "#000000",
      text: "#FFFFFF",
      isLight: false,
    },

    detailTheme: {
      bg: "#111111",
      text: "#FFFFFF",
    },

    desc: {
      overview: "写真を切り取るフレームのような構成。主役となる商品を最大限に引き立てるデザイン。",
      insight: "Coming Soon",
      insightText: "詳細テキストは準備中です。",
      idea: "Coming Soon",
      ideaText: "詳細テキストは準備中です。",
    },

    images: [
      "https://placehold.co/1200x800/000/FFF?text=Frame+Main",
    ],
  },
];
