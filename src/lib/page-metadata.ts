import type { Metadata } from "next";
import type { Locale } from "@/lib/dictionary";
import { siteConfig } from "@/lib/site-config";

export function buildMetadata({
  locale,
  title,
  description,
  viPath,
  enPath,
  image = "/images/poolside-sunset-clean.jpg",
}: {
  locale: Locale;
  title: string;
  description: string;
  viPath: string; // vd: "/vi/gioi-thieu"
  enPath: string; // vd: "/en/about"
  image?: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name} — Wellness Destination Development & Advisory`;
  const path = locale === "vi" ? viPath : enPath;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
      languages: {
        vi: viPath,
        en: enPath,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      images: [image],
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
