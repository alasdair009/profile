import {
  Article,
  Audio,
  BlockQuote,
  Code,
  CodeBlock,
  Figure,
  Heading,
  IFrame,
  Link,
  Paragraph,
} from "@/entities";
import { generateMetaData } from "@/lib/metadata";
import { sanityClient, urlFor } from "@/lib/sanity/client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { Post } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import styles from "./page.module.scss";

async function getPost(slug: string) {
  return sanityClient.fetch<Post>(
    `
    *[_type == "post" && slug.current == $slug][0]{title, description, body, slug, mainImage, publishedAt, categories, "categoriesTitle": categories->title}
  `,
    { slug }
  );
}

export async function generateMetadata(props: any) {
  const params = await props.params;
  try {
    const post = await getPost(params.slug);

    return generateMetaData(
      post.title,
      post.description,
      `blog/${post.slug.current}`,
      imageUrlBuilder(sanityClient).image(post.mainImage.asset).url(),
      "article",
      {
        publishedTime: new Date(post.publishedAt).toISOString(),
        authors: "Alasdair Macrae",
        tags: "web",
      }
    );
  } catch (e) {
    return generateMetaData(
      "Blog article not found",
      "We could not find the article",
      `blog/${params.slug}`,
      undefined,
      "website"
    );
  }
}

const ptComponents: Partial<PortableTextReactComponents> = {
  block: {
    blockquote: ({ children }) => {
      return <BlockQuote>{children}</BlockQuote>;
    },
    code: ({ children }) => {
      return <Code>{children}</Code>;
    },
    h1: ({ children }) => {
      return <Heading level="h1">{children}</Heading>;
    },
    h2: ({ children }) => {
      return <Heading level="h2">{children}</Heading>;
    },
    h3: ({ children }) => {
      return <Heading level="h3">{children}</Heading>;
    },
    h4: ({ children }) => {
      return <Heading level="h4">{children}</Heading>;
    },
    h5: ({ children }) => {
      return <Heading level="h5">{children}</Heading>;
    },
    normal: ({ children }) => {
      return <Paragraph>{children}</Paragraph>;
    },
  },
  types: {
    audio: ({ value }) => {
      return <Audio src={value.source} />;
    },
    codeBlock: ({ value }) => {
      return (
        <CodeBlock
          language={value.language}
          code={value.code}
          description={value.description}
        />
      );
    },
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Figure
          alt={value.alt || " "}
          src={urlFor(value)
            .width(1024)
            .height(576)
            .fit("max")
            .auto("format")
            .url()}
          caption={value.title}
        />
      );
    },
    youtube: ({ value }) => {
      return <IFrame src={value.url} />;
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel}>
          {children}
        </Link>
      );
    },
    code: ({ children }) => {
      return <Code>{children}</Code>;
    },
  },
};

export default async function ArticlePage(props: any) {
  const params = await props.params;
  try {
    const post = await getPost(params.slug);
    return (
      <>
        <nav className={styles.blogNav}>
          <Link href={"/blog"} className={styles.blogNavLink}>
            Back to blog
          </Link>
        </nav>
        <Article
          heading={`${post.title}`}
          date={new Date(post.publishedAt)}
          image={imageUrlBuilder(sanityClient)
            .image(post.mainImage.asset)
            .url()}
        >
          <PortableText value={post.body} components={ptComponents} />
        </Article>
      </>
    );
  } catch (e) {
    return notFound();
  }
}
