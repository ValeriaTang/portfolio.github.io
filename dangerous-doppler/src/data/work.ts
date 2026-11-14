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
    AI: "cssを殆ど任せた。",
    start: "2026-10",
    finish: "2026-11",
    description: "Astroを使用した軽量シングルページに見せかけたマルチページのポートフォリオサイト。",
    tags: ["Astro"],
    href: "https://github.com/ValeriaTang/portfolio.github.io"
  },
  {
    id: "schedule",
    title: "スケジュール管理アプリ",
    aiRatio: "85%",
    AI: "開発計画から新機能の実装、セキュリティ監査までAIに任せました。私が担当したのは技術選定、アイデア出し、バグの発見など。",
    start: "2026-04",
    finish: "2026-11",
    description: "ハッカソンで作成したスケジュール管理アプリ。(バックエンド担当)",
    tags: ["Vercel", "TypeScript", "PostgreSQL"],
    href: "https://github.com/Hackathon-SAI/schedule"
  },
  {
    id: "wordcloud",
    title: "長文のワードクラウド自動生成ツール",
    aiRatio: "25%",
    AI: "startswithなどなんと記述すればわからないものを調べるのに、AIを使用した。",
    start: "2026-07",
    finish: "2026-08",
    description: "pythonを使用して、長文の文章からワードクラウドを自動生成するツール。",
    href: "https://colab.research.google.com/drive/1mWGUu8CdHboIM9siL2oQRfEVDMcQbnto?usp=sharing",
    image1: "https://drive.google.com/uc?export=view&id=1O7jrYRNbLmaMcXshG_Brf24QDCWTQJy1",
    image2: "https://drive.google.com/uc?export=view&id=1i3esASDbASwTBRWMpcjF4WffqmtcsQ3F",
    image3: "https://drive.google.com/uc?export=view&id=1HD1KLZWMXCt46kwQFei2MvuFMwpP-J_N",
    image4: "https://drive.google.com/uc?export=view&id=1i3esASDbASwTBRWMpcjF4WffqmtcsQ3F",
    image5: "",
    tags: ["Python", "WordCloud"]
  },
  {
    id: "music-ear-training",
    title: "音楽耳トレーニングアプリ",
    aiRatio: "0%",
    AI: "",
    start: "2026-10",
    finish: "現在",
    description: "楽器ごとの音量を調整する訓練のためのアプリ。計画段階。",
    href: "",
    image1: "",
    tags: ["Figma", "Vite", "TypeScript"]
  }
];