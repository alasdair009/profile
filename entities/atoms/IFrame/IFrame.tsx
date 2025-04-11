import { HTMLAttributes } from "react";
import styles from "./IFrame.module.scss";

type IFrameProps = {
  /**
   * URL for the iframe content
   */
  src: string;
} & HTMLAttributes<HTMLIFrameElement>;

/**
 * An HTML iframe for external content
 */
export function IFrame({ ...rest }: IFrameProps) {
  return (
    <iframe
      className={styles.root}
      {...rest}
      allowFullScreen={true}
      data-testid={IFrame.name}
    />
  );
}
