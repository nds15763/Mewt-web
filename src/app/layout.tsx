import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mewt - 全球旅游足迹与打卡地图",
  description: "Mewt 是一款专门为旅行爱好者打造的社交应用，集成了地图足迹、景点打卡、旅行社交等功能。记录您的每一次精彩旅程。",
  keywords: ["旅游地图", "足迹记录", "打卡社交", "旅行社区", "Mewt App"],
  openGraph: {
    title: "Mewt - 全球旅游足迹与打卡地图",
    description: "探索世界，记录您的每一次精彩旅程。",
    url: "https://mewt-web.vercel.app", // Placeholder
    siteName: "Mewt",
    images: [
      {
        url: "/og-image.png", // To be added later
        width: 1200,
        height: 630,
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
