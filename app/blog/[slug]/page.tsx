import {
  Article,
  BlockQuote,
  Code,
  colors,
  fontSizes,
  globalTextMaxWidth,
  Heading,
  IFrame,
  Link,
  Paragraph,
  sizes,
} from "@/entities";
import { generateMetaData, myName } from "@/lib/metadata";
import { sanityClient, urlFor } from "@/lib/sanity/client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { rem } from "polished";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { Post } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";

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
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure style={{ margin: `${sizes.s16.rem} auto` }}>
          <div
            style={{
              aspectRatio: "16 / 9",
              boxShadow: `0 0 ${sizes.s4.rem} ${sizes.s2.rem} ${colors.greenGrass}`,
              margin: `0 auto`,
              position: "relative",
              width: "100%",
            }}
          >
            <Image
              alt={value.alt || " "}
              loading="lazy"
              src={urlFor(value)
                .width(1024)
                .height(576)
                .fit("max")
                .auto("format")
                .url()}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {value.title && (
            <figcaption
              style={{
                display: "block",
                fontSize: fontSizes.small.rem,
                fontStyle: "italic",
                margin: `${sizes.s8.rem} auto`,
                textAlign: "center",
              }}
            >
              {value.title}
            </figcaption>
          )}
        </figure>
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
    code: ({ children, text }) => {
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
        <nav
          style={{
            margin: `${sizes.s16.rem} auto ${sizes.s32.rem}`,
            maxWidth: rem(globalTextMaxWidth),
          }}
        >
          <Link href={"/blog"} style={{ marginLeft: sizes.s8.rem }}>
            <span
              style={{
                aspectRatio: 1,
                background: colors.whiteGhost,
                clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
                display: "inline-blocks",
                marginRight: sizes.s8.rem,
                width: sizes.s8.rem,
              }}
            ></span>
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
