import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    onClick: {
      description: "Action to perform when the button is clicked."
    },
    type: {
      description: "HTML Button type.",
    },
    variant: {
      description: "Visual variant of the button."
    }
  },
  args: {
    children: "Button",
    onClick: action("Button Clicked"),
  },
};
export default meta;

export const Default: StoryObj<typeof Button> = {};
