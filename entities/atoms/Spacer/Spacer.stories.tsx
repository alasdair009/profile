import {Spacer} from "./Spacer";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Spacer> = {
    component: Spacer,
    args: {
        multiplier: 1
    }
}
export default meta;

export const Default: StoryObj<typeof Spacer> = {};