// 実績データ

export interface Work {
  id: string;
  title: string;
  category: string;
  year: string;
  desc: string;
  url: string;
  thumbnail: string;
  theme: {
    bg: string;
    text: string;
    isLight: boolean;
  };
}

export const works: Work[] = [
  {
    id: "ytag",
    title: "Y-Tag",
    category: "Online Store",
    year: "2025",
    desc: "清潔感と機能美を追求したプロダクト。<br>白を基調とした洗練された世界観。",
    url: "https://ytag.jp/",
    thumbnail: "https://placehold.co/800x500/E6E6E6/333?text=Y-Tag",
    theme: {
      bg: "#F0F2F5",
      text: "#333333",
      isLight: true,
    },
  },
  {
    id: "monolith",
    title: "#MONOLITH",
    category: "Online Store",
    year: "2025",
    desc: "モノリスのような圧倒的な存在感。<br>デジタルとアナログの境界線を溶かすデザイン。",
    url: "https://monolith-tokyo.jp/",
    thumbnail: "https://placehold.co/800x500/111/FFF?text=Monolith",
    theme: {
      bg: "#111111",
      text: "#FFFFFF",
      isLight: false,
    },
  },
  {
    id: "lily-r",
    title: "Lily",
    category: "Brand Site",
    year: "2024",
    desc: "美しさと柔らかさを表現したブランドサイト。<br>余白を活かした女性らしいデザイン。",
    url: "https://lily-r-braids.studio.site/",
    thumbnail: "https://placehold.co/800x500/D8C3B5/FFF?text=Lily",
    theme: {
      bg: "#E8DCCA",
      text: "#333333",
      isLight: true,
    },
  },
  {
    id: "yachicro",
    title: "YACHIMATA COFFEE",
    category: "Brand Site",
    year: "2024",
    desc: "香りと時間を楽しむための、ミニマルで温かいサイト。<br>コーヒーの湯気を感じるような静かな佇まい。",
    url: "https://www.yachicro.com/",
    thumbnail: "https://placehold.co/800x500/3E3A39/FFF?text=YACHIMATA",
    theme: {
      bg: "#3E3A39",
      text: "#FFFFFF",
      isLight: false,
    },
  },
  {
    id: "minz",
    title: "Min'z",
    category: "Online Store",
    year: "2023",
    desc: "フレッシュで力強い印象を与えるオンラインストア。<br>ユーザーの記憶に残るカラーリング。",
    url: "https://minz.luluvision.jp/",
    thumbnail: "https://placehold.co/800x500/004D40/FFF?text=Min'z",
    theme: {
      bg: "#004D40",
      text: "#FFFFFF",
      isLight: false,
    },
  },
  {
    id: "frame",
    title: "frame",
    category: "Online Store",
    year: "2023",
    desc: "写真を切り取るフレームのような構成。<br>主役となる商品を最大限に引き立てるデザイン。",
    url: "https://frameinterior.net/",
    thumbnail: "https://placehold.co/800x500/000/FFF?text=frame",
    theme: {
      bg: "#000000",
      text: "#FFFFFF",
      isLight: false,
    },
  },
];
