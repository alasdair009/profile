import { Root } from "./styles";
import { BaseRadio } from "@/entities/atoms/BaseRadio";
import { BaseLabel } from "@/entities";
import { BaseRadioProps } from "@/entities/atoms/BaseRadio/BaseRadio";

type LabelledInputProps = {
  /**
   * Text for the label.
   */
  label: string;
} & BaseRadioProps;

/**
 * Labelled text input field for forms.
 */
export function LabelledRadio({ isInvalid, name, label, ...rest }: LabelledInputProps) {
  return (
    <Root data-testid={LabelledRadio.name}>
      <BaseLabel as="span">{label}</BaseLabel>
      <BaseRadio isInvalid={isInvalid} {...rest} />
    </Root>
  );
}
