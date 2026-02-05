import { HTMLAttributes } from "react";
import styles from "./IFrame.module.css";

type IFrameProps = {
  /**
   * URL for the iframe content
   */
  src: string;
  /**
   * Title to describe frame content for accessibility
   */
  title: string;
} & HTMLAttributes<HTMLIFrameElement>;

/**
 * An HTML iframe for external content
 */
export function IFrame({ className = "", ...rest }: IFrameProps) {
  return (
    <iframe
      className={`${styles.root} ${className}`}
      {...rest}
      allowFullScreen={true}
      data-testid={IFrame.name}
    />
  );
}
