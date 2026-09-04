import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Compass,
  Sparkles,
  Briefcase,
  Salad,
  Flower2,
  GraduationCap,
  Users,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { getDictionary, type Locale } from "@/lib/dictionary";
import { siteConfig } from "@/lib/site-config";

const serviceIcons = [
  Building2,
  Compass,
  Flower2,
  Briefcase,
  Salad,
  Sparkles,
  Users,
  GraduationCap,
];

export default function ServicesPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const contactHref = `/${locale}/${locale === "vi" ? "lien-he" : "contact"}`;
  const wellnessTourismHref = `/${locale}/wellness-tourism`;

  const serviceJsonLd = dict.services.list.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.desc,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    areaServed: "VN",
  }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.services.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      {serviceJsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
      <JsonLd data={faqJsonLd} />

      <section className="relative flex h-[50vh] min-h-[380px] items-center overflow-hidden">
        <Image
          src="/images/villa-pool-view.jpg"
          alt={locale === "vi" ? "Tổng quan dịch vụ tư vấn phát triển wellness resort" : "Overview of Wellness resort advisory services"}
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/60" />
        <div className="container-custom relative z-10 max-w-2xl text-cream">
          <h1 className="text-cream">{dict.services.title}</h1>
          <p className="mt-4 text-sm text-cream/85 sm:text-base">{dict.services.intro}</p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.services.list.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <FadeIn key={s.title} delay={(i % 4) * 0.08} className="rounded-sm border border-gold/20 p-6">
                <Icon className="h-6 w-6 text-gold" />
                <h2 className="mt-4 text-lg">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.desc}</p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="section-padding bg-forest text-cream">
        <div className="container-custom">
          <FadeIn className="text-center">
            <h2 className="text-cream">{dict.services.processHeading}</h2>
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dict.services.process.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08} className="flex gap-4">
                <span className="font-heading text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-medium text-cream">{p.title}</p>
                  <p className="text-sm text-cream/60">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom max-w-3xl">
          <FadeIn className="text-center">
            <h2 className="text-3xl">{dict.services.faqHeading}</h2>
          </FadeIn>
          <div className="mt-10 space-y-6">
            {dict.services.faq.map((f) => (
              <FadeIn key={f.q} className="border-b border-gold/20 pb-6">
                <h3 className="text-lg">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.a}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-16 text-center">
        <FadeIn className="container-custom flex flex-col items-center gap-4">
          <Link href={contactHref} className="btn-primary">
            {dict.nav.cta}
          </Link>
          <Link href={wellnessTourismHref} className="text-sm text-forest/70 underline underline-offset-4">
            {dict.nav.wellnessTourism}
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
