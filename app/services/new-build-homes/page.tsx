import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/seo-data";

const service = services.find((item) => item.slug === "new-build-homes");

export const metadata: Metadata = service ? {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `/services/new-build-homes` },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `https://www.hepburnarchitects.net/services/new-build-homes`,
    type: "article",
    images: [{ url: service.image, alt: service.imageAlt }]
  }
} : {};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service}/>;
}
