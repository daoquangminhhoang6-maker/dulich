import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { restrictLocale } from "@/lib/restrict-locale";
import { buildMetadata } from "@/lib/page-metadata";
import type { Locale } from "@/lib/dictionary";

export function generateMetadata(): Metadata {
  return buildMetadata({
    locale: "en",
    title: "About Us",
    description:
      "Vietnam Wellness Retreat is a Wellness destination development advisory, partnering with investors to build luxury wellness resorts across Vietnam.",
    viPath: "/vi/gioi-thieu",
    enPath: "/en/about",
    image: "/images/resort-aerial-pool.jpg",
  });
}

export default function Page({ params }: { params: { locale: Locale } }) {
  restrictLocale(params.locale, "en");
  return <AboutPage locale="en" />;
}
