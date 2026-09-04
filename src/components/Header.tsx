"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/dictionary";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: `/${locale}/gioi-thieu`, hrefEn: `/${locale}/about`, label: dict.nav.about, slugVi: "gioi-thieu", slugEn: "about" },
    { href: `/${locale}/dich-vu`, slugVi: "dich-vu", slugEn: "services", label: dict.nav.services },
    { href: `/${locale}/wellness-tourism`, slugVi: "wellness-tourism", slugEn: "wellness-tourism", label: dict.nav.wellnessTourism },
  ];

  const localizedHref = (item: (typeof navItems)[number]) =>
    `/${locale}/${locale === "vi" ? item.slugVi : item.slugEn}`;

  const otherLocale: Locale = locale === "vi" ? "en" : "vi";
  const switchHref = buildSwitchHref(pathname, locale, otherLocale);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-cream/95 backdrop-blur">
      <div className="container-custom flex h-20 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/images/logo-mark-circle.jpg"
            alt="Vietnam Wellness Retreat"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span className="font-heading text-lg tracking-wide text-forest">
            Vietnam Wellness Retreat
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={localizedHref(item)}
              className="text-sm tracking-wide text-forest/80 transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href={switchHref} className="text-xs tracking-widest2 text-forest/70 hover:text-gold">
            {otherLocale.toUpperCase()}
          </Link>
          <Link
            href={`/${locale}/${locale === "vi" ? "lien-he" : "contact"}`}
            className="btn-primary"
          >
            {dict.nav.cta}
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6 text-forest" /> : <Menu className="h-6 w-6 text-forest" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-cream lg:hidden">
          <nav className="container-custom flex flex-col gap-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={localizedHref(item)}
                className="text-base text-forest"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/${locale === "vi" ? "lien-he" : "contact"}`}
              className="btn-primary w-fit"
              onClick={() => setOpen(false)}
            >
              {dict.nav.cta}
            </Link>
            <Link href={switchHref} className="text-xs tracking-widest2 text-forest/70">
              {otherLocale === "en" ? "English" : "Tiếng Việt"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

// Đổi ngôn ngữ nhưng cố gắng giữ nguyên "loại trang" đang xem (vd: dich-vu <-> services)
function buildSwitchHref(pathname: string | null, from: Locale, to: Locale) {
  if (!pathname) return `/${to}`;
  const segments = pathname.split("/").filter(Boolean);
  segments[0] = to;

  const slugMap: Record<string, string> = {
    "gioi-thieu": "about",
    "about": "gioi-thieu",
    "dich-vu": "services",
    "services": "dich-vu",
    "lien-he": "contact",
    "contact": "lien-he",
  };

  if (segments[1] && slugMap[segments[1]]) {
    segments[1] = slugMap[segments[1]];
  }

  return "/" + segments.join("/");
}
