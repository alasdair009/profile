import { HTMLAttributes } from "react";
import styles from "./Footer.module.scss";

type FooterProps = {} & HTMLAttributes<HTMLDivElement>;
export function Footer({ ...rest }: FooterProps) {
  return (
    <footer className={styles.root} data-testid={Footer.name} {...rest}>
      <svg
        className={styles.waves}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={styles.parallax}>
          <use className={styles.wave1} xlinkHref="#gentle-wave" x="48" y="0" />
          <use className={styles.wave2} xlinkHref="#gentle-wave" x="48" y="3" />
          <use className={styles.wave3} xlinkHref="#gentle-wave" x="48" y="5" />
          <use className={styles.wave4} xlinkHref="#gentle-wave" x="48" y="7" />
        </g>
      </svg>
    </footer>
  );
}
