import Image from "next/image";
import { ContentPlateProps } from "./ContentPlate.types";
import { IFrame } from "@/entities";
import styles from "./ContentPlate.module.scss";
import { CSSProperties } from "react";

export function ContentPlate({
  orientation = "left",
  backgroundCss = "none",
  backgroundImage,
  backgroundImageAlt,
  embedUrl,
  foregroundImage,
  foregroundImageAlt,
  foregroundAnimate = false,
  children,
  ...rest
}: ContentPlateProps) {
  return (
    <section className={styles.root} {...rest} data-testid={ContentPlate.name}>
      {((backgroundImage && backgroundImageAlt) || backgroundCss) && (
        <figure
          className={styles.backgroundWrapper}
          style={{ "--background": backgroundCss } as CSSProperties}
        >
          {backgroundImage && backgroundImageAlt && (
            <Image src={backgroundImage} alt={backgroundImageAlt} />
          )}
        </figure>
      )}
      <div
        className={styles.inner}
        style={
          {
            "--orientation": orientation === "left" ? "row" : "row-reverse",
          } as CSSProperties
        }
      >
        <div className={styles.copyBox}>{children}</div>
        {embedUrl && (
          <div className={styles.frameBoxWrapper}>
            <IFrame src={embedUrl} />
          </div>
        )}
        {foregroundImage && foregroundImageAlt && (
          <figure
            className={`${styles.foregroundWrapper} ${foregroundAnimate ? styles.animate : ""}`}
          >
            <Image
              className={styles.foregroundImage}
              src={foregroundImage}
              alt={foregroundImageAlt}
            />
          </figure>
        )}
      </div>
    </section>
  );
}
