import { LabelledMonth } from "./LabelledMonth";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { BaseMonth } from "../../atoms/BaseMonth";

const meta: Meta<typeof LabelledMonth> = {
  component: LabelledMonth,
  args: {
    name: "monthentry",
    required: true,
    isInvalid: false,
    label: "Month entry",
    errorText: "",
  },
  argTypes: {},
};
export default meta;

export const Default: StoryObj<typeof LabelledMonth> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledMonth.displayName);
    await canvas.findByTestId(BaseMonth.displayName);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText(args.label)).toBeInTheDocument();
  },
};

export const Required: StoryObj<typeof LabelledMonth> = {
  args: {
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledMonth.name);
    await canvas.findByTestId(BaseMonth.displayName);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByTestId(BaseMonth.displayName)).toHaveAttribute(
      "required"
    );
  },
};

export const IsInvalid: StoryObj<typeof LabelledMonth> = {
  args: {
    required: true,
    isInvalid: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByTestId(BaseMonth.name);

    await expect(canvas.getByTestId(BaseMonth.name)).toHaveStyle(
      "background-color: color(srgb 0.87451 0.109804 0.254902 / 0.15)"
    );
  },
};
