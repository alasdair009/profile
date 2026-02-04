import Image from "next/image";
import { ComponentProps, HTMLAttributes } from "react";
import styles from "./Figure.module.css";

type FigureProps = {
  caption?: string;
  imageProps: ComponentProps<typeof Image>;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Image with caption in semantic html.
 */
export function Figure({ imageProps, caption, ...rest }: FigureProps) {
  return (
    <figure className={styles.root} data-testid={Figure.name} {...rest}>
      <div className={styles.inner}>
        <Image className={styles.image} {...imageProps} />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
