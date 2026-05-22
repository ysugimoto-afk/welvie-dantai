# CampFire様 加盟事業所向け LP

ウェルビーラーニング 団体導入のご案内 LP。

## ローカルプレビュー

```bash
cd /Users/yuhisugimoto/Documents/株式会社フェアテクノロジーズ/営業/04_提案資料/個別案件/CampFire様/lp
python3 -m http.server 8080
```
→ http://localhost:8080 で確認

または index.html を直接ブラウザで開く。

## デプロイ手順(GitHub → Cloudflare Pages)

```bash
# このディレクトリで git init
cd /Users/yuhisugimoto/Documents/株式会社フェアテクノロジーズ/営業/04_提案資料/個別案件/CampFire様/lp
git init
git add .
git commit -m "Initial commit: CampFire LP"

# GitHubでリポジトリ作成(campfire-lp 等)
gh repo create campfire-lp --public --source=. --push
# または手動で github.com → New Repository → push

# Cloudflare Pages
# 1. https://dash.cloudflare.com/ → Pages → Create
# 2. GitHubリポジトリ連携 → campfire-lp 選択
# 3. ビルド設定: 「フレームワーク プリセット = None」
#    Build command: なし
#    Build output directory: / (ルート)
# 4. デプロイ
# → https://campfire-lp.pages.dev のようなURLが発行される
```

## Google Form URL の差し込み

`index.html` 内の以下を Google Form の公開URLに置換:

```html
<a href="REPLACE_WITH_GOOGLE_FORM_URL" class="btn btn--cta" target="_blank" rel="noopener">
```

→ `create_form.js` を Google Apps Script で実行して取得した公開URLを貼り付け。

## ファイル構成

- `index.html` - LP本体
- `style.css` - スタイル
- `README.md` - このファイル

画像は使わずCSSとEmoji絵文字で構成しているため、追加アセット不要。
