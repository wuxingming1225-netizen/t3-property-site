import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    metadataBase: baseUrl,
    title: "横琴天啟 T3｜物业服务团队",
    description: "横琴天啟 T3 写字楼物业团队介绍与便民服务指引。",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "横琴天啟 T3｜物业团队 · 便民服务",
      description: "认识专属物业团队，快速查看停车、外卖、门牌与门禁服务指引。",
      images: [{ url: new URL("/og.png", baseUrl).toString(), width: 1200, height: 630, alt: "横琴天啟 T3 物业便民服务" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "横琴天啟 T3｜物业团队 · 便民服务",
      description: "认识专属物业团队，快速查看停车、外卖、门牌与门禁服务指引。",
      images: [new URL("/og.png", baseUrl).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
