import { HTMLAttributes } from "react";
import styles from "./CodeBlock.module.scss";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/atom-dark";
import { Heading } from "@/entities";

type CodeBlockProps = {
  language: "scss" | "typescript" | "tsx";
  code: string;
  description: string;
} & HTMLAttributes<HTMLDivElement>;

SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);

/**
 * Block of code with syntax highlighting.
 */
export function CodeBlock({
  language,
  className,
  code,
  description,
  style,
  ...rest
}: CodeBlockProps) {
  return (
    <section
      className={`${styles.root} ${className}`}
      data-testid={CodeBlock.name}
      {...rest}
    >
      <div className={styles.codeWrapper}>
        <SyntaxHighlighter
          language={language}
          style={prism}
          customStyle={{ ...style, maxHeight: 512 }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      {description && (
        <Heading align="center" className={styles.heading} level="h6" as="h2">
          {description}
        </Heading>
      )}
    </section>
  );
}
