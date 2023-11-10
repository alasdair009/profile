import { Root } from "./styles";
import { HTMLAttributes } from "react";
import {HorizontalRuleMarginOptions} from "@/entities/atoms/HorizontalRule/HorizontalRule.types";

type HorizontalRuleProps = {
    decoration?: boolean;
    margin?: HorizontalRuleMarginOptions;
} & HTMLAttributes<HTMLHRElement>;

export function HorizontalRule({ decoration = false, margin = "both", ...rest }: HorizontalRuleProps) {
    return <Root $decoration={decoration} $margin={margin} {...rest} />;
}
