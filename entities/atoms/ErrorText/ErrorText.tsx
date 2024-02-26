import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { colors } from "@/entities";

type ErrorTextProps = {
  /**
   * Show the error
   */
  shown?: boolean;
} & HTMLAttributes<HTMLParagraphElement>;

/**
 * Text to display when there is a problem the user needs to address or be aware of.
 */
export function ErrorText({ shown = true, children, ...rest }: ErrorTextProps) {
  return (
    <Root
      color={colors.redHeat}
      as="span"
      fontSize="small"
      $shown={shown}
      {...rest}
    >{children}</Root>
  );
}
