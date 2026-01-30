// src/data/works.ts

export interface ContentBlock {
  title?: string;
  text: string;
  imageUrl?: string;
}

export interface Work {
  id: string;
  slug: string; // URLの末尾に使われるID
  title: string;
  category: string;
  year: string;
  date: string;
  role: string;
  url: string;
  thumbnail: string;
  tools: string[]; // ビルドエラーを防ぐために必須

  theme: {
    bg: string;
    text: string;
    isLight: boolean;
  };

  detailTheme: {
    bg: string;
    text: string;
  };

  desc: {
    overview: string;
    summary?: {
      background?: ContentBlock;
      solution?: ContentBlock;
      result?: ContentBlock;
    };
    sections?: ContentBlock[];
  };

  images: string[];
}

export const works: Work[] = [
  // 1. Y-Tag
  {
    id: "ytag",
    slug: "y-tag",
    title: "Y-Tag",
    category: "Online Store",
    year: "2025",
    date: "2025.12 (2 Months)",
    role: "Design / Shopify Development",
    url: "https://ytag.jp/",
    thumbnail: "/images/projects/y-tag/Y-Tag_thumbnail.png",
    tools: ["Figma", "Shopify", "Liquid"],

    theme: { bg: "#F0F2F5", text: "#333333", isLight: true },
    detailTheme: { bg: "#E5E7EB", text: "#333333" },

    desc: {
      overview: "「テック×感性」を掲げるライフスタイルブランド「Y-Tag」のEC刷新。リブランディングに伴い、「余白を、持ち歩く。」という情緒的価値をデジタル上で体現するため、戦略立案からShopifyによる構築までを一貫して担当。ノイズレスなデザインで、機能美を追求するプロダクトの世界観を忠実に表現しました。",
      summary: {
        background: {
          title: "機能から情緒への価値転換",
          text: "機能的訴求から「情緒的価値（余白）」へのブランドシフトに伴い、スペック重視ではなく世界観重視の表現への刷新が必要でした。従来の構成自体に大きな問題はなかったものの、商品が羅列される「情報過密」なレイアウトは、新コンセプトの世界観にはそぐわないものでした。",
          imageUrl: "https://placehold.co/800x450/E6E6E6/333?text=Background"
        },
        solution: {
          title: "「余白」を体現するリニューアル",
          text: "Figmaで設計したノイズレスなデザインを、Liquidによるコーディングで忠実に再現。スクロールに連動するインタラクティブなセクションやギフト機能の独自開発など、技術面でもブランド体験を支えています。",
          imageUrl: "https://placehold.co/800x450/E6E6E6/333?text=Solution"
        },
        result: {
          title: "2ヶ月での完遂と、チームとしての信頼獲得",
          text: "戦略立案から公開まで約2ヶ月という短期間でのローンチを実現。スプレッドシートを活用した柔軟な進行管理により、スピード感と丁寧さを両立しました。プロジェクト完了後にはブランドオーナーから「チームの一員として来年も頼りにしている」という言葉をいただき、他の事業者への紹介にもつながるなど、継続的な信頼関係を築くことができました。",
        }
      },
      sections: [
        {
          title: "「静けさ」が生む余白と、自然な視線誘導",
          text: "トップページにはあえて商品を縦に並べず、横スクロールで閲覧する形式を導入しました。視覚的なノイズを徹底的に抑えることで、ブランドストーリーや修理対応といった「情緒的な繋がり」を生むコンテンツへ、ユーザーを自然に誘う構成を目指しました。",
          imageUrl: "https://placehold.co/800x450/E6E6E6/333?text=Process+01"
        },
        {
          title: "ギフトラッピングの独自実装",
          text: "Shopifyの既存ギフトアプリは月額費用が発生するうえ、「モーダルを開く→ラッピングを選択→商品ページに戻る→カートに追加」という工程の多さがユーザーの離脱につながると感じていました。そこで、商品ページ上のチェックボックスをワンタップするだけでギフトラッピングを追加できる仕組みを独自に構築。運用コストの削減と、直感的な購入体験の両立を実現しました。",
          imageUrl: "https://placehold.co/800x450/E6E6E6/333?text=Process+02"
        },
        {
          title: "商品登録・運用の最適化",
          text: "メタフィールドを活用した商品情報の最適化など、Shopifyの標準機能を超えたカスタマイズを行いました。単に見た目を整えるだけでなく、クライアント自身で柔軟に運用できる「自走化」と、顧客体験の向上を両立させています。",
          imageUrl: "https://placehold.co/800x450/E6E6E6/333?text=Process+03"
        },
      ]
    },
    images: [
      "https://placehold.co/1200x800/E6E6E6/333?text=Y-Tag+Main",
      "https://placehold.co/1200x800/E6E6E6/333?text=Y-Tag+Sub1",
    ],
  },

  // 2. #MONOLITH
  {
    id: "monolith",
    slug: "monolith",
    title: "#MONOLITH",
    category: "Online Store",
    year: "2025",
    date: "2025.11 (2 Months)",
    role: "Design / Shopify Development",
    url: "https://monolith-tokyo.jp/",
    thumbnail: "/images/projects/monolith/MONOLITH_thumbnail.png",
    tools: ["Figma", "Shopify", "Liquid"],

    theme: { bg: "#111111", text: "#FFFFFF", isLight: false },
    detailTheme: { bg: "#0D0D0D", text: "#FFFFFF" },

    desc: {
      overview: "ブランドの成長に伴い、ECサイトの顧客体験と運用基盤を全面的にアップデート。コンクリートプロダクトが持つ「静寂」という世界観をノイズのないレイアウトで視覚化しました。複雑な商品情報をメタフィールドで体系化し、動画マニュアルによる運用支援も実施。美しさと更新性を両立した持続可能なECサイトを構築しました。",
      summary: {
        background: {
          title: "拡大するブランドと運用課題の乖離",
          text: "ブランドの急速な成長に伴い、既存のシステムでは商品情報の複雑化に対応しきれず、更新作業が属人化していました。「心の余白」というブランド哲学を損なわずに、情報を整理し拡張できる基盤が必要でした。",
          imageUrl: "https://placehold.co/800x450/111/FFF?text=Background"
        },
        solution: {
          title: "「ノイズ」を削ぎ落とすデザインと実装",
          text: "徹底的な微調整を繰り返し、商品写真の静けさを際立たせるUIを設計。裏側ではShopifyのメタフィールドを駆使して商品入力欄をテンプレート化し、更新の迷いをなくす設計を行いました。",
          imageUrl: "https://placehold.co/800x450/111/FFF?text=Solution"
        },
        result: {
          title: "美しさを維持したままの「自走」を実現",
          text: "複雑なレイアウトもクライアント自身で更新可能になり、新商品リリースのスピードが向上。動画マニュアルによる引継ぎにより、開発者に依存しない持続可能な運用フローが確立されました。",
        }
      },
      sections: [
        {
          title: "コンクリートの「静寂」をWebで再現する",
          text: "Aboutページにある「日々の喧騒から一歩離れ、自分と向き合う」という哲学をUIに落とし込みました。テキストサイズ、線の太さ、余白の取り方一つひとつにおいてノイズを排除し、デジタル空間でありながら、モノリスの前に佇んでいるような没入感を演出しています。",
          imageUrl: "https://placehold.co/800x450/111/FFF?text=Process+01"
        },
        {
          title: "複雑な情報を体系化するメタフィールド設計",
          text: "「ガラス製品」「インセンスホルダー」など商品タイプごとに異なる入力項目をメタフィールドで定義。さらに、Googleタグマネージャーの導入やメガメニューの実装など、マーケティングと回遊性を高める機能もミニマルなデザインの中に実装しました。",
          imageUrl: "https://placehold.co/800x450/111/FFF?text=Process+02"
        },
      ]
    },
    images: [
      "https://placehold.co/1200x800/111/FFF?text=Monolith+Main",
      "https://placehold.co/1200x800/111/FFF?text=Monolith+Sub1",
    ],
  },

  // 3. Lily-r
  {
    id: "lily",
    slug: "lily-r",
    title: "Lily-r",
    category: "Brand Site",
    year: "2025",
    date: "2025.08 (1 Month)",
    role: "Design / Studio Implementation",
    url: "https://lily-r-braids.studio.site/",
    thumbnail: "/images/projects/lily-r/Lily-r_thumbnail.png",
    tools: ["Figma", "STUDIO"],

    theme: { bg: "#F8F7F7", text: "#978B7D", isLight: true },
    detailTheme: { bg: "#F5F4F0", text: "#333333" },

    desc: {
      overview: "「Luxury Braids × No Border」を掲げるヘアサロン「Lily-r」のサイト刷新。自作サイトの更新課題に対し、Studioを用いた構築で解決策を提示しました。複雑なメニューや予約導線を整理しつつ、洗練された世界観を表現。ユーザーの利便性と運用負荷の軽減を両立した持続可能なサイトを実現しました。",
      summary: {
        background: {
          title: "理想のデザインと更新性のジレンマ",
          text: "これまでは自作サイトを運用していましたが、「更新作業が難しく、理想のデザインが形にならない」という課題を抱えていました。サロンの持つラグジュアリーな世界観を表現しつつ、専門知識がなくても更新できる環境が求められていました。",
          imageUrl: "https://placehold.co/800x450/F8F7F7/978B7D?text=Background"
        },
        solution: {
          title: "Studioによる「更新できる」ブランド表現",
          text: "ノーコードツールStudioを選定し、直感的な更新環境を構築。「Luxury Braids × No Border」のコンセプトを軸に、余白を活かした洗練されたビジュアルへ一新。施術写真やメニュー価格も、オーナー自身で手軽に修正できるCMS設計を行いました。",
          imageUrl: "https://placehold.co/800x450/F8F7F7/978B7D?text=Solution"
        },
        result: {
          title: "迷わない導線と、手離れの良い運用",
          text: "多岐にわたるメニューへのアクセス性が向上し、予約に関する問い合わせコストが減少。デザインの刷新によりブランド価値が正しく伝わるようになり、集客と運用の両面で「オーナーが施術に集中できる環境」を提供しました",
        }
      },
      sections: [
        {
          title: "情報の迷子を防ぐ「アンカーリンク」設計",
          text: "ブレイズヘアやコーンロウなど多岐にわたる施術メニューを、ユーザーが直感的に探せるようアンカーリンクを実装。縦に長いページでも、目的のメニューへスムーズに移動できるナビゲーションを設計し、離脱を防ぐ工夫を凝らしました。",
          imageUrl: "https://placehold.co/800x450/F8F7F7/978B7D?text=Process+01"
        },
        {
          title: "予約導線を「モーダル」へ集約",
          text: "電話、LINE、Instagramなど分散しがちな予約方法を、一つの「Reservation」ボタンから開くモーダルウィンドウに集約。ユーザーが自分に合った連絡手段をその場で選択できるようにし、予約までの心理的ハードルを下げています。",
          imageUrl: "https://placehold.co/800x450/F8F7F7/978B7D?text=Process+02"
        },
      ]
    },
    images: [
      "https://placehold.co/1200x800/F8F7F7/978B7D?text=Lily-r+Main",
      "https://placehold.co/1200x800/F8F7F7/978B7D?text=Lily-r+Sub1",
    ],
  },

  // 4. Online School LP
  {
    id: "online-school-lp",
    slug: "school-lp",
    title: "Online School LP",
    category: "Landing Page",
    year: "2025",
    date: "2025.03 (1 Month)",
    role: "Design / Studio Implementation / Logo Design",
    url: "",
    thumbnail: "https://placehold.co/800x500/F57F64/FFF?text=School+LP",
    tools: ["Figma", "STUDIO"],

    theme: { bg: "#F57F64", text: "#FFFFFF", isLight: false },
    detailTheme: { bg: "#FFEBE5", text: "#333333" },

    desc: {
      overview: "「スキルを定着させ、新しい働き方へ」を掲げるSNS運用代行スクールの新規会員獲得用LP。20〜30代の女性をメインターゲットに、スクール商材特有の「怪しさ」や「不安」を払拭し、「楽しそう」「私にもできそう」というポジティブな行動変容を促すデザインと構成設計、実装までを担当しました。",
      summary: {
        background: {
          title: "ターゲットの「不安」を払拭する信頼性の担保",
          text: "「副収入」や「スキル習得」を目指すスクールにおいて、ターゲット層は「本当に稼げるのか」「騙されないか」という心理的な壁を抱きがちです。競合リサーチの結果、デザインによる「安心感の醸成」と、情報の透明性がコンバージョン（申し込み）の鍵であると特定しました。",
          imageUrl: "https://placehold.co/800x450/F57F64/FFF?text=Background"
        },
        solution: {
          title: "「安心」と「活気」を両立させるデザイン設計",
          text: "女性に好まれつつ、エネルギッシュな印象を与える「#F57F64（コーラルピンク）」をキーカラーに採用。構成面では、ターゲットが最も懸念する「サポート体制」や「カリキュラム」の情報を厚く設計し、図解を用いることで直感的に理解できるレイアウトを構築しました。",
          imageUrl: "https://placehold.co/800x450/F57F64/FFF?text=Solution"
        },
        result: {
          title: "1ヶ月での高速立ち上げと完全なデザイン再現",
          text: "構成、デザインからStudio実装までを約1ヶ月で完遂。画像主体で実装を行うことで、複雑な装飾やフォントのニュアンスをStudio上で100%再現し、クライアントの要望通りのLPを短期間で公開まで導きました。",
        }
      },
      sections: [
        {
          title: "ポジティブな行動を促す配色戦略",
          text: "「活気がある」「楽しそう」という第一印象を形成するため、#F57F64（コーラルピンク）を選定。白背景や黒文字とのコントラスト比を調整し、信頼性を損なわない可読性と、前向きなブランドイメージを両立させました。",
          imageUrl: "https://placehold.co/800x450/F57F64/FFF?text=Process+01"
        },
        {
          title: "「安心」を可視化するセクション追加",
          text: "ワイヤーフレームの段階で、ターゲット層のニーズが高い「サポート体制」や「具体的な学習フロー」のセクションを追加提案。テキストだけでなく、実際の受講風景やサポート画面のイメージ画像を配置することで、入会後の未来を具体的に想像させる設計を行いました。",
          imageUrl: "https://placehold.co/800x450/F57F64/FFF?text=Process+02"
        },
      ]
    },
    images: [
      "https://placehold.co/1200x800/F57F64/FFF?text=School+LP+Main",
    ],
  },

  // 5. YACHIMATA COFFEE
  {
    id: "yachicro",
    slug: "yachimata",
    title: "YACHIMATA COFFEE",
    category: "Brand Site",
    year: "2024",
    date: "2024.11 (1 Month)",
    role: "Design / Studio Implementation",
    url: "https://www.yachicro.com/",
    thumbnail: "/images/projects/yachimata/Yachicro_thumbnail.png",
    tools: ["Figma", "STUDIO"],

    theme: { bg: "#595959", text: "#FFFFFF", isLight: false },
    detailTheme: { bg: "#595959", text: "#FFFFFF" },

    desc: {
      overview: "自家焙煎珈琲店「ヤチマタクロス珈琲豆焙煎所」の公式サイトリニューアル。更新が困難だった旧サイトの課題を解決するため、Studioで運用基盤を再構築しました。店舗のアイデンティティである「十字路（クロス）」と、内装の「グレー」を基調としたグリッドデザインで、ブランドの世界観を忠実に表現しました。",
      summary: {
        background: {
          title: "更新のブラックボックス化と、ブランド表現の乖離",
          text: "開店時にWordPressで制作したサイトは、更新手順の複雑さから放置され、新商品や定休日の情報が発信できていませんでした。また、こだわりの内装やパッケージが持つ「グレー×ブラック」の洗練された世界観が、Webサイト上で十分に表現しきれていない課題がありました。",
          imageUrl: "https://placehold.co/800x450/E9E9E9/1C1C1C?text=Background"
        },
        solution: {
          title: "「交差（Cross）」を体現するグリッドデザイン",
          text: "店名と所在地（八街十字路）から着想を得た「クロス」をコンセプトに、縦横のラインが交差するグリッドレイアウトを設計。背景色には店舗内装と同じ「#E9E9E9」を採用し、Webサイトを店舗の延長線上にある空間として定義しました。システム面ではStudioへ移行し、直感的な更新環境を整えました。",
          imageUrl: "https://placehold.co/800x450/E9E9E9/1C1C1C?text=Solution"
        },
        result: {
          title: "Webと店舗、SNSをつなぐハブの完成",
          text: "店舗、パッケージ、Webサイトのトーンマナーが統一され、ブランドの認知強度が向上しました。オーナー自身でのお知らせ更新が可能になったほか、PC閲覧時にInstagramへ誘導する動線を設けたことで、スマホアプリでのフォロワー獲得フローが確立されました。",
        }
      },
      sections: [
        {
          title: "モバイルファースト × PC独自の体験設計",
          text: "スマホでの閲覧を最優先にUIを設計する一方、PCビューでは画面左側にメニューやアクセス情報を常時固定。右側のコンテンツエリアには、あえてInstagramのQRコードを配置し、PCからスマホ（アプリ）へのスムーズな移行を促すOMO（Online Merges with Offline）施策をデザインに落とし込みました。",
          imageUrl: "https://placehold.co/800x450/E9E9E9/1C1C1C?text=Process+01"
        },
        {
          title: "ブランドを象徴する「交差」のアニメーション",
          text: "「ヤチマタクロス」という店名を視覚的に印象付けるため、ページ読み込み時に縦横のラインが交差してグリッドが形成されるオープニングアニメーションを実装しました。無機質になりがちなグレーのデザインに「動き」を持たせることで、静寂の中にもこだわりを感じさせるブランド体験を演出しています。",
          imageUrl: "https://placehold.co/800x450/E9E9E9/1C1C1C?text=Process+02"
        },
      ]
    },
    images: [
      "https://placehold.co/1200x800/E9E9E9/1C1C1C?text=Yachimata+Main",
      "https://placehold.co/1200x800/E9E9E9/1C1C1C?text=Yachimata+Sub1",
    ],
  },

  // 6. R.MUKAI Portfolio (自己紹介サイト用として残しておきます)
  {
    id: "portfolio",
    slug: "portfolio",
    title: "R.MUKAI Portfolio",
    category: "Portfolio",
    year: "2026",
    date: "2026.01 (5 Days)",
    role: "Design / Front-end Development",
    url: "",
    thumbnail: "https://placehold.co/800x500/666/FFF?text=Portfolio",
    tools: ["Figma", "Next.js", "TypeScript", "Tailwind CSS"],

    theme: { bg: "#FFF8F3", text: "#F37022", isLight: true },
    detailTheme: { bg: "#FFEFDE", text: "#333333" },

    desc: {
      overview: "デザイナーとしての「感性」とエンジニアとしての「構築力」を表現する自身のポートフォリオサイト。Next.jsとTailwind CSSを用いたモダンな技術スタックで構築し、技術力を証明するプロダクトとして位置付けました。生成AIとのペアプログラミングにより、デザインから実装・公開までをわずか5日間で完遂しました。",

      summary: {
        background: {
          title: "既存ツールでは表現しきれない「手触り」への渇望",
          text: "既存のポートフォリオサービスやNoCodeツールでは、私が大切にしている「マイクロインタラクション」や「ページ遷移の心地よさ」を完全に表現することに限界を感じていました。静的な画像だけでなく、動的な実装スキルを含めて自身の価値を伝える必要がありました。",
          imageUrl: "https://placehold.co/800x450/666/FFF?text=Background"
        },
        solution: {
          title: "AIをバディにした「超高速」開発の実践",
          text: "Next.js (App Router) を採用し、SPA特有の滑らかな遷移を実現。開発プロセスにおいてはAIを徹底活用し、コーディングやデバッグの時間を大幅に圧縮しました。「人間が意思決定し、AIが実装する」という次世代のワークフローを自ら実践し、5日間という短期間でのローンチを実現しました。",
          imageUrl: "https://placehold.co/800x450/666/FFF?text=Solution"
        },
        result: {
          title: "「デザインエンジニア」としての名刺代わりのサイト",
          text: "ビジュアルの美しさと、エンジニアリングによる機能性が融合したサイトが完成。詳細ページごとのテーマカラー変化やBento Gridによる情報整理など、細部へのこだわりを実装として落とし込むことで、自身のスキルセットを雄弁に語るポートフォリオとなりました。",
        }
      },
      sections: [
        {
          title: "没入感を生む「動的な色彩」設計",
          text: "プロジェクトの個性を際立たせるため、トップページではスライドごとに背景色と文字色が動的に変化する仕様を実装。Framer Motionを駆使し、画像とテキストがシンクロして「めくられる」ような心地よい操作感を追求しました。詳細ページへの遷移もシームレスに設計し、ユーザーの没入感を途切れさせない工夫を凝らしています。",
          imageUrl: "https://placehold.co/800x450/666/FFF?text=Process+01"
        },
        {
          title: "Bento Gridによる情報の構造化",
          text: "多岐にわたる制作実績の情報を、直感的に理解できるようBento Grid（弁当箱）レイアウトで整理。制作期間（Period）や使用ツール（Tools）といったスペック情報を視覚的にグループ化し、採用担当者やクライアントが必要な情報に瞬時にアクセスできるUIを目指しました。",
          imageUrl: "https://placehold.co/800x450/666/FFF?text=Process+02"
        },
      ]
    },
    images: ["https://placehold.co/1200x800/666/FFF?text=Portfolio+Main"],
  },
];
