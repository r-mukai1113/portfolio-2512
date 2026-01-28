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
    text: "「安心感がある」と評される穏やかな平和主義者。派手さよりも「確実さ」を重視し、細部まで丁寧に整える実務が得意です。事業を内側から堅実に支えるサポート役として力を発揮します。",
    image: "/images/ISFJ-A.png",
  },
  {
    id: "minimalism",
    title: "Minimalism",
    emoji: "⚪️",
    text: "日々の小さな決断ストレスを最小限に抑え、そこで生まれた「心の余白」を大切にしています。生活においてもデザインにおいても、流行に左右されず、長く愛せるミニマルな在り方に惹かれます。",
    image: "/images/Minimalism.png",
  },
  {
    id: "running",
    title: "Running",
    emoji: "🏃",
    text: "「食べても走れば許される」という免罪符で始めましたが、気づけば累計1,000kmを突破しフルマラソンも完走。無心で足を動かす時間は、心身のチューニングに欠かせない習慣です。",
    image: "/images/Running.png",
  },
  {
    id: "apple",
    title: "Apple",
    emoji: "🍏",
    text: "ハードウェアの造形美はもちろん、シームレスな連携や、箱を開ける瞬間から始まる「体験のデザイン」の虜です。気づけば身の回りはリンゴだらけ。もう、信者へ入信済みだと思います。",
    image: "/images/Apple.png",
  },
  {
    id: "muji",
    title: "MUJI",
    emoji: "🏡",
    text: "「シンプルだがデザイン性がある」佇まいと、長く愛せる機能美が好きです。特に「やわポリ」と「バナナバウム」は生活の必需品。この二つなら、いつでも熱く語る準備ができています！",
    image: "/images/MUJI.png",
  },
  {
    id: "fragrance",
    title: "Fragrance",
    emoji: "🪵",
    text: "お香やフレグランスは、空間を整える大切な要素。無印のお香を癒やしや集中のスイッチとして使い分けています。特にヒノキが好きで、ロウリュでこの香りに出会うと、静かにテンションが上がります。",
    image: "/images/Fragrance.png",
  },
  {
    id: "sauna",
    title: "Sauna",
    emoji: "🧖",
    text: "「サウナ・スパ健康アドバイザー」を取得するほどの愛好家。情報を遮断して汗を流す時間は、脳内のキャッシュクリアに不可欠です。温泉での温冷浴も含め、心身を整えることに余念がありません。",
    image: "/images/Sauna.png",
  },
  {
    id: "coffee",
    title: "Coffee",
    emoji: "☕️",
    text: "かつては砂糖とミルクを多用する甘党でしたが、今ではブラックも飲める大人です。深煎りの香りと苦味が、集中力を高めるスイッチ。作業のお供として、毎日欠かさず飲むようになっています。",
    image: "/images/Coffee.png",
  },
  {
    id: "baseball",
    title: "Baseball",
    emoji: "⚾️",
    text: "千葉出身の生粋のロッテファン。高校まで白球を追いかけた元・脳筋坊主です。スタジアムの熱気はもちろん、一球ごとの戦略的なプレーが好きで、毎シーズン足繁く球場へ通っています。",
    image: "/images/Baseball.png",
  },
  {
    id: "sweets",
    title: "Sweets",
    emoji: "🍮",
    text: "糖分は欠かせないガソリン。「デザートは別腹」スキルを習得済みの生粋の甘党。プロテインや白湯にも、とりあえずハチミツを入れてしまうほど、甘いものへの執着心は尽きることがありません。",
    image: "/images/Sweets.png",
  },
];
