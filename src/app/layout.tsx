import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mewt - 猫咪社交与迷路猫寻回地图",
  description: "Mewt 是一款专门为爱猫人士打造的社交应用，集成了地图社交、迷路猫寻回、猫咪表情互动等功能。连接社区，让每一只小猫都能安全回家。",
  keywords: ["猫咪社交", "迷路猫", "猫咪地图", "宠物社交", "Mewt App"],
  openGraph: {
    title: "Mewt - 猫咪社交与迷路猫寻回地图",
    description: "连接社区，让每一只小猫都能安全回家。",
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
