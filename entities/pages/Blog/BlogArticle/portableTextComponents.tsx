"use server";
import { PortableTextReactComponents } from "@portabletext/react";
import {
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
import { urlFor } from "@/lib/sanity/client";
import { CanIUse } from "@/entities/molecules/CanIUse/CanIUse";
import { breakpoints } from "@/styles/tokens";
import styles from "@/entities/molecules/Figure/Figure.module.css";

export const getPtComponents: () => Promise<
  Partial<PortableTextReactComponents>
> = async () => {
  const ptCompomnents: Partial<PortableTextReactComponents> = {
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
      canIUse: ({ value }) => {
        return <CanIUse feature={value.feature} />;
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
            imageProps={{
              src: urlFor(value)
                .width(1024)
                .height(576)
                .fit("max")
                .auto("format")
                .url(),
              alt: value.alt || " ",
              sizes: `(max-width: ${breakpoints.large}px) 100vw, 1184px`,
              placeholder: "blur",
              blurDataURL: urlFor(value).width(8).height(6).blur(10).url(),
              loading: "lazy",
              fill: true,
            }}
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
  return ptCompomnents;
};
