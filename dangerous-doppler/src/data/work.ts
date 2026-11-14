export interface Work {
  id: string;
  title: string;
  aiRatio: string;
  AI: string;
  start: string;
  finish: string;
  description: string;
  image1: string;
  image2: string;     // public/ からのパス（例: /images/thumb2.png）
  image3: string;     // public/ からのパス（例: /images/thumb3.png）
  image4: string;
  image5: string;
  tags: string[];     // 使った技術
  href: string;       // 詳細ページ
}

export const works = [
  {
    id: "portfolio",
    title: "ポートフォリオサイト",
    aiRatio: "25%",
    AI: "",
    start: "2026-10",
    finish: "2026-11",
    description: "Astroを使用した軽量シングルページに見せかけたマルチページサイト。",
    href: "https://github.com/ValeriaTang/portfolio.github.io"
  },
  {
    id: "schedule",
    title: "スケジュール管理アプリ",
    aiRatio: "85%",
    AI: "開発計画から新機能の実装、セキュリティ監査までAIに任せました。私が担当したのは技術選定、アイデア出し、デバッグ",
    start: "2026-04",
    finish: "2026-11",
    description: "Reactを使用したシンプルなスケジュール管理アプリ。",
    href: "https://github.com/Hackathon-SAI/schedule"
  },
  {
    id: "wordcloud",
    title: "長文のワードクラウド自動生成ツール",
    aiRatio: "25%",
    AI: "",
    start: "2026-07",
    finish: "2026-08",
    description: "pythonを使用して、長文の文章からワードクラウドを自動生成するツール。",
    href: "https://colab.research.google.com/drive/1mWGUu8CdHboIM9siL2oQRfEVDMcQbnto?usp=sharing",
    image1: "https://drive.google.com/uc?export=view&id=1O7jrYRNbLmaMcXshG_Brf24QDCWTQJy1"
  },
];