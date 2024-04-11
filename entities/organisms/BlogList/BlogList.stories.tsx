import { Meta, StoryObj } from "@storybook/react";
import { BlogList } from "./BlogList";
import { sanityClient } from "@/lib/sanity/client";

const meta: Meta<typeof BlogList> = {
  component: BlogList,
  args: {
    sanityClient: sanityClient,
  },
};
export default meta;

export const Default: StoryObj<typeof BlogList> = {};
