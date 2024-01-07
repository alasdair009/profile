import { SocialMediaBar } from "./SocialMediaBar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SocialMediaBar> = {
    component: SocialMediaBar,
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};
export default meta;

export const Default: StoryObj<typeof SocialMediaBar> = {};
