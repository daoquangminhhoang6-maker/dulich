import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { restrictLocale } from "@/lib/restrict-locale";
import { buildMetadata } from "@/lib/page-metadata";
import type { Locale } from "@/lib/dictionary";

export function generateMetadata(): Metadata {
  return buildMetadata({
    locale: "en",
    title: "Services",
    description:
      "Luxury wellness resort consulting, wellness destination development and resort hospitality advisory across Vietnam — from positioning to operation.",
    viPath: "/vi/dich-vu",
    enPath: "/en/services",
    image: "/images/villa-pool-view.jpg",
  });
}

export default function Page({ params }: { params: { locale: Locale } }) {
  restrictLocale(params.locale, "en");
  return <ServicesPage locale="en" />;
}
