import { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/domains";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${siteOrigin}/sitemap.xml`,
  };
}
