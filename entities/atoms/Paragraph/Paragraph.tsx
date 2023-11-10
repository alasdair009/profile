import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import {FontSizes, TextAlignment} from "@/entities";

type ParagraphProps = {
  align?: TextAlignment;
  fontSize?: FontSizes;
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;
export function Paragraph({
  align = "left",
  fontSize = "medium",
  children,
  ...rest
}: ParagraphProps) {
  return (
    <Root $align={align} $fontSize={fontSize} {...rest}>
      {children}
    </Root>
  );
}
