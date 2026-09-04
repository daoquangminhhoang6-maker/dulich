import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import HtmlLangSync from "@/components/HtmlLangSync";
import { getDictionary, locales, type Locale } from "@/lib/dictionary";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  const title = `${siteConfig.name} | ${dict.home.hero.eyebrow}`;
  const description =
    params.locale === "vi"
      ? "Vietnam Wellness Retreat tư vấn & phát triển điểm đến Wellness cao cấp tại Việt Nam — từ định vị dự án, thiết kế trải nghiệm đến vận hành."
      : "Vietnam Wellness Retreat advises on and develops luxury Wellness destinations in Vietnam — from project positioning to experience design and operations.";

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        vi: "/vi",
        en: "/en",
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${params.locale}`,
      siteName: siteConfig.name,
      images: ["/images/poolside-sunset-clean.jpg"],
      locale: params.locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/poolside-sunset-clean.jpg"],
    },
  };
}

// Layout theo ngôn ngữ — KHÔNG chứa html/body (đã có ở app/layout.tsx là root
// layout thật). File này chỉ lo Header/Footer/JSON-LD riêng cho từng locale.
export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = getDictionary(params.locale);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-mark-circle.jpg`,
    image: `${siteConfig.url}/images/poolside-sunset-clean.jpg`,
    description: dict.about.intro,
    areaServed: "VN",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hà Nội",
      addressCountry: "VN",
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.title,
    },
    sameAs: [siteConfig.social.facebook],
  };

  return (
    <>
      <HtmlLangSync />
      <JsonLd data={organizationJsonLd} />
      <Header locale={params.locale} dict={dict} />
      <main>{children}</main>
      <Footer locale={params.locale} dict={dict} />
    </>
  );
}
