import { ErrorText } from "./ErrorText";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof ErrorText> = {
  component: ErrorText,
  args: {
    children: "Please fix the mistake.",
    shown: true,
  },
};
export default meta;

export const Default: StoryObj<typeof ErrorText> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const errorTextElement = canvas.getByTestId(ErrorText.name);

    await expect(errorTextElement).toBeInTheDocument();
    await expect(errorTextElement).toHaveTextContent(`${args.children}`);
  },
};
