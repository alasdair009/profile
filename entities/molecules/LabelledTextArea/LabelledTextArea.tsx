import { Root } from "./styles";
import { HTMLAttributes } from "react";
import { BaseTextArea } from "@/entities";
import { LabelText } from "./styles";

type LabelledTextAreaProps = {
  label: string;
  required?: boolean;
  isInvalid?: boolean;
} & HTMLAttributes<HTMLTextAreaElement>;

/**
 * Base input type
 */
export function LabelledTextArea({ label, ...rest }: LabelledTextAreaProps) {
  return (
    <Root>
      <LabelText>{label}</LabelText>
      <BaseTextArea {...rest} />
    </Root>
  );
}
