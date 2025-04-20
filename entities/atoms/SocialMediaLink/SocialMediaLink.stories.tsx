import { SocialMediaLink } from "./SocialMediaLink";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof SocialMediaLink> = {
  component: SocialMediaLink,
};
export default meta;

export const Bluesky: StoryObj<typeof SocialMediaLink> = {
  args: {
    variant: "bluesky",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const socialMediaElement = canvas.getByTestId(SocialMediaLink.name);

    await expect(socialMediaElement).toBeInTheDocument();
    await expect(socialMediaElement).toHaveAttribute(
      "href",
      "https://bsky.app/profile/alasdair009.bsky.social"
    );
  },
};

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
      "https://x.com/alasdair009"
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

export const Facebook: StoryObj<typeof SocialMediaLink> = {
  args: {
    variant: "facebook",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const socialMediaElement = canvas.getByTestId(SocialMediaLink.name);

    await expect(socialMediaElement).toBeInTheDocument();
    await expect(socialMediaElement).toHaveAttribute(
      "href",
      "https://www.facebook.com/alasdair009"
    );
  },
};

export const Instagram: StoryObj<typeof SocialMediaLink> = {
  args: {
    variant: "instagram",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const socialMediaElement = canvas.getByTestId(SocialMediaLink.name);

    await expect(socialMediaElement).toBeInTheDocument();
    await expect(socialMediaElement).toHaveAttribute(
      "href",
      "https://www.instagram.com/alasdair009"
    );
  },
};

export const YouTube: StoryObj<typeof SocialMediaLink> = {
  args: {
    variant: "youtube",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const socialMediaElement = canvas.getByTestId(SocialMediaLink.name);

    await expect(socialMediaElement).toBeInTheDocument();
    await expect(socialMediaElement).toHaveAttribute(
      "href",
      "https://www.youtube.com/alasdair009"
    );
  },
};
