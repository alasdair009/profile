import { BlogList, Heading, Paragraph } from "@/entities";
import { HTMLAttributes, Suspense } from "react";
import styles from "./Blog.module.scss";
import { SanityClient } from "next-sanity";

type BlogProps = {
  sanityClient: SanityClient;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Latest blog articles on my adventures.
 */
export async function Blog({ sanityClient, ...rest }: BlogProps) {
  return (
    <div data-testid={Blog.displayName} {...rest}>
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
    </div>
  );
}
Blog.displayName = "Blog";
