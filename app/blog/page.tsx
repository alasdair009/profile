import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { BlogList, Heading, Paragraph } from "@/entities";
import { sanityClient } from "@/lib/sanity/client";
import { Suspense } from "react";
import { siteOrigin } from "@/lib/domains";
import styles from "./page.module.scss";

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
        className={styles.blogDescription}
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
