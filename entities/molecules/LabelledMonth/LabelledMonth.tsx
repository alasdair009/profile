import styles from "./LabelledDate.module.css";
import { HTMLAttributes } from "react";
import { BaseLabel, ErrorText } from "@/entities";
import { BaseMonth } from "../../atoms/BaseMonth";
import type { BaseMonthProps } from "../../atoms/BaseMonth/BaseMonth.types";

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
   * Field requires a value to be valid.
   */
  required?: boolean;
  /**
   * Minimum value for month entry.
   */
  min?: BaseMonthProps["min"];
  /**
   * Maximum value for month entry.
   */
  max?: BaseMonthProps["max"];
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
 * Labelled month input field for forms.
 */
export function LabelledMonth({
  isInvalid,
  label,
  errorText = `Please enter a valid ${label}`,
  ...rest
}: LabelledDateProps) {
  return (
    <label className={styles.root} data-testid={LabelledMonth.name}>
      <BaseLabel as="span">{label}</BaseLabel>
      <BaseMonth isInvalid={isInvalid} {...rest} />
      <ErrorText
        shown={isInvalid || false}
        data-testid={`${LabelledMonth.name}Error`}
      >
        {errorText}
      </ErrorText>
    </label>
  );
}
LabelledMonth.displayName = "LabelledMonth";
