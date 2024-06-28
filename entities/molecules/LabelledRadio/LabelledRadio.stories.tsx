import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { LabelledRadio } from "./LabelledRadio";

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
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledRadioElement = canvas.getAllByTestId(LabelledRadio.name)[0];
    const baseRadioElement = canvas.getByLabelText(args.label);
    const labelElement = canvas.getByText(args.label);

    await expect(labelledRadioElement).toBeInTheDocument();
    await expect(baseRadioElement).toBeInTheDocument();
    await expect(labelElement).toBeInTheDocument();
  },
};

export const Invalid: StoryObj<typeof LabelledRadio> = {
  args: {
    isInvalid: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledRadioElement = canvas.getAllByTestId(LabelledRadio.name)[0];
    const baseRadioElement = canvas.getByLabelText(args.label);
    const labelElement = canvas.getByText(args.label);

    await expect(labelledRadioElement).toBeInTheDocument();
    await expect(baseRadioElement).toBeInTheDocument();
    await expect(labelElement).toBeInTheDocument();
  },
};
