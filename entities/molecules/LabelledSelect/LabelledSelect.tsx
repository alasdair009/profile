import { LabelText, Root } from "./styles";
import { HTMLAttributes } from "react";
import { ErrorText } from "@/entities";
import { BaseSelect } from "@/entities/atoms/BaseSelect";

type LabelledSelectProps = {
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
   * If multiple entries can be chosen.
   */
  multiple?: boolean;
  /**
   * Field displays as an invalid input.
   */
  isInvalid?: boolean;
  /**
   * Error text the field should display.
   */
  errorText?: string;
} & HTMLAttributes<HTMLSelectElement>;

/**
 * Labelled text input field for forms.
 */
export function LabelledSelect({
  isInvalid,
  name,
  label,
  errorText = `Please enter a valid ${label}`,
  children,
  ...rest
}: LabelledSelectProps) {
  return (
    <Root data-testid={LabelledSelect.name}>
      <LabelText>{label}</LabelText>
      <BaseSelect isInvalid={isInvalid} {...rest}>
        {children}
      </BaseSelect>
      <ErrorText shown={isInvalid || false}>{errorText}</ErrorText>
    </Root>
  );
}
