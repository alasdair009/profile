import { HTMLAttributes } from "react";
import styles from "./Carousel.module.css";
import Image, { StaticImageData } from "next/image";

type CarouselProps = {
  /**
   * Images to display.
   */
  assets: { src: StaticImageData; alt: string; title: string }[];
} & HTMLAttributes<HTMLDivElement>;

/**
 * HTML and CSS only Carousel for showing images.
 */
export function Carousel({ assets, className = "", ...rest }: CarouselProps) {
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={Carousel.displayName}
      {...rest}
    >
      <div className={styles.carousel}>
        {assets.map((asset) => {
          return (
            <figure
              className={styles.slide}
              data-testid={`${Carousel.displayName}Slide`}
            >
              <Image className={styles.image} src={asset.src} alt={asset.alt} />
              <figcaption className={styles.caption}>{asset.title}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
Carousel.displayName = "Carousel";
