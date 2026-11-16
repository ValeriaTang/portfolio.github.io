// i18n/multilingual-data.ts
// Multilingual versions of all content that lives in data files.
// Works and Skills have localised text; Career is locale-aware.

import type { Locale } from './translations';

// ----------------------------------------------------------------
// Works
// ----------------------------------------------------------------
export interface WorkLocale {
  title: string;
  description: string;
  AI: string;
}

export const workLocales: Record<string, Record<Locale, WorkLocale>> = {
  portfolio: {
    ja: {
      title: 'ポートフォリオサイト',
      description: 'Astroを使用した軽量シングルページに見せかけたマルチページのポートフォリオサイト。',
      AI: 'CSSをほぼ任せた。',
    },
    en: {
      title: 'Portfolio Site',
      description: 'A lightweight multi-page portfolio site built with Astro, designed to feel like a single-page app.',
      AI: 'Delegated most CSS to AI.',
    },
    'zh-CN': {
      title: '作品集网站',
      description: '使用 Astro 构建的轻量级多页面作品集网站，外观如同单页应用。',
      AI: '将大部分 CSS 交给 AI 处理。',
    },
    'zh-TW': {
      title: '作品集網站',
      description: '使用 Astro 建構的輕量多頁面作品集網站，外觀如同單頁應用程式。',
      AI: '將大部分 CSS 交給 AI 處理。',
    },
  },
  schedule: {
    ja: {
      title: 'スケジュール管理アプリ',
      description: 'ハッカソンで作成したスケジュール管理アプリ。（バックエンド/インフラ担当）',
      AI: '開発計画から新機能の実装、セキュリティ監査までAIに任せました。私が担当したのは技術選定、アイデア出し、バグの発見など。',
    },
    en: {
      title: 'Schedule Management App',
      description: 'A schedule management app created at a hackathon. (Backend/Infrastructure role)',
      AI: 'Delegated everything from development planning and feature implementation to security audits to AI. My role: tech selection, ideation, and bug discovery.',
    },
    'zh-CN': {
      title: '日程管理应用',
      description: '在黑客马拉松中开发的日程管理应用。（负责后端与基础设施）',
      AI: '将从开发规划、新功能实现到安全审计的工作全部交给 AI。我负责技术选型、创意提出和 Bug 发现等。',
    },
    'zh-TW': {
      title: '行程管理應用',
      description: '在黑客松中開發的行程管理應用程式。（負責後端與基礎設施）',
      AI: '將從開發規劃、新功能實作到安全審計的工作全部交給 AI。我負責技術選型、創意提出和 Bug 發現等。',
    },
  },
  wordcloud: {
    ja: {
      title: '長文のワードクラウド自動生成ツール',
      description: 'Pythonを使用して、長文の文章からワードクラウドを自動生成するツール。',
      AI: 'startswithなどなんと記述すればわからないものを調べるのに、AIを使用した。',
    },
    en: {
      title: 'Long-text Word Cloud Generator',
      description: 'A Python tool that automatically generates word clouds from long texts.',
      AI: 'Used AI to look up syntax I was unsure about, such as startswith.',
    },
    'zh-CN': {
      title: '长文词云自动生成工具',
      description: '使用 Python 从长文本中自动生成词云的工具。',
      AI: '使用 AI 查找不确定的语法，例如 startswith 等。',
    },
    'zh-TW': {
      title: '長文詞雲自動生成工具',
      description: '使用 Python 從長文字自動生成詞雲的工具。',
      AI: '使用 AI 查找不確定的語法，例如 startswith 等。',
    },
  },
  termin: {
    ja: {
      title: '自作テルミン',
      description: 'テルミンという電子楽器を超音波距離センサとCdSで再現した。',
      AI: 'デバッグに使用した。',
    },
    en: {
      title: 'DIY Theremin',
      description: 'Reproduced the theremin, an electronic musical instrument, using an ultrasonic distance sensor and CdS.',
      AI: 'Used for debugging.',
    },
    'zh-CN': {
      title: '自制特雷门琴',
      description: '使用超声波距离传感器和光敏电阻（CdS）复现了特雷门（Theremin）这种电子乐器。',
      AI: '用于调试。',
    },
    'zh-TW': {
      title: '自製泰勒明琴',
      description: '使用超聲波距離感測器和光敏電阻（CdS）重現了泰勒明（Theremin）這種電子樂器。',
      AI: '用於除錯。',
    },
  },
  'music-ear-training': {
    ja: {
      title: '音楽耳トレーニングアプリ',
      description: '楽器ごとの音量を調整する訓練のためのアプリ。計画段階。',
      AI: '計画段階のため、アイデアの具体化のために使用した。',
    },
    en: {
      title: 'Music Ear Training App',
      description: 'An app for training to balance instrument volumes. Currently in the planning stage.',
      AI: 'Used to flesh out ideas during the planning phase.',
    },
    'zh-CN': {
      title: '音乐听力训练应用',
      description: '用于训练调整各乐器音量的应用程序。目前处于规划阶段。',
      AI: '在规划阶段用于具体化创意。',
    },
    'zh-TW': {
      title: '音樂聽力訓練應用',
      description: '用於訓練調整各樂器音量的應用程式。目前處於規劃階段。',
      AI: '在規劃階段用於具體化創意。',
    },
  },
};

// ----------------------------------------------------------------
// Skills
// ----------------------------------------------------------------
export interface SkillLocale {
  level: string;
  genre: string;
  skill: string;
  description: string;
}

export const skillLocales: Record<string, Record<Locale, SkillLocale>> = {
  Python: {
    ja: { level: '初級', genre: 'バックエンド', skill: '求める出力形式や文脈を正しくAIに指示し、意図通りのコードやドキュメントを生成させることができる。', description: '人工知能（AI）やデータ分析、業務の自動化、Webアプリ開発の分野で活用できる言語。' },
    en: { level: 'Beginner', genre: 'Backend', skill: 'Can correctly instruct AI with desired output format and context to generate code and documentation as intended.', description: 'A language used in AI, data analysis, automation, and web development.' },
    'zh-CN': { level: '初级', genre: '后端', skill: '能够向 AI 准确描述所需的输出格式和上下文，生成符合预期的代码和文档。', description: '可用于人工智能、数据分析、自动化和 Web 开发的编程语言。' },
    'zh-TW': { level: '初級', genre: '後端', skill: '能夠向 AI 精確描述所需的輸出格式和上下文，生成符合預期的程式碼和文件。', description: '可用於人工智慧、資料分析、自動化和 Web 開發的程式語言。' },
  },
  JavaScript: {
    ja: { level: '入門', genre: 'フロントエンド', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: 'Web開発で広く使われているプログラミング言語。' },
    en: { level: 'Introductory', genre: 'Frontend', skill: 'Cannot write complete code from scratch, but can understand the general meaning and structure of existing or AI-generated code.', description: 'A programming language widely used in web development.' },
    'zh-CN': { level: '入门', genre: '前端', skill: '无法从零开始编写完整代码，但能大致理解现有代码或 AI 生成代码的含义和结构。', description: 'Web 开发中广泛使用的编程语言。' },
    'zh-TW': { level: '入門', genre: '前端', skill: '無法從零開始撰寫完整程式碼，但能大致理解現有程式碼或 AI 生成程式碼的含義和結構。', description: 'Web 開發中廣泛使用的程式語言。' },
  },
  'HTML/CSS': {
    ja: { level: '入門', genre: 'フロントエンド', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: 'Web開発で広く使われているマークアップ言語とスタイルシート言語。' },
    en: { level: 'Introductory', genre: 'Frontend', skill: 'Cannot write complete code from scratch, but can understand the general meaning and structure of existing or AI-generated code.', description: 'Markup and stylesheet languages widely used in web development.' },
    'zh-CN': { level: '入门', genre: '前端', skill: '无法从零开始编写完整代码，但能大致理解现有代码或 AI 生成代码的含义和结构。', description: 'Web 开发中广泛使用的标记语言和样式表语言。' },
    'zh-TW': { level: '入門', genre: '前端', skill: '無法從零開始撰寫完整程式碼，但能大致理解現有程式碼或 AI 生成程式碼的含義和結構。', description: 'Web 開發中廣泛使用的標記語言和樣式表語言。' },
  },
  'C/C++': {
    ja: { level: '初級', genre: 'バックエンド', skill: '求める出力形式や文脈を正しくAIに指示し、意図通りのコードやドキュメントを生成させることができる。', description: 'システムプログラミングや高性能計算に使われる言語。' },
    en: { level: 'Beginner', genre: 'Backend', skill: 'Can correctly instruct AI with desired output format and context to generate code and documentation as intended.', description: 'Languages used for system programming and high-performance computing.' },
    'zh-CN': { level: '初级', genre: '后端', skill: '能够向 AI 准确描述所需的输出格式和上下文，生成符合预期的代码和文档。', description: '用于系统编程和高性能计算的语言。' },
    'zh-TW': { level: '初級', genre: '後端', skill: '能夠向 AI 精確描述所需的輸出格式和上下文，生成符合預期的程式碼和文件。', description: '用於系統程式設計和高性能運算的語言。' },
  },
  PostgreSQL: {
    ja: { level: '入門', genre: 'インフラ', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: 'データベース操作に使われる言語。' },
    en: { level: 'Introductory', genre: 'Infrastructure', skill: 'Cannot write complete code from scratch, but can understand the general meaning and structure of existing or AI-generated code.', description: 'A language used for database operations.' },
    'zh-CN': { level: '入门', genre: '基础设施', skill: '无法从零开始编写完整代码，但能大致理解现有代码或 AI 生成代码的含义和结构。', description: '用于数据库操作的语言。' },
    'zh-TW': { level: '入門', genre: '基礎設施', skill: '無法從零開始撰寫完整程式碼，但能大致理解現有程式碼或 AI 生成程式碼的含義和結構。', description: '用於資料庫操作的語言。' },
  },
  LaTeX: {
    ja: { level: '入門', genre: 'その他', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: '学術論文やレポートの作成に使われる文書作成システム。' },
    en: { level: 'Introductory', genre: 'Other', skill: 'Cannot write complete code from scratch, but can understand the general meaning and structure of existing or AI-generated code.', description: 'A document preparation system used for academic papers and reports.' },
    'zh-CN': { level: '入门', genre: '其他', skill: '无法从零开始编写完整代码，但能大致理解现有代码或 AI 生成代码的含义和结构。', description: '用于撰写学术论文和报告的文档排版系统。' },
    'zh-TW': { level: '入門', genre: '其他', skill: '無法從零開始撰寫完整程式碼，但能大致理解現有程式碼或 AI 生成程式碼的含義和結構。', description: '用於撰寫學術論文和報告的文件排版系統。' },
  },
  'Git/GitHub': {
    ja: { level: '初級', genre: 'その他', skill: '必要最低限は使用できていると認識しているが、まだまだ不十分である。', description: 'バージョン管理システム。' },
    en: { level: 'Beginner', genre: 'Other', skill: 'I believe I can use the basics, but there is still much room for improvement.', description: 'Version control system.' },
    'zh-CN': { level: '初级', genre: '其他', skill: '认为自己能使用基本功能，但仍有很大的提升空间。', description: '版本控制系统。' },
    'zh-TW': { level: '初級', genre: '其他', skill: '認為自己能使用基本功能，但仍有很大的提升空間。', description: '版本控制系統。' },
  },
  'Linux(Ubuntu)/WSL': {
    ja: { level: '初級', genre: 'インフラ', skill: '必要最低限は使用できていると認識しているが、まだまだ不十分である。', description: 'LinuxオペレーティングシステムおよびWSL環境。' },
    en: { level: 'Beginner', genre: 'Infrastructure', skill: 'I believe I can use the basics, but there is still much room for improvement.', description: 'Linux operating system and WSL environment.' },
    'zh-CN': { level: '初级', genre: '基础设施', skill: '认为自己能使用基本功能，但仍有很大的提升空间。', description: 'Linux 操作系统及 WSL 环境。' },
    'zh-TW': { level: '初級', genre: '基礎設施', skill: '認為自己能使用基本功能，但仍有很大的提升空間。', description: 'Linux 作業系統及 WSL 環境。' },
  },
  VSCode: {
    ja: { level: '初級', genre: 'その他', skill: '必要最低限は使用できていると認識しているが、まだまだ不十分である。', description: 'Microsoftが開発したソースコードエディタ。' },
    en: { level: 'Beginner', genre: 'Other', skill: 'I believe I can use the basics, but there is still much room for improvement.', description: 'A source code editor developed by Microsoft.' },
    'zh-CN': { level: '初级', genre: '其他', skill: '认为自己能使用基本功能，但仍有很大的提升空间。', description: '由 Microsoft 开发的源代码编辑器。' },
    'zh-TW': { level: '初級', genre: '其他', skill: '認為自己能使用基本功能，但仍有很大的提升空間。', description: '由 Microsoft 開發的原始碼編輯器。' },
  },
  Astro: {
    ja: { level: '入門', genre: 'フレームワーク', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: '軽量で高速なマルチページ対応SSGフレームワーク。' },
    en: { level: 'Introductory', genre: 'Framework', skill: 'Cannot write complete code from scratch, but can understand the general meaning and structure of existing or AI-generated code.', description: 'A lightweight, fast SSG framework with multi-page support.' },
    'zh-CN': { level: '入门', genre: '框架', skill: '无法从零开始编写完整代码，但能大致理解现有代码或 AI 生成代码的含义和结构。', description: '轻量级、高速的多页面 SSG 框架。' },
    'zh-TW': { level: '入門', genre: '框架', skill: '無法從零開始撰寫完整程式碼，但能大致理解現有程式碼或 AI 生成程式碼的含義和結構。', description: '輕量、高速的多頁面 SSG 框架。' },
  },
  'Ruby on Rails': {
    ja: { level: '入門', genre: 'フレームワーク', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: 'Ruby製のWebアプリケーションフレームワーク。' },
    en: { level: 'Introductory', genre: 'Framework', skill: 'Cannot write complete code from scratch, but can understand the general meaning and structure of existing or AI-generated code.', description: 'A web application framework written in Ruby.' },
    'zh-CN': { level: '入门', genre: '框架', skill: '无法从零开始编写完整代码，但能大致理解现有代码或 AI 生成代码的含义和结构。', description: '使用 Ruby 编写的 Web 应用框架。' },
    'zh-TW': { level: '入門', genre: '框架', skill: '無法從零開始撰寫完整程式碼，但能大致理解現有程式碼或 AI 生成程式碼的含義和結構。', description: '使用 Ruby 撰寫的 Web 應用程式框架。' },
  },
  Vercel: {
    ja: { level: '初級', genre: 'インフラ', skill: '必要最低限は使用できていると認識しているが、まだまだ不十分である。', description: 'フロントエンド向けホスティング・デプロイプラットフォーム。' },
    en: { level: 'Beginner', genre: 'Infrastructure', skill: 'I believe I can use the basics, but there is still much room for improvement.', description: 'A hosting and deployment platform for frontend applications.' },
    'zh-CN': { level: '初级', genre: '基础设施', skill: '认为自己能使用基本功能，但仍有很大的提升空间。', description: '面向前端的托管与部署平台。' },
    'zh-TW': { level: '初級', genre: '基礎設施', skill: '認為自己能使用基本功能，但仍有很大的提升空間。', description: '面向前端的託管與部署平台。' },
  },
  'Google Cloud Console': {
    ja: { level: '初級', genre: 'インフラ', skill: '必要最低限は使用できていると認識しているが、まだまだ不十分である。', description: 'Googleのクラウドコンピューティングプラットフォーム。' },
    en: { level: 'Beginner', genre: 'Infrastructure', skill: 'I believe I can use the basics, but there is still much room for improvement.', description: "Google's cloud computing platform." },
    'zh-CN': { level: '初级', genre: '基础设施', skill: '认为自己能使用基本功能，但仍有很大的提升空间。', description: 'Google 的云计算平台。' },
    'zh-TW': { level: '初級', genre: '基礎設施', skill: '認為自己能使用基本功能，但仍有很大的提升空間。', description: 'Google 的雲端運算平台。' },
  },
  zsh: {
    ja: { level: '初級', genre: 'インフラ', skill: '必要最低限は使用できていると認識しているが、まだまだ不十分である。', description: 'Unix系シェル。コマンドライン操作を効率化。' },
    en: { level: 'Beginner', genre: 'Infrastructure', skill: 'I believe I can use the basics, but there is still much room for improvement.', description: 'A Unix shell that streamlines command-line operations.' },
    'zh-CN': { level: '初级', genre: '基础设施', skill: '认为自己能使用基本功能，但仍有很大的提升空间。', description: 'Unix Shell，用于提升命令行操作效率。' },
    'zh-TW': { level: '初級', genre: '基礎設施', skill: '認為自己能使用基本功能，但仍有很大的提升空間。', description: 'Unix Shell，用於提升命令列操作效率。' },
  },
  Arduino: {
    ja: { level: '入門', genre: 'その他', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: 'マイコンボードと開発環境。' },
    en: { level: 'Introductory', genre: 'Other', skill: 'Cannot write complete code from scratch, but can understand the general meaning and structure of existing or AI-generated code.', description: 'Microcontroller board and development environment.' },
    'zh-CN': { level: '入门', genre: '其他', skill: '无法从零开始编写完整代码，但能大致理解现有代码或 AI 生成代码的含义和结构。', description: '微控制器开发板与开发环境。' },
    'zh-TW': { level: '入門', genre: '其他', skill: '無法從零開始撰寫完整程式碼，但能大致理解現有程式碼或 AI 生成程式碼的含義和結構。', description: '微控制器開發板與開發環境。' },
  },
};

// ----------------------------------------------------------------
// Career (multilingual titles/texts)
// ----------------------------------------------------------------
export interface CareerLocale {
  title: string;
  texts: string[];
}

export const careerLocales: Record<string, Record<Locale, CareerLocale>> = {
  '2024-03': {
    ja: { title: '実用英語技能検定2級取得', texts: [] },
    en: { title: 'Passed Eiken Grade 2 (Practical English Proficiency Test)', texts: [] },
    'zh-CN': { title: '通过实用英语技能检定 2 级', texts: [] },
    'zh-TW': { title: '通過實用英語技能檢定 2 級', texts: [] },
  },
  '2025-04': {
    ja: { title: '大阪公立大学工業高等専門学校に入学', texts: ['プログラミングの独習を始める。', '現代音楽部に入部。'] },
    en: { title: 'Enrolled at OMUCT', texts: ['Began self-studying programming.', 'Joined the Contemporary Music Club.'] },
    'zh-CN': { title: '入学大阪公立大学工业高等专门学校', texts: ['开始自学编程。', '加入当代音乐部。'] },
    'zh-TW': { title: '入學大阪公立大學工業高等專門學校', texts: ['開始自學程式設計。', '加入當代音樂部。'] },
  },
  '2025-06': {
    ja: { title: '学友会執行部に入部', texts: ['音響課に配属され、高専祭などでPAを担当する。'] },
    en: { title: 'Joined the Student Council Executive Board', texts: ['Assigned to the Sound Engineering Division; handled PA for school festivals.'] },
    'zh-CN': { title: '加入学生会执行部', texts: ['被分配至音响部门，负责学校文化节等活动的 PA（扩声）工作。'] },
    'zh-TW': { title: '加入學生會執行部', texts: ['被分配至音響部門，負責學校文化節等活動的 PA（擴聲）工作。'] },
  },
  '2026-04': {
    ja: { title: '知能情報コースに進級・配属', texts: ['プログラミングの独習を続ける。'] },
    en: { title: 'Assigned to the Intelligent Information Course', texts: ['Continued self-studying programming.'] },
    'zh-CN': { title: '升入智能信息课程', texts: ['继续自学编程。'] },
    'zh-TW': { title: '升入智能資訊課程', texts: ['繼續自學程式設計。'] },
  },
  '2026-11': {
    ja: { title: 'ハッカソンの成果物を高専祭で展示', texts: ['学内ハッカソンで開発したスケジュール管理アプリを高専祭で展示した。'] },
    en: { title: 'Exhibited hackathon work at the school festival', texts: ['Showcased the schedule management app developed at the in-school hackathon at the school festival.'] },
    'zh-CN': { title: '在学校文化节展示黑客松作品', texts: ['在学校文化节上展示了在校内黑客松中开发的日程管理应用。'] },
    'zh-TW': { title: '在學校文化節展示黑客松作品', texts: ['在學校文化節上展示了在校內黑客松中開發的行程管理應用程式。'] },
  },
};
