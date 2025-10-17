import { HTMLAttributes } from "react";
import styles from "./BlogArticle.module.scss";
import { SanityClient } from "next-sanity";
import { Article, Link } from "@/entities";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { Post } from "@/lib/sanity/queries";
import { getPtComponents } from "@/entities/pages/Blog/BlogArticle/portableTextComponents";

type BlogArticleProps = {
  post: Post;
  sanityClient: SanityClient;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Latest blog articles on my adventures.
 */
export async function BlogArticle({
  post,
  sanityClient,
  ...rest
}: BlogArticleProps) {
  const ptComponents = await getPtComponents();
  return (
    <div data-testid={BlogArticle.displayName} {...rest}>
      <nav className={styles.blogNav}>
        <Link href={"/blog"} className={styles.blogNavLink}>
          Back to blog
        </Link>
      </nav>
      <Article
        heading={`${post.title}`}
        date={new Date(post.publishedAt)}
        image={imageUrlBuilder(sanityClient).image(post.mainImage.asset).url()}
      >
        <PortableText value={post.body} components={ptComponents} />
      </Article>
    </div>
  );
}
BlogArticle.displayName = "BlogArticle";
