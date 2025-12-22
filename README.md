# Portfolio Website

個人Webデザイナーとしてのポートフォリオサイト

**公開予定URL**: `design.mutalog.com`

## 技術スタック

- **Next.js** 16.1.0 (App Router)
- **React** 19.2.3
- **TypeScript** 5.9.3
- **TailwindCSS** 4.1.18
- **pnpm** 10.26.1

## 開発環境セットアップ

### 必要な環境

- Node.js 18.x 以上
- pnpm 10.x 以上

### インストール

```bash
pnpm install
```

### 開発サーバー起動

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開く

### ビルド

```bash
pnpm build
```

### 本番環境起動

```bash
pnpm start
```

### リント

```bash
pnpm lint
```

## プロジェクト構造

```
portfolio_2512/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # トップページ
│   │   ├── globals.css   # グローバルスタイル
│   │   └── contact/      # コンタクトページ（今後追加）
│   ├── components/       # Reactコンポーネント（今後追加）
│   ├── lib/              # ユーティリティ（今後追加）
│   └── types/            # TypeScript型定義（今後追加）
├── public/
│   └── images/
│       └── works/        # 実績画像
├── 01_strategy.md        # 戦略・コンセプト
├── 02_requirements.md    # 要件定義
├── 03_tech-stack.md      # 技術スタック詳細
└── 04_works-content.md   # 掲載実績コンテンツ
```

## ドキュメント

プロジェクトの詳細なドキュメントは、以下のファイルを参照してください:

- [01_strategy.md](./01_strategy.md) - 戦略・コンセプト
- [02_requirements.md](./02_requirements.md) - 要件定義
- [03_tech-stack.md](./03_tech-stack.md) - 技術スタック・アーキテクチャ
- [04_works-content.md](./04_works-content.md) - 掲載実績コンテンツ
- [05_github-vercel-setup.md](./05_github-vercel-setup.md) - GitHub & Vercel セットアップ手順

## Phase 2 完了項目

- [x] 掲載実績5件のテンプレート作成
- [x] Next.jsプロジェクト初期化
- [x] TypeScript設定
- [x] TailwindCSS設定
- [x] ESLint設定
- [x] Prettier設定
- [x] Git初期化

## Phase 3 予定

- [ ] Figmaでワイヤーフレーム作成
- [ ] デザインシステム構築
- [ ] モックアップ作成

## ライセンス

Private（個人プロジェクト）
