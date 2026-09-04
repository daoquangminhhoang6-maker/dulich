import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { restrictLocale } from "@/lib/restrict-locale";
import { buildMetadata } from "@/lib/page-metadata";
import type { Locale } from "@/lib/dictionary";

export function generateMetadata(): Metadata {
  return buildMetadata({
    locale: "vi",
    title: "Liên hệ",
    description:
      "Liên hệ Vietnam Wellness Retreat qua điện thoại, email, Zalo hoặc Facebook để trao đổi về dự án Wellness Destination của bạn.",
    viPath: "/vi/lien-he",
    enPath: "/en/contact",
  });
}

export default function Page({ params }: { params: { locale: Locale } }) {
  restrictLocale(params.locale, "vi");
  return <ContactPage locale="vi" />;
}
