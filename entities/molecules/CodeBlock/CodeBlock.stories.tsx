import { Meta, StoryObj } from "@storybook/nextjs";
import { CodeBlock } from "./CodeBlock";
import { expect, within } from "storybook/test";

const meta: Meta<typeof CodeBlock> = {
  component: CodeBlock,
  args: {
    language: "typescript",
    code: `const a = 1;`,
    description: "An example of source code.",
  },
};
export default meta;

export const Default: StoryObj<typeof CodeBlock> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const codeBlockElement = canvas.getByTestId(CodeBlock.name);

    await expect(codeBlockElement).toBeInTheDocument();
  },
};
