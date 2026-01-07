// 実績データ

export interface Work {
  id: string;
  title: string;
  client: string;
  url: string;
  thumbnail: string;
}

export const works: Work[] = [
  {
    id: "ytag",
    title: "Y-Tag",
    client: "ECサイト",
    url: "https://ytag.jp/",
    thumbnail: "/images/works/ytag.jpg",
  },
  {
    id: "monolith",
    title: "#MONOLITH",
    client: "ECサイト",
    url: "https://monolith-tokyo.jp/",
    thumbnail: "/images/works/monolith.jpg",
  },
  {
    id: "yachicro",
    title: "ヤチマタクロス珈琲豆焙煎所",
    client: "ホームページ",
    url: "https://www.yachicro.com/",
    thumbnail: "/images/works/yachicro.jpg",
  },
  {
    id: "lily-r",
    title: "Lily-r",
    client: "ホームページ",
    url: "https://lily-r-braids.studio.site/",
    thumbnail: "/images/works/lily-r.jpg",
  },
  {
    id: "frame",
    title: "frame",
    client: "ECサイト",
    url: "https://frameinterior.net/",
    thumbnail: "/images/works/frame.jpg",
  },
  {
    id: "minz",
    title: "Min'Z",
    client: "ECサイト",
    url: "https://minz.luluvision.jp/",
    thumbnail: "/images/works/minz.jpg",
  },
];
