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
      overview: "「テック×感性」を掲げるライフスタイルブランド「Y-Tag」のEC刷新。リブランディングに伴い、「余白を、持ち歩く。」という情緒的価値をデジタル上で体現するため、デザインからShopify Liquidでの構築までを一貫して担当。ノイズレスなレイアウトで、12点の商品が映えるブランドの世界観を忠実に表現しました。",
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
      overview: "ブランド開始初期から約2年にわたり継続的に伴走する、コンクリートプロダクトブランド「#MONOLITH」のECサイト運用・改善。商品数20点への拡大に伴い、メタフィールドによる商品ページのテンプレート化とLoom動画マニュアルの整備で、誰が更新しても世界観が崩れない自走可能な運用体制を構築しました。",
      summary: {
        background: {
          title: "1年の伴走から見えた、次の課題",
          text: "#MONOLITHはブランド開始から約半年の時点で最初のご依頼をいただき、2年ほど継続的に部分的なリニューアルに携わっています。今回のプロジェクトでは、商品数が20点まで拡大する中で、商品ページの更新作業が集中していたことが課題でした。オーナーだけでなくEC管理者も操作する体制のため、誰が更新してもブランドの世界観が崩れない仕組みが必要でした。",
          imageUrl: "https://placehold.co/800x450/111/FFF?text=Background"
        },
        solution: {
          title: "更新しても崩れない、テンプレート設計",
          text: "商品ページをメタフィールドでテンプレート化。導入事例の写真やYouTube動画の有無による分類、ガラス製品専用のオプション導線など、商品タイプごとに異なるレイアウトを設計しました。デザイン面では、クライアントの「余白・余裕感を大事にしたい」という要望を軸に、テキストサイズ・線の太さ・余白を全ページで統一的に調整。更新後には各機能のLoom動画マニュアルを作成し、EC管理者でも迷わず更新できる体制を整えました。",
          imageUrl: "https://placehold.co/800x450/111/FFF?text=Solution"
        },
        result: {
          title: "30以上のタスク完遂、自走できる運用体制へ",
          text: "約2ヶ月で30以上のタスクを完遂。全ページのテキストスタイル編集、トップページ・商品ページ・コレクションページ・ヘッダーメニューのリニューアルに加え、Googleタグマネージャーの導入まで実施。プロジェクト管理シートの共有時には、クライアントから「シートめちゃくちゃみやすい」という言葉をいただきました。商品ページのテンプレート移行とLoom動画マニュアルの共有により、EC管理者が自走できる運用体制が整いました。現在もギフトページの制作やトップページの構成検討など、継続的に携わっています。",
        }
      },
      sections: [
        {
          title: "20商品を整理するカテゴリー設計",
          text: "商品数が20点に拡大する中で、トップページからの回遊性を高めるためにカテゴリー設計を提案しました。Incense Holder・Plate・Flower Vaseの人気カテゴリーに加え、全商品を見る「All」を追加。トップページには丸アイコンで横1列4つのカテゴリーセクションを配置し、各カテゴリーページも作成。ヘッダーメニューもメガメニューに変更し、どのページからでもカテゴリーにアクセスできる導線を整えました。",
          imageUrl: "https://placehold.co/800x450/111/FFF?text=Process+01"
        },
        {
          title: "誰が更新しても崩れない、商品ページのテンプレート設計",
          text: "商品ページの更新作業が私に集中していた状態を解消するため、メタフィールドで商品ページをテンプレート化。導入事例の写真、YouTube動画、ガラス製品のオプション導線など、商品タイプによって異なる表示項目をテンプレートで切り替える設計にしました。EC管理者が実際にテンプレート移行作業を行い、各機能の編集方法はLoom動画マニュアルで共有。実装だけでなく、運用体制まで含めた納品をしています。",
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

    theme: { bg: "#F0EDEB", text: "#978B7D", isLight: true },
    detailTheme: { bg: "#F5F4F0", text: "#333333" },

    desc: {
      overview: "「Luxury Braids × No Border」を掲げるヘアサロン「Lily-r」のサイト制作。Ameba Owndテンプレートで作られた旧サイトは更新が止まり、予約導線もほぼない状態でした。Studioで更新しやすい環境を構築し、11カテゴリの施術メニュー整理と3経路の予約モーダル設計で、世界観と導線を両立したサイトを実現しました。",
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
    role: "Design / Studio Implementation",
    url: "",
    thumbnail: "/images/projects/school-lp/Skill-on-lp_thumbnail.png",
    tools: ["Figma", "STUDIO"],

    theme: { bg: "#F57F64", text: "#FFFFFF", isLight: false },
    detailTheme: { bg: "#FFEBE5", text: "#333333" },

    desc: {
      overview: "オンラインスクールの新規会員獲得LP。20〜30代の女性をメインターゲットに、スクール商材特有の「怪しさ」や「不安」を払拭するため競合約30サイトをリサーチ。安心感と行動変容を促すデザイン・構成設計・ライティングから実装まで担当しました。",
      summary: {
        background: {
          title: "構成・ライティングまで担ったLP制作",
          text: "オンラインスクールの新規会員獲得LPの制作依頼。自身のSNS発信の経験があったため、デザインだけでなく競合リサーチ・構成設計・ライティングまで担当しました。ターゲット層が「本当に身につくのか」「騙されないか」という心理的な壁を抱きやすい領域のため、競合サイトを約30サイト調査し、デザインによる安心感の醸成と情報の透明性が申し込みの鍵であると判断しました。",
        },
        solution: {
          title: "30サイトのリサーチから導いた構成",
          text: "競合リサーチを踏まえ、ターゲットが最も懸念するサポート体制や学習フローのセクションを厚く設計。図解を用いて体系的に学べるカリキュラムを可視化し、入会後のイメージを具体的に持てる構成にしました。キーカラーにはコーラルピンク（#F57F64）を採用。活気がありつつ信頼感も損なわない配色で、前向きな行動を促すデザインにしています。Studioでの実装は画像主体で行い、複雑な装飾やフォントのニュアンスを再現しました。",
        },
        result: {
          title: "リサーチから実装まで1ヶ月で完遂",
          text: "競合リサーチ・構成設計・ライティング・デザイン・Studio実装までを1ヶ月で完遂。デザインだけでなく、コンセプトからライティングまで一貫して担当した案件です。",
        }
      },
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
      overview: "自家焙煎珈琲店「ヤチマタクロス珈琲豆焙煎所」の公式サイトリニューアル。WordPressからStudioへ移行し運用基盤を再構築。店名の由来「十字路（クロス）」から着想した交差するグリッドレイアウトで、店舗の世界観を表現しています。",
      summary: {
        background: {
          title: "更新が止まったWordPressと、伝わらない世界観",
          text: "開店時にWordPressで制作されたサイトは、更新手順の複雑さから放置され、新商品や定休日の情報が発信できていない状態でした。また、こだわりの内装やパッケージが持つグレー×ブラックの洗練された世界観が、Webサイト上では表現しきれていませんでした。",
        },
        solution: {
          title: "店名の由来から導いた「クロス」のコンセプト",
          text: "店名と所在地（八街十字路）から着想を得た「クロス（交差）」をコンセプトとして提案。縦横のラインが交差するグリッドレイアウトを設計し、背景色には店舗内装と同じ#E9E9E9を採用することで、Webサイトを店舗の延長線上にある空間として設計しました。システム面ではStudioへ移行し、更新環境を整えています。",
          imageUrl: "https://placehold.co/800x450/E9E9E9/1C1C1C?text=Solution"
        },
        result: {
          title: "店舗・パッケージ・Webのトーン統一",
          text: "1ヶ月で制作を完了。店舗・パッケージ・Webサイトのトーンマナーが統一され、ブランドの世界観が一貫して伝わるサイトになりました。メニューには人気商4点を掲載し、価格はあえて載せない構成にすることで、更新の必要がない設計にしています。",
        }
      },
      sections: [
        {
          title: "PCビューでInstagramへ誘導する設計",
          text: "モバイルでの閲覧を最優先にUIを設計する一方、PCビューでは画面左側にメニューやアクセス情報を常時固定。右側のコンテンツエリアにはInstagramのQRコードを配置し、PCからスマホ（アプリ）へのスムーズな移行を促す導線を設計しました。",
        },
        {
          title: "「交差」を視覚化するオープニングアニメーション",
          text: "店名の由来を視覚的に印象付けるため、ページ読み込み時に縦横のラインが交差してグリッドが形成されるオープニングアニメーションを実装。グレー基調のデザインに動きを持たせることで、ブランドのコンセプトをサイトを開いた瞬間に伝える演出にしています。",
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
    thumbnail: "/images/projects/portfolio/portfolio_thumbnail.png",
    tools: ["Figma", "Next.js", "TypeScript", "Tailwind CSS"],

    theme: { bg: "#FFEFDE", text: "#F37022", isLight: true },
    detailTheme: { bg: "#FFEFDE", text: "#333333" },

    desc: {
      overview: "制作の意図まで伝わるポートフォリオサイトを目指し、Next.js（App Router）とTailwind CSSで構築した自身のサイト。Cursor（Claude Code）によるAI活用でのコード実装に挑戦し、要件定義からデザイン・実装・公開までを10日間で完遂。作品が主役となるミニマルな設計を追求しました。",

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
