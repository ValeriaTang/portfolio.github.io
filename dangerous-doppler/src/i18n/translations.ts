// ============================================================
//  i18n translation dictionary
//  Supported locales: ja | en | zh-CN | zh-TW
// ============================================================

export type Locale = 'ja' | 'en' | 'zh-CN' | 'zh-TW';

export const LOCALES: { code: Locale; label: string; lang: string }[] = [
  { code: 'ja',    label: '日本語', lang: 'ja' },
  { code: 'en',    label: 'English', lang: 'en' },
  { code: 'zh-CN', label: '简体中文', lang: 'zh-Hans' },
  { code: 'zh-TW', label: '繁體中文', lang: 'zh-Hant' },
];

export type TranslationKey =
  // Nav
  | 'nav.home' | 'nav.about' | 'nav.skills' | 'nav.works'
  // Theme
  | 'theme.dark' | 'theme.light' | 'theme.toggle'
  // Home
  | 'home.title'
  // About (section in index)
  | 'about.heading' | 'about.name' | 'about.birth' | 'about.affiliation'
  | 'about.hobbies' | 'about.interests' | 'about.more'
  // About me page
  | 'aboutme.title'
  | 'aboutme.profile.heading' | 'aboutme.profile.greeting' | 'aboutme.profile.school'
  | 'aboutme.profile.hobby' | 'aboutme.profile.interest'
  | 'aboutme.style.heading' | 'aboutme.style.p1' | 'aboutme.style.p2' | 'aboutme.style.p3'
  | 'aboutme.kikkake.heading' | 'aboutme.kikkake.p1' | 'aboutme.kikkake.p2' | 'aboutme.kikkake.p3'
  | 'aboutme.career.heading'
  // Skills
  | 'skills.title' | 'skills.heading' | 'skills.more'
  | 'skills.modal.what' | 'skills.modal.desc' | 'skills.modal.close'
  // Genres
  | 'genre.backend' | 'genre.frontend' | 'genre.framework' | 'genre.infra' | 'genre.other'
  // Skill levels
  | 'level.beginner' | 'level.intro'
  // Works
  | 'works.title' | 'works.heading' | 'works.aiRatio' | 'works.tags' | 'works.detail' | 'works.more'
  | 'works.modal.period' | 'works.modal.github' | 'works.modal.close' | 'works.link'
  | 'works.modal.ai' | 'works.modal.detail'
  | 'works.card.period' | 'works.card.aiLocation' | 'works.card.overview'
  // Footer
  | 'footer.email'
  | 'footer.github'
  | 'footer.devicon'
  | 'footer.irasutoya'
  // Back to top
  | 'backtotop'
  // Menu
  | 'menu.open'
  // Page titles / meta
  | 'notfound.title'
  | 'meta.description' | 'meta.aboutme' | 'meta.skills' | 'meta.works' | 'meta.404';

type Translations = Record<TranslationKey, string>;

const ja: Translations = {
  'nav.home': 'ホーム',
  'nav.about': '私について',
  'nav.skills': 'スキル',
  'nav.works': '作品',
  'theme.dark': '🌙 ダークモード',
  'theme.light': '☀️ ライトモード',
  'theme.toggle': 'テーマを切り替える',
  'home.title': 'Welcome to My Portfolio',
  'about.heading': '',
  'about.name': '名前',
  'about.birth': '生年',
  'about.affiliation': '所属',
  'about.hobbies': '趣味',
  'about.interests': '興味',
  'about.more': '詳しくはこちら',
  'aboutme.title': '私について',
  'aboutme.profile.heading': 'プロフィール',
  'aboutme.profile.greeting': 'こんにちは！Valeriaです。',
  'aboutme.profile.school': '大阪公立大学工業高等専門学校 総合工学システム学科 知能情報コース の2年生です。',
  'aboutme.profile.hobby': '趣味はドラマ鑑賞で、特に時代劇は国籍問わず好んで視聴します。また、スポーツ観戦も好きで、テレビで中継していたら何でも見ます。人間観察やネットサーフィンも好きですね。総じて言えるのは、何かしらの動いているものを見るのが好きだということです。',
  'aboutme.profile.interest': '自然言語処理、IoT、VFXなどの分野に興味を持ち、将来的にはこれらの技術を活用したプロジェクトに携わりたいと考えています。（興味があるだけで、触ったことはほとんどないですけどね！）',
  'aboutme.style.heading': 'コーディングスタイル',
  'aboutme.style.p1': '私はまだプログラミング歴が浅く、すべてを自力で書き上げるほどの経験はありません。そのため、開発の半分ほどはAIと対話しながら進めるバイブコーディングを取り入れています。',
  'aboutme.style.p2': '「何を作りたいか」というアイデアや設計を重視し、具体的な記述方法やエラーの原因が分からない時は、AIに相談したり都度調べたりしながら試行錯誤して形にしています。',
  'aboutme.style.p3': 'このサイトを作る際もたくさん調べました。ホバーやパンくずリスト、ハンバーガーメニューなど、今まで知らなかった言葉をたくさん知ることができてとても楽しい時間でした。',
  'aboutme.kikkake.heading': '高専入学のきっかけ',
  'aboutme.kikkake.p1': '母が高専出身であったことから、幼少期より高専という教育機関の存在を身近に認知していました。',
  'aboutme.kikkake.p2': '当初は普通科高校への進学を想定していましたが、中学校の技術の授業で体験した「はんだ付け」や「IoT」の知識に深く興味を持ち、専門的な技術分野への探究心が芽生えました。',
  'aboutme.kikkake.p3': '自身の適性や将来の志向を見つめ直した結果、より実用的かつ高度な工学技術を学べる環境を求め、高専への進学を選択しました。',
  'aboutme.career.heading': '経歴',
  'skills.heading': 'スキル',
  'skills.more': '詳しくはこちら',
  'skills.modal.what': 'できること',
  'skills.modal.desc': '説明',
  'skills.modal.close': '閉じる',
  'genre.backend': 'バックエンド',
  'genre.frontend': 'フロントエンド',
  'genre.framework': 'フレームワーク',
  'genre.infra': 'インフラ',
  'genre.other': 'その他',
  'level.beginner': '初級',
  'level.intro': '入門',
  'works.heading': '作品',
  'works.aiRatio': 'AI使用率',
  'works.tags': '使用技術',
  'works.detail': '詳しく見る',
  'works.more': '詳しくはこちら',
  'works.modal.period': '開発期間',
  'works.modal.github': 'GitHubでコードを見る',
  'works.modal.close': '閉じる',
  'works.modal.ai': 'AI使用率',
  'works.modal.detail': '詳細',
  'works.link': 'GitHub / Demo',
  'works.card.period': '開発期間',
  'works.card.aiLocation': 'AIの使用場所',
  'works.card.overview': '概要',
  'footer.email': '学校用メールアドレス',
  'footer.github': 'GitHubのプロフィールを開く',
  'footer.devicon': 'アイコン',
  'footer.irasutoya': 'イラスト',
  'menu.open': 'メニュー',
  'backtotop': 'トップへ戻る',
  'skills.title': 'スキル',
  'works.title': '作品',
  'notfound.title': '404 - ページが見つかりません',
  'meta.description': 'Valeria のポートフォリオサイトです。スキルや制作作品、自己紹介を掲載しています。',
  'meta.aboutme': 'Valeria のプロフィール、コーディングスタイル、経歴を紹介します。',
  'meta.skills': 'Valeria が使えるプログラミング言語・フレームワーク・技術スタックを紹介します。',
  'meta.works': 'Valeria が制作した作品・プロジェクトを一覧で紹介します。',
  'meta.404': 'お探しのページは見つかりませんでした。',
};

const en: Translations = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.works': 'Works',
  'theme.dark': '🌙 Dark',
  'theme.light': '☀️ Light',
  'theme.toggle': 'Toggle theme',
  'home.title': 'Welcome to My Portfolio',
  'about.heading': '',
  'about.name': 'Name',
  'about.birth': 'Born',
  'about.affiliation': 'School',
  'about.hobbies': 'Hobbies',
  'about.interests': 'Interests',
  'about.more': 'Learn more',
  'aboutme.title': 'About Me',
  'aboutme.profile.heading': 'Profile',
  'aboutme.profile.greeting': "Hi! I'm Valeria.",
  'aboutme.profile.school': "I'm a 2nd-year student in the Intelligent Information Course, Department of Integrated Engineering Systems at Osaka Metropolitan University College of Technology (OMUCT).",
  'aboutme.profile.hobby': "My hobbies include watching dramas—especially historical period pieces from around the world—and following live sports on TV. I also enjoy people-watching and browsing the web. In short, I'm fascinated by anything in motion.",
  'aboutme.profile.interest': "I'm deeply interested in Natural Language Processing (NLP), IoT, and VFX. While I'm still at the starting line with these technologies, I'm eager to dive deeper and build projects around them in the future!",
  'aboutme.style.heading': 'Coding Style',
  'aboutme.style.p1': 'As an emerging developer, I embrace an AI-assisted "Vibe Coding" workflow—combining my own ideas with AI pair programming to accelerate development and turn concepts into reality.',
  'aboutme.style.p2': 'I prioritize ideation, system design, and user experience. Whenever I encounter unfamiliar syntax or bugs, I actively research and iterate with AI to troubleshoot and ship working solutions.',
  'aboutme.style.p3': 'Building this portfolio was a great hands-on learning experience. Mastering modern UI concepts like hover states, breadcrumb navigation, and hamburger menus made the process genuinely exciting.',
  'aboutme.kikkake.heading': 'Why I Chose Kosen',
  'aboutme.kikkake.p1': 'Since my mother is a Kosen (National Institute of Technology) graduate, I grew up familiar with its unique, hands-on engineering education.',
  'aboutme.kikkake.p2': "Although I initially considered a standard academic high school, getting hands-on experience with soldering and IoT in middle school sparked my passion for specialized engineering.",
  'aboutme.kikkake.p3': 'Evaluating my strengths and career goals, I chose Kosen to immerse myself in a practical, advanced engineering environment early on.',
  'aboutme.career.heading': 'Career',
  'skills.heading': 'Skills',
  'skills.more': 'See all skills',
  'skills.modal.what': 'What I can do',
  'skills.modal.desc': 'Description',
  'skills.modal.close': 'Close',
  'genre.backend': 'Backend',
  'genre.frontend': 'Frontend',
  'genre.framework': 'Framework',
  'genre.infra': 'Infrastructure',
  'genre.other': 'Other',
  'level.beginner': 'Beginner',
  'level.intro': 'Introductory',
  'works.heading': 'Works',
  'works.aiRatio': 'AI Usage',
  'works.tags': 'Tech Stack',
  'works.detail': 'View Details',
  'works.more': 'See more',
  'works.modal.period': 'Timeline',
  'works.modal.github': 'View Source on GitHub',
  'works.modal.close': 'Close',
  'works.modal.ai': 'AI Usage',
  'works.modal.detail': 'Details',
  'works.link': 'GitHub / Demo',
  'works.card.period': 'Timeline',
  'works.card.aiLocation': 'AI Scope',
  'works.card.overview': 'Overview',
  'footer.email': 'School Email',
  'footer.github': 'GitHub Profile',
  'footer.devicon': 'Icons',
  'footer.irasutoya': 'Illustrations',
  'menu.open': 'Menu',
  'backtotop': 'Back to top',
  'skills.title': 'Skills',
  'works.title': 'Works',
  'notfound.title': '404 - Page Not Found',
  'meta.description': "Valeria's portfolio site featuring skills, projects, and profile.",
  'meta.aboutme': "About Valeria: profile, coding style, and career history.",
  'meta.skills': "Programming languages, frameworks, and tech stack Valeria works with.",
  'meta.works': "A list of projects and works created by Valeria.",
  'meta.404': "The page you are looking for could not be found.",
};

const zhCN: Translations = {
  'nav.home': '首页',
  'nav.about': '关于我',
  'nav.skills': '技术栈',
  'nav.works': '项目作品',
  'theme.dark': '🌙 深色模式',
  'theme.light': '☀️ 浅色模式',
  'theme.toggle': '切换主题',
  'home.title': 'Welcome to My Portfolio',
  'about.heading': '',
  'about.name': '姓名',
  'about.birth': '出生年份',
  'about.affiliation': '学校',
  'about.hobbies': '兴趣爱好',
  'about.interests': '关注领域',
  'about.more': '了解更多',
  'aboutme.title': '关于我',
  'aboutme.profile.heading': '个人简介',
  'aboutme.profile.greeting': '你好！我是 Valeria。',
  'aboutme.profile.school': '目前就读于大阪公立大学工业高等专科学校（高专）综合工程系统学科智能信息专业二年级。',
  'aboutme.profile.hobby': '我的爱好是看剧，尤其喜欢各国的历史剧；我也爱看各类体育赛事的电视直播，平时还喜欢观察人和网上冲浪。总的来说，我对一切“动态的事物”都很感兴趣。',
  'aboutme.profile.interest': '我对自然语言处理（NLP）、物联网（IoT）和视觉特效（VFX）等前沿领域充满热情，虽然目前仍在探索阶段，但非常期待未来能深入实践并参与相关项目开发！',
  'aboutme.style.heading': '开发风格',
  'aboutme.style.p1': '作为一名正在快速成长的开发者，我积极拥抱 AI 辅助开发的“Vibe Coding（氛围编程）”模式，将自己的创意与 AI 结对编程相结合，高效推进从 0 到 1 的项目落地。',
  'aboutme.style.p2': '在开发中，我更注重核心创意、功能设计与整体架构。遇到不熟悉的语法或报错时，我会主动查阅文档并与 AI 深入探讨，在不断试错与调试中解决问题。',
  'aboutme.style.p3': '搭建这个个人网站的过程让我收获颇丰。通过亲手实践，我掌握了悬停动效（Hover）、面包屑导航、汉堡菜单等诸多前端交互概念，整个过程非常有成就感。',
  'aboutme.kikkake.heading': '选择高专的契机',
  'aboutme.kikkake.p1': '由于母亲毕业于高专，我从小就对这种注重实践的工科教育体系有所了解。',
  'aboutme.kikkake.p2': '最初我曾计划升入普通高中，但在初中技术课上接触到电路焊接和物联网知识后，我对硬核工程技术产生了浓厚的探索欲。',
  'aboutme.kikkake.p3': '结合自身特长与职业规划，我最终选择进入高专，希望在更专业、注重实操的环境中深耕工程技术。',
  'aboutme.career.heading': '个人经历',
  'skills.heading': '技术栈',
  'skills.more': '查看全部技能',
  'skills.modal.what': '掌握程度',
  'skills.modal.desc': '技术简介',
  'skills.modal.close': '关闭',
  'genre.backend': '后端',
  'genre.frontend': '前端',
  'genre.framework': '框架',
  'genre.infra': '运维 / 基础设施',
  'genre.other': '其他',
  'level.beginner': '初级',
  'level.intro': '入门',
  'works.heading': '项目作品',
  'works.aiRatio': 'AI 参与度',
  'works.tags': '技术栈',
  'works.detail': '查看详情',
  'works.more': '查看更多',
  'works.modal.period': '开发周期',
  'works.modal.github': '在 GitHub 上查看源码',
  'works.modal.close': '关闭',
  'works.modal.ai': 'AI 参与度',
  'works.modal.detail': '项目详情',
  'works.link': 'GitHub / Demo',
  'works.card.period': '开发周期',
  'works.card.aiLocation': 'AI 辅助范围',
  'works.card.overview': '项目概述',
  'footer.email': '学校邮箱',
  'footer.github': '访问 GitHub 主页',
  'footer.devicon': '图标来源',
  'footer.irasutoya': '插画来源',
  'menu.open': '菜单',
  'backtotop': '回到顶部',
  'skills.title': '技术栈',
  'works.title': '项目作品',
  'notfound.title': '404 - 页面不存在',
  'meta.description': 'Valeria 的个人作品集网站，展示技能、项目作品与自我介绍。',
  'meta.aboutme': '了解 Valeria 的个人简介、编码风格与成长经历。',
  'meta.skills': 'Valeria 掌握的编程语言、框架与技术栈。',
  'meta.works': 'Valeria 制作的项目与作品列表。',
  'meta.404': '您查找的页面不存在。',
};

const zhTW: Translations = {
  'nav.home': '首頁',
  'nav.about': '關於我',
  'nav.skills': '技術棧',
  'nav.works': '作品集',
  'theme.dark': '🌙 深色模式',
  'theme.light': '☀️ 淺色模式',
  'theme.toggle': '切換主題',
  'home.title': 'Welcome to My Portfolio',
  'about.heading': '',
  'about.name': '姓名',
  'about.birth': '出生年份',
  'about.affiliation': '學校',
  'about.hobbies': '興趣愛好',
  'about.interests': '關注領域',
  'about.more': '了解更多',
  'aboutme.title': '關於我',
  'aboutme.profile.heading': '個人簡介',
  'aboutme.profile.greeting': '嗨！我是 Valeria。',
  'aboutme.profile.school': '目前就讀於大阪公立大學工業高等專門學校（高專）綜合工程系統學科智慧資訊專業二年級。',
  'aboutme.profile.hobby': '我的愛好是追劇，尤其喜歡各國的歷史劇；我也愛看各類體育賽事的電視轉播，平時還喜歡觀察人與上網瀏覽。總的來說，我對一切「動態的事物」都很感興趣。',
  'aboutme.profile.interest': '我對自然語言處理（NLP）、物聯網（IoT）和視覺特效（VFX）等領域充滿熱情，雖然目前仍在探索階段，但非常期待未來能深入實作並參與相關專案開發！',
  'aboutme.style.heading': '開發風格',
  'aboutme.style.p1': '作為一名正在快速成長的開發者，我積極擁抱 AI 輔助開發的「Vibe Coding」模式，將自己的創意與 AI 協作相結合，高效推進從 0 到 1 的專案落地。',
  'aboutme.style.p2': '在開發中，我更注重核心創意、功能設計與整體架構。遇到不熟悉的語法或報錯時，我會主動查閱文件並與 AI 深入探討，在不斷試錯與除錯中解決問題。',
  'aboutme.style.p3': '架設這個個人網站的過程讓我收穫良多。透過親手實作，我掌握了懸停效果（Hover）、麵包屑導覽、漢堡選單等許多前端互動概念，整個過程非常有成就感。',
  'aboutme.kikkake.heading': '選擇高專的契機',
  'aboutme.kikkake.p1': '由於母親畢業於高專，我從小就對這種注重實作的工科教育體系有所了解。',
  'aboutme.kikkake.p2': '最初我曾計畫升入普通高中，但在國中生活科技課上接觸到電路焊接和物聯網知識後，我對硬核工程技術產生了濃厚的探索欲。',
  'aboutme.kikkake.p3': '結合自身專長與未來志向，我最終選擇進入高專，希望在更專業、注重實務的環境中深耕工程技術。',
  'aboutme.career.heading': '個人經歷',
  'skills.heading': '技術棧',
  'skills.more': '查看全部技能',
  'skills.modal.what': '掌握程度',
  'skills.modal.desc': '技術簡介',
  'skills.modal.close': '關閉',
  'genre.backend': '後端',
  'genre.frontend': '前端',
  'genre.framework': '框架',
  'genre.infra': '維運 / 基礎設施',
  'genre.other': '其他',
  'level.beginner': '初級',
  'level.intro': '入門',
  'works.heading': '作品集',
  'works.aiRatio': 'AI 參與度',
  'works.tags': '技術棧',
  'works.detail': '查看詳情',
  'works.more': '查看更多',
  'works.modal.period': '開發期間',
  'works.modal.github': '在 GitHub 上查看原始碼',
  'works.modal.close': '關閉',
  'works.modal.ai': 'AI 參與度',
  'works.modal.detail': '專案詳情',
  'works.link': 'GitHub / Demo',
  'works.card.period': '開發期間',
  'works.card.aiLocation': 'AI 輔助範圍',
  'works.card.overview': '專案概述',
  'footer.email': '學校信箱',
  'footer.github': '開啟 GitHub 個人檔案',
  'footer.devicon': '圖示來源',
  'footer.irasutoya': '插畫來源',
  'menu.open': '選單',
  'backtotop': '回到頂部',
  'skills.title': '技術棧',
  'works.title': '作品集',
  'notfound.title': '404 - 頁面不存在',
  'meta.description': 'Valeria 的個人作品集網站，展示技能、專案作品與自我介紹。',
  'meta.aboutme': '了解 Valeria 的個人簡介、開發風格與成長經歷。',
  'meta.skills': 'Valeria 掌握的程式語言、框架與技術棧。',
  'meta.works': 'Valeria 製作的專案與作品列表。',
  'meta.404': '您尋找的頁面不存在。',
};

export const translations: Record<Locale, Translations> = { ja, en, 'zh-CN': zhCN, 'zh-TW': zhTW };

/** Helper: get a translation for a given locale */
export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] ?? translations['ja'][key] ?? key;
}