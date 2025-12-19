import styles from "./LabelledCheckbox.module.css";
import { BaseCheckbox, BaseLabel } from "@/entities";
import { BaseCheckboxProps } from "@/entities/atoms/BaseCheckbox/BaseCheckbox";

type LabelledCheckboxProps = {
  /**
   * Text for the label.
   */
  label: string;
} & BaseCheckboxProps;

/**
 * Labelled checkbox.
 */
export function LabelledCheckbox({
  isInvalid,
  name,
  label,
  ...rest
}: LabelledCheckboxProps) {
  return (
    <div className={styles.root} data-testid={LabelledCheckbox.name}>
      <BaseLabel as="span">{label}</BaseLabel>
      <BaseCheckbox isInvalid={isInvalid} {...rest} />
    </div>
  );
}
