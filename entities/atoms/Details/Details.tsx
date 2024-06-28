import { Content, Root, Summary } from "./styles";
import { HTMLAttributes } from "react";

type DetailsProps = {
  /**
   * Content of the summary
   */
  summary: string;
  /**
   * Name of the element. Use the same name to create Accordions where only one is open.
   */
  name?: string;
} & HTMLAttributes<HTMLDetailsElement>;

/**
 * Text to display when there is a problem the user needs to address or be aware of.
 */
export function Details({ summary, children, ...rest }: DetailsProps) {
  return (
    <Root data-testid={Details.name} {...rest}>
      <Summary>{summary}</Summary>
      <Content>{children}</Content>
    </Root>
  );
}
