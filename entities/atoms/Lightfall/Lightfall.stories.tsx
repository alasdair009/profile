import { Lightfall } from "./Lightfall";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { ComponentProps } from "react";
import type { StepFunction } from "storybook/internal/csf";
import { colors } from "@/styles/tokens";

const meta: Meta<typeof Lightfall> = {
  component: Lightfall,
  argTypes: {
    backgroundColor: {
      control: {
        type: "color",
        presetColors: Object.values(colors),
      },
    },
    color1: {
      control: {
        type: "color",
        presetColors: Object.values(colors),
      },
    },
    color2: {
      control: {
        type: "color",
        presetColors: Object.values(colors),
      },
    },
    color3: {
      control: {
        type: "color",
        presetColors: Object.values(colors),
      },
    },
  },
  args: {
    backgroundColor: colors.greenGrass,
    color1: colors.greenGrass,
    color2: colors.greenGrass,
    color3: colors.whiteGhost,
    children: "Lightfall",
  },
};
export default meta;

export const Default: StoryObj<typeof Lightfall> = {
  play: ({ args, canvasElement, step }) =>
    lightfallTests(args, canvasElement, step),
};

const lightfallTests = async (
  args: ComponentProps<typeof Lightfall>,
  canvasElement: HTMLElement,
  step: StepFunction
) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByTestId(Lightfall.displayName);

  await step(`Check the lightfall renders`, async () => {
    await expect(buttonElement).toBeInTheDocument();
    await expect(buttonElement).toHaveTextContent(`${args.children}`);
  });
};
