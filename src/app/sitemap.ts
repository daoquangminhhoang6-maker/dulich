import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Dùng tính năng sitemap có sẵn của Next.js (App Router) thay cho gói
// next-sitemap — tránh lỗi tự thêm "/vi/" sai vào đường dẫn sitemap con.
export default function sitemap(): MetadataRoute.Sitemap {
  const viPaths = ["", "gioi-thieu", "dich-vu", "wellness-tourism", "lien-he"];
  const enPaths = ["", "about", "services", "wellness-tourism", "contact"];

  const now = new Date();

  const viUrls: MetadataRoute.Sitemap = viPaths.map((p) => ({
    url: `${siteConfig.url}/vi${p ? `/${p}` : ""}`,
    lastModified: now,
  }));

  const enUrls: MetadataRoute.Sitemap = enPaths.map((p) => ({
    url: `${siteConfig.url}/en${p ? `/${p}` : ""}`,
    lastModified: now,
  }));

  return [...viUrls, ...enUrls];
}
