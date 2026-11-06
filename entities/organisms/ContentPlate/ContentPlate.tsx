import Image from "next/image";
import { ContentPlateProps } from "./ContentPlate.types";
import styles from "./ContentPlate.module.css";
import { CSSProperties } from "react";
import { ContentPlateImage } from "./ContentPlateImage";
import { ContentPlateIFrame } from "./ContentPlateIFrame";
import { ContentPlateDitherVeil } from "@/entities/organisms/ContentPlate/ContentPlateDitherVeil";

export function ContentPlate({
  orientation = "left",
  backgroundCss = "none",
  backgroundImage,
  backgroundImageAlt,
  foregroundContent,
  children,
  ...rest
}: ContentPlateProps) {
  return (
    <section
      className={styles.root}
      {...rest}
      data-testid={ContentPlate.displayName}
    >
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
        {foregroundContent}
      </div>
    </section>
  );
}
ContentPlate.displayName = "ContentPlate";
ContentPlate.DitherVeil = ContentPlateDitherVeil;
ContentPlate.IFrame = ContentPlateIFrame;
ContentPlate.Image = ContentPlateImage;
