"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Root layout (app/layout.tsx) không biết locale hiện tại vì nằm phía trên
// route [locale] — component nhỏ này tự cập nhật thuộc tính lang trên <html>
// theo đúng phân đoạn /vi hoặc /en trong URL.
export default function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname?.split("/")[1] === "en" ? "en" : "vi";
    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
}
