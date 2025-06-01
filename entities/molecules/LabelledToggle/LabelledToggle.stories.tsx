import { Meta, StoryObj } from "@storybook/nextjs";
import { LabelledToggle } from "./LabelledToggle";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { BaseToggle } from "../../atoms/BaseToggle";

const meta: Meta<typeof LabelledToggle> = {
  component: LabelledToggle,
  args: {
    name: "toggleentry",
    label: "Toggle entry",
  },
};
export default meta;

export const Default: StoryObj<typeof LabelledToggle> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxElement = canvas.getByTestId(BaseToggle.name);
    const labelElement = canvas.getByText("Toggle entry");

    await expect(checkboxElement).toBeInTheDocument();
    await expect(labelElement).toBeInTheDocument();

    await userEvent.click(checkboxElement);

    await waitFor(() =>
      expect(checkboxElement).toHaveProperty("checked", true)
    );
  },
};

export const On: StoryObj<typeof LabelledToggle> = {
  args: {
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxElement = canvas.getByTestId(BaseToggle.name);
    const labelElement = canvas.getByText("Toggle entry");

    await expect(checkboxElement).toBeInTheDocument();
    await expect(labelElement).toBeInTheDocument();

    await userEvent.click(checkboxElement);

    await waitFor(() =>
      expect(checkboxElement).toHaveProperty("checked", false)
    );
  },
};
