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
  | 'skills.heading' | 'skills.more'
  | 'skills.modal.what' | 'skills.modal.desc' | 'skills.modal.close'
  // Genres
  | 'genre.backend' | 'genre.frontend' | 'genre.framework' | 'genre.infra' | 'genre.other'
  // Skill levels
  | 'level.beginner' | 'level.intro'
  // Works
  | 'works.heading' | 'works.aiRatio' | 'works.tags' | 'works.detail'
  | 'works.modal.period' | 'works.modal.github' | 'works.modal.close' | 'works.link'
  // Footer
  | 'footer.email'
  | 'footer.github'
  // Back to top
  | 'backtotop'
  // Menu
  | 'menu.open';

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
  'aboutme.style.p1': '私はプログラミングが得意だといえるほど経験してきたわけでも、特別な才能があるわけでもありません。',
  'aboutme.style.p2': 'そのため、何をしたいのかは分かるがそれをどうやって記述すればいいのかが分からない時や、エラーの原因が分からない時は都度調べるという非効率的な行動をしています。',
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
  'works.modal.period': '期間',
  'works.modal.github': 'GitHubでコードを見る',
  'works.modal.close': '閉じる',
  'works.link': 'GitHub / Demo',
  'footer.email': '学校用メールアドレス',
  'footer.github': 'GitHubのプロフィールを開く',
  'menu.open': 'メニュー',
  'backtotop': 'トップへ戻る',
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
  'aboutme.profile.school': "I'm a 2nd-year student in the Intelligent Information Course, Department of Integrated Engineering Systems, Osaka Prefecture University College of Technology (OMUCT).",
  'aboutme.profile.hobby': "My hobby is watching dramas — especially period pieces from any country. I also enjoy watching sports on TV. I love people-watching and surfing the web. In short, I love watching things in motion.",
  'aboutme.profile.interest': "I'm interested in Natural Language Processing, IoT, and VFX, and I hope to work on projects using these technologies in the future. (I'm just interested — I've barely touched them yet!)",
  'aboutme.style.heading': 'Coding Style',
  'aboutme.style.p1': "I'm not particularly experienced or talented in programming.",
  'aboutme.style.p2': "So when I know what I want to do but not how to write it, or when I can't find the cause of an error, I look it up every time — which is inefficient.",
  'aboutme.style.p3': "While building this site, I researched a lot. I learned many new terms like hover, breadcrumb lists, and hamburger menus — it was a really fun experience.",
  'aboutme.kikkake.heading': 'Why I Chose a Kosen',
  'aboutme.kikkake.p1': 'Because my mother attended a kosen, I had been familiar with this type of institution from an early age.',
  'aboutme.kikkake.p2': "I had originally planned to go to a regular high school, but during middle school I became deeply interested in soldering and IoT during technology class, and my curiosity for specialized fields began to grow.",
  'aboutme.kikkake.p3': 'After reflecting on my strengths and future goals, I chose the kosen path to pursue a more practical and advanced engineering education.',
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
  'works.aiRatio': 'AI usage',
  'works.tags': 'Technologies',
  'works.detail': 'Details',
  'works.more': 'See more',
  'works.modal.period': 'Period',
  'works.modal.github': 'View code on GitHub',
  'works.modal.close': 'Close',
  'works.link': 'GitHub / Demo',
  'footer.email': 'School email',
  'footer.github': 'Open GitHub profile',
  'menu.open': 'Menu',
  'backtotop': 'Back to top',
};

const zhCN: Translations = {
  'nav.home': '首页',
  'nav.about': '关于我',
  'nav.skills': '技能',
  'nav.works': '作品',
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
  'aboutme.profile.greeting': '大家好！我是 Valeria。',
  'aboutme.profile.school': '目前就读于大阪公立大学工业高等专门学校综合工程系统学科智能信息课程二年级。',
  'aboutme.profile.hobby': '我的爱好是看剧，尤其喜欢各国的古装历史剧。我也爱看各类体育比赛的电视直播，喜欢观察人，也爱在网上冲浪。总的来说，我喜欢看一切"动起来的东西"。',
  'aboutme.profile.interest': '我对自然语言处理、物联网（IoT）和视觉特效（VFX）等领域很感兴趣，希望将来能参与运用这些技术的项目。（只是感兴趣，实际上几乎没有动手实践过！）',
  'aboutme.style.heading': '编程风格',
  'aboutme.style.p1': '我在编程方面既没有丰富的经验，也没有特别的天赋。',
  'aboutme.style.p2': '所以每当我知道自己想做什么却不知道如何编写代码，或者找不到报错原因时，我都会逐一查阅——虽然效率不高。',
  'aboutme.style.p3': '在制作这个网站的过程中，我查阅了大量资料，学到了悬停（hover）、面包屑导航、汉堡菜单等很多之前不知道的概念，非常有趣。',
  'aboutme.kikkake.heading': '为何选择高专',
  'aboutme.kikkake.p1': '由于母亲毕业于高专，我从小就对这种教育机构有所了解。',
  'aboutme.kikkake.p2': '最初我打算升入普通高中，但在初中技术课上接触到焊接和物联网知识后，我对专业技术领域产生了浓厚的兴趣。',
  'aboutme.kikkake.p3': '重新审视自己的优势和未来志向后，我决定进入高专，以便学习更实用、更深入的工程技术。',
  'aboutme.career.heading': '经历',
  'skills.heading': '技能',
  'skills.more': '查看全部技能',
  'skills.modal.what': '能做什么',
  'skills.modal.desc': '说明',
  'skills.modal.close': '关闭',
  'genre.backend': '后端',
  'genre.frontend': '前端',
  'genre.framework': '框架',
  'genre.infra': '基础设施',
  'genre.other': '其他',
  'level.beginner': '初级',
  'level.intro': '入门',
  'works.heading': '作品',
  'works.aiRatio': 'AI 使用率',
  'works.tags': '使用技术',
  'works.detail': '查看详情',
  'works.more': '查看更多',
  'works.modal.period': '开发周期',
  'works.modal.github': '在 GitHub 上查看代码',
  'works.modal.close': '关闭',
  'works.link': 'GitHub / Demo',
  'footer.email': '学校邮箱',
  'footer.github': '打开 GitHub 个人资料',
  'menu.open': '菜单',
  'backtotop': '回到顶部',
};

const zhTW: Translations = {
  'nav.home': '首頁',
  'nav.about': '關於我',
  'nav.skills': '技能',
  'nav.works': '作品',
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
  'aboutme.profile.greeting': '大家好！我是 Valeria。',
  'aboutme.profile.school': '目前就讀於大阪公立大學工業高等專門學校綜合工程系統學科智能資訊課程二年級。',
  'aboutme.profile.hobby': '我的愛好是看劇，尤其喜歡各國的古裝歷史劇。我也愛看各類體育賽事的電視轉播，喜歡觀察人，也愛上網瀏覽。總的來說，我喜歡看一切「動起來的東西」。',
  'aboutme.profile.interest': '我對自然語言處理、物聯網（IoT）和視覺特效（VFX）等領域很感興趣，希望將來能參與運用這些技術的專案。（只是感興趣，實際上幾乎沒有動手實踐過！）',
  'aboutme.style.heading': '程式設計風格',
  'aboutme.style.p1': '我在程式設計方面既沒有豐富的經驗，也沒有特別的天賦。',
  'aboutme.style.p2': '所以每當我知道自己想做什麼卻不知道如何撰寫程式，或是找不到錯誤原因時，我都會逐一查閱——雖然效率不高。',
  'aboutme.style.p3': '在製作這個網站的過程中，我查閱了大量資料，學到了懸停（hover）、麵包屑導覽、漢堡選單等很多之前不知道的概念，非常有趣。',
  'aboutme.kikkake.heading': '為何選擇高專',
  'aboutme.kikkake.p1': '由於母親畢業於高專，我從小就對這種教育機構有所了解。',
  'aboutme.kikkake.p2': '最初我打算升入普通高中，但在國中技術課上接觸到焊接和物聯網知識後，我對專業技術領域產生了濃厚的興趣。',
  'aboutme.kikkake.p3': '重新審視自己的優勢和未來志向後，我決定進入高專，以便學習更實用、更深入的工程技術。',
  'aboutme.career.heading': '經歷',
  'skills.heading': '技能',
  'skills.more': '查看全部技能',
  'skills.modal.what': '能做什麼',
  'skills.modal.desc': '說明',
  'skills.modal.close': '關閉',
  'genre.backend': '後端',
  'genre.frontend': '前端',
  'genre.framework': '框架',
  'genre.infra': '基礎設施',
  'genre.other': '其他',
  'level.beginner': '初級',
  'level.intro': '入門',
  'works.heading': '作品',
  'works.aiRatio': 'AI 使用率',
  'works.tags': '使用技術',
  'works.detail': '查看詳情',
  'works.more': '查看更多',
  'works.modal.period': '開發期間',
  'works.modal.github': '在 GitHub 上查看程式碼',
  'works.modal.close': '關閉',
  'works.link': 'GitHub / Demo',
  'footer.email': '學校信箱',
  'footer.github': '開啟 GitHub 個人資料',
  'menu.open': '選單',
  'backtotop': '回到頂部',
};

export const translations: Record<Locale, Translations> = { ja, en, 'zh-CN': zhCN, 'zh-TW': zhTW };

/** Helper: get a translation for a given locale */
export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] ?? translations['ja'][key] ?? key;
}
