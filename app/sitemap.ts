import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hepburnarchitects.net";
  const routes = [
    "",
    "/estimate",
    "/services/house-extensions",
    "/services/loft-conversions",
    "/services/new-build-homes",
    "/services/hmo-conversions",
    "/services/planning-applications",
    "/services/building-regulations",
    "/locations/birmingham",
    "/locations/solihull",
    "/locations/middlesbrough",
    "/locations/teesside"
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.9 : 0.8
  }));
}
