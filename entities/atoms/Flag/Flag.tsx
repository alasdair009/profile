import { CSSProperties, HTMLAttributes } from "react";
import styles from "./Flag.module.css";
import Image from "next/image";
import { colors } from "@/entities";

type FlagProps = {
  /**
   * Source of the image for the flag.
   */
  src: string;
  /**
   * Alt text for the flag image.
   */
  alt: string;
  /**
   * Show the flag poll.
   */
  showPoll?: boolean;
  /**
   * Animate the flag waving in the wind.
   */
  animateFlag?: boolean;
  /**
   * Background colour of the flag.
   */
  flagBackground?: CSSProperties["background"];
} & HTMLAttributes<HTMLDivElement>;

/**
 * CSS flag optionally blowing in the wind.
 */
export function Flag({
  alt,
  className,
  src,
  showPoll = true,
  animateFlag = true,
  flagBackground = colors.greenGrass,
  ...rest
}: FlagProps) {
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={Flag.name}
      {...rest}
    >
      <div
        className={`${styles.flagWrapper} ${showPoll ? styles.showPoll : ""} ${animateFlag ? styles.animateFlag : ""}`}
        style={
          {
            "--flag-background": flagBackground,
          } as CSSProperties
        }
      >
        <Image className={styles.flagImage} src={src} alt={alt} fill />
      </div>
    </div>
  );
}
