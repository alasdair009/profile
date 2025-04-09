import { CSSProperties, HTMLAttributes } from "react";
import styles from "./Spacer.module.scss";

type SpacerProps = {
  /**
   * Multiply up the vertical space the entity provides.
   */
  multiplier?: number;
} & HTMLAttributes<HTMLBRElement>;

/**
 * Break to increase vertical space.
 */
export function Spacer({ multiplier = 1, style, ...rest }: SpacerProps) {
  return (
    <br
      className={styles.root}
      data-testid={Spacer.name}
      style={{ "--multiplier": multiplier, ...style } as CSSProperties}
      {...rest}
    />
  );
}
