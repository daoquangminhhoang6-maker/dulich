import Image from "next/image";
import { Eye, Target } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { getDictionary, type Locale } from "@/lib/dictionary";
import { siteConfig } from "@/lib/site-config";

export default function AboutPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.title,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <JsonLd data={personJsonLd} />

      <section className="relative flex h-[50vh] min-h-[380px] items-center overflow-hidden">
        <Image
          src="/images/resort-aerial-pool.jpg"
          alt={locale === "vi" ? "Không gian nghỉ dưỡng wellness hòa mình vào thiên nhiên Việt Nam" : "A wellness retreat space immersed in Vietnam's natural landscape"}
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/60" />
        <div className="container-custom relative z-10 text-cream">
          <h1 className="text-cream">{dict.about.title}</h1>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom max-w-3xl">
          <FadeIn>
            <p className="text-base leading-relaxed text-ink/80 sm:text-lg">{dict.about.intro}</p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream-dark pb-20">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          <FadeIn className="rounded-sm bg-cream p-8">
            <Eye className="h-6 w-6 text-gold" />
            <h2 className="mt-4 text-2xl">{dict.about.visionHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">{dict.about.vision}</p>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-sm bg-cream p-8">
            <Target className="h-6 w-6 text-gold" />
            <h2 className="mt-4 text-2xl">{dict.about.missionHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">{dict.about.mission}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-forest text-cream">
        <div className="container-custom max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-cream">{dict.about.philosophyHeading}</h2>
            <p className="mt-4 font-script text-2xl text-gold-light">
              Vision defines the destination. Strategy creates the legacy.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-cream/80">
              {dict.home.philosophy.body}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom max-w-2xl text-center">
          <FadeIn>
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 font-heading text-2xl text-forest">
              NTT
            </span>
            <h2 className="mt-8 text-2xl">{dict.about.founderHeading}</h2>
            <p className="mt-4 font-heading text-lg text-forest">{siteConfig.founder.name}</p>
            <p className="text-sm tracking-wide text-ink/60">{siteConfig.founder.title}</p>
            <p className="mt-6 text-sm leading-relaxed text-ink/75">{dict.about.founderIntro}</p>
            <p className="mt-6 font-script text-xl text-forest">&ldquo;{siteConfig.founder.quote}&rdquo;</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-cream-dark">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl">{dict.about.servedHeading}</h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {dict.about.served.map((label, i) => (
              <FadeIn
                key={label}
                delay={i * 0.05}
                className="rounded-sm border border-gold/20 px-4 py-8 text-sm text-forest"
              >
                {label}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
