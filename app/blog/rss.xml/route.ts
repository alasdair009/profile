import RSS from "rss";
import { siteOrigin } from "@/lib/domains";
import { myName, siteName } from "@/lib/metadata";
import { sanityClient } from "@/lib/sanity/client";
import { GET_ALL_POSTS, Post } from "@/lib/sanity/queries";

const feed = new RSS({
  title: `${siteName} | Blog`,
  description: "A list of blog articles from my portfolio site",
  site_url: siteOrigin,
  feed_url: `${siteOrigin}/blog/rss.xml`,
  copyright: `${new Date().getFullYear()} ${myName}`,
  language: "en",
  pubDate: new Date(),
});

export async function GET() {
  const posts = await sanityClient.fetch<Post[]>(GET_ALL_POSTS);

  posts.map((post) => {
    feed.item({
      title: post.title,
      guid: `${siteOrigin}/blog/${post.slug.current}`,
      url: `${siteOrigin}/blog/${post.slug.current}`,
      date: post.publishedAt,
      description: post.description,
      author: myName,
      categories: post.categories || [],
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
