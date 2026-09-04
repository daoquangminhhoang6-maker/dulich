import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { restrictLocale } from "@/lib/restrict-locale";
import { buildMetadata } from "@/lib/page-metadata";
import type { Locale } from "@/lib/dictionary";

export function generateMetadata(): Metadata {
  return buildMetadata({
    locale: "vi",
    title: "Dịch vụ",
    description:
      "Tư vấn phát triển wellness resort, thiết kế khu nghỉ dưỡng wellness và tư vấn resort spa cao cấp tại Việt Nam — từ định vị dự án đến vận hành.",
    viPath: "/vi/dich-vu",
    enPath: "/en/services",
    image: "/images/villa-pool-view.jpg",
  });
}

export default function Page({ params }: { params: { locale: Locale } }) {
  restrictLocale(params.locale, "vi");
  return <ServicesPage locale="vi" />;
}
