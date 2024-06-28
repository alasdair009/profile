import { LabelledSelect } from "./LabelledSelect";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof LabelledSelect> = {
  component: LabelledSelect,
  args: {
    name: "selectentry",
    required: true,
    isInvalid: false,
    label: "Select entry",
    errorText: "",
    children: (
      <>
        <option value="value 1" data-testid="option">
          option 1
        </option>
        <option value="value 2" data-testid="option">
          option 2
        </option>
        <option value="value 3" data-testid="option">
          option 3
        </option>
      </>
    ),
  },
};
export default meta;

export const Default: StoryObj<typeof LabelledSelect> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledSelectElement = canvas.getAllByTestId(LabelledSelect.name)[0];
    const baseSelectElement = canvas.getByLabelText(args.label);
    const labelElement = canvas.getByText(args.label);

    await expect(labelledSelectElement).toBeInTheDocument();
    await expect(baseSelectElement).toBeInTheDocument();
    await expect(labelElement).toBeInTheDocument();

    await userEvent.click(baseSelectElement);
  },
};

export const Multiple: StoryObj<typeof LabelledSelect> = {
  args: {
    multiple: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledSelectElement = canvas.getAllByTestId(LabelledSelect.name)[0];
    const baseSelectElement = canvas.getByLabelText(args.label);
    const labelElement = canvas.getByText(args.label);

    await expect(labelledSelectElement).toBeInTheDocument();
    await expect(baseSelectElement).toBeInTheDocument();
    await expect(labelElement).toBeInTheDocument();

    await userEvent.click(baseSelectElement);
  },
};

export const Invalid: StoryObj<typeof LabelledSelect> = {
  args: {
    isInvalid: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledSelectElement = canvas.getAllByTestId(LabelledSelect.name)[0];
    const baseSelectElement = canvas.getByLabelText(args.label);
    const labelElement = canvas.getByText(args.label);

    await expect(labelledSelectElement).toBeInTheDocument();
    await expect(baseSelectElement).toBeInTheDocument();
    await expect(labelElement).toBeInTheDocument();

    await userEvent.click(baseSelectElement);
  },
};
