import { LabelText, Root } from "./styles";
import { HTMLAttributes } from "react";
import { TextInputType } from "../../atoms/BaseInput/BaseInput.types";
import { BaseInput } from "@/entities";

type LabelledInputProps = {
  label: string;
  type: TextInputType;
} & HTMLAttributes<HTMLInputElement>;

/**
 * Base input type
 */
export function LabelledInput({ type, label, ...rest }: LabelledInputProps) {
  return (
    <Root>
      <LabelText>{label}</LabelText>
      <BaseInput type={type} {...rest} />
    </Root>
  );
}
