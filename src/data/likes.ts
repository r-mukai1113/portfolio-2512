export type LikeItem = {
  id: string;
  emoji: string;
  text: string;
  image: string;
  comment: string;
};

export const likesData: LikeItem[] = [
  // 新規: MBTI (ユーモアあり)
  { 
    id: "isfj", 
    emoji: "🛡️", 
    text: "ISFJ-A", 
    image: "https://placehold.co/600x400/333/fff?text=ISFJ-A", 
    comment: "徹底した平和主義者です。争いごとは好みませんが、デザインにおける「1pxのズレ」との戦いに関してだけは、一歩も譲りません。" 
  },
  // 新規: ミニマリズム
  { 
    id: "minimalism", 
    emoji: "⬜️", 
    text: "Minimalism", 
    image: "https://placehold.co/600x400/fafafa/333?text=Minimalism", 
    comment: "「Less is More」。ノイズを極限まで削ぎ落とし、余白を大切にすることで、本当に伝えたい情報の輪郭を際立たせることを信条としています。" 
  },
  // 既存: Apple
  { 
    id: "apple", 
    emoji: "🍎", 
    text: "Apple", 
    image: "https://placehold.co/600x400/000/fff?text=Apple", 
    comment: "ハードウェアの美しさはもちろん、箱を開ける瞬間から始まる「体験のデザイン」に強く惹かれます。" 
  },
  // 既存: インテリア
  { 
    id: "interior", 
    emoji: "🪑", 
    text: "Interior", 
    image: "https://placehold.co/600x400/D8C3B5/FFF?text=Interior", 
    comment: "居心地の良い空間を作ることが趣味です。経年変化を楽しめる、素材感のある家具が好きです。" 
  },
  // 既存: サウナ
  { 
    id: "sauna", 
    emoji: "🧖", 
    text: "Sauna", 
    image: "https://placehold.co/600x400/aaa/333?text=Sauna", 
    comment: "思考を整理する大切な時間です。情報を遮断し、身一つになることで、頭の中のキャッシュをクリアします。" 
  },
  // 既存: コーヒー
  { 
    id: "coffee", 
    emoji: "☕️", 
    text: "Coffee", 
    image: "https://placehold.co/600x400/3e3020/fff?text=Coffee", 
    comment: "深煎りのコーヒーで集中力を高めます。豆を挽く工程や香りは、作業前のスイッチを入れる儀式のようなものです。" 
  },
  // 既存: ランニング
  { 
    id: "running", 
    emoji: "🏃", 
    text: "Running", 
    image: "https://placehold.co/600x400/004d40/fff?text=Running", 
    comment: "心身のバランスを整えるための習慣です。走っている間は無心になれるため、新しいアイデアが浮かぶことも多いです。" 
  },
  // 既存: 甘いもの
  { 
    id: "sweets", 
    emoji: "🍮", 
    text: "Sweets", 
    image: "https://placehold.co/600x400/c69/fff?text=Sweets", 
    comment: "作業の合間の糖分補給は欠かせません。プリンやカヌレなど、シンプルで奥深いお菓子が好きです。" 
  },
  // 既存: 野球
  { 
    id: "baseball", 
    emoji: "⚾️", 
    text: "Baseball", 
    image: "https://placehold.co/600x400/004d40/fff?text=Baseball", 
    comment: "スタジアムの熱気や、戦略的なプレーを見るのが好きです。データ野球的な側面にも惹かれます。" 
  },
];
