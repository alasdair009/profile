import { IFrame } from "./IFrame";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

const meta: Meta<typeof IFrame> = {
  component: IFrame,
  args: {
    src: "https://www.alasdairmacrae.co.uk",
  },
};
export default meta;

export const Default: StoryObj<typeof IFrame> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const iFrameElement = canvas.getByTestId(IFrame.name);

    await expect(iFrameElement).toBeInTheDocument();
    await expect(iFrameElement).toHaveAttribute("src", args.src);
  },
};
