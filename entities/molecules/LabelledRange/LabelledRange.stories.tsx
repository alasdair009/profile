import { LabelledRange } from "./LabelledRange";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { BaseFile } from "@/entities";

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
    await canvas.findByTestId(BaseFile.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText("Text entry")).toBeInTheDocument();
    await expect(canvas.getByTestId(BaseFile.name)).toHaveAttribute(
      "type",
      "text"
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
    await canvas.findByTestId(BaseFile.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText("Required entry")).toBeInTheDocument();
    await expect(canvas.getByTestId(BaseFile.name)).toHaveAttribute("required");
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
    await canvas.findByTestId(BaseFile.name);

    await expect(canvas.getByTestId(BaseFile.name)).toHaveStyle(
      "background-color: rgba(223,28,65,0.15)"
    );
  },
};
