import type { Metadata } from "next";
import Image from "next/image";
import {
  Leaf,
  Flower2,
  HeartPulse,
  Salad,
  Mountain,
  Brain,
  Gem,
  Users,
  CalendarClock,
  TrendingUp,
  Sprout,
  Waves,
  TreePine,
  Droplets,
  Landmark,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { getDictionary, type Locale } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site-config";

const pillarIcons = [Leaf, Flower2, HeartPulse, Salad, Mountain, Brain];
const valueIcons = [Gem, Users, CalendarClock, TrendingUp, Sprout];
const advantageIcons = [Waves, TreePine, Droplets, Landmark, Landmark];
// Ảnh minh họa riêng cho từng mục trong "Wellness Retreat là gì?"
const definitionImages = [
  "lakeside-meditation.jpg",
  "massage-therapy-closeup.jpg",
  "healthy-bowl-cuisine.jpg",
  "meditation-balcony.jpg",
  "spa-stones-towels.jpg",
  "bedroom-interior.jpg",
];

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  return buildMetadata({
    locale: params.locale,
    title: params.locale === "vi" ? "Wellness Tourism" : "Wellness Tourism",
    description:
      params.locale === "vi"
        ? "Wellness Tourism Việt Nam: xu hướng du lịch chăm sóc sức khỏe trị giá hàng nghìn tỷ USD và tiềm năng trở thành điểm đến wellness hàng đầu châu Á."
        : "Wellness tourism advisory Vietnam: a multi-trillion dollar global travel trend and Vietnam's potential to become a leading wellness destination in Asia.",
    viPath: "/vi/wellness-tourism",
    enPath: "/en/wellness-tourism",
    image: "/images/deck-meditation-lake.jpg",
  });
}

export default function WellnessTourismPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = getDictionary(params.locale);
  const t = dict.wellnessTourismPage;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.intro,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: `${siteConfig.url}/images/logo-mark-circle.jpg`,
    },
    image: `${siteConfig.url}/images/deck-meditation-lake.jpg`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <section className="relative flex h-[50vh] min-h-[380px] items-center overflow-hidden">
        <Image
          src="/images/deck-meditation-lake.jpg"
          alt={params.locale === "vi" ? "Tập yoga giữa khung cảnh núi đá vôi Việt Nam" : "Practicing yoga amid Vietnam's karst mountain scenery"}
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="container-custom relative z-10 max-w-2xl text-cream">
          <h1 className="text-cream">{t.title}</h1>
          <p className="mt-4 text-sm text-cream/85 sm:text-base">{t.intro}</p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl">{t.pillarsHeading}</h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {t.pillars.map((label: string, i: number) => {
              const Icon = pillarIcons[i % pillarIcons.length];
              return (
                <FadeIn key={label} delay={i * 0.05} className="flex flex-col items-center gap-3">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40">
                    <Icon className="h-6 w-6 text-forest" />
                  </span>
                  <p className="text-xs leading-snug text-ink/75">{label}</p>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.2} className="mx-auto mt-14 max-w-xl overflow-hidden rounded-full shadow-lg">
            <Image
              src="/images/wellness-wheel-graphic.jpg"
              alt={params.locale === "vi" ? "Sơ đồ minh họa các trụ cột của Wellness Tourism" : "Illustration of the pillars of Wellness Tourism"}
              width={700}
              height={700}
              quality={92}
              className="h-auto w-full object-cover"
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-forest text-cream">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <h2 className="text-cream">{t.valueHeading}</h2>
              <ul className="mt-6 space-y-4">
                {t.value.map((label: string, i: number) => {
                  const Icon = valueIcons[i % valueIcons.length];
                  return (
                    <li key={label} className="flex items-center gap-3 text-sm text-cream/85">
                      <Icon className="h-5 w-5 flex-shrink-0 text-gold" />
                      {label}
                    </li>
                  );
                })}
              </ul>
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={0.1}>
              <h2 className="text-cream">{t.advantageHeading}</h2>
              <ul className="mt-6 space-y-4">
                {t.advantage.map((label: string, i: number) => {
                  const Icon = advantageIcons[i % advantageIcons.length];
                  return (
                    <li key={label} className="flex items-center gap-3 text-sm text-cream/85">
                      <Icon className="h-5 w-5 flex-shrink-0 text-gold" />
                      {label}
                    </li>
                  );
                })}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-dark">
        <div className="container-custom max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl">{t.definitionHeading}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">{t.definition}</p>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
            {t.definitionItems.map((item: { title: string; desc: string }, i: number) => (
              <FadeIn key={item.title} delay={i * 0.05} className="overflow-hidden rounded-sm bg-cream shadow-sm">
                <div className="relative h-28 w-full">
                  <Image
                    src={`/images/${definitionImages[i % definitionImages.length]}`}
                    alt={item.title}
                    fill
                    quality={90}
                    sizes="(min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium text-forest">{item.title}</p>
                  <p className="mt-1 text-xs text-ink/60">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container-custom max-w-2xl text-center">
          <FadeIn>
            <p className="text-sm leading-relaxed text-ink/75 sm:text-base">{t.closing}</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
