import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import {colors} from "@/entities";

type ErrorTextProps = {
    shown?: boolean;
} & HTMLAttributes<HTMLParagraphElement>;

export function ErrorText({ shown=true, ...rest }: ErrorTextProps) {
    return <Root color={colors.redHeat} as="span" fontSize="small" $shown={shown} {...rest} />;
}
