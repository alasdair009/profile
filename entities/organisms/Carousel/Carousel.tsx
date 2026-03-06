import { CSSProperties, HTMLAttributes, useId } from "react";
import styles from "./Carousel.module.css";
import Image, { StaticImageData } from "next/image";
import { borders } from "@/styles/tokens";

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
  const styleId = useId();
  const experimentalCss = `
.${styles.carousel} {
  anchor-name: --carousel;
  scroll-marker-group: after;
}

/* Buttons */
.${styles.carousel}::scroll-button(*) {
  aspect-ratio: 1;
  background: var(--color-green-grass);
  border: 0;
  font-size: 2rem;
  opacity: 0.7;
  position: absolute;
  position-anchor: --carousel;
  top: 50%;
  transform: translateY(-100%);
  cursor: pointer;
  width: var(--size-s32);
}

.${styles.carousel}::scroll-button(*):hover,
.${styles.carousel}::scroll-button(*):focus {
  filter: brightness(1.3);
}

.${styles.carousel}::scroll-button(*):disabled {
  cursor: not-allowed;
}

.${styles.carousel}::scroll-button(left) {
  clip-path: var(--clip-path-arrow-left);
  content: var(--scroll-button-content);
  left: anchor(--carousel left);
}

.${styles.carousel}::scroll-button(right) {
  clip-path: var(--clip-path-arrow-right);
  content: var(--scroll-button-content);
  right: anchor(--carousel right);
}

/* Marker group */
.${styles.carousel}::scroll-marker-group {
  display: var(--scroll-marker-display);
  gap: var(--size-s24);
  justify-content: center;
  justify-self: anchor-center;
  position: absolute;
  position-anchor: --carousel;
  top: calc(anchor(--carousel bottom) + var(--size-s8));
}

/* Markers on slides */
.${styles.slide}::scroll-marker {
  content: attr(data-title);
  width: var(--size-s16);
  height: var(--size-s16);
  background-color: transparent;
  border: ${borders.mediumGreen};
  border-radius: var(--radii-round);
  overflow: hidden;
  text-indent: 16px;
}

.${styles.slide}::scroll-marker:target-current {
  background-color: var(--color-grey-light);
  transition: all calc(var(--animation-rhythm) * 0.7) var(--curve-linear);
}
  `.trim();
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={Carousel.displayName}
      {...rest}
    >
      <style id={styleId}>{experimentalCss}</style>
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
              key={asset.title}
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
