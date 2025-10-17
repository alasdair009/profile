import { Meta, StoryObj } from "@storybook/nextjs";
import { BlogList } from "./BlogList";
import { expect, waitFor, within } from "storybook/test";
import { mockSanityClient } from "@/lib/sanity/mocks";

const meta: Meta<typeof BlogList> = {
  component: BlogList,
  args: {
    sanityClient: mockSanityClient,
  },
  parameters: {
    rsc: true,
  },
};
export default meta;

export const Default: StoryObj<typeof BlogList> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() =>
      expect(canvas.getByTestId(BlogList.displayName)).toBeInTheDocument()
    );
  },
};
