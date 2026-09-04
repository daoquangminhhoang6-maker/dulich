import { notFound } from "next/navigation";
import type { Locale } from "@/lib/dictionary";

// Mỗi slug (vd: "gioi-thieu") chỉ hợp lệ với một locale cụ thể.
// Bản tiếng Anh tương ứng nằm ở slug khác (vd: "about").
export function restrictLocale(current: Locale, allowed: Locale) {
  if (current !== allowed) notFound();
}
