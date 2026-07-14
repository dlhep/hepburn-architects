import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPage } from "@/components/LocationPage";
import { locations } from "@/lib/seo-data";

const location = locations.find((item) => item.slug === "moseley");

export const metadata: Metadata = location ? {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: `/locations/moseley` },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: `https://www.hepburnarchitects.net/locations/moseley`,
    type: "website"
  }
} : {};

export default function Page() {
  if (!location) notFound();
  return <LocationPage location={location}/>;
}
