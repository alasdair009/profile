import { Root } from "./styles";
import { HTMLAttributes } from "react";
import { HorizontalRuleMarginOptions } from "@/entities/atoms/HorizontalRule/HorizontalRule.types";

type HorizontalRuleProps = {
  /**
   * Display the AM logo on the line.
   */
  decoration?: boolean;
  /**
   * Margin position above and below the line.
   */
  margin?: HorizontalRuleMarginOptions;
} & HTMLAttributes<HTMLHRElement>;

/**
 * Horizontal rule on the page used to separate content.
 */
export function HorizontalRule({
  decoration = false,
  margin = "both",
  ...rest
}: HorizontalRuleProps) {
  return <Root $decoration={decoration} $margin={margin} {...rest} />;
}
