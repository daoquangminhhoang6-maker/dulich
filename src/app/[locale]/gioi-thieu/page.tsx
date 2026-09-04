import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { restrictLocale } from "@/lib/restrict-locale";
import { buildMetadata } from "@/lib/page-metadata";
import type { Locale } from "@/lib/dictionary";

export function generateMetadata(): Metadata {
  return buildMetadata({
    locale: "vi",
    title: "Về chúng tôi",
    description:
      "Vietnam Wellness Retreat — đơn vị tư vấn phát triển wellness resort, đồng hành cùng chủ đầu tư kiến tạo điểm đến chăm sóc sức khỏe cao cấp tại Việt Nam.",
    viPath: "/vi/gioi-thieu",
    enPath: "/en/about",
    image: "/images/resort-aerial-pool.jpg",
  });
}

export default function Page({ params }: { params: { locale: Locale } }) {
  restrictLocale(params.locale, "vi");
  return <AboutPage locale="vi" />;
}
