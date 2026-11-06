import { ContentPlateIFrameProps } from "./ContentPlate.types";
import styles from "./ContentPlate.module.css";
import { IFrame } from "@/entities";

/**
 * Render an IFrame inside a ContentPlate
 */
export function ContentPlateIFrame({
  embedUrl,
  placeholderImage,
  placeholderAlt = "",
  ...rest
}: ContentPlateIFrameProps) {
  const placeholder =
    placeholderImage && placeholderAlt
      ? {
          alt: placeholderAlt,
          image: placeholderImage,
        }
      : undefined;
  return (
    <div
      className={styles.frameBoxWrapper}
      data-testid={ContentPlateIFrame.displayName}
      {...rest}
    >
      <IFrame src={embedUrl} title="" placeholder={placeholder} />
    </div>
  );
}
ContentPlateIFrame.displayName = "ContentPlateIFrame";
