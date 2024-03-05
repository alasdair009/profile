import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { Heading, Link, Paragraph } from "@/entities";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
  });
  return (
    <>
      <Heading>Blog</Heading>
      <div>
        {blogs.map((blog) => (
          <article key={blog.slug}>
            <Heading level="h3" as="h2">
              {blog.meta.title}
            </Heading>
            <Paragraph>
              {blog.meta.description}{" "}
              <Link href={`/blog/${blog.slug}`}>Read more...</Link>
            </Paragraph>
          </article>
        ))}
        ;
      </div>
    </>
  );
}
