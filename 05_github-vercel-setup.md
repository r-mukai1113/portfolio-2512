# GitHub & Vercel セットアップ手順

## Phase 2: インフラ構築

Next.jsプロジェクトの初期化が完了しました。
次は、GitHubリポジトリ作成とVercel連携を行います。

---

## 1. GitHubリポジトリ作成

### 手順

1. **GitHubにアクセス**
   - [https://github.com](https://github.com) を開く
   - 右上の「+」アイコンから「New repository」を選択

2. **リポジトリ設定**
   - **Repository name**: `portfolio` または `portfolio-2512`
   - **Description**: `Portfolio website - Web Designer & Frontend Developer`
   - **公開設定**:
     - ✅ **Public** 推奨（技術力を示すため）
     - Private（秘匿したい場合）
   - **Initialize this repository with**: 何も選択しない（すでにローカルで初期化済み）

3. **リポジトリ作成**
   - 「Create repository」ボタンをクリック

### ローカルとリモートの連携

GitHubでリポジトリを作成したら、以下のコマンドを実行してください:

```bash
# リモートリポジトリを追加（URLは実際のリポジトリURLに置き換える）
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# または SSH を使用する場合
git remote add origin git@github.com:YOUR_USERNAME/portfolio.git

# デフォルトブランチ名を main に設定（必要に応じて）
git branch -M main

# 初回プッシュ
git push -u origin main
```

**注意**: `YOUR_USERNAME` と `portfolio` の部分を、実際のGitHubユーザー名とリポジトリ名に置き換えてください。

---

## 2. Vercelプロジェクト作成

### 前提条件
- Vercelアカウント（未作成の場合は [https://vercel.com](https://vercel.com) でサインアップ）
- GitHubアカウントとVercelを連携済み

### 手順

#### Step 1: Vercelにログイン
1. [https://vercel.com](https://vercel.com) にアクセス
2. GitHubアカウントでログイン

#### Step 2: 新規プロジェクト作成
1. ダッシュボードで「Add New...」→「Project」を選択
2. 「Import Git Repository」セクションで、先ほど作成したGitHubリポジトリを選択
   - リポジトリが表示されない場合は「Adjust GitHub App Permissions」で権限を付与

#### Step 3: プロジェクト設定
- **Framework Preset**: Next.js（自動検出）
- **Root Directory**: `./`（デフォルト）
- **Build Command**: `pnpm build`（自動設定）
- **Output Directory**: `.next`（自動設定）
- **Install Command**: `pnpm install`（自動設定）

**環境変数（後で設定）**:
- 現時点では設定不要
- コンタクトフォーム実装時に、メールAPI キー等を追加

#### Step 4: デプロイ
- 「Deploy」ボタンをクリック
- 初回ビルド＆デプロイが開始される（1-2分程度）

#### Step 5: デプロイ確認
- デプロイが完了すると、`https://portfolio-xxxx.vercel.app` のようなURLが生成される
- 「Visit」ボタンでサイトを確認

---

## 3. カスタムドメイン設定（design.mutalog.com）

### 前提条件
- 既存ドメイン `mutalog.com` の管理画面にアクセス可能
- DNS設定の変更権限

### 手順

#### Step 1: Vercelでドメイン追加
1. Vercelプロジェクトの「Settings」タブを開く
2. 左メニューから「Domains」を選択
3. 「Add」ボタンをクリック
4. `design.mutalog.com` を入力して「Add」

#### Step 2: DNS設定
Vercelが提示するDNS設定情報を、ドメイン管理画面で設定します。

**推奨設定（CNAME）**:
```
Type:  CNAME
Name:  design
Value: cname.vercel-dns.com
TTL:   Auto or 3600
```

または

**A レコード**:
```
Type:  A
Name:  design
Value: 76.76.21.21（Vercelが指定するIP）
TTL:   Auto or 3600
```

#### Step 3: DNS反映待ち
- DNS設定変更後、反映まで数分〜24時間程度かかる場合があります
- Vercelの「Domains」画面で「Valid Configuration」と表示されれば完了

#### Step 4: SSL証明書
- Vercelが自動的にSSL証明書（Let's Encrypt）を発行
- 設定後、`https://design.mutalog.com` でアクセス可能になる

---

## 4. 自動デプロイ設定

Vercelは、GitHubリポジトリへのプッシュを検知して自動デプロイします。

### デフォルト動作
- **main ブランチ**: 本番環境（`design.mutalog.com`）に自動デプロイ
- **その他のブランチ**: プレビュー環境（一時URL）に自動デプロイ

### ワークフロー例
1. ローカルで開発
2. `git add` → `git commit`
3. `git push origin main`
4. Vercelが自動でビルド＆デプロイ
5. 数分後、本番環境に反映

---

## 5. 環境変数の設定（後で必要になる）

コンタクトフォーム実装時に、以下の環境変数を設定します。

### 設定場所
1. Vercelプロジェクトの「Settings」タブ
2. 左メニューから「Environment Variables」を選択

### 追加予定の環境変数（例）

#### SendGrid を使用する場合
```
SENDGRID_API_KEY=your_sendgrid_api_key
CONTACT_EMAIL_TO=your_email@example.com
```

#### Resend を使用する場合
```
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL_TO=your_email@example.com
```

**注意**: 環境変数を追加・変更した場合は、再デプロイが必要です。

---

## 6. セットアップ確認チェックリスト

完了したら、以下をチェックしてください:

- [ ] GitHubリポジトリ作成完了
- [ ] ローカルリポジトリとリモートリポジトリが連携済み
- [ ] 初回コミットがプッシュされた
- [ ] Vercelプロジェクト作成完了
- [ ] 初回デプロイ成功（`https://portfolio-xxxx.vercel.app` にアクセス可能）
- [ ] カスタムドメイン `design.mutalog.com` 設定完了
- [ ] HTTPS アクセス可能（SSL証明書発行済み）
- [ ] 自動デプロイ動作確認（プッシュ後に自動デプロイされる）

---

## 7. トラブルシューティング

### デプロイが失敗する
- ビルドログを確認し、エラーメッセージを特定
- 依存関係の問題: `pnpm install` をローカルで実行して確認
- TypeScriptエラー: `pnpm build` をローカルで実行して事前チェック

### カスタムドメインが反映されない
- DNS設定が正しいか確認
- TTL（Time To Live）の設定により、反映に時間がかかる場合がある
- `nslookup design.mutalog.com` コマンドでDNS設定を確認

### 自動デプロイが動作しない
- Vercelの「Git」設定で、正しいブランチが設定されているか確認
- GitHubとVercelの連携が切れていないか確認

---

## 8. 次のステップ（Phase 3）

インフラ構築が完了したら、Phase 3 に進みます:

1. **掲載実績5件の選定**
   - [04_works-content.md](./04_works-content.md) を記入

2. **Figmaでデザイン開始**
   - ワイヤーフレーム作成
   - デザインシステム構築
   - モックアップ作成

3. **コンポーネント実装開始**（Phase 4）
   - デザイン完成後、実装フェーズへ

---

## 参考リンク

- [Vercel公式ドキュメント](https://vercel.com/docs)
- [Next.jsデプロイガイド](https://nextjs.org/docs/deployment)
- [カスタムドメイン設定](https://vercel.com/docs/concepts/projects/custom-domains)

---

**Phase 2 完了おめでとうございます！**

次は実績コンテンツの整理とデザイン作成に進みましょう。
