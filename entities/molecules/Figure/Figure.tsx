import Image from "next/image";
import { HTMLAttributes } from "react";
import styles from "./Figure.module.css";

type FigureProps = {
  alt: string;
  src: string;
  caption?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Image with caption in semantic html.
 */
export function Figure({ alt, src, caption, ...rest }: FigureProps) {
  return (
    <figure className={styles.root} data-testid={Figure.name} {...rest}>
      <div className={styles.inner}>
        <Image
          alt={alt}
          loading="lazy"
          src={src}
          fill
          className={styles.image}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
