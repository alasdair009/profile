import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import {Card, globalContentMaxWidth, Heading, Link, Paragraph, sizes} from "@/entities";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {rem} from "polished";

export const metadata: Metadata = generateMetaData(
  "Blog",
  "Some thoughts",
  "blog"
);

export default function BlogPage() {
  const files = fs.readdirSync(path.join("_posts"));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join("_posts", filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);

    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  }).sort((a, b) => Date.parse(b.meta.date) - Date.parse(a.meta.date));
  return (
    <>
      <Heading>Blog</Heading>
      <Paragraph>A cocktail of thoughts and projects from my years of web development, trampoline coaching and general adventures.</Paragraph>
      <div style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: sizes.s8.rem,
        justifyContent: "space-between",
        margin: "0 auto",
        maxWidth: rem(globalContentMaxWidth),
        padding: sizes.s8.rem,
        width: "100%",
      }}>
        {blogs.map((blog) => (
            <Card key={blog.slug} href={`/blog/${blog.slug}`} title={blog.meta.title} date={new Date(blog.meta.date)} />
        ))}
      </div>
    </>
  );
}
