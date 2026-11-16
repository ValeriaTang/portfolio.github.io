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
      description: 'A lightweight multi-page portfolio site built with Astro, engineered for a seamless SPA-like user experience.',
      AI: 'Leveraged AI for rapid CSS styling and responsive layout implementation.',
    },
    'zh-CN': {
      title: '个人作品集网站',
      description: '基于 Astro 构建的轻量级多页面作品集网站，兼具单页应用（SPA）般的流畅交互体验。',
      AI: '借助 AI 高效完成大部分 CSS 样式设计与响应式布局。',
    },
    'zh-TW': {
      title: '個人作品集網站',
      description: '基於 Astro 建構的輕量多頁面作品集網站，兼具單頁應用（SPA）般的流暢互動體驗。',
      AI: '藉助 AI 高效完成大部分 CSS 樣式設計與響應式版面配置。',
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
      description: 'A schedule management web app built during a hackathon. (Role: Backend & Infrastructure)',
      AI: 'Directed AI across development planning, feature implementation, and security audits, while leading tech stack selection, ideation, and QA/debugging.',
    },
    'zh-CN': {
      title: '日程管理应用',
      description: '在黑客马拉松中开发的日程管理应用（负责后端与系统运维）。',
      AI: '主导技术选型、产品创意与 Bug 排查修复，并驱动 AI 完成开发规划、核心功能实现及安全审计。',
    },
    'zh-TW': {
      title: '行程管理應用',
      description: '在黑客松中開發的行程管理應用程式（負責後端與系統維運）。',
      AI: '主導技術選型、產品創意與 Bug 排查修復，並驅動 AI 完成開發規劃、核心功能實作及安全審計。',
    },
  },
  wordcloud: {
    ja: {
      title: '長文のワードクラウド自動生成ツール',
      description: 'Pythonを使用して、長文の文章からワードクラウドを自動生成するツール。',
      AI: 'startswithなどなんと記述すればわからないものを調べるのに、AIを使用した。',
    },
    en: {
      title: 'Long-Text Word Cloud Generator',
      description: 'A Python automation tool that parses long-form text to generate visual word clouds.',
      AI: 'Used AI as an interactive reference for Python string methods (such as startswith) and syntax lookup.',
    },
    'zh-CN': {
      title: '长文本词云自动生成工具',
      description: '使用 Python 开发的自动化文本分析与词云生成工具。',
      AI: '将 AI 作为交互式技术文档，快速检索并验证 startswith 等 Python 语法细节。',
    },
    'zh-TW': {
      title: '長文本詞雲自動生成工具',
      description: '使用 Python 開發的自動化文字分析與詞雲生成工具。',
      AI: '將 AI 作為互動式技術文件，快速檢索並驗證 startswith 等 Python 語法細節。',
    },
  },
  termin: {
    ja: {
      title: '自作テルミン',
      description: 'テルミンという電子楽器を超音波距離センサとCdSで再現した。',
      AI: 'デバッグに使用した。',
    },
    en: {
      title: 'DIY Electronic Theremin',
      description: 'Built a touchless electronic musical instrument replicating the theremin using an ultrasonic distance sensor and a CdS photoresistor.',
      AI: 'Utilized AI for hardware-software troubleshooting and sensor calibration debugging.',
    },
    'zh-CN': {
      title: '自制电子特雷门琴',
      description: '结合超声波距离传感器与光敏电阻（CdS），从零复现经典无接触式电子乐器——特雷门琴（Theremin）。',
      AI: '用于传感器信号调试与代码排错。',
    },
    'zh-TW': {
      title: '自製電子泰勒明琴',
      description: '結合超聲波距離感測器與光敏電阻（CdS），從零重現經典無接觸式電子樂器——泰勒明琴（Theremin）。',
      AI: '用於感測器訊號除錯與程式碼排查。',
    },
  },
  'music-ear-training': {
    ja: {
      title: '音楽耳トレーニングアプリ',
      description: '楽器ごとの音量を調整する訓練のためのアプリ。計画段階。',
      AI: '計画段階のため、アイデアの具体化のために使用した。',
    },
    en: {
      title: 'Audio Mixing & Ear Training App',
      description: 'An interactive ear-training application designed to practice balancing multi-instrument volume levels. (In Planning)',
      AI: 'Collaborated with AI during the ideation phase to structure feature specs and technical architecture.',
    },
    'zh-CN': {
      title: '音乐混音与听力训练应用',
      description: '旨在训练多乐器音量平衡与听辨能力的交互式应用（规划阶段）。',
      AI: '在产品规划阶段借助 AI 梳理功能需求与技术实现路径。',
    },
    'zh-TW': {
      title: '音樂混音與聽力訓練應用',
      description: '旨在訓練多樂器音量平衡與聽辨能力的互動式應用（規劃階段）。',
      AI: '在產品規劃階段藉助 AI 梳理功能需求與技術實作路徑。',
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
    en: { level: 'Beginner', genre: 'Backend', skill: 'Able to provide clear context and structured prompts to AI to generate, review, and refine functional Python scripts and documentation.', description: 'A versatile language widely used for AI, data analysis, automation, and backend web development.' },
    'zh-CN': { level: '初级', genre: '后端', skill: '能够向 AI 清晰传达上下文与输出规范，高效生成、调试并优化符合预期的脚本与技术文档。', description: '广泛应用于人工智能、数据分析、自动化脚本及 Web 后端开发的编程语言。' },
    'zh-TW': { level: '初級', genre: '後端', skill: '能夠向 AI 清晰傳達上下文與輸出規範，高效生成、除錯並優化符合預期的腳本與技術文件。', description: '廣泛應用於人工智慧、資料分析、自動化腳本及 Web 後端開發的程式語言。' },
  },
  JavaScript: {
    ja: { level: '入門', genre: 'フロントエンド', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: 'Web開発で広く使われているプログラミング言語。' },
    en: { level: 'Introductory', genre: 'Frontend', skill: 'Capable of reading, understanding, and modifying the structure and logic of existing or AI-generated codebases.', description: 'The core programming language for interactive web development.' },
    'zh-CN': { level: '入门', genre: '前端', skill: '能够读懂现有代码及 AI 生成代码的整体逻辑与结构，并进行基础修改与集成。', description: '现代 Web 开发中不可或缺的核心编程语言。' },
    'zh-TW': { level: '入門', genre: '前端', skill: '能夠讀懂現有程式碼及 AI 生成程式碼的整體邏輯與結構，並進行基礎修改與整合。', description: '現代 Web 開發中不可或缺的核心程式語言。' },
  },
  'HTML/CSS': {
    ja: { level: '入門', genre: 'フロントエンド', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: 'Web開発で広く使われているマークアップ言語とスタイルシート言語。' },
    en: { level: 'Introductory', genre: 'Frontend', skill: 'Able to understand DOM structure and styling rules in existing or AI-generated code to customize layouts.', description: 'Foundational markup and stylesheet languages for structuring and styling web pages.' },
    'zh-CN': { level: '入门', genre: '前端', skill: '能够理解网页结构与样式规则，结合 AI 生成的代码进行页面布局调整与样式定制。', description: '构建网页结构与视觉样式的基础标记与样式表语言。' },
    'zh-TW': { level: '入門', genre: '前端', skill: '能夠理解網頁結構與樣式規則，結合 AI 生成的程式碼進行頁面版面調整與樣式客製化。', description: '建構網頁結構與視覺樣式的基礎標記與樣式表語言。' },
  },
  'C/C++': {
    ja: { level: '初級', genre: 'バックエンド', skill: '求める出力形式や文脈を正しくAIに指示し、意図通りのコードやドキュメントを生成させることができる。', description: 'システムプログラミングや高性能計算に使われる言語。' },
    en: { level: 'Beginner', genre: 'Backend', skill: 'Able to guide AI with precise technical context to generate and debug C/C++ programs for hardware and algorithmic tasks.', description: 'High-performance languages used for system programming, embedded systems, and computing.' },
    'zh-CN': { level: '初级', genre: '后端', skill: '能够结合硬件与算法需求向 AI 精准描述技术上下文，生成并调试符合预期的 C/C++ 代码。', description: '用于系统级编程、嵌入式开发及高性能计算的编程语言。' },
    'zh-TW': { level: '初級', genre: '後端', skill: '能夠結合硬體與演算法需求向 AI 精準描述技術上下文，生成並除錯符合預期的 C/C++ 程式碼。', description: '用於系統級程式設計、嵌入式開發及高效能運算的程式語言。' },
  },
  PostgreSQL: {
    ja: { level: '入門', genre: 'インフラ', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: 'データベース操作に使われる言語。' },
    en: { level: 'Introductory', genre: 'Infrastructure', skill: 'Understands relational database concepts and can read and adapt SQL queries generated for data management.', description: 'A powerful open-source relational database management system.' },
    'zh-CN': { level: '入门', genre: '运维', skill: '理解关系型数据库基础概念，能够读懂并调整用于数据查询与操作的 SQL 语句。', description: '功能强大的开源关系型数据库管理系统。' },
    'zh-TW': { level: '入門', genre: '維運', skill: '理解關聯式資料庫基礎概念，能夠讀懂並調整用於資料查詢與操作的 SQL 語法。', description: '功能強大的開源關聯式資料庫管理系統。' },
  },
  LaTeX: {
    ja: { level: '入門', genre: 'その他', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: '学術論文やレポートの作成に使われる文書作成システム。' },
    en: { level: 'Introductory', genre: 'Other', skill: 'Familiar with LaTeX document structure and capable of editing templates to typeset technical reports.', description: 'A high-quality typesetting system widely used for academic papers and technical documents.' },
    'zh-CN': { level: '入门', genre: '其他', skill: '熟悉 LaTeX 文档结构与排版语法，能够基于模板编写与调整技术报告。', description: '广泛用于学术论文与理工科技术报告的高质量排版系统。' },
    'zh-TW': { level: '入門', genre: '其他', skill: '熟悉 LaTeX 文件結構與排版語法，能夠基於範本撰寫與調整技術報告。', description: '廣泛用於學術論文與理工科技術報告的高品質排版系統。' },
  },
  'Git/GitHub': {
    ja: { level: '初級', genre: 'その他', skill: '必要最低限は使用できていると認識しているが、まだまだ不十分である。', description: 'バージョン管理システム。' },
    en: { level: 'Beginner', genre: 'Other', skill: 'Proficient in essential version control workflows (commit, push, pull, branching) and actively building collaborative Git habits.', description: 'Distributed version control system and code hosting platform.' },
    'zh-CN': { level: '初级', genre: '其他', skill: '掌握日常开发所需的基础版本控制流程（提交、分支管理与远程仓库协作），并持续深化实践。', description: '分布式版本控制系统与代码托管平台。' },
    'zh-TW': { level: '初級', genre: '其他', skill: '掌握日常開發所需的基礎版本控制流程（提交、分支管理與遠端儲存庫協作），並持續深化實踐。', description: '分散式版本控制系統與程式碼託管平台。' },
  },
  'Linux(Ubuntu)/WSL': {
    ja: { level: '初級', genre: 'インフラ', skill: '必要最低限は使用できていると認識しているが、まだまだ不十分である。', description: 'LinuxオペレーティングシステムおよびWSL環境。' },
    en: { level: 'Beginner', genre: 'Infrastructure', skill: 'Comfortable navigating the CLI, managing packages, and setting up local development environments on Ubuntu/WSL.', description: 'Linux operating system and Windows Subsystem for Linux environment.' },
    'zh-CN': { level: '初级', genre: '运维', skill: '熟悉基础命令行操作、软件包管理及基于 Ubuntu/WSL 的本地开发环境搭建。', description: 'Linux 操作系统及 Windows 下的 Linux 子系统（WSL）开发环境。' },
    'zh-TW': { level: '初級', genre: '維運', skill: '熟悉基礎命令列操作、套件管理及基於 Ubuntu/WSL 的本地開發環境建置。', description: 'Linux 作業系統及 Windows 下的 Linux 子系統（WSL）開發環境。' },
  },
  VSCode: {
    ja: { level: '初級', genre: 'その他', skill: '必要最低限は使用できていると認識しているが、まだまだ不十分である。', description: 'Microsoftが開発したソースコードエディタ。' },
    en: { level: 'Beginner', genre: 'Other', skill: 'Uses VSCode as a primary IDE, leveraging extensions, integrated terminals, and AI coding assistants for daily development.', description: 'A lightweight yet powerful source code editor developed by Microsoft.' },
    'zh-CN': { level: '初级', genre: '其他', skill: '作为主力代码编辑器日常使用，熟练结合扩展插件、集成终端与 AI 编程助手提升开发效率。', description: '由 Microsoft 开发的轻量级跨平台源代码编辑器。' },
    'zh-TW': { level: '初級', genre: '其他', skill: '作為主力程式碼編輯器日常使用，熟練結合擴充套件、整合式終端機與 AI 程式設計助手提升開發效率。', description: '由 Microsoft 開發的輕量級跨平台原始碼編輯器。' },
  },
  Astro: {
    ja: { level: '入門', genre: 'フレームワーク', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: '軽量で高速なマルチページ対応SSGフレームワーク。' },
    en: { level: 'Introductory', genre: 'Framework', skill: 'Understands Astro’s component architecture and routing, and used it to build and deploy this portfolio site.', description: 'A modern, high-performance static site generator (SSG) framework.' },
    'zh-CN': { level: '入门', genre: '框架', skill: '理解 Astro 的组件化架构与路由机制，并成功运用其搭建与部署了本个人作品集网站。', description: '高性能、轻量级的现代静态站点生成（SSG）框架。' },
    'zh-TW': { level: '入門', genre: '框架', skill: '理解 Astro 的元件化架構與路由機制，並成功運用其建置與部署了本個人作品集網站。', description: '高效能、輕量級的現代靜態網站生成（SSG）框架。' },
  },
  'Ruby on Rails': {
    ja: { level: '入門', genre: 'フレームワーク', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: 'Ruby製のWebアプリケーションフレームワーク。' },
    en: { level: 'Introductory', genre: 'Framework', skill: 'Understands the MVC architecture of Rails and can read and trace existing application logic.', description: 'A full-stack web application framework built on Ruby.' },
    'zh-CN': { level: '入门', genre: '框架', skill: '理解 Rails 的 MVC 架构模式，能够阅读并梳理现有 Web 应用的代码逻辑。', description: '基于 Ruby 的全栈 Web 应用程序框架。' },
    'zh-TW': { level: '入門', genre: '框架', skill: '理解 Rails 的 MVC 架構模式，能夠閱讀並梳理現有 Web 應用的程式碼邏輯。', description: '基於 Ruby 的全端 Web 應用程式框架。' },
  },
  Vercel: {
    ja: { level: '初級', genre: 'インフラ', skill: '必要最低限は使用できていると認識しているが、まだまだ不十分である。', description: 'フロントエンド向けホスティング・デプロイプラットフォーム。' },
    en: { level: 'Beginner', genre: 'Infrastructure', skill: 'Capable of configuring Git-integrated CI/CD pipelines and deploying web applications to production.', description: 'A cloud platform for frontend deployment and serverless hosting.' },
    'zh-CN': { level: '初级', genre: '运维', skill: '掌握与 Git 联动的自动化部署流程，能够独立完成 Web 应用的线上发布与域名配置。', description: '面向现代前端项目的云端托管与自动化部署平台。' },
    'zh-TW': { level: '初級', genre: '維運', skill: '掌握與 Git 聯動的自動化部署流程，能夠獨立完成 Web 應用的線上發佈與網域設定。', description: '面向現代前端專案的雲端託管與自動化部署平台。' },
  },
  'Google Cloud Console': {
    ja: { level: '初級', genre: 'インフラ', skill: '必要最低限は使用できていると認識しているが、まだまだ不十分である。', description: 'Googleのクラウドコンピューティングプラットフォーム。' },
    en: { level: 'Beginner', genre: 'Infrastructure', skill: 'Familiar with basic cloud project management, API key configuration, and core GCP console operations.', description: "Google's suite of cloud computing services." },
    'zh-CN': { level: '初级', genre: '运维', skill: '熟悉基础云项目创建、API 密钥配置及常用云服务的控制台管理操作。', description: 'Google 提供的企业级云计算服务平台。' },
    'zh-TW': { level: '初級', genre: '維運', skill: '熟悉基礎雲端專案建立、API 金鑰設定及常用雲端服務的主控台管理操作。', description: 'Google 提供的企業級雲端運算服務平台。' },
  },
  zsh: {
    ja: { level: '初級', genre: 'インフラ', skill: '必要最低限は使用できていると認識しているが、まだまだ不十分である。', description: 'Unix系シェル。コマンドライン操作を効率化。' },
    en: { level: 'Beginner', genre: 'Infrastructure', skill: 'Uses zsh for daily terminal workflows and basic shell configuration to streamline CLI tasks.', description: 'An extended Unix shell designed for interactive command-line efficiency.' },
    'zh-CN': { level: '初级', genre: '运维', skill: '在日常终端开发中使用 zsh，具备基础的 Shell 环境配置与命令行操作能力。', description: '功能丰富的 Unix Shell，用于提升命令行交互效率。' },
    'zh-TW': { level: '初級', genre: '維運', skill: '在日常終端機開發中使用 zsh，具備基礎的 Shell 環境設定與命令列操作能力。', description: '功能豐富的 Unix Shell，用於提升命令列互動效率。' },
  },
  Arduino: {
    ja: { level: '入門', genre: 'その他', skill: 'ゼロから完全なコードを書くことはできないが、既存コードやAI生成コードの大体の意味・構造を理解できる。', description: 'マイコンボードと開発環境。' },
    en: { level: 'Introductory', genre: 'Other', skill: 'Able to wire basic sensors, read microcontroller sketches, and build interactive hardware prototypes.', description: 'An open-source electronics platform and microcontroller development environment.' },
    'zh-CN': { level: '入门', genre: '其他', skill: '能够完成基础传感器电路搭建，读懂并调整微控制器代码以实现硬件原型开发。', description: '开源电子原型开发板与硬件编程环境。' },
    'zh-TW': { level: '入門', genre: '其他', skill: '能夠完成基礎感測器電路搭建，讀懂並調整微控制器程式碼以實現硬體原型開發。', description: '開源電子原型開發板與硬體程式設計環境。' },
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
    'zh-CN': { title: '通过日本实用英语技能检定（EIKEN）2 级', texts: [] },
    'zh-TW': { title: '通過日本實用英語技能檢定（EIKEN）2 級', texts: [] },
  },
  '2025-04': {
    ja: { title: '大阪公立大学工業高等専門学校に入学', texts: ['プログラミングの独習を始める。', '現代音楽部に入部。'] },
    en: { title: 'Enrolled at Osaka Metropolitan University College of Technology (OMUCT)', texts: ['Began self-studying programming.', 'Joined the Contemporary Music Club.'] },
    'zh-CN': { title: '入学大阪公立大学工业高等专科学校（高专）', texts: ['开启编程自学之路。', '加入现代音乐社团。'] },
    'zh-TW': { title: '入學大阪公立大學工業高等專門學校（高專）', texts: ['開啟程式設計自學之路。', '加入現代音樂社團。'] },
  },
  '2025-06': {
    ja: { title: '学友会執行部に入部', texts: ['音響課に配属され、高専祭などでPAを担当する。'] },
    en: { title: 'Joined the Student Council Executive Board', texts: ['Assigned to the Sound Engineering Division, managing live PA audio for campus festivals.'] },
    'zh-CN': { title: '加入学生会执行部', texts: ['隶属于音响部，负责校园文化节等大型活动的现场 PA 扩声与调音工作。'] },
    'zh-TW': { title: '加入學生會執行部', texts: ['隸屬於音響部，負責校園文化節等大型活動的現場 PA 擴聲與調音工作。'] },
  },
  '2026-04': {
    ja: { title: '知能情報コースに進級・配属', texts: ['プログラミングの独習を続ける。'] },
    en: { title: 'Advanced to the Intelligent Information Course', texts: ['Continued self-studying programming and building personal projects.'] },
    'zh-CN': { title: '升入智能信息专业方向', texts: ['持续深入自学编程并开展个人项目实践。'] },
    'zh-TW': { title: '升入智慧資訊專業領域', texts: ['持續深入自學程式設計並開展個人專案實踐。'] },
  },
  '2026-11': {
    ja: { title: 'ハッカソンの成果物を高専祭で展示', texts: ['学内ハッカソンで開発したスケジュール管理アプリを高専祭で展示した。'] },
    en: { title: 'Exhibited Hackathon Project at Campus Festival', texts: ['Showcased the schedule management web app developed during the intramural hackathon to festival visitors.'] },
    'zh-CN': { title: '在校园文化节展示黑客松开发成果', texts: ['面向全校师生及访客展示了在校内黑客马拉松中开发的日程管理应用。'] },
    'zh-TW': { title: '在校園文化節展示黑客松開發成果', texts: ['面向全校師生及訪客展示了在校內黑客松中開發的行程管理應用程式。'] },
  },
};