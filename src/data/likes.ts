// src/data/likes.ts

export interface AboutItem {
  id: string;
  title: string;
  emoji: string;
  text: string;
  image: string;
}

export const aboutItems: AboutItem[] = [
  {
    id: "isfj",
    title: "ISFJ-A",
    emoji: "🌿",
    text: "「安心感がある」とよく言われる温厚な平和主義。派手さより確実さを重視しやすく、細かいところまで丁寧に整える縁の下の力持ちタイプです。",
    image: "/images/ISFJ-A.png",
  },
  {
    id: "minimalism",
    title: "Minimalism",
    emoji: "⚪️",
    text: "流行より、長く愛せるものを。日々の小さな決断を減らすことで生まれる「心の余白」を大切にしています。",
    image: "/images/Minimalism.png",
  },
  {
    id: "tidying",
    title: "Tidying",
    emoji: "📐",
    text: "整理収納アドバイザー1級。友人の家ではつい小言をこらえていますが、許可が出たら口が止まりません。",
    image: "",
  },
  {
    id: "muji",
    title: "MUJI",
    emoji: "🏡",
    text: "シンプルだけどデザイン性がある、長く使えるものが好き。「やわポリ」と「バナナバウム」は生活の必需品です。",
    image: "/images/MUJI.png",
  },
  {
    id: "apple",
    title: "Apple",
    emoji: "🍏",
    text: "箱を開ける瞬間から始まる「体験のデザイン」の虜。気づけば身の回りはリンゴだらけ。もう完全に入信。",
    image: "/images/Apple.png",
  },
  {
    id: "fragrance",
    title: "Fragrance",
    emoji: "🪵",
    text: "無印のお香を、癒やしや集中のスイッチとして使い分けています。特にヒノキが好き。ロウリュで出会うと静かに上がります。",
    image: "/images/Fragrance.png",
  },
  {
    id: "coffee",
    title: "Coffee",
    emoji: "☕️",
    text: "砂糖とミルク多用の甘党から、ブラックも飲める大人に成長。深煎りの香りと苦味が、毎日の集中スイッチです。",
    image: "/images/Coffee.png",
  },
  {
    id: "cooking",
    title: "Cooking",
    emoji: "🍳",
    text: "ふわトロなオムライスづくりを夢に、週7オムライスを食べ続けたこともある卵好きです。",
    image: "",
  },
  {
    id: "running",
    title: "Running",
    emoji: "🏃",
    text: "「食べても走れば許される」で始めたら、累計1,000km突破でフルマラソンも完走。無心で走る時間が最高のリセット。",
    image: "/images/Running.png",
  },
  {
    id: "sauna",
    title: "Sauna",
    emoji: "🧖",
    text: "「サウナ・スパ健康アドバイザー」を取得するほどの愛好家。もちろん、サウナハット持ってます。",
    image: "/images/Sauna.png",
  },
  {
    id: "onsen",
    title: "Onsen",
    emoji: "♨️",
    text: "温冷浴が最高に好き。お湯と水風呂を行き来するだけで、心身がリセットされる感覚がたまりません。",
    image: "",
  },
  {
    id: "travel",
    title: "Travel",
    emoji: "🏔️",
    text: "旅先では自然を見るのが好き。山や海の前に立つと、頭の中がスッと静かになる感覚が好きです。",
    image: "",
  },
  {
    id: "baseball",
    title: "Baseball",
    emoji: "⚾️",
    text: "千葉出身の生粋のロッテファン。高校まで白球を追いかけた元・脳筋坊主。毎シーズン球場で応援しています。",
    image: "/images/Baseball.png",
  },
  {
    id: "music",
    title: "Music",
    emoji: "🎵",
    text: "ポケモンやWii スポーツなど、ゲームのBGMが好き。特にマリオカートのココナッツモールは名曲です。",
    image: "",
  },
  {
    id: "sweets",
    title: "Sweets",
    emoji: "🍮",
    text: "「デザートは別腹」スキル習得済みの生粋の甘党。プロテインや白湯にハチミツを入れてしまう、甘味への執着は尽きません。",
    image: "/images/Sweets.png",
  },
  {
    id: "pet",
    title: "Pet",
    emoji: "🐇",
    text: "実家にうさぎがいます。ストーブの前で温まった後、涼しい場所で整う術を知っている賢い子です。",
    image: "",
  },
];
