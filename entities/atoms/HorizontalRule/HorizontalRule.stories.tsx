import { HorizontalRule } from "./HorizontalRule";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HorizontalRule> = {
    component: HorizontalRule,
    args: {
        decoration: false,
        margin: "both",
    },
};
export default meta;

export const Default: StoryObj<typeof HorizontalRule> = {};

export const Decoration: StoryObj<typeof HorizontalRule> = {
    args: {
        decoration: true,
    }
};
