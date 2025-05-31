import { Map } from "./Map";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Map> = {
  component: Map,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
export default meta;

export const Default: StoryObj<typeof Map> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const lightningElement = canvas.getByTestId(Map.name);

    await expect(lightningElement).toBeInTheDocument();
  },
};
