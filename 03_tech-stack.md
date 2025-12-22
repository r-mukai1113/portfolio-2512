# ポートフォリオ制作プロジェクト - 技術スタック・アーキテクチャ

## 技術選定の方針

**Goodpatchのエンジニア採用要件をトレース**し、技術的信頼性を担保する。
同時に、個人で運用可能な現実的な技術選定を行う。

---

## フロントエンド技術スタック

### コアテクノロジー

#### 1. React 18+
- **選定理由**:
  - 業界標準のUIライブラリ
  - コンポーネント指向開発が可能
  - 豊富なエコシステム

#### 2. Next.js 14+ (App Router)
- **選定理由**:
  - React のフレームワークとして最も採用されている
  - SSG（Static Site Generation）によるパフォーマンス最適化
  - ファイルベースルーティング
  - API Routes による簡易バックエンド実装
  - Vercel との相性が良い
  - SEO 最適化が容易

- **採用機能**:
  - App Router（最新のルーティング方式）
  - Server Components
  - Image Optimization（next/image）
  - Font Optimization（next/font）
  - Metadata API（SEO設定）

#### 3. TypeScript
- **選定理由**:
  - 型安全性による品質向上
  - エディタサポートの充実
  - 大規模開発でも保守性が高い
  - Goodpatch等のモダン企業で標準採用

- **設定方針**:
  - strict モード有効化
  - 明示的な型定義を心がける

### スタイリング

#### TailwindCSS 3+
- **選定理由**:
  - ユーティリティファーストで開発速度が速い
  - デザインシステムとの親和性が高い
  - パフォーマンスが良い（未使用クラスの削除）
  - レスポンシブ対応が容易

- **カスタマイズ方針**:
  - tailwind.config.js でカラーパレット定義
  - カスタムスペーシング・ブレークポイント設定
  - プラグイン活用（必要に応じて）

### 追加ライブラリ（検討中）

#### React Hook Form
- **用途**: コンタクトフォームのバリデーション管理
- **メリット**: 軽量、パフォーマンスが良い、型安全

#### Framer Motion
- **用途**: UIアニメーション
- **メリット**: 宣言的なアニメーション記述、React との相性が良い
- **注意**: パフォーマンスへの影響を考慮し、控えめに使用

#### zod
- **用途**: スキーマバリデーション（フォーム、API）
- **メリット**: TypeScript との親和性、型推論

---

## バックエンド・API

### Next.js API Routes
- **用途**: コンタクトフォームの送信処理
- **実装内容**:
  - `/api/contact` エンドポイント
  - バリデーション処理
  - メール送信処理
  - エラーハンドリング

### メール送信サービス

#### 候補1: SendGrid
- **メリット**:
  - 信頼性が高い
  - 無料枠が充実（月100通まで）
  - ドキュメントが豊富

#### 候補2: Resend
- **メリット**:
  - 開発者体験が良い
  - Next.js との統合が簡単
  - モダンなAPI設計

**→ 最終的にはテストして決定**

---

## インフラ・デプロイ

### ホスティング: Vercel
- **選定理由**:
  - Next.js の開発元
  - 自動デプロイ（GitHub連携）
  - グローバルCDN
  - 高速なビルド・デプロイ
  - 無料枠で十分な性能
  - プレビュー環境の自動生成

- **設定**:
  - プロダクションブランチ: `main`
  - 自動デプロイ有効化
  - 環境変数設定（メールAPI キー等）

### バージョン管理: GitHub
- **リポジトリ構成**:
  - パブリックリポジトリ（ポートフォリオとして技術力を示す）
  - README.md でプロジェクト説明
  - .gitignore 適切に設定

- **ブランチ戦略**:
  - GitHub Flow（シンプルな運用）
  - `main`: 本番環境
  - `develop`: 開発環境（オプション）
  - feature ブランチ: 機能開発

### ドメイン
- **URL**: `design.mutalog.com`
- **設定**:
  - 既存ドメイン（mutalog.com）のサブドメイン
  - Vercel でカスタムドメイン設定
  - SSL証明書自動発行

---

## 開発環境・ツール

### パッケージマネージャー
**候補**: npm / yarn / pnpm

**→ pnpm を推奨**
- 高速
- ディスク効率が良い
- モノレポ対応（将来的な拡張性）

### コード品質管理

#### ESLint
- **設定**:
  - Next.js 推奨設定を基本
  - TypeScript 対応
  - React Hooks ルール
  - アクセシビリティルール（eslint-plugin-jsx-a11y）

#### Prettier
- **設定**:
  - 一貫したコードフォーマット
  - ESLint との連携
  - エディタ統合（保存時フォーマット）

#### Husky + lint-staged
- **用途**: コミット前の自動チェック
- **実行内容**:
  - ESLint チェック
  - Prettier フォーマット
  - TypeScript 型チェック

### エディタ
- **推奨**: Visual Studio Code
- **拡張機能**:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript Vue Plugin (Volar) ※ 必要に応じて

---

## プロジェクト構造

```
portfolio/
├── .github/              # GitHub設定（ワークフロー等）
├── public/               # 静的ファイル
│   ├── images/           # 画像ファイル
│   └── fonts/            # フォントファイル（必要に応じて）
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # トップページ
│   │   ├── contact/
│   │   │   └── page.tsx  # コンタクトページ
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts  # コンタクトAPI
│   ├── components/       # Reactコンポーネント
│   │   ├── common/       # 共通コンポーネント
│   │   ├── layout/       # レイアウトコンポーネント
│   │   └── sections/     # セクションコンポーネント
│   ├── lib/              # ユーティリティ・ヘルパー
│   ├── types/            # TypeScript型定義
│   └── styles/           # グローバルスタイル
├── .eslintrc.json        # ESLint設定
├── .prettierrc           # Prettier設定
├── tailwind.config.ts    # TailwindCSS設定
├── tsconfig.json         # TypeScript設定
├── next.config.js        # Next.js設定
├── package.json
└── README.md
```

---

## パフォーマンス最適化戦略

### 画像最適化
1. **next/image の活用**:
   - 自動的なWebP変換
   - 遅延読み込み（Lazy Loading）
   - レスポンシブ画像

2. **画像ファイルの事前最適化**:
   - 適切なサイズにリサイズ
   - 圧縮ツール使用（ImageOptim、Squoosh等）

### コード最適化
1. **コード分割**:
   - Next.js の自動コード分割を活用
   - Dynamic Import（必要に応じて）

2. **バンドルサイズ削減**:
   - Tree Shaking（未使用コードの削除）
   - ライブラリの選定（軽量なものを優先）

### SSG（Static Site Generation）
- **対象ページ**: 全ページ
- **メリット**:
  - 高速な初期表示
  - SEO効果
  - サーバーコスト削減

---

## セキュリティ対策

### フォームセキュリティ
1. **CSRF対策**:
   - Next.js のAPI Routes は基本的に保護されている
   - 必要に応じてトークン検証

2. **入力バリデーション**:
   - クライアント側: React Hook Form + zod
   - サーバー側: API Routes でも再検証

3. **レート制限**:
   - Vercel の Edge Functions でリクエスト制限
   - または Upstash Redis を使用したレート制限（検討）

### 環境変数管理
- `.env.local` で管理
- 本番環境: Vercel の環境変数設定
- **機密情報のコミット厳禁**: `.gitignore` に追加

---

## アクセシビリティ実装

### 実装項目
1. **セマンティックHTML**:
   - 適切なHTMLタグ使用（header, nav, main, article, footer等）

2. **ARIA属性**:
   - 必要箇所に aria-label, aria-labelledby 等を設定

3. **キーボード操作**:
   - すべてのインタラクティブ要素にフォーカス可能
   - タブオーダーの最適化

4. **コントラスト比**:
   - WCAG AA基準（4.5:1以上）を満たす配色

5. **スクリーンリーダー対応**:
   - alt属性の適切な設定
   - 隠しテキストの活用（sr-only クラス）

### 検証ツール
- Lighthouse（アクセシビリティスコア）
- axe DevTools
- WAVE

---

## SEO実装

### メタデータ設定
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Portfolio | Your Name - Web Designer & Frontend Developer',
  description: '個人事業主向けのWebデザイン・フロントエンド開発を提供',
  openGraph: {
    title: 'Portfolio | Your Name',
    description: '...',
    url: 'https://design.mutalog.com',
    siteName: 'Your Name Portfolio',
    images: [{ url: '/og-image.png' }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '...',
    description: '...',
    images: ['/twitter-image.png'],
  },
}
```

### 構造化データ（JSON-LD）
- Person スキーマ
- WebSite スキーマ
- 実績ページ: CreativeWork スキーマ

### サイトマップ
- `app/sitemap.ts` で自動生成
- 動的に更新

### robots.txt
- クローラー制御
- サイトマップURLの指定

---

## テスト戦略（オプション）

### 段階的導入
1. **Phase 4（実装）では最小限**:
   - 手動テスト中心
   - Lighthouse でのパフォーマンステスト

2. **運用開始後に拡充**:
   - Jest + React Testing Library（ユニットテスト）
   - Playwright（E2Eテスト）

---

## モニタリング・分析

### アクセス解析
**候補**:
1. **Google Analytics 4**
2. **Vercel Analytics**（シンプルで軽量）
3. **Plausible**（プライバシー重視）

**→ Vercel Analytics を優先検討**（設定が簡単）

### エラートラッキング
- Vercel の標準ログ機能
- 必要に応じて Sentry 導入

---

## 技術的な差別化ポイント

### このプロジェクトで示せる技術力
1. **モダンな技術スタックの理解**
   - React 18+、Next.js 14 App Router、TypeScript

2. **パフォーマンス最適化の知識**
   - SSG、画像最適化、バンドルサイズ削減

3. **コンポーネント指向設計**
   - 再利用可能なコンポーネント設計

4. **品質管理の実践**
   - ESLint、Prettier、型安全性

5. **インフラ・デプロイの理解**
   - GitHub連携、自動デプロイ、環境変数管理

6. **セキュリティ・アクセシビリティへの配慮**
   - WCAG準拠、入力バリデーション

---

## 学習・参考リソース

### 公式ドキュメント
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs
- TailwindCSS: https://tailwindcss.com/docs

### ベストプラクティス
- Next.js Examples: https://github.com/vercel/next.js/tree/canary/examples
- Goodpatch Blog（技術記事）
- Web.dev（パフォーマンス・アクセシビリティ）

---

## 次のアクション（Phase 2）

技術スタック確定後、以下を実施:

1. **GitHubリポジトリ作成**
   - リポジトリ名: `portfolio`
   - パブリックリポジトリ
   - README.md 作成

2. **Next.jsプロジェクト初期化**
   ```bash
   npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir --import-alias "@/*"
   ```

3. **ESLint・Prettier設定**
   - 設定ファイル作成
   - VSCode 設定

4. **Vercelプロジェクト作成**
   - GitHubリポジトリ連携
   - 自動デプロイ設定

5. **ドメイン設定**
   - design.mutalog.com をVercelに設定
   - DNS設定

6. **開発環境確認**
   - ローカルで起動確認
   - Hot Reload 動作確認
