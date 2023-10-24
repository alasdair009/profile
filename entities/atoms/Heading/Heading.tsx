import {Root} from "./styles";
import {HTMLAttributes, ReactNode} from "react";
import {HeadingTypes, TextAlignment} from "../../design-tokens/typography";

type HeadingProps = {
    /**
     * Visual style of the Heading.
     */
    level?: HeadingTypes;
    /**
     * Heading element level.
     */
    as?: HeadingTypes;
    /**
     * Contents of the heading.
     */
    children: ReactNode;
    /**
     * Text alignment of the heading.
     */
    align?: TextAlignment;
} & HTMLAttributes<HTMLHeadingElement>;
export function Heading({level = "h1", as, align = "left", children, ...rest}: HeadingProps) {
    const headingAs = as ? as : level;
    return <Root $level={level} as={headingAs} $align={align} {...rest}>{children}</Root>
}