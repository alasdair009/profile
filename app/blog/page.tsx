import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import {
  Card,
  globalContentMaxWidth,
  Heading,
  Link,
  Paragraph,
  sizes,
} from "@/entities";
import { rem } from "polished";
import { SanityDocument } from "next-sanity";
import { sanityClient } from "@/lib/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { GET_ALL_POSTS, Post } from "@/lib/sanity/queries";

export const metadata: Metadata = generateMetaData(
  "Blog",
  "Some thoughts",
  "blog"
);

export default async function BlogPage() {
  const posts = await sanityClient.fetch<Post[]>(GET_ALL_POSTS);
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
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          gap: sizes.s32.rem,
          justifyContent: "space-between",
          margin: "0 auto",
          maxWidth: rem(globalContentMaxWidth),
          padding: sizes.s8.rem,
          width: "100%",
        }}
      >
        {posts.map((post) => (
          <Card
            key={post.title}
            href={`/blog/${post.slug.current}`}
            title={post.title}
            date={new Date(post.publishedAt)}
            image={imageUrlBuilder(sanityClient)
              .image(post.mainImage.asset)
              .url()}
          />
        ))}
      </div>
    </>
  );
}
