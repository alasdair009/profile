import { Meta, StoryContext, StoryObj } from "@storybook/nextjs-vite";
import { MirrorVista } from "./MirrorVista";
import { expect, within } from "storybook/test";
import { ComponentProps } from "react";

const meta: Meta<typeof MirrorVista> = {
  component: MirrorVista,
  argTypes: {
    waterBlur: {
      control: { type: "range", min: 0, max: 3, step: 1 },
    },
    waterLuminosity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
    },
  },
  args: {
    hasFish: true,
    waterBlur: 1,
    waterLuminosity: 1,
  },
};
export default meta;

export const Default: StoryObj<typeof MirrorVista> = {
  play: async ({ args, canvasElement, step }) =>
    mirrorVistaTests(args, canvasElement, step),
};

export const NoFish: StoryObj<typeof MirrorVista> = {
  args: {
    hasFish: false,
  },
  play: async ({ args, canvasElement, step }) =>
    mirrorVistaTests(args, canvasElement, step),
};

const mirrorVistaTests = async (
  args: ComponentProps<typeof MirrorVista>,
  canvasElement: HTMLElement,
  step: StoryContext<ComponentProps<typeof MirrorVista>>["step"]
) => {
  const canvas = within(canvasElement);
  const mirrorVistaElement = canvas.getByTestId(MirrorVista.displayName);

  await step(`Check the scene renders`, async () => {
    await expect(mirrorVistaElement).toBeInTheDocument();
  });

  await step(`Check the fish`, async () => {
    if (args.hasFish) {
      const fish = canvas.getAllByTestId(`${MirrorVista.displayName}Fish`);
      await expect(fish).toHaveLength(4);
    } else {
      await expect(
        canvas.queryAllByTestId(`${MirrorVista.displayName}Fish`)
      ).toHaveLength(0);
    }
  });
};
