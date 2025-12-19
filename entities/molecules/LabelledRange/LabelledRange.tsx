import { HTMLAttributes } from "react";
import { BaseRange, BaseLabel, ErrorText } from "@/entities";
import styles from "./LabelledRange.module.css";

type LabelledRangeProps = {
  /**
   * Text for the label.
   */
  label: string;
  /**
   * Name of the field.
   */
  name: string;
  /**
   * Field requires a value to be valid.
   */
  required?: boolean;
  /**
   * Field displays as an invalid input.
   */
  isInvalid?: boolean;
  /**
   * Error text the field should display.
   */
  errorText?: string;
  /**
   * Minimum value for the slider.
   */
  min: number;
  /**
   * Maximum value for the slider.
   */
  max: number;
  /**
   * Current value for the range.
   */
  defaultValue?: number;
} & HTMLAttributes<HTMLInputElement>;

/**
 * Labelled text input field for forms.
 */
export function LabelledRange({
  isInvalid,
  name,
  label,
  errorText = `Please chose a valid ${label}`,
  ...rest
}: LabelledRangeProps) {
  return (
    <label className={styles.root} data-testid={LabelledRange.name}>
      <BaseLabel as="span">{label}</BaseLabel>
      <BaseRange isInvalid={isInvalid} {...rest} />
      <ErrorText
        shown={isInvalid || false}
        data-testid={`${LabelledRange.name}Error`}
      >
        {errorText}
      </ErrorText>
    </label>
  );
}
