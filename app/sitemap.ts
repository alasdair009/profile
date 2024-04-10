import { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/domains";
import {sanityClient} from "@/lib/sanity/client";
import {GET_ALL_POSTS, Post} from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await sanityClient.fetch<Post[]>(GET_ALL_POSTS);
  const postsMap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteOrigin}/blog/${post.slug.current}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6
  }));
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
    {
      url: `${siteOrigin}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...postsMap
  ];
}
