import { SocialMediaBar } from "./SocialMediaBar";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";
import { SocialMediaLink } from "../../atoms/SocialMediaLink";

const meta: Meta<typeof SocialMediaBar> = {
  component: SocialMediaBar,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  subcomponents: {
    // @ts-ignore
    SocialMediaLink: SocialMediaLink,
  },
};
export default meta;

export const Default: StoryObj<typeof SocialMediaBar> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const socialMediaBarElement = canvas.getByTestId(SocialMediaBar.name);
    const socialLinks = canvas.getAllByTestId(SocialMediaLink.name);

    await expect(socialMediaBarElement).toBeInTheDocument();
    await expect(socialLinks).toHaveLength(7);
  },
};
