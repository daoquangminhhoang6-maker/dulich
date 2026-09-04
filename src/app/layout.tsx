import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const cardo = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
  variable: "--font-cardo",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const jost = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vietnam Wellness Retreat",
  description: "Wellness Destination Development & Advisory tại Việt Nam.",
};

// Root layout thật của toàn app (bắt buộc phải có html/body ở đây).
// Trang "/" (app/page.tsx) chuyển hướng sang "/vi" — layout riêng theo
// ngôn ngữ nằm ở app/[locale]/layout.tsx, chỉ lo phần Header/Footer/JSON-LD.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${cardo.variable} ${greatVibes.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
