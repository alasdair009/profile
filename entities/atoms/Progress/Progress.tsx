import { CSSProperties, HTMLAttributes } from "react";
import styles from "./Progress.module.scss";

export type ProgressProps = {
  /**
   * Current progress value
   */
  value?: number;
  /**
   * Max value
   */
  max?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Disc to display progress to a target value
 */
export function Progress({ max = 100, value = 100, ...rest }: ProgressProps) {
  const safeValue = value > max ? max : value;
  return (
    <div className={styles.root} data-testid={Progress.name} {...rest}>
      <progress
        className={styles.progressElement}
        max={100}
        value={safeValue}
        data-testid={`${Progress.name}Element`}
        style={
          {
            "--max": 100,
            "--value": safeValue,
          } as CSSProperties
        }
      />
    </div>
  );
}
