import { siteOrigin } from "@/lib/domains";
import { myName, siteName } from "@/lib/metadata";
import { sanityClient } from "@/lib/sanity/client";
import { GET_ALL_POSTS, Post } from "@/lib/sanity/queries";

export async function GET() {
  const posts = await sanityClient.fetch<Post[]>(GET_ALL_POSTS);
  const now = new Date();

  console.log({ posts });
  let itemString = "";

  posts.map((post) => {
    itemString += `<item>
            <title><![CDATA[${post.title}]]></title>
            <description><![CDATA[${post.description}]]></description>
            <link>${siteOrigin}/blog/${post.slug.current}</link>
            <guid isPermaLink="false">${post._id}</guid>
            <dc:creator><![CDATA[${myName}]]></dc:creator>
            <pubDate>${post.publishedAt}</pubDate>
        </item>`;
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title><![CDATA[${siteName} | Blog]]></title>
        <description><![CDATA[A list of blog articles from my portfolio site]]></description>
        <link>${siteOrigin}</link>
        <generator>${myName}</generator>
        <lastBuildDate>${now}</lastBuildDate>
        <atom:link href="${siteOrigin}/blog/rss.xml" rel="self" type="application/rss+xml"/>
        <copyright><![CDATA[${now.getFullYear()} ${myName}]]></copyright>
        <language><![CDATA[en]]></language>
        ${itemString}
    </channel>
    </rss>`,
    {
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    }
  );
}
