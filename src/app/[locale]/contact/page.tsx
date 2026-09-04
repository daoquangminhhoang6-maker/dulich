import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { restrictLocale } from "@/lib/restrict-locale";
import { buildMetadata } from "@/lib/page-metadata";
import type { Locale } from "@/lib/dictionary";

export function generateMetadata(): Metadata {
  return buildMetadata({
    locale: "en",
    title: "Contact",
    description:
      "Contact Vietnam Wellness Retreat by phone, email, Zalo or Facebook to discuss your Wellness Destination project.",
    viPath: "/vi/lien-he",
    enPath: "/en/contact",
  });
}

export default function Page({ params }: { params: { locale: Locale } }) {
  restrictLocale(params.locale, "en");
  return <ContactPage locale="en" />;
}
