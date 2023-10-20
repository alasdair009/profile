import {Root} from "./styles";
import {HTMLAttributes, ReactNode} from "react";

type ParagraphProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;
export function Paragraph({children, ...rest}: ParagraphProps) {
    return <Root {...rest}>{children}</Root>
}