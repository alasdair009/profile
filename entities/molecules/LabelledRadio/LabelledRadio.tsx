import styles from "./LabelledRadio.module.scss";
import { BaseRadio } from "../../atoms/BaseRadio";
import { BaseLabel } from "../../atoms/BaseLabel";
import type { BaseRadioProps } from "../../atoms/BaseRadio";

type LabelledInputProps = {
  /**
   * Text for the label.
   */
  label: string;
} & BaseRadioProps;

/**
 * Labelled text input field for forms.
 */
export function LabelledRadio({
  isInvalid,
  name,
  label,
  ...rest
}: LabelledInputProps) {
  return (
    <div className={styles.root} data-testid={LabelledRadio.name}>
      <BaseLabel as="span">{label}</BaseLabel>
      <BaseRadio isInvalid={isInvalid} {...rest} />
    </div>
  );
}
