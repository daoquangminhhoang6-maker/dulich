import Image from "next/image";
import { Phone, MapPin, Facebook } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import GmailIcon from "@/components/icons/GmailIcon";
import ZaloIcon from "@/components/icons/ZaloIcon";
import { getDictionary, type Locale } from "@/lib/dictionary";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.contact;

  const channels = [
    {
      icon: Phone,
      label: t.phoneLabel,
      value: siteConfig.contact.phone,
      href: siteConfig.contact.phoneHref,
      external: false,
    },
    {
      icon: Facebook,
      label: t.facebookLabel,
      value: "Vietnam Wellness Retreat",
      href: siteConfig.social.facebook,
      external: true,
    },
    {
      icon: GmailIcon,
      label: t.emailLabel,
      value: siteConfig.contact.email,
      href: siteConfig.contact.gmailComposeHref,
      external: true,
    },
    {
      icon: ZaloIcon,
      label: t.zaloLabel,
      value: siteConfig.contact.phone,
      href: siteConfig.contact.zaloHref,
      external: true,
    },
  ];

  return (
    <>
      <section className="relative flex h-[40vh] min-h-[320px] items-center overflow-hidden">
        <Image
          src="/images/halong-daybed-view.jpg"
          alt={locale === "vi" ? "Không gian thiền tĩnh lặng bên hồ lúc bình minh" : "A quiet meditation deck by the lake at sunrise"}
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/65" />
        <div className="container-custom relative z-10 text-cream">
          <h1 className="text-cream">{t.title}</h1>
          <p className="mt-4 max-w-xl text-sm text-cream/85 sm:text-base">{t.intro}</p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom grid max-w-4xl gap-6 sm:grid-cols-2">
          {channels.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-sm border border-gold/20 bg-white p-6 transition-colors hover:border-gold"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-forest p-2.5 text-cream">
                  <c.icon className="h-full w-full" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-ink/50">{c.label}</p>
                  <p className="mt-1 font-medium text-forest">{c.value}</p>
                </div>
              </a>
            </FadeIn>
          ))}

          <FadeIn delay={0.32} className="flex items-center gap-4 rounded-sm border border-gold/20 bg-white p-6 sm:col-span-2">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-forest text-cream">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest2 text-ink/50">{t.addressLabel}</p>
              <p className="mt-1 font-medium text-forest">{siteConfig.contact.address}</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
