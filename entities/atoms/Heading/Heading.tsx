import {Root} from "./styles";
import {HTMLAttributes, ReactNode} from "react";

type HeadingProps = {
    level?: string;
    as?: string;
    children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;
export function Heading({children, ...rest}: HeadingProps) {
    return <Root {...rest}>{children}</Root>
}