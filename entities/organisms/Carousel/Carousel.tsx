import { CSSProperties, HTMLAttributes } from "react";
import styles from "./Carousel.module.css";
import Image, { StaticImageData } from "next/image";

type CarouselProps = {
  /**
   * How the slides transition.
   */
  scrollBehaviour?: CSSProperties["scrollBehavior"];
  /**
   * Show the scroll buttons for the slides.
   */
  showScrollButtons?: boolean;
  /**
   * Show scroll markers.
   */
  showScrollMarkers?: boolean;
  /**
   * Images to display.
   */
  assets: { src: StaticImageData; alt: string; title: string }[];
} & HTMLAttributes<HTMLDivElement>;

/**
 * HTML and CSS only Carousel for showing images.
 */
export function Carousel({
  assets,
  className = "",
  scrollBehaviour = "smooth",
  showScrollButtons = true,
  showScrollMarkers = true,
  ...rest
}: CarouselProps) {
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={Carousel.displayName}
      {...rest}
    >
      <div
        className={styles.carousel}
        style={
          {
            "--scroll-behaviour": scrollBehaviour,
            "--scroll-button-content": showScrollButtons ? "''" : "unset",
            "--scroll-marker-display": showScrollMarkers ? "flex" : "none",
          } as CSSProperties
        }
      >
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
