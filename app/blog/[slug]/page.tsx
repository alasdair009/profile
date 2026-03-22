import { BlogArticle } from "@/entities";
import { generateMetaData } from "@/lib/metadata";
import { sanityClient } from "@/lib/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Post } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import { siteOrigin } from "@/lib/domains";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string) {
  return sanityClient.fetch<Post>(
    `
    *[_type == "post" && slug.current == $slug][0]{title, description, body, slug, mainImage, publishedAt, categories, _updatedAt, "categoriesTitle": categories->title}
  `,
    { slug }
  );
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  try {
    const post = await getPost(slug);

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return generateMetaData(
      "Blog article not found",
      "We could not find the article",
      `blog/${slug}`,
      undefined,
      "website"
    );
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  let post: Post;
  try {
    post = await getPost(slug);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteOrigin}/blog/${slug}#blogposting`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteOrigin}/blog/${slug}`,
    },
    headline: post.title,
    description: post.description,
    image: [imageUrlBuilder(sanityClient).image(post.mainImage.asset).url()],
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    author: {
      "@type": "Person",
      name: "Alasdair Macrae",
      url: siteOrigin,
    },
    publisher: {
      "@type": "Person",
      name: "Alasdair Macrae",
      url: siteOrigin,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BlogArticle post={post} sanityClient={sanityClient} />
    </>
  );
}
