import {TextMask} from "./TextMask";
import {Meta, StoryObj} from "@storybook/react";
import {colors} from "../../design-tokens/colors";

const meta: Meta<typeof TextMask> = {
    component: TextMask,
    argTypes: {
        maskFill: {
            control: {
                type: "color",
                presetColors: [colors.whiteGhost, colors.blackEvil],
            },
        }
    },
    args: {
        maskFill: colors.whiteGhost,
        text: "hello"
    }
}
export default meta;

export const Default: StoryObj<typeof TextMask> = {};