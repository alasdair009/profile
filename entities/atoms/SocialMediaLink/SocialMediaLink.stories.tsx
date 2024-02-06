import { SocialMediaLink } from "./SocialMediaLink";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SocialMediaLink> = {
  component: SocialMediaLink,
};
export default meta;

export const X: StoryObj<typeof SocialMediaLink> = {
  args: {
    variant: "x",
  },
};

export const LinkedIn: StoryObj<typeof SocialMediaLink> = {
  args: {
    variant: "linkedin",
  },
};

export const GitHub: StoryObj<typeof SocialMediaLink> = {
  args: {
    variant: "github",
  },
};
