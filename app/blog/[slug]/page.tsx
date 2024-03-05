import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import { Heading, Link, Paragraph } from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("_posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("_posts", `${slug}.mdx`),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({ params }: any) {
  const blog = getPost(params);

  return generateMetaData(
    blog.frontMatter.title,
    blog.frontMatter.description,
    `blog/${blog.slug}`
  );
}

export default function ArticlePage({ params }: any) {
  const props = getPost(params);
  return (
    <article>
      <Heading>{props.frontMatter.title}</Heading>
      <MDXRemote
        source={props.content}
        components={{ a: Link, p: Paragraph, h1: Heading }}
      />
    </article>
  );
}
