import { HTMLAttributes } from "react";
import { HorizontalRuleMarginOptions } from "./HorizontalRule.types";
import styles from "./HorizontalRule.module.scss";

type HorizontalRuleProps = {
  /**
   * Display the AM logo on the line.
   */
  decoration?: boolean;
  /**
   * Curve the rule line.
   */
  curve?: boolean;
  /**
   * Margin position above and below the line.
   */
  margin?: HorizontalRuleMarginOptions;
} & HTMLAttributes<HTMLHRElement>;

const getMarginClass = (margin: HorizontalRuleMarginOptions) => {
  switch (margin) {
    case "top":
      return styles.Top;
    case "bottom":
      return styles.Bottom;
    case "none":
      return styles.None;
    default:
      return "";
  }
};

/**
 * Horizontal rule on the page used to separate content.
 */
export function HorizontalRule({
  decoration = false,
  curve = false,
  margin = "both",
  ...rest
}: HorizontalRuleProps) {
  return (
    <hr
      className={`${styles.root} ${decoration ? styles.Decoration : ""} ${curve ? styles.curve : ""} ${getMarginClass(margin)}`}
      data-testid={HorizontalRule.name}
      {...rest}
    />
  );
}
