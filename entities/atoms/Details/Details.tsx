import { CSSProperties, HTMLAttributes } from "react";
import styles from "./Details.module.scss";

type DetailsProps = {
  /**
   * Content of the summary
   */
  summary: string;
  /**
   * Name of the element. Use the same name to create Accordions where only one is open.
   */
  name?: string;
  /**
   * Duration of the open/close transition.
   */
  transitionDuration?: number;
} & HTMLAttributes<HTMLDetailsElement>;

/**
 * Text to display when there is a problem the user needs to address or be aware of.
 */
export function Details({
  summary,
  transitionDuration = 0.5,
  style,
  children,
  ...rest
}: DetailsProps) {
  return (
    <details
      className={styles.root}
      data-testid={Details.displayName}
      style={
        {
          ...style,
          "--transition-duration": transitionDuration,
        } as CSSProperties
      }
      {...rest}
    >
      <summary className={styles.summary}>{summary}</summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}
Details.displayName = "Details";
