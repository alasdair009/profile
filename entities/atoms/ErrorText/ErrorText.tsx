import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { colors } from "@/entities";
import styles from "./ErrorText.module.scss";

type ErrorTextProps = {
  /**
   * Show the error
   */
  shown?: boolean;
  /**
   * Contents of the message
   */
  children: ReactNode;
  /**
   * Align text horizontal position.
   */
  align?: CSSProperties["textAlign"];
} & HTMLAttributes<HTMLParagraphElement>;

/**
 * Text to display when there is a problem the user needs to address or be aware of.
 */
export function ErrorText({
  shown = true,
  children,
  align = "left",
  style,
  ...rest
}: ErrorTextProps) {
  return (
    <span
      className={`${styles.root} ${shown ? "" : styles.rootHide}`}
      data-testid={ErrorText.name}
      style={
        {
          "--color": colors.redHeat,
          "--font-size": "small",
          "--text-align": align,
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </span>
  );
}
