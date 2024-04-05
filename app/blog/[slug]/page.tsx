import { Article, IFrame, Link } from "@/entities";
import { generateMetaData } from "@/lib/metadata";
import { sanityClient, urlFor } from "@/lib/sanity/client";
import { SanityDocument } from "next-sanity";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

async function getPost(slug: string) {
  return sanityClient.fetch<SanityDocument>(
    `
    *[_type == "post" && slug.current == $slug][0]{title, body}
  `,
    { slug }
  );
}

export async function generateMetadata({ params }: any) {
  const post = await getPost(params.slug);

  return generateMetaData(post.title, "", `blog/${post.slug}`);
}

const ptComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value)
            .width(320)
            .height(240)
            .fit("max")
            .auto("format")
            .url()}
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
  },
};

export default async function ArticlePage({ params }: any) {
  const post = await getPost(params.slug);
  return (
    <Article heading={`${post.title}`}>
      <PortableText value={post.body} components={ptComponents} />
    </Article>
  );
}
