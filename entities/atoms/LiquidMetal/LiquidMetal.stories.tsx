import { LiquidMetal } from "./LiquidMetal";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { colors } from "@/styles/tokens";

const meta: Meta<typeof LiquidMetal> = {
  component: LiquidMetal,
  argTypes: {
    amplitude: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    baseColor: {
      control: {
        type: "color",
        presetColors: Object.values(colors),
      },
    },
    blur: {
      control: {
        type: "range",
        min: 0,
        max: 20,
        step: 1,
      },
    },
    opacity: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    speed: {
      control: {
        type: "range",
        min: 0,
        max: 2,
        step: 0.01,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    style: {
      minHeight: 600,
    },
  },
};
export default meta;

export const Default: StoryObj<typeof LiquidMetal> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sunElement = canvas.getByTestId(LiquidMetal.displayName);

    await expect(sunElement).toBeInTheDocument();
  },
};
