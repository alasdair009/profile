import { HorizontalRule } from "./HorizontalRule";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

const meta: Meta<typeof HorizontalRule> = {
  component: HorizontalRule,
  args: {
    curve: false,
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

export const Curve: StoryObj<typeof HorizontalRule> = {
  args: {
    curve: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const ruleElement = canvas.getByTestId(HorizontalRule.name);

    await expect(ruleElement).toBeInTheDocument();
  },
};
