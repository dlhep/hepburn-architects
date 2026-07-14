import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://www.hepburnarchitects.net/sitemap.xml",
    host: "https://www.hepburnarchitects.net"
  };
}
