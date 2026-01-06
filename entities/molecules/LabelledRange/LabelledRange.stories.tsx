import { LabelledRange } from "./LabelledRange";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";
import { BaseRange } from "@/entities";

const meta: Meta<typeof LabelledRange> = {
  component: LabelledRange,
  args: {
    name: "rangeEntry",
    required: true,
    isInvalid: false,
    label: "Range entry",
    errorText: "",
    min: 0,
    max: 100,
    defaultValue: 50,
  },
};
export default meta;

export const Default: StoryObj<typeof LabelledRange> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledRange.name);
    await canvas.findByTestId(BaseRange.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText("Range entry")).toBeInTheDocument();
    await expect(canvas.getByTestId(BaseRange.name)).toHaveAttribute(
      "type",
      "range"
    );
  },
};

export const Required: StoryObj<typeof LabelledRange> = {
  args: {
    label: "Required entry",
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledRange.name);
    await canvas.findByTestId(BaseRange.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText("Required entry")).toBeInTheDocument();
    await expect(canvas.getByTestId(BaseRange.name)).toHaveAttribute(
      "required"
    );
  },
};

export const IsInvalid: StoryObj<typeof LabelledRange> = {
  args: {
    label: "isInvalid entry",
    required: true,
    isInvalid: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByTestId(BaseRange.name);

    await expect(canvas.getByTestId(BaseRange.name)).toHaveStyle(
      "background-color: color(srgb 0.87451 0.109804 0.254902 / 0.15)"
    );
  },
};
