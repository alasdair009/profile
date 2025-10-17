import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { sanityClient } from "@/lib/sanity/client";
import { siteOrigin } from "@/lib/domains";
import { Blog } from "@/entities";

export const metadata: Metadata = generateMetaData(
  "Blog",
  "A cocktail of thoughts and projects from my years of web development, trampoline coaching and general adventures.",
  "blog",
  undefined,
  undefined,
  undefined,
  {
    types: {
      "application/rss+xml": `${siteOrigin}/blog/rss.xml`,
    },
  }
);

export const revalidate = 600; // revalidate at most every 10mins

export default async function BlogPage() {
  return <Blog sanityClient={sanityClient} />;
}
