import { Geolocation } from "./Geolocation";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Geolocation> = {
  component: Geolocation,
  args: {},
};
export default meta;

export const Default: StoryObj<typeof Geolocation> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const geolocationElement = canvas.getByTestId(Geolocation.displayName);

    await expect(geolocationElement).toBeInTheDocument();
  },
};
