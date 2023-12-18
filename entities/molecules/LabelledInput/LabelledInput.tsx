import { LabelText, Root } from "./styles";
import { HTMLAttributes } from "react";
import { TextInputType } from "../../atoms/BaseInput/BaseInput.types";
import { BaseInput, ErrorText } from "@/entities";

type LabelledInputProps = {
  label: string;
  type: TextInputType;
  name: string;
  value?: string;
  required?: boolean;
  isInvalid?: boolean;
  errorText?: string;
} & HTMLAttributes<HTMLInputElement>;

/**
 * Base input type
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
    <Root>
      <LabelText>{label}</LabelText>
      <BaseInput type={type} isInvalid={isInvalid} {...rest} />
      <ErrorText shown={isInvalid || false}>{errorText}</ErrorText>
    </Root>
  );
}
