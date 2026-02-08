import { HTMLAttributes } from "react";
import { Card, ErrorText, Paragraph } from "@/entities";
import imageUrlBuilder from "@sanity/image-url";
import { GET_ALL_POSTS, Post } from "@/lib/sanity/queries";
import { SanityClient } from "next-sanity";
import styles from "./BlogList.module.css";

type BlogListProps = {
  sanityClient: SanityClient;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Display a list of all the blog articles
 */
export async function BlogList({ sanityClient, ...rest }: BlogListProps) {
  try {
    const posts = await sanityClient.fetch<Post[]>(GET_ALL_POSTS);
    return (
      <div className={styles.root} data-testid={BlogList.displayName} {...rest}>
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
              imageAlt={`Image for the ${post.title} article`}
            />
          );
        })}
      </div>
    );
  } catch (e) {
    return (
      <ErrorText align="center">
        Sorry - I was unable to get articles at this time.
      </ErrorText>
    );
  }
}
BlogList.displayName = "BlogList";
