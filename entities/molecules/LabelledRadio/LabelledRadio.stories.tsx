import { Meta, StoryObj } from "@storybook/react";
import { LabelledRadio } from "./LabelledRadio";
import { expect, within } from "@storybook/test";
import { BaseRadio } from "../../atoms/BaseRadio";

const meta: Meta<typeof LabelledRadio> = {
  component: LabelledRadio,
  args: {
    name: "radioentry",
    required: true,
    isInvalid: false,
    label: "Radio entry",
  },
};
export default meta;

export const Default: StoryObj<typeof LabelledRadio> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledRadio = canvas.getByTestId(LabelledRadio.name);

    await expect(labelledRadio).toBeInTheDocument();
  },
};

export const Checked: StoryObj<typeof LabelledRadio> = {
  args: {
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledRadio = canvas.getByTestId(LabelledRadio.name);
    const baseRadioElement = canvas.getByTestId(BaseRadio.name);

    await expect(baseRadioElement).toHaveAttribute("checked");
  },
};
