import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    onClick: {
      description: "Action to perform when the button is clicked.",
    },
    type: {
      description: "HTML Button type.",
    },
    variant: {
      description: "Visual variant of the button.",
    },
  },
  args: {
    children: "Button",
    onClick: fn(),
  },
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("Button")).toBeInTheDocument();

    await userEvent.click(canvas.getByTestId(Button.name));

    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};
