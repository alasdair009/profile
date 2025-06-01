import styles from "./LabelledToggle.module.scss";
import { BaseToggle, BaseLabel } from "@/entities";
import { BaseToggleProps } from "../../atoms/BaseToggle";

type LabelledToggleProps = {
  /**
   * Text for the label.
   */
  label: string;
} & BaseToggleProps;

/**
 * Labelled checkbox.
 */
export function LabelledToggle({ name, label, ...rest }: LabelledToggleProps) {
  return (
    <div className={styles.root} data-testid={LabelledToggle.name}>
      <BaseLabel as="span">{label}</BaseLabel>
      <BaseToggle {...rest} />
    </div>
  );
}
