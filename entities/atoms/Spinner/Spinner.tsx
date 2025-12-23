import { HTMLAttributes } from "react";
import pikeSvg from "./pike.svg";
import styles from "./Spinner.module.css";
import Image from "next/image";

type SpinnerProps = HTMLAttributes<HTMLDivElement>;

/**
 * Rotating icon used to indicate something is loading or waiting.
 */
export function Spinner({ ...rest }: SpinnerProps) {
  return (
    <div className={styles.root} data-testid={Spinner.name} {...rest}>
      <Image
        className={styles.spinnerImage}
        src={pikeSvg}
        alt="A gymnast in a pike shape"
      />
    </div>
  );
}
