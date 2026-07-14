import type { MetadataRoute } from "next";
import { services, locations, guides } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hepburnarchitects.net";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/estimate`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),
    ...locations.map((location) => ({
      url: `${base}/locations/${location.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75
    })),
    ...guides.map((guide) => ({
      url: `${base}/guides/${guide.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
