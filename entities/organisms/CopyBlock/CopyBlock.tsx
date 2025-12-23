import { HTMLAttributes, ReactNode } from "react";
import styles from "./CopyBlock.module.css";

type CopyBlockProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

/**
 * Renders text content inside a container.
 */
export function CopyBlock({ children, ...rest }: CopyBlockProps) {
  return (
    <section className={styles.root} data-testid={CopyBlock.name} {...rest}>
      {children}
    </section>
  );
}
