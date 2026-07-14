import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/seo-data";

const service = services.find((item) => item.slug === "loft-conversions");

export const metadata: Metadata = service ? {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `/services/loft-conversions` },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `https://www.hepburnarchitects.net/services/loft-conversions`,
    type: "article",
    images: [{ url: service.image, alt: service.imageAlt }]
  }
} : {};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service}/>;
}
