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

export const metadata: Metadata = generateMetaData(
  "Blog",
  "Some thoughts",
  "blog"
);

const EVENTS_QUERY = `*[_type == "post"] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  author->,
  mainImage {
    ...,
    asset->
  },
  categories[]->,
  publishedAt,
  body
}`;

export default async function BlogPage() {
  const posts = await sanityClient.fetch<SanityDocument[]>(EVENTS_QUERY);
  return (
    <>
      <Heading>Blog</Heading>
      <Paragraph>
        A cocktail of thoughts and projects from my years of web development,
        trampoline coaching and general adventures.
      </Paragraph>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          gap: sizes.s8.rem,
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
