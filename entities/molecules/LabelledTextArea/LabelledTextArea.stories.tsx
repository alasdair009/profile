import { LabelledTextArea } from "./LabelledTextArea";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { colors } from "../../design-tokens/colors";

const meta: Meta<typeof LabelledTextArea> = {
  component: LabelledTextArea,
  args: {
    label: "Text area input",
    required: true,
    isInvalid: false,
    defaultValue: "hello world!",
    name: "textareainput",
  },
};
export default meta;

export const Default: StoryObj<typeof LabelledTextArea> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledTextAreaElement = canvas.getAllByTestId(
      LabelledTextArea.name
    )[0];
    const baseTextAreaElement: HTMLTextAreaElement = canvas.getByLabelText(
      args.label
    );
    const labelElement = canvas.getByText(args.label);

    await expect(labelledTextAreaElement).toBeInTheDocument();
    await expect(baseTextAreaElement).toBeInTheDocument();
    await expect(labelElement).toBeInTheDocument();

    await userEvent.clear(baseTextAreaElement);
    await userEvent.type(baseTextAreaElement, "bye world");
  },
};

export const Invalid: StoryObj<typeof LabelledTextArea> = {
  args: {
    required: true,
    isInvalid: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const baseTextAreaElement = canvas.getByLabelText(args.label);

    await expect(baseTextAreaElement).toBeInTheDocument();
    await expect(baseTextAreaElement).toHaveStyle(
      "background-color: rgba(223,28,65,0.15)"
    );

    await userEvent.type(baseTextAreaElement, "bye world");

    await expect(baseTextAreaElement).toHaveStyle(
      `background-color: ${colors.greyDark}`
    );
  },
};
