import { HorizontalRule } from "./HorizontalRule";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof HorizontalRule> = {
  component: HorizontalRule,
  args: {
    decoration: false,
    margin: "both",
  },
};
export default meta;

export const Default: StoryObj<typeof HorizontalRule> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const ruleElement = canvas.getByTestId(HorizontalRule.name);

    await expect(ruleElement).toBeInTheDocument();
  },
};

export const Decoration: StoryObj<typeof HorizontalRule> = {
  args: {
    decoration: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const ruleElement = canvas.getByTestId(HorizontalRule.name);

    await expect(ruleElement).toBeInTheDocument();
  },
};
