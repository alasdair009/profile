import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: "Button",
    onClick: action("Button Clicked"),
  },
};
export default meta;

export const Default: StoryObj<typeof Button> = {};
