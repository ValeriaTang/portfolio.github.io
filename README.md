# Portfolio by Valeria

Astro 製のポートフォリオサイト。プロフィール・スキル・作品をまとめています。

## 概要

- **フレームワーク**: Astro（静的サイト生成）
- **ページ**: ホーム / 私について / スキル / 作品
- **テーマ**: ダーク・ライト切り替え（localStorage に保存、システム設定フォールバック）
- **多言語**: 日本語 / English / 简体中文 / 繁體中文
- **レスポンシブ**: PCナビ + モバイル用ハンバーガーメニュー

## 主な機能

- **ナビゲーション**: ホーム・私について・スキル・作品へのリンク、モバイルメニュー
- **テーマ切替**: ダーク/ライト切替、ホバー時に `--accent` へ色変更
- **作品**: カード一覧 + 詳細モーダル（画像ギャラリー・タグ・期間・AI使用率）
- **スキル**: カード一覧 + 詳細モーダル（できること・説明・レベル）
- **タグアイコン**: ライト/ダークで画像を自動切替（.devicon）
- **言語切替**: `src/i18n/translations.ts` ベース

## ディレクトリ構成

```text
dangerous-doppler/
├── public/                  # 静的アセット
├── src/
│   ├── pages/               # index / aboutme / skills / works
│   ├── components/          # header, navigation, about, skill, work, footer など
│   ├── data/                # work.ts / skill.ts / icon.ts
│   ├── i18n/                # translations, lang-switcher, multilingual-data
│   └── styles/global.css    # テーマ変数（--btn-bg / --accent など）
└── package.json
```

## デモ

（公開URLがあればここに記載）
