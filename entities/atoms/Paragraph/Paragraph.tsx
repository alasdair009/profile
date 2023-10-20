import {Root} from "./styles";
import {HTMLAttributes, ReactNode} from "react";
import {TextAlignment} from "@/entities/design-tokens/typography";

type ParagraphProps = {
    align?: TextAlignment;
    children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;
export function Paragraph({align, children, ...rest}: ParagraphProps) {
    return <Root align={align} {...rest}>{children}</Root>
}