import Image from "next/image";
import { ContentPlateImageProps } from "./ContentPlate.types";
import styles from "./ContentPlate.module.css";

/**
 * Render an animatable image inside a ContentPlate
 */
export function ContentPlateImage({
  foregroundImage,
  foregroundAnimate,
  foregroundImageAlt,
  foregroundImageLoading,
  ...rest
}: ContentPlateImageProps) {
  return (
    <figure
      className={`${styles.foregroundWrapper} ${foregroundAnimate ? styles.animate : ""}`}
      data-testid={ContentPlateImage.displayName}
      {...rest}
    >
      <Image
        className={styles.foregroundImage}
        src={foregroundImage}
        alt={foregroundImageAlt}
        sizes={"(max-width: 400px) 100vw, 400px"}
        loading={foregroundImageLoading}
      />
    </figure>
  );
}
ContentPlateImage.displayName = "ContentPlateImage";
