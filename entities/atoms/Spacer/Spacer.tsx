import {Root} from "./styles";
import {HTMLAttributes, ReactNode} from "react";

type SpacerProps = {
    multiplier?: number;
} & HTMLAttributes<HTMLBRElement>;
export function Spacer({multiplier = 1, ...rest}: SpacerProps) {
    return <Root multiplier={multiplier} {...rest} />
}