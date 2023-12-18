import { Root } from "./styles";
import { HTMLAttributes } from "react";
import { BaseTextArea } from "@/entities";
import { LabelText } from "./styles";

type LabelledTextAreaProps = {
  label: string;
  required?: boolean;
  isInvalid?: boolean;
  value?: string;
  name: string;
} & HTMLAttributes<HTMLTextAreaElement>;

/**
 * Base input type
 */
export function LabelledTextArea({
  label,
  name,
  ...rest
}: LabelledTextAreaProps) {
  return (
    <Root>
      <LabelText>{label}</LabelText>
      <BaseTextArea {...rest} />
    </Root>
  );
}
