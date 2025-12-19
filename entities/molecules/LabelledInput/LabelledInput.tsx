import { HTMLAttributes } from "react";
import { TextInputType } from "../../atoms/BaseInput/BaseInput.types";
import { BaseInput, BaseLabel, ErrorText } from "@/entities";
import styles from "./LabelledInput.module.css";

type LabelledInputProps = {
  /**
   * Text for the label.
   */
  label: string;
  /**
   * Type of HTML Text input field
   */
  type: TextInputType;
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
export function LabelledInput({
  isInvalid,
  type,
  name,
  label,
  errorText = `Please enter a valid ${label}`,
  ...rest
}: LabelledInputProps) {
  return (
    <label className={styles.root} data-testid={LabelledInput.name}>
      <BaseLabel as="span">{label}</BaseLabel>
      <BaseInput type={type} isInvalid={isInvalid} {...rest} />
      <ErrorText
        shown={isInvalid || false}
        data-testid={`${LabelledInput.name}Error`}
      >
        {errorText}
      </ErrorText>
    </label>
  );
}
