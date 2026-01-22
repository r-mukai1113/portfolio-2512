export type LikeItem = {
  id: string;
  emoji: string;
  text: string;
  image: string;
  comment: string;
};

export const likesData: LikeItem[] = [
  { id: "interior", emoji: "🪑", text: "インテリア", image: "https://placehold.co/600x400/D8C3B5/FFF?text=Interior", comment: "居心地の良い空間を作ることが趣味です。素材感のある家具が好きです。" },
  { id: "simple", emoji: "⬜️", text: "シンプルなもの", image: "https://placehold.co/600x400/eee/333?text=Simple", comment: "ノイズのないデザインに惹かれます。" },
  { id: "apple", emoji: "🍎", text: "Apple", image: "https://placehold.co/600x400/000/fff?text=Apple", comment: "製品の箱を開ける体験からデザインされています。" },
  { id: "sauna", emoji: "🧖", text: "サウナ", image: "https://placehold.co/600x400/aaa/333?text=Sauna", comment: "思考を整理する大切な時間です。" },
  { id: "running", emoji: "🏃", text: "ランニング", image: "https://placehold.co/600x400/004d40/fff?text=Running", comment: "心身のバランスを整えるための習慣です。" },
  { id: "baseball", emoji: "⚾️", text: "野球観戦", image: "https://placehold.co/600x400/004d40/fff?text=Baseball", comment: "スタジアムの雰囲気が好きです。" },
  { id: "soda", emoji: "🥤", text: "炭酸飲料", image: "https://placehold.co/600x400/f00/fff?text=Soda", comment: "リフレッシュしたい時に欠かせません。" },
  { id: "coffee", emoji: "☕️", text: "コーヒー", image: "https://placehold.co/600x400/3e3020/fff?text=Coffee", comment: "深煎りのコーヒーで集中力を高めます。" },
  { id: "ramen", emoji: "🍜", text: "ラーメン", image: "https://placehold.co/600x400/f00/fff?text=Ramen", comment: "意外と言われますが、ラーメン巡りも好きです。" },
  { id: "omelet", emoji: "🥚", text: "オムライス", image: "https://placehold.co/600x400/ff9/333?text=Omelet", comment: "卵料理には目がありません。" },
  { id: "sweets", emoji: "🍮", text: "甘いもの", image: "https://placehold.co/600x400/c69/fff?text=Sweets", comment: "作業の合間の糖分補給は欠かせません。" },
];
