import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Mewt — Hear Meow, Map Cats.",
  description:
    "Location-based SNS for cats. Snap the cats you meet on the street, pin them on the map. Our AI translates their meows.",
  keywords: ["猫", "cat", "SNS", "地図", "翻訳", "Mewt", "LBS"],
  openGraph: {
    title: "Mewt — Hear Meow, Map Cats.",
    description: "Location-based SNS for cats.",
    siteName: "Mewt",
    type: "website",
  },
};

const LANG_ATTR: Record<Locale, string> = {
  ja: "ja",
  en: "en",
  zh: "zh",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const raw = h.get("x-locale");
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;

  return (
    <html lang={LANG_ATTR[locale]}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${notoSansJp.variable} antialiased`}>{children}</body>
    </html>
  );
}
