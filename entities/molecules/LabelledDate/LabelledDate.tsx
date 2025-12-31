import styles from "./LabelledDate.module.css";
import { HTMLAttributes } from "react";
import { BaseDate, BaseLabel, ErrorText } from "@/entities";
import { DateInputType } from "@/entities/atoms/BaseDate/BaseDate.types";

type LabelledDateProps = {
  /**
   * Text for the label.
   */
  label: string;
  /**
   * Name of the field.
   */
  name: string;
  /**
   * Default value of the field.
   */
  value?: string;
  /**
   * Type of html date input to use.
   */
  type?: DateInputType;
  /**
   * Field requires a value to be valid.
   */
  required?: boolean;
  /**
   * Minimum value for date entry.
   */
  min?: Date;
  /**
   * Maximum value for date entry.
   */
  max?: Date;
  /**
   * Field displays as an invalid input.
   */
  isInvalid?: boolean;
  /**
   * Error text the field should display.
   */
  errorText?: string;
} & HTMLAttributes<HTMLInputElement>;

/**
 * Labelled text input field for forms.
 */
export function LabelledDate({
  isInvalid,
  name,
  label,
  min,
  max,
  errorText = `Please enter a valid ${label}`,
  ...rest
}: LabelledDateProps) {
  const minValue = typeof min === "number" ? new Date(min) : min;
  const maxValue = typeof max === "number" ? new Date(max) : max;
  return (
    <label className={styles.root} data-testid={LabelledDate.name}>
      <BaseLabel as="span">{label}</BaseLabel>
      <BaseDate isInvalid={isInvalid} min={minValue} max={maxValue} {...rest} />
      <ErrorText
        shown={isInvalid || false}
        data-testid={`${LabelledDate.name}Error`}
      >
        {errorText}
      </ErrorText>
    </label>
  );
}
