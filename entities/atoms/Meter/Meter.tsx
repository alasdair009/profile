import { HTMLAttributes } from "react";
import styles from "./Meter.module.css";

type MeterProps = {
  /**
   * Lower bound of the measured range.
   */
  min?: number;
  /**
   * Current value of the measured range.
   */
  value?: number;
  /**
   * Upper bound of the measured range.
   */
  max?: number;
  /**
   * Upper bound of the low end of the measured range.
   */
  low?: number;
  /**
   * Lower bound of the high end of the measured range.
   */
  high?: number;
  optimum?: number;
} & HTMLAttributes<HTMLMeterElement>;

/**
 * Scalar measurement within a known range.
 */
export function Meter({ className, ...rest }: MeterProps) {
  return (
    <meter
      className={`${styles.root} ${className}`}
      data-testid={Meter.name}
      {...rest}
    ></meter>
  );
}
