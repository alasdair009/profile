import {Root} from "./styles";
import {HTMLAttributes, ReactNode} from "react";

type LinkProps = {
    /**
     * Content of the link.
     */
    children: ReactNode;
    /**
     * Url or path to link to.
     */
    href: string;
} & HTMLAttributes<HTMLAnchorElement>;

/**
 * Link to a new path or url
 */
export function Link({children, ...rest}: LinkProps) {
    return <Root {...rest}>{children}</Root>
}