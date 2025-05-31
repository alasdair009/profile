import { Meta, StoryObj } from "@storybook/nextjs";
import { LabelledCheckbox } from "./LabelledCheckbox";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { BaseCheckbox, colors } from "@/entities";

const meta: Meta<typeof LabelledCheckbox> = {
  component: LabelledCheckbox,
  args: {
    name: "checkboxentry",
    required: true,
    isInvalid: false,
    label: "Checkbox entry",
  },
};
export default meta;

export const Default: StoryObj<typeof LabelledCheckbox> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxElement = canvas.getByTestId(BaseCheckbox.name);
    const labelElement = canvas.getByText("Checkbox entry");

    await expect(checkboxElement).toBeInTheDocument();
    await expect(labelElement).toBeInTheDocument();

    await userEvent.click(checkboxElement);

    await waitFor(() => expect(checkboxElement).toHaveProperty("checked"));
  },
};

export const Invalid: StoryObj<typeof LabelledCheckbox> = {
  args: {
    isInvalid: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxElement = canvas.getByTestId(BaseCheckbox.name);

    await expect(checkboxElement).toHaveStyle({
      borderColor: colors.redHeat,
    });
  },
};
