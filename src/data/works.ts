// モックアップ実績データ
// 実際のプロジェクト内容に後から差し替え可能

export interface Work {
  id: string;
  title: string;
  client: string;
  period: string;
  role: string[];
  thumbnail: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: {
    design?: string[];
    development?: string[];
    other?: string[];
  };
}

export const works: Work[] = [
  {
    id: "work-01",
    title: "ECサイトリニューアル",
    client: "アパレルブランド A社",
    period: "2024年6月 - 2024年9月（3ヶ月）",
    role: ["デザイン", "実装"],
    thumbnail: "/images/works/work-01.jpg",
    challenge:
      "既存ECサイトのモバイル対応が不十分で、スマートフォンからの離脱率が高く、CVRが2%台と低迷していました。特に商品詳細ページでの離脱が顕著でした。",
    solution:
      "モバイルファーストのレスポンシブデザインを採用し、商品画像の表示を最適化。購入ボタンの配置を改善し、チェックアウトフローを3ステップに簡略化。Shopifyをベースに、Liquidテンプレートをカスタマイズして実装しました。",
    result:
      "リニューアル後、モバイルからのCVRが2.1%から4.8%に向上（+128%）。ページ滞在時間も平均1分30秒から2分45秒に増加。クライアントから「売上が前年比150%になった」との評価をいただきました。",
    technologies: {
      design: ["Figma", "Photoshop"],
      development: ["Shopify", "Shopify Liquid", "JavaScript", "CSS"],
    },
  },
  {
    id: "work-02",
    title: "美容サロンコーポレートサイト",
    client: "美容サロン B社",
    period: "2024年3月 - 2024年5月（2ヶ月）",
    role: ["デザイン", "実装"],
    thumbnail: "/images/works/work-02.jpg",
    challenge:
      "開業5年目を迎える美容サロンが、ブランドイメージの刷新と新規顧客獲得を目指していました。既存サイトは情報が古く、予約導線が不明瞭でした。",
    solution:
      "ブランドの世界観を表現するビジュアルデザインと、予約までの導線を明確にしたUI設計を実施。Studioを使用し、ノーコードで更新しやすいサイトを構築。メニュー表示やスタッフ紹介をモジュール化しました。",
    result:
      "公開後1ヶ月で、サイト経由の予約が月15件から38件に増加（+153%）。InstagramやGoogleマイビジネスとの連携により、新規顧客の流入が向上しました。",
    technologies: {
      design: ["Figma"],
      development: ["Studio"],
    },
  },
  {
    id: "work-03",
    title: "士業事務所ランディングページ",
    client: "税理士事務所 C社",
    period: "2024年1月 - 2024年2月（1ヶ月）",
    role: ["デザイン", "実装"],
    thumbnail: "/images/works/work-03.jpg",
    challenge:
      "新規顧客獲得のためのWeb広告を検討していたが、LP（ランディングページ）がなく、コーポレートサイトに誘導しても問い合わせに繋がらない状況でした。",
    solution:
      "ターゲット（個人事業主・スタートアップ）のペインポイントを明確にし、サービスの価値を端的に伝えるLPを設計。問い合わせフォームを簡略化し、3項目のみで送信可能にしました。",
    result:
      "広告経由のCVRが1.2%から6.5%に向上（+441%）。問い合わせ件数が月8件から32件に増加。クライアントから「費用対効果が大幅に改善した」との評価をいただきました。",
    technologies: {
      design: ["Figma"],
      development: ["HTML", "CSS", "JavaScript"],
    },
  },
  {
    id: "work-04",
    title: "飲食店予約サイト",
    client: "レストラン D社",
    period: "2023年10月 - 2023年12月（2ヶ月）",
    role: ["デザイン"],
    thumbnail: "/images/works/work-04.jpg",
    challenge:
      "高級レストランのブランドイメージを損なわず、オンライン予約システムを導入したいというニーズがありました。既存の予約フォームは機能的すぎて、ブランドの世界観と合いませんでした。",
    solution:
      "レストランの雰囲気を表現する写真を効果的に配置し、予約フォームをブランドトーンに合わせてデザイン。ユーザー体験を損なわないよう、必要最小限の入力項目に絞りました。",
    result:
      "デザイン完成後、開発パートナーによって実装され、公開後1ヶ月でオンライン予約が全体の40%を占めるように。電話対応の負担が軽減され、スタッフの業務効率が向上しました。",
    technologies: {
      design: ["Figma", "Photoshop"],
    },
  },
  {
    id: "work-05",
    title: "SaaS プロダクトLP",
    client: "スタートアップ E社",
    period: "2023年7月 - 2023年9月（2ヶ月）",
    role: ["デザイン", "実装"],
    thumbnail: "/images/works/work-05.jpg",
    challenge:
      "新規SaaSプロダクトのローンチにあたり、プロダクトの価値を分かりやすく伝え、無料トライアル登録を促進するLPが必要でした。競合他社との差別化も課題でした。",
    solution:
      "プロダクトのコアバリューを3つのポイントに集約し、ビジュアルとコピーで訴求。デモ動画を埋め込み、使用イメージを具体化。CTA（無料トライアル登録）への導線を複数配置しました。",
    result:
      "ローンチ初月で500件のトライアル登録を獲得。サイト訪問者の12%がトライアル登録に至り、目標（8%）を大きく上回りました。",
    technologies: {
      design: ["Figma"],
      development: ["Next.js", "TypeScript", "TailwindCSS"],
    },
  },
];
