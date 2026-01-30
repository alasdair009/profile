import { Meta, StoryObj } from "@storybook/nextjs";
import { CanIUse } from "./CanIUse";
import { expect, within } from "storybook/test";
import { IFrame } from "../../atoms/IFrame";

const meta: Meta<typeof CanIUse> = {
  component: CanIUse,
  args: {
    feature: "mdn-css__properties__clip-path",
    periods: "future_1,current,past_1,past_2",
  },
  parameters: {
    docs: {
      story: {
        inline: false,
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof CanIUse> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const canIUseElement = canvas.getByTestId(CanIUse.name);
    const frameElement = canvas.getByTestId(IFrame.name);

    await expect(canIUseElement).toBeInTheDocument();
    await expect(frameElement).toBeInTheDocument();
    await expect(frameElement).toHaveAttribute(
      "src",
      `https://caniuse.bitsofco.de/embed/index.html?feat=${args.feature}&periods=${args.periods}`
    );
  },
};
