import { HTMLAttributes } from "react";
import { BaseTextArea } from "../../atoms/BaseTextArea";
import styles from "./LabelledTextArea.module.scss";

type LabelledTextAreaProps = {
  /**
   * Label text for the field.
   */
  label: string;
  /**
   * Value is required for valid entry.
   */
  required?: boolean;
  /**
   * Field displays as invalid entry.
   */
  isInvalid?: boolean;
  /**
   * Default value of the field.
   */
  value?: string;
  /**
   * Name of the field.
   */
  name: string;
} & HTMLAttributes<HTMLTextAreaElement>;

/**
 * HTML textarea input field.
 */
export function LabelledTextArea({
  label,
  name,
  ...rest
}: LabelledTextAreaProps) {
  return (
    <label className={styles.root} data-testid={LabelledTextArea.name}>
      <span className={styles.labelText}>{label}</span>
      <BaseTextArea {...rest} />
    </label>
  );
}
