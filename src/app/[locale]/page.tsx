import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Flower2,
  HeartPulse,
  Salad,
  Mountain,
  Brain,
  Compass,
  Sparkles,
  Layers,
  Briefcase,
  Building2,
  GraduationCap,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { getDictionary, type Locale } from "@/lib/dictionary";
import { siteConfig } from "@/lib/site-config";

const advisoryIcons = [Compass, Sparkles, Layers, Briefcase, Building2, GraduationCap];
const tourismIcons = [Leaf, Flower2, HeartPulse, Salad, Mountain, Brain];

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const { locale } = params;
  const contactHref = `/${locale}/${locale === "vi" ? "lien-he" : "contact"}`;
  const wellnessTourismHref = `/${locale}/wellness-tourism`;

  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex h-[92vh] min-h-[560px] items-center justify-center overflow-hidden">
        <Image
          src="/images/poolside-sunset-clean.jpg"
          alt={locale === "vi" ? "Toàn cảnh núi đá vôi và hồ nước tại một điểm đến Wellness ở Việt Nam" : "Panoramic view of limestone mountains and a lake at a Wellness destination in Vietnam"}
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/40 to-forest/70" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-cream">
          <p className="text-xs uppercase tracking-widest2 text-gold-light">
            {dict.home.hero.eyebrow}
          </p>
          <h1 className="mt-6 font-heading text-4xl leading-tight text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 font-script text-2xl text-gold-light sm:text-3xl">
            {siteConfig.tagline}
          </p>
          <Link href={contactHref} className="btn-primary mt-10 bg-gold text-forest hover:bg-gold-light">
            {dict.home.hero.cta}
          </Link>
        </div>
      </section>

      {/* 2. Story */}
      <section className="section-padding bg-cream">
        <div className="container-custom max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl">{dict.home.story.heading}</h2>
            <p className="mt-6 text-base leading-relaxed text-ink/80 sm:text-lg">
              {dict.home.story.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. Three pillars */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <FadeIn className="text-center">
            <h2 className="text-3xl sm:text-4xl">{dict.home.pillars.heading}</h2>
          </FadeIn>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {dict.home.pillars.items.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <Link
                  href={`/${locale}/${locale === "vi" ? "dich-vu" : "services"}`}
                  className="group block overflow-hidden rounded-sm bg-cream shadow-sm"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={`/images/${item.image}`}
                      alt={item.title}
                      fill
                      quality={90}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.desc}</p>
                    <span className="mt-4 inline-block text-sm tracking-wide text-gold">
                      {dict.home.pillars.exploreLabel} →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Philosophy */}
      <section className="section-padding bg-forest text-cream">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 className="text-cream">{dict.home.philosophy.heading}</h2>
            <p className="mt-4 font-script text-2xl text-gold-light">
              {dict.home.philosophy.quoteEn}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-cream/80 sm:text-base">
              {dict.home.philosophy.body}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h3 className="text-cream">{dict.home.philosophy.pillarsHeading}</h3>
            <ul className="mt-6 space-y-4">
              {dict.home.philosophy.pillars.map((p, i) => {
                const Icon = advisoryIcons[i % advisoryIcons.length];
                return (
                  <li key={p.title} className="flex items-start gap-4">
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    <div>
                      <p className="font-medium text-cream">{p.title}</p>
                      <p className="text-sm text-cream/60">{p.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* 5. Wellness Tourism */}
      <section className="section-padding bg-cream">
        <div className="container-custom max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl">{dict.home.wellnessTourism.heading}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
              {dict.home.wellnessTourism.body}
            </p>
          </FadeIn>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {dict.home.wellnessTourism.pillars.map((label, i) => {
              const Icon = tourismIcons[i % tourismIcons.length];
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
          <FadeIn delay={0.2}>
            <Link href={wellnessTourismHref} className="btn-outline mt-12">
              {dict.home.wellnessTourism.readMore}
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 6. Founder */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom max-w-2xl text-center">
          <FadeIn>
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 font-heading text-2xl text-forest">
              NTT
            </span>
            <p className="mt-8 font-script text-2xl text-forest sm:text-3xl">
              &ldquo;{dict.home.founder.quote}&rdquo;
            </p>
            <p className="mt-6 font-heading text-lg text-forest">{siteConfig.founder.name}</p>
            <p className="text-sm tracking-wide text-ink/60">{siteConfig.founder.title}</p>
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA band */}
      <section className="relative flex h-[60vh] min-h-[420px] items-center justify-center overflow-hidden">
        <Image
          src="/images/resort-pool-loungers.jpg"
          alt={locale === "vi" ? "Hoàng hôn nhìn từ hồ bơi vô cực hướng ra biển và núi" : "Sunset view from an infinity pool overlooking the sea and mountains"}
          fill
          quality={92}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center text-cream">
          <FadeIn>
            <h2 className="text-cream">{dict.home.ctaBand.heading}</h2>
            <p className="mt-4 text-sm text-cream/80 sm:text-base">{dict.home.ctaBand.body}</p>
            <Link href={contactHref} className="btn-primary mt-8 bg-gold text-forest hover:bg-gold-light">
              {dict.home.ctaBand.cta}
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 8. Audience */}
      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl">{dict.home.audience.heading}</h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {dict.home.audience.items.map((label, i) => (
              <FadeIn
                key={label}
                delay={i * 0.05}
                className="flex flex-col items-center justify-center gap-3 rounded-sm border border-gold/20 px-4 py-8"
              >
                <span className="text-sm text-forest">{label}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
