import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Mewt — Hear Meow, Map Cats.",
  description:
    "位置情報ベースの猫SNS。街で出会った猫を撮って、地図にピン。鳴き声をAIが翻訳、同じ街の猫好きと、ゆるくつながる。",
  keywords: ["猫", "cat", "SNS", "地図", "翻訳", "Mewt", "LBS"],
  openGraph: {
    title: "Mewt — Hear Meow, Map Cats.",
    description:
      "位置情報ベースの猫SNS。街で出会った猫を撮って、地図にピン。",
    siteName: "Mewt",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
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
