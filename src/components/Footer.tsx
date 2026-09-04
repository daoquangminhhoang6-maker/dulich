import Image from "next/image";
import Link from "next/link";
import { Phone, Facebook } from "lucide-react";
import GmailIcon from "@/components/icons/GmailIcon";
import ZaloIcon from "@/components/icons/ZaloIcon";
import type { Dictionary, Locale } from "@/lib/dictionary";
import { siteConfig } from "@/lib/site-config";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = (viSlug: string, enSlug: string) => `/${locale}/${locale === "vi" ? viSlug : enSlug}`;
  const year = new Date().getFullYear();

  const channels = [
    { icon: Phone, href: siteConfig.contact.phoneHref, label: "Phone", external: false },
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook", external: true },
    { icon: GmailIcon, href: siteConfig.contact.gmailComposeHref, label: "Gmail", external: true },
    { icon: ZaloIcon, href: siteConfig.contact.zaloHref, label: "Zalo", external: true },
  ];

  return (
    <footer className="bg-forest text-cream">
      <div className="container-custom grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image
              src="/images/logo-mark-circle.jpg"
              alt="Vietnam Wellness Retreat"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-heading text-base">Vietnam Wellness Retreat</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-cream/70">{dict.footer.description}</p>
        </div>

        <div>
          <h3 className="font-heading text-sm tracking-widest2 text-gold-light">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link href={t("gioi-thieu", "about")}>{dict.nav.about}</Link></li>
            <li><Link href={t("dich-vu", "services")}>{dict.nav.services}</Link></li>
            <li><Link href={`/${locale}/wellness-tourism`}>{dict.nav.wellnessTourism}</Link></li>
            <li><Link href={t("lien-he", "contact")}>{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm tracking-widest2 text-gold-light">
            {dict.footer.contactTitle}
          </h3>
          <div className="mt-4 flex gap-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                aria-label={c.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 p-2 transition-colors hover:border-gold"
              >
                <c.icon className="h-full w-full" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-cream/70">{siteConfig.contact.phone}</p>
          <p className="text-sm text-cream/70">{siteConfig.contact.email}</p>
        </div>

        <div>
          <h3 className="font-heading text-sm tracking-widest2 text-gold-light">
            {dict.footer.followTitle}
          </h3>
          <p className="mt-4 text-sm text-cream/60">{siteConfig.contact.address}</p>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {year} Vietnam Wellness Retreat. {dict.footer.rights}
      </div>
    </footer>
  );
}
