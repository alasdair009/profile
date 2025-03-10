import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { BlogList, Heading, Paragraph, sizes } from "@/entities";
import { sanityClient } from "@/lib/sanity/client";
import { Suspense } from "react";
import { siteOrigin } from "@/lib/domains";

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
  return (
    <>
      <Heading>Blog</Heading>
      <Paragraph
        align="center"
        style={{ padding: `0 ${sizes.s8.rem}` }}
        textWrap="balance"
      >
        A cocktail of thoughts and projects from my years of web development,
        trampoline coaching and general adventures.
      </Paragraph>
      <Suspense fallback={<Paragraph align="center">Loading...</Paragraph>}>
        <BlogList sanityClient={sanityClient} />
      </Suspense>
    </>
  );
}
