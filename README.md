# Beauty Salon LP

このリポジトリは `index.html / styles.css / script.js` の3ファイル構成を中心にした静的LPです。

## ローカル確認

```bash
python3 -m http.server 8080
```

ブラウザで `http://localhost:8080/` を開いて表示を確認します。

## GitHub Pages 公開手順

1. GitHub の対象リポジトリにこのブランチを push する。
2. リポジトリの **Settings > Pages** を開く。
3. **Build and deployment** の Source で **GitHub Actions** を選択する。
4. `.github/workflows/deploy-pages.yml` が自動実行される。
5. Actions が成功すると、同画面に公開URLが表示される。

## パス構成について

- `index.html` から `styles.css` と `script.js` を相対パスで参照しているため、
  GitHub Pages でも追加のパス修正なしで表示できます。
