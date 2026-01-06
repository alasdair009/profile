import { LabelledDate } from "./LabelledDate";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";
import { BaseDate, BaseInput } from "@/entities";

const meta: Meta<typeof LabelledDate> = {
  component: LabelledDate,
  args: {
    name: "textentry",
    required: true,
    isInvalid: false,
    label: "Date entry",
    errorText: "",
  },
  argTypes: {
    min: {
      control: "date",
    },
    max: {
      control: "date",
    },
  },
};
export default meta;

export const Default: StoryObj<typeof LabelledDate> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledDate.name);
    await canvas.findByTestId(BaseDate.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText(args.label)).toBeInTheDocument();
  },
};

export const DateTimeLocale: StoryObj<typeof LabelledDate> = {
  args: {
    type: "datetime-local",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledDate.name);
    await canvas.findByTestId(BaseDate.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText(args.label)).toBeInTheDocument();
  },
};

export const Required: StoryObj<typeof LabelledDate> = {
  args: {
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledDate.name);
    await canvas.findByTestId(BaseDate.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByTestId(BaseDate.name)).toHaveAttribute("required");
  },
};

export const IsInvalid: StoryObj<typeof LabelledDate> = {
  args: {
    required: true,
    isInvalid: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByTestId(BaseDate.name);

    await expect(canvas.getByTestId(BaseDate.name)).toHaveStyle(
      "background-color: color(srgb 0.87451 0.109804 0.254902 / 0.15)"
    );
  },
};
