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
    thumbnail: "/images/projects/y-tag/Y-Tag_thumbnail_02.png",
    tools: ["Figma", "Shopify", "Liquid"],

    theme: { bg: "#F0F2F5", text: "#333333", isLight: true },
    detailTheme: { bg: "#E5E7EB", text: "#333333" },

    desc: {
      overview: "「テック×感性」を掲げるライフスタイルブランド「Y-Tag」のEC刷新。リブランディングに伴い、「余白を、持ち歩く。」という情緒的価値をデジタル上で体現するため、戦略立案からShopifyによる構築までを一貫して担当。ノイズレスなデザインで、機能美を追求するプロダクトの世界観を忠実に表現しました。",
      summary: {
        background: {
          title: "スペック訴求の限界と、新コンセプトとの乖離",
          text: "Y-Tagは「Carry Your Story — 余白を持ち運び、人生を前へ進める」というミッションのもと、機能的訴求から情緒的価値へのブランドシフトを進めていました。従来のサイトは黒背景でテック・クールな印象を打ち出し、商品スペックを中心としたコンテンツを展開。商品数6点の時点では成立していた構成でしたが、リブランディング時には12点に拡大しており、商品が縦に羅列されるレイアウトは「静けさ」や「余白」を重視する新コンセプトとは相容れないものになっていました。",
          imageUrl: "https://placehold.co/800x450/E6E6E6/333?text=Background"
        },
        solution: {
          title: "静けさの中に技術を宿すShopify実装",
          text: "Figmaで設計したノイズレスなデザインを、Shopify Liquidによるコーディングで忠実に再現。12点に増えた商品は全てを縦に並べるのではなく、横スクロールで厳選表示する構成を提案し、視覚的なノイズを抑えました。さらに、スクロールに連動するインタラクティブなセクションやギフトラッピングの独自実装など、余白のあるデザインの中にも技術的な体験価値を組み込んでいます。",
          imageUrl: "https://placehold.co/800x450/E6E6E6/333?text=Solution"
        },
        result: {
          title: "月額コスト削減、70タスクの完遂",
          text: "初回ミーティングから公開まで、約2ヶ月・70以上のタスクを完遂。タスク管理・商品説明文のビフォーアフター・解説動画・サイトマップとステータスを1枚のスプレッドシートに集約し、クライアント側のアクションも事前に共有することで、出戻りなく進行しました。また、ギフトラッピングのアプリを使わない独自実装により、月額の固定費削減にも貢献。プロジェクト完了後にはブランドオーナーから「チームY-Tagとして来年も頼りにしている」という言葉をいただき、新しいお仕事の紹介にもつながりました。",
        }
      },
      sections: [
        {
          title: "商品を「並べない」という提案",
          text: "商品数が6点から12点に拡大するなか、全商品を縦に並べるとブランドの「静けさ」が損なわれると判断。トップページでは横スクロールによる厳選表示を提案しました。商品の情報密度を抑えることで、ページ下部に配置したBrand Storyや修理対応といった「情緒的なつながり」を生むコンテンツへ、ユーザーの視線が自然に流れる構成を実現。クライアントからも好評を得ました。",
          imageUrl: "https://placehold.co/800x450/E6E6E6/333?text=Process+01"
        },
        {
          title: "月額コストと離脱リスクを同時に解消するギフト機能",
          text: "Shopifyの既存アプリ「PAL - Gift Wrap, Gift Messages」を実際に検証したところ、月額費用の発生に加え、「モーダルを開く → ラッピングを選択 → 商品ページに戻る → カートに追加」という工程の多さが離脱リスクになると判断。商品ページ上のチェックボックスをタップするだけでラッピングを追加できる仕組みをLiquidで独自に構築しました。技術的には、カート追加時の変数割り当てとShopify既存コードとの連携、複数個数選択時のラッピング同数追加、同一ラッピングでも追加経路が異なれば別商品として扱うカートロジックの実装に注力。運用コストの削減と、直感的な購入体験の両立を実現しました。",
          imageUrl: "https://placehold.co/800x450/E6E6E6/333?text=Process+02"
        },
        {
          title: "「入力するだけで完成する」商品ページの仕組み化",
          text: "Y-Tagの商品は、独自素材「TagTex」を使用しているかどうかで大きく2タイプに分類されます。この特性を活かし、メタフィールドで2パターンのテンプレートを設計。TagTexを選択すると、生地紹介ページへのリンクや折りたたみの詳細ボックスが一括で表示される仕組みを構築しました。入力がなければ自動的に非表示となる設計により、クライアントは既存の入力項目を埋めるだけで商品ページが完成。運用者の負担を最小限に抑えつつ、ブランドの一貫性を維持できる仕組みを実現しています。",
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
    thumbnail: "/images/projects/monolith/MONOLITH_thumbnail_02.png",
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
    thumbnail: "/images/projects/lily-r/Lily-r_thumbnail_02.png",
    tools: ["Figma", "STUDIO"],

    theme: { bg: "#F8F7F7", text: "#978B7D", isLight: true },
    detailTheme: { bg: "#F5F4F0", text: "#333333" },

    desc: {
      overview: "「Luxury Braids × No Border」を掲げるヘアサロン「Lily-r」のサイト刷新。自作サイトの更新課題に対し、Studioを用いた構築で解決策を提示しました。複雑なメニューや予約導線を整理しつつ、洗練された世界観を表現。ユーザーの利便性と運用負荷の軽減を両立した持続可能なサイトを実現しました。",
      summary: {
        background: {
          title: "更新が止まったサイトと、届かない世界観",
          text: "当初はECサイト制作のご依頼でしたが、既存のホームページを確認すると、Ameba Owndのテンプレートで作られたサイトはメニューの価格や内容の更新が途絶えており、予約導線もContactページにLINEボタンが1つあるのみ。ヒアリングでは、テンプレートの制約から理想のデザインにならないという不満や、サロンの空間やサービスにこだわるラグジュアリーな世界観をサイトでも表現したいという想いを伺いました。ホームページの更新が止まっていること、予約導線がほぼないことから、ECだけでなくホームページの制作も提案しました。",
          imageUrl: "https://placehold.co/800x450/F8F7F7/978B7D?text=Background"
        },
        solution: {
          title: "オーナー自身で更新できるStudio設計",
          text: "課題の根本は「更新が止まること」だったため、オーナー自身で更新できる環境を第一に考え、Studioを選定。お知らせはニュースCMSで更新できる設計にし、メニューの価格や内容はコンテンツ編集モードで直接修正できるようレクチャーしました。デザインはクライアントが掲げた「Luxury Braids × No Border」というコンセプトを軸に、高級感と落ち着きのあるビジュアルでサロンの世界観を表現しています。",
          imageUrl: "https://placehold.co/800x450/F8F7F7/978B7D?text=Solution"
        },
        result: {
          title: "予約導線ゼロから、3経路のモーダルへ",
          text: "1ヶ月で制作を完了。公開時にクライアントから「めちゃくちゃ素敵です！修正点は特にありません」という言葉をいただきました。以前はContactページのLINEボタンのみだった予約導線が、公式LINE・Instagram DM・電話の3つをモーダルで集約する形に。更新が止まっていたメニュー情報も整理され、サロンの世界観が伝わるサイトになりました。なお、この案件は既存クライアントからのご紹介で実現したものです。",
        }
      },
      sections: [
        {
          title: "11カテゴリ・数十項目を整理するアンカーリンク設計",
          text: "Lily-rの施術メニューは、コーンロウ・ブレイズ・ドレッド・パーマ・カラーなど11カテゴリ、サイズや素材の組み合わせを含めると数十項目に及びます。この情報量をただ縦に並べるだけでは、ユーザーが目的のメニューにたどり着けません。PCビューでは2カラム構成とし、アンカーリンクのメニューを追従させることで、ページ内の回遊性を確保。モバイルビューではページ上部にアンカーリンクを配置し、下部のメニューへのアクセスを容易にしています。",
          imageUrl: "https://placehold.co/800x450/F8F7F7/978B7D?text=Process+01"
        },
        {
          title: "CTAがなかったサイトに、予約モーダルを設計",
          text: "以前のサイトには、明確なCTA（行動喚起）がほぼありませんでした。ContactページにLINEボタンが1つあるのみで、メニューを見たユーザーが予約したいと思っても、その導線が見えない状態でした。ヒアリングで実際の予約経路（公式LINE・Instagram DM・電話）を確認し、「Reservation」ボタンから開くモーダルウィンドウに3つの連絡手段を集約。ユーザーが自分に合った方法をその場で選べる設計にしました。",
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
    thumbnail: "/images/projects/school-lp/Skill-on-lp_thumbnail.png",
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
    thumbnail: "/images/projects/yachimata/Yachicro_thumbnail_02.png",
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
    date: "2026.01 (10 Days)",
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
          title: "作品が二の次になっていたポートフォリオ",
          text: "1年前にStudioで制作したポートフォリオサイトがありましたが、サイト自体に個性を持たせようとするあまり、肝心の作品が二の次になっていました。デザインの見る目もまだ若く、フォントのジャンプ率やカラースタイルにも初心者感が残る仕上がり。結果として、そのサイトは極力見せずに、案件ごとの制作ページを直接クライアントに共有するという運用に。ただ、毎回制作の意図を口頭で説明する必要があり、自分のスキルや考え方を体系的に伝える手段がない状態が続いていました。",
          imageUrl: "https://placehold.co/800x450/666/FFF?text=Background"
        },
        solution: {
          title: "AI活用でのコード実装という挑戦",
          text: "前回の反省から「作品が主役、サイトはミニマルに徹する」というコンセプトを設定。作品ごとに背景色を切り替える構想がありましたが、Studioでは実現が難しく、Next.js（App Router）でのコード実装を選択しました。開発にはCursor（Claude Code）を活用し、AI活用でのコード実装に挑戦。AIとの協業で環境構築から実装まで完遂。要件定義・環境構築に2日、デザインに4日、実装に3日、ライティングに1日、計10日間でローンチしました。",
          imageUrl: "https://placehold.co/800x450/666/FFF?text=Solution"
        },
        result: {
          title: "制作の意図まで伝わるサイトの完成",
          text: "口頭での説明に頼っていた制作意図を、サイト上で完結して伝えられるようになりました。各作品の詳細ページにBackground・Solution・Result・Processの構成を設け、「何を考え、なぜそうしたか」を言語化。初めてのコード実装・GitHub・Vercel環境でしたが、AIを活用したワークフローにより10日間で公開まで到達。営業時のポートフォリオとして、また名刺に掲載するサイトとして活用していきます。",
        }
      },
      sections: [
        {
          title: "作品を「主役」にする100vhの設計",
          text: "「作品が主役」というコンセプトを最も体現しているのが、トップページの設計です。初期のFigma段階から、1作品＝1画面（100vh）のレイアウトを構想。スクロールごとに画面が切り替わり、背景色と文字色が作品のテーマに合わせて動的に変化する仕様を実装しました。作品をめくるように閲覧でき、1画面ごとにその作品の印象が残る構成を目指しています。ポートフォリオサイト自体は目立たせず、ミニマルに徹することで、作品のビジュアルとコンセプトに視線が集中する設計にしています。",
          imageUrl: "https://placehold.co/800x450/666/FFF?text=Process+01"
        },
        {
          title: "3項目に絞る、Bento Gridの情報設計",
          text: "詳細ページでは、制作実績の情報をBento Gridで整理しました。Appleの影響を受けたこのレイアウトは、情報の区切りを無意識に感じさせ、ミニマルな印象を保ちながら必要な情報を伝えられる点で採用。掲載する情報は、Webサイトのカテゴリー・制作での役割・日時の3項目を最大値と決め、意図的に制限しました。情報を足すことは簡単ですが、削ぎ落とすことでクライアントの視線を作品そのものに向ける設計判断です。",
          imageUrl: "https://placehold.co/800x450/666/FFF?text=Process+02"
        },
        {
          title: "Date表記の試行錯誤——プロパティを増やさない工夫",
          text: "日時の表記は試行錯誤を重ねました。当初はYear（年のみ）としていましたが、情報として粗すぎるためDate（公開月）に変更。さらに、クライアントが少なからず気にする「どのくらいの期間で制作できるのか？」という情報を載せる必要があると判断。しかし、「期間」というプロパティを新たに作ると、3項目の上限を超えてしまう。そこで、Dateの中に括弧で期間を添える形（2025.12（2 Months））に着地しました。プロパティを増やさず、1項目の中で情報密度を上げるという工夫です。",
          imageUrl: "https://placehold.co/800x450/666/FFF?text=Process+03"
        },
      ]
    },
    images: ["https://placehold.co/1200x800/666/FFF?text=Portfolio+Main"],
  },
];
