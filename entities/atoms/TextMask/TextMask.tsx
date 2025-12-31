import { CSSProperties, HTMLAttributes } from "react";
import { Property } from "csstype";
import styles from "./TextMask.module.css";

type TextMaskProps = {
  /**
   * Fill colour around the text.
   */
  maskFill: Property.Fill;
  /**
   * Text for the mask.
   */
  text: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Mask formed from text to place over a background.
 */
export function TextMask({
  maskFill,
  text,
  style,
  className,
  ...rest
}: TextMaskProps) {
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={TextMask.name}
      style={{ "--maskFill": maskFill, ...style } as CSSProperties}
      {...rest}
    >
      <div className={styles.inner}>
        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <defs>
            <mask id="mask" x="0" y="0">
              <rect x="0" y="0" width="100" height="100" fill="white" />
              <text className={styles.text} x="50" y="50">
                {text}
              </text>
            </mask>
          </defs>
          <rect className={styles.rect} x="0" y="0" height="100" width="100" />
        </svg>
      </div>
    </div>
  );
}
