import DitherVeilExport, {
  DitherVeilProps as DitherVeilExportProps,
  Pattern,
} from "./DitherVeilExport";
import { HTMLAttributes } from "react";
import styles from "./DitherVeil.module.css";
import meImage from "./me-alpha.webp";
import { colors } from "@/styles/tokens";
import { Property } from "csstype";

type DitherVeilProps = {
  /**
   * Colour of the pixels that shroud the asset.
   */
  paperColor: Property.Color;
  /**
   * Style of pixels that shroud the asset.
   */
  pattern: Pattern;
  /**
   * Size of the pixels that shroud the asset.
   */
  pixelSize: DitherVeilExportProps["pixelSize"];
  /**
   * Number of tones per channel.
   */
  levels: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * A 1-bit dithered asset that can be changed back to the original colour.
 */
export function DitherVeil({
  className,
  pattern = "floyd",
  pixelSize = 2,
  paperColor = colors.greenGrass,
  levels = 2,
  ...rest
}: DitherVeilProps) {
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={DitherVeil.displayName}
      {...rest}
    >
      <DitherVeilExport
        className={styles.inner}
        src={meImage.src}
        pattern={pattern}
        pixelSize={pixelSize}
        inkColor={colors.blackEvil}
        paperColor={paperColor}
        revealRadius={200}
        softness={0.6}
        linger={1}
        fit="contain"
        rimColor="#000"
        palette="duotone"
        levels={levels}
        contrast={1.15}
        brightness={0.03}
        rim={0}
        reverse={false}
        wander={true}
        clickBurst
      />
    </div>
  );
}
DitherVeil.displayName = "DitherVeil";
