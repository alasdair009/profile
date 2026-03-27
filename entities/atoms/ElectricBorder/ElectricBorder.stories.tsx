import { ElectricBorder } from "./ElectricBorder";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { colors } from "@/styles/tokens";

const meta: Meta<typeof ElectricBorder> = {
  component: ElectricBorder,
  argTypes: {
    chaos: {
      control: {
        type: "range",
        min: 0,
        max: 0.2,
        step: 0.01,
      },
    },
    color: {
      control: {
        type: "color",
        presetColors: Object.values(colors),
      },
    },
    speed: {
      control: {
        type: "range",
        min: 0,
        max: 10,
      },
    },
  },
  args: {
    children: "Add whatever content you like in here!",
    chaos: 0.12,
    speed: 1,
    style: { height: 200, width: 200 },
  },
};
export default meta;

export const Default: StoryObj<typeof ElectricBorder> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const electricBorderElement = canvas.getByTestId(
      ElectricBorder.displayName
    );

    await expect(electricBorderElement).toBeInTheDocument();
    await expect(electricBorderElement).toHaveTextContent(`${args.children}`);
  },
};
