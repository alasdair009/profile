import { HTMLAttributes } from "react";
import { BaseFile, BaseLabel, ErrorText } from "@/entities";
import styles from "./LabelledFile.module.css";

type LabelledInputProps = {
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
} & HTMLAttributes<HTMLInputElement>;

/**
 * Labelled text input field for forms.
 */
export function LabelledFile({
  isInvalid,
  name,
  label,
  errorText = `Please chose a valid ${label}`,
  ...rest
}: LabelledInputProps) {
  return (
    <label className={styles.root} data-testid={LabelledFile.name}>
      <BaseLabel as="span">{label}</BaseLabel>
      <BaseFile isInvalid={isInvalid} {...rest} />
      <ErrorText
        shown={isInvalid || false}
        data-testid={`${LabelledFile.name}Error`}
      >
        {errorText}
      </ErrorText>
    </label>
  );
}
