import { Heading, Paragraph, Spacer } from "@/entities";
import { Root } from "./styles";

type StatBoxProps = {
  /**
   * Heading of the record.
   */
  heading: string;
  /**
   * Name of the holder.
   */
  name: string;
  /**
   * Value of the holder.
   */
  value: string;
};

/**
 * Small box that displays a record and value.
 */
export function StatBox({ heading, name, value, ...rest }: StatBoxProps) {
  return (
    <Root data-testid={StatBox.name} {...rest}>
      <Heading level="h4" as="h2" align="center">
        {heading}
      </Heading>
      <Paragraph align="center">{name}</Paragraph>
      <Spacer />
      <Paragraph align="center">{value}</Paragraph>
    </Root>
  );
}
