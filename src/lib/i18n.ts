export type Locale = "ja" | "en" | "zh";

export const LOCALES: Locale[] = ["ja", "en", "zh"];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(v: unknown): v is Locale {
  return v === "ja" || v === "en" || v === "zh";
}

type LegalSection = { h: string; p: string };

export type Dict = {
  nav: {
    translate: string;
    map: string;
    community: string;
    contact: string;
    terms: string;
    privacy: string;
  };
  badge: string;
  subcopy1: string;
  subcopy2: string;
  download: {
    appstoreSmall: string;
    appstore: string;
    playSmall: string;
    play: string;
  };
  chips: { icon: string; label: string }[];
  stats: { num: string; label: string }[];
  translated: string;
  translation: string;
  translationSub: string;
  phoneName: string;
  phoneLocation: string;
  phonePin: string;
  phoneSpeech: string;
  caption: string;
  footer: {
    tagline: string;
    sectionsTitle: { product: string; legal: string; contact: string };
    links: {
      translate: string;
      map: string;
      community: string;
      terms: string;
      privacy: string;
    };
    language: string;
    copyright: string;
  };
  terms: {
    title: string;
    updated: string;
    sections: LegalSection[];
  };
  privacy: {
    title: string;
    updated: string;
    sections: LegalSection[];
  };
};

const ja: Dict = {
  nav: {
    translate: "猫語翻訳",
    map: "猫マップ",
    community: "コミュニティ",
    contact: "お問い合わせ",
    terms: "利用規約",
    privacy: "プライバシー",
  },
  badge: "位置情報ベースの猫SNS · iOS / Android",
  subcopy1: "街で出会った猫を撮って、地図にピン。",
  subcopy2: "鳴き声をAIが翻訳、同じ街の猫好きと、ゆるくつながる。",
  download: {
    appstoreSmall: "Download on the",
    appstore: "App Store",
    playSmall: "Get it on",
    play: "Google Play",
  },
  chips: [
    { icon: "🔊", label: "猫語翻訳" },
    { icon: "📍", label: "猫マップ" },
    { icon: "🐾", label: "猫日記" },
  ],
  stats: [
    { num: "120K+", label: "ユーザー" },
    { num: "85K", label: "登録された猫" },
    { num: "4.8★", label: "App Store" },
  ],
  translated: "MEOW TRANSLATED",
  translation: "\"遊ぼうよ！\"",
  translationSub: "· 遊ぼう",
  phoneName: "三毛ちゃん",
  phoneLocation: "恵比寿公園 · 120m",
  phonePin: "+Pin",
  phoneSpeech: "\"お腹すいた〜\"",
  caption: "↑ 友達が Pin した猫",
  footer: {
    tagline: "街の猫と、ゆるくつながる位置情報ベースのSNS。",
    sectionsTitle: { product: "プロダクト", legal: "規約", contact: "お問い合わせ" },
    links: {
      translate: "猫語翻訳",
      map: "猫マップ",
      community: "コミュニティ",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
    },
    language: "言語",
    copyright: "© 2026 Mewt. All rights reserved.",
  },
  terms: {
    title: "Terms of Use",
    updated: "最終更新日：2026年4月23日",
    sections: [
      { h: "1. 本規約の適用", p: "本利用規約（以下「本規約」）は、Mewt（以下「本サービス」）の提供条件および本サービスの利用に関する当社とユーザーとの間の権利義務関係を定めるものです。本サービスをご利用いただく際は、本規約に同意いただく必要があります。" },
      { h: "2. 利用登録", p: "本サービスの利用を希望される方は、本規約に同意の上、当社の定める方法によって利用登録を申請していただきます。登録情報に虚偽、不正確または不完全な内容が含まれる場合、当社は登録を拒否することがあります。" },
      { h: "3. 禁止事項", p: "ユーザーは、本サービスの利用にあたり、法令違反、公序良俗違反、猫および他の動物への危害、他のユーザー・第三者・当社の権利侵害、本サービスの運営妨害等の行為をしてはなりません。" },
      { h: "4. 投稿コンテンツ", p: "ユーザーが投稿した写真、鳴き声、コメント等のコンテンツの著作権はユーザーに帰属します。ただし、ユーザーは当社に対し、本サービスの提供・運営・改善のために必要な範囲で当該コンテンツを利用することを許諾するものとします。" },
      { h: "5. 免責事項", p: "当社は、本サービスに事実上または法律上の瑕疵がないことを明示的にも黙示的にも保証しておりません。鳴き声のAI翻訳結果は参考情報であり、猫の感情や意図を正確に表現することを保証するものではありません。" },
      { h: "6. 本規約の変更", p: "当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の本規約は、本サービス上に掲載した時点から効力を生じるものとします。" },
      { h: "7. お問い合わせ", p: "本規約に関するお問い合わせは、hello@mewt.uk までご連絡ください。" },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "最終更新日：2026年4月23日",
    sections: [
      { h: "1. 取得する情報", p: "当社は、本サービスの提供にあたり、アカウント情報、位置情報、投稿コンテンツ、端末情報を取得します。" },
      { h: "2. 利用目的", p: "取得した情報は、本サービスの提供・運営、猫マップおよびコミュニティ機能の実現、鳴き声のAI翻訳モデルの改善、不正利用防止、ユーザーサポートのために利用します。" },
      { h: "3. 位置情報について", p: "位置情報は、ユーザーが投稿時に明示的に許可した場合に限り取得します。公開される位置情報は、プライバシー保護のため一定範囲内にぼかして表示されます。端末の設定からいつでも位置情報の提供を停止できます。" },
      { h: "4. 第三者への提供", p: "当社は、法令に基づく場合、ユーザーの同意がある場合、または本サービスの運営に必要な業務委託先を除き、取得した個人情報を第三者に提供することはありません。" },
      { h: "5. セキュリティ", p: "当社は、取得した個人情報の安全管理のために、暗号化通信・アクセス制御・定期的な監査等、合理的かつ適切なセキュリティ対策を実施します。" },
      { h: "6. ユーザーの権利", p: "ユーザーはいつでも、自身の個人情報の開示・訂正・削除・利用停止を請求することができます。" },
      { h: "7. Cookie等の利用", p: "利用状況の分析・サービス改善のため、Cookieおよび類似技術を利用する場合があります。ブラウザの設定により、Cookieの利用を拒否することができます。" },
      { h: "8. お問い合わせ", p: "本ポリシーに関するお問い合わせは、hello@mewt.uk までご連絡ください。" },
    ],
  },
};

const en: Dict = {
  nav: {
    translate: "Meow Translate",
    map: "Cat Map",
    community: "Community",
    contact: "Contact",
    terms: "Terms",
    privacy: "Privacy",
  },
  badge: "Location-based cat SNS · iOS / Android",
  subcopy1: "Snap the cats you meet on the street and pin them on the map.",
  subcopy2: "Our AI translates their meows. Connect casually with cat lovers nearby.",
  download: {
    appstoreSmall: "Download on the",
    appstore: "App Store",
    playSmall: "Get it on",
    play: "Google Play",
  },
  chips: [
    { icon: "🔊", label: "Meow Translate" },
    { icon: "📍", label: "Cat Map" },
    { icon: "🐾", label: "Cat Diary" },
  ],
  stats: [
    { num: "120K+", label: "Users" },
    { num: "85K", label: "Cats Pinned" },
    { num: "4.8★", label: "App Store" },
  ],
  translated: "MEOW TRANSLATED",
  translation: "\"Let's play!\"",
  translationSub: "· play",
  phoneName: "Mike",
  phoneLocation: "Ebisu Park · 120m",
  phonePin: "+Pin",
  phoneSpeech: "\"I'm hungry~\"",
  caption: "↑ Pinned by a friend",
  footer: {
    tagline: "Location-based SNS to connect casually with street cats.",
    sectionsTitle: { product: "Product", legal: "Legal", contact: "Contact" },
    links: {
      translate: "Meow Translate",
      map: "Cat Map",
      community: "Community",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
    },
    language: "Language",
    copyright: "© 2026 Mewt. All rights reserved.",
  },
  terms: {
    title: "Terms of Use",
    updated: "Last updated: April 23, 2026",
    sections: [
      { h: "1. Acceptance", p: "These Terms of Use (\"Terms\") govern your use of Mewt (the \"Service\"). By using the Service, you agree to be bound by these Terms." },
      { h: "2. Account Registration", p: "Certain features require an account. You agree to provide accurate and complete registration information and keep it current. We may refuse registration if information is false, inaccurate, or incomplete." },
      { h: "3. Prohibited Conduct", p: "You shall not use the Service for unlawful activity, activity against public order and morals, harm to cats or other animals, infringement of third-party rights, or disruption of the Service." },
      { h: "4. User Content", p: "You retain copyright in content you submit (photos, recordings, comments). You grant us a license to use such content as reasonably necessary to operate, improve, and promote the Service." },
      { h: "5. Disclaimer", p: "We make no express or implied warranty that the Service is free of defects. Meow translation results are for reference only and do not guarantee accurate interpretation of a cat's emotions or intent." },
      { h: "6. Changes to Terms", p: "We may update these Terms at any time without prior notice. Updates take effect upon posting on the Service." },
      { h: "7. Contact", p: "For questions about these Terms, email hello@mewt.uk." },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: April 23, 2026",
    sections: [
      { h: "1. Information We Collect", p: "We collect account information, location data, user-submitted content, and device information to provide the Service." },
      { h: "2. How We Use Information", p: "We use collected information to operate the Service, power the cat map and community features, improve our AI translation models, prevent misuse, and provide user support." },
      { h: "3. Location Data", p: "Location is collected only when you explicitly grant permission at the time of posting. Public locations are blurred within a radius to protect privacy. You can disable location sharing any time via your device settings." },
      { h: "4. Third-Party Sharing", p: "We do not share personal information with third parties except as required by law, with your consent, or with service providers under our direction." },
      { h: "5. Security", p: "We implement reasonable security measures including encryption in transit, access controls, and periodic audits." },
      { h: "6. Your Rights", p: "You may request access, correction, deletion, or restriction of your personal data at any time." },
      { h: "7. Cookies", p: "We may use cookies and similar technologies for analytics and service improvement. You can disable cookies via your browser settings." },
      { h: "8. Contact", p: "Questions about this Policy: hello@mewt.uk." },
    ],
  },
};

const zh: Dict = {
  nav: {
    translate: "猫语翻译",
    map: "猫咪地图",
    community: "社区",
    contact: "联系我们",
    terms: "使用条款",
    privacy: "隐私政策",
  },
  badge: "基于地理位置的猫咪SNS · iOS / Android",
  subcopy1: "把街头遇到的猫咪拍下来，标在地图上。",
  subcopy2: "AI翻译它们的叫声，和同城爱猫人随意建立连接。",
  download: {
    appstoreSmall: "Download on the",
    appstore: "App Store",
    playSmall: "Get it on",
    play: "Google Play",
  },
  chips: [
    { icon: "🔊", label: "猫语翻译" },
    { icon: "📍", label: "猫咪地图" },
    { icon: "🐾", label: "猫咪日记" },
  ],
  stats: [
    { num: "120K+", label: "用户" },
    { num: "85K", label: "登记猫咪" },
    { num: "4.8★", label: "App Store" },
  ],
  translated: "MEOW TRANSLATED",
  translation: "\"一起玩吧！\"",
  translationSub: "· 玩耍",
  phoneName: "三毛",
  phoneLocation: "惠比寿公园 · 120m",
  phonePin: "+Pin",
  phoneSpeech: "\"好饿～\"",
  caption: "↑ 朋友 Pin 的猫",
  footer: {
    tagline: "基于地理位置，和街头的猫咪随意建立连接的 SNS。",
    sectionsTitle: { product: "产品", legal: "条款", contact: "联系我们" },
    links: {
      translate: "猫语翻译",
      map: "猫咪地图",
      community: "社区",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
    },
    language: "语言",
    copyright: "© 2026 Mewt. All rights reserved.",
  },
  terms: {
    title: "Terms of Use",
    updated: "最后更新：2026年4月23日",
    sections: [
      { h: "1. 条款的适用", p: "本《使用条款》（以下称\"本条款\"）规定了您使用 Mewt（以下称\"本服务\"）的条件。使用本服务即表示您同意受本条款约束。" },
      { h: "2. 账户注册", p: "使用本服务的特定功能需要注册账户。您同意提供准确、完整的注册信息并保持更新。如登记信息存在虚假、不准确或不完整的情况，我们可能拒绝注册。" },
      { h: "3. 禁止行为", p: "您不得将本服务用于违法活动、违反公序良俗的行为、伤害猫咪或其他动物、侵犯第三方权利或干扰本服务运营。" },
      { h: "4. 用户内容", p: "您发布的照片、录音、评论等内容的著作权归您所有。您授予我们在运营、改进及推广本服务所必需范围内使用该内容的许可。" },
      { h: "5. 免责声明", p: "我们不对本服务不存在事实或法律瑕疵作明示或默示的保证。猫叫声的AI翻译结果仅供参考，不保证准确反映猫咪的情绪或意图。" },
      { h: "6. 条款变更", p: "我们可随时、在不通知您的情况下更新本条款。变更自在本服务上发布时生效。" },
      { h: "7. 联系我们", p: "关于本条款的问询请邮件至 hello@mewt.uk。" },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "最后更新：2026年4月23日",
    sections: [
      { h: "1. 收集的信息", p: "为提供本服务，我们收集账户信息、位置信息、用户发布内容（照片、录音、评论等）及设备信息。" },
      { h: "2. 使用目的", p: "收集的信息用于运营本服务、实现猫咪地图和社区功能、改进AI翻译模型、防止滥用及提供用户支持。" },
      { h: "3. 位置信息", p: "仅在您在发布时明确授权的情况下收集位置信息。公开的位置信息会在一定范围内模糊处理以保护隐私。您可随时通过设备设置停止位置信息的共享。" },
      { h: "4. 第三方共享", p: "除法律要求、经您同意或交由受我们指示的业务委托方处理外，我们不会向第三方提供个人信息。" },
      { h: "5. 安全措施", p: "我们采取传输加密、访问控制、定期审计等合理的安全管理措施。" },
      { h: "6. 您的权利", p: "您可随时请求访问、更正、删除或限制对您个人数据的使用。" },
      { h: "7. Cookie 的使用", p: "我们可能使用 Cookie 及类似技术进行使用情况分析与服务改进。您可在浏览器设置中禁用。" },
      { h: "8. 联系我们", p: "关于本政策的问询请邮件至 hello@mewt.uk。" },
    ],
  },
};

export const dict: Record<Locale, Dict> = { ja, en, zh };

export function resolveLocaleFromCountry(country: string | null | undefined): Locale {
  const c = (country || "").toUpperCase();
  if (c === "JP") return "ja";
  if (["CN", "TW", "HK", "MO", "SG"].includes(c)) return "zh";
  return "en";
}

export function resolveLocaleFromAcceptLanguage(h: string | null | undefined): Locale {
  const lang = (h || "").toLowerCase();
  if (lang.startsWith("ja") || lang.includes(",ja") || lang.includes(" ja")) return "ja";
  if (lang.startsWith("zh") || lang.includes(",zh") || lang.includes(" zh")) return "zh";
  return "en";
}
