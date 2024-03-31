import { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/domains";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteOrigin}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteOrigin}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteOrigin}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
