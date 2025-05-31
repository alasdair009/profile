import { Code } from "./Code";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Code> = {
  component: Code,
  args: {
    children: "console.log('Hello world!');",
  },
};
export default meta;

export const Default: StoryObj<typeof Code> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const errorTextElement = canvas.getByTestId(Code.name);

    await expect(errorTextElement).toBeInTheDocument();
    await expect(errorTextElement).toHaveTextContent(`${args.children}`);
  },
};
