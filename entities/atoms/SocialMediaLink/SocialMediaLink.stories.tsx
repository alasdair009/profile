import { SocialMediaLink } from "./SocialMediaLink";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof SocialMediaLink> = {
  component: SocialMediaLink,
};
export default meta;

export const X: StoryObj<typeof SocialMediaLink> = {
  args: {
    variant: "x",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const socialMediaElement = canvas.getByTestId(SocialMediaLink.name);

    await expect(socialMediaElement).toBeInTheDocument();
    await expect(socialMediaElement).toHaveAttribute(
      "href",
      "https://twitter.com/alasdair009"
    );
  },
};

export const LinkedIn: StoryObj<typeof SocialMediaLink> = {
  args: {
    variant: "linkedin",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const socialMediaElement = canvas.getByTestId(SocialMediaLink.name);

    await expect(socialMediaElement).toBeInTheDocument();
    await expect(socialMediaElement).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/alasdairmacrae/"
    );
  },
};

export const GitHub: StoryObj<typeof SocialMediaLink> = {
  args: {
    variant: "github",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const socialMediaElement = canvas.getByTestId(SocialMediaLink.name);

    await expect(socialMediaElement).toBeInTheDocument();
    await expect(socialMediaElement).toHaveAttribute(
      "href",
      "https://github.com/alasdair009"
    );
  },
};
