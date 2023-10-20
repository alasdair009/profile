import {Root} from "./styles";
import {HTMLAttributes, ReactNode} from "react";
import {TextAlignment} from "../../design-tokens/typography";

type HeadingProps = {
    level?: string;
    as?: string;
    children: ReactNode;
    align?: TextAlignment;
} & HTMLAttributes<HTMLParagraphElement>;
export function Heading({align = "left", children, ...rest}: HeadingProps) {
    return <Root align={align} {...rest}>{children}</Root>
}