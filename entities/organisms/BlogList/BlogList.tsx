import { Root } from "./styles";
import { HTMLAttributes } from "react";
import { Card } from "@/entities";
import imageUrlBuilder from "@sanity/image-url";
import { GET_ALL_POSTS, Post } from "@/lib/sanity/queries";
import { SanityClient } from "next-sanity";

type BlogListProps = {
  sanityClient: SanityClient;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Display a list of all the blog articles
 */
export async function BlogList({ sanityClient, ...rest }: BlogListProps) {
  const posts = await sanityClient.fetch<Post[]>(GET_ALL_POSTS);
  return (
    <Root {...rest}>
      {posts.map((post) => {
        const postDate = new Date(post.publishedAt);
        return (
          <Card
            key={post.title}
            href={`/blog/${post.slug.current}`}
            title={post.title}
            date={postDate}
            image={imageUrlBuilder(sanityClient)
              .image(post.mainImage.asset)
              .url()}
          />
        );
      })}
    </Root>
  );
}
