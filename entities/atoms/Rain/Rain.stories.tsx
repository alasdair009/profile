import { Rain } from "./Rain";
import { Meta, StoryObj } from "@storybook/nextjs";
import { colors } from "@/entities";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Rain> = {
  component: Rain,
  args: {
    rainDrops: 200,
    rainColor: "rgb(174,194,224)",
    speedRainTrough: 25,
  },
  argTypes: {
    rainDrops: {
      control: { type: "range", min: 10, max: 500, step: 1 },
    },
    rainColor: {
      control: {
        type: "color",
        presetColors: ["rgb(174,194,224)", colors.greenGrass],
      },
    },
    speedRainTrough: {
      control: { type: "range", min: 1, max: 25, step: 1 },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Rain> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rainElement = canvas.getByTestId(Rain.name);

    await expect(rainElement).toBeInTheDocument();
  },
};
