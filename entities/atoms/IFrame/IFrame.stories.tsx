import { IFrame } from "./IFrame";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IFrame> = {
    component: IFrame,
    args: {
        src: "https://www.alasdairmacrae.co.uk",
    },
};
export default meta;

export const Default: StoryObj<typeof IFrame> = {};
