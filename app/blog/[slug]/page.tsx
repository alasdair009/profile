import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import {BlockQuote, Heading, IFrame, Link, Paragraph, Spacer, UnorderedList} from "@/entities";
import Image from "next/image";
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
        components={{
          a: (props) => <Link href={`${props.href}`} {...props}>{props.children}</Link>,
          blockquote: BlockQuote,
          p: (props) => <Paragraph {...props}>{props.children}</Paragraph>,
          br: Spacer,
          ul: (props) => <UnorderedList {...props}>{props.children}</UnorderedList>,
          h1: (props) => <Heading {...props}>{props.children}</Heading>,
          h2: (props) => <Heading level="h2" {...props}>{props.children}</Heading>,
          h3: (props) => <Heading level="h3" {...props}>{props.children}</Heading>,
          h4: (props) => <Heading level="h4" {...props}>{props.children}</Heading>,
          h5: (props) => <Heading level="h5" {...props}>{props.children}</Heading>,
          h6: (props) => <Heading level="h6" {...props}>{props.children}</Heading>,
      }}
      />
    </article>
  );
}
