import { FixedPlate } from "./FixedPlate";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import skyImage from "@/entities/assets/sky.webp";

const meta: Meta<typeof FixedPlate> = {
  component: FixedPlate,
  tags: ["no-snaps"],
  args: {
    alt: "Ali trampolining outside somersaulting in the air",
    image: skyImage,
  },
};
export default meta;

export const Default: StoryObj<typeof FixedPlate> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const fixedPlateElement = canvas.getByTestId(FixedPlate.name);

    await expect(fixedPlateElement).toBeInTheDocument();
    await expect(canvas.getByAltText(args.alt as string)).toBeInTheDocument();
  },
};
