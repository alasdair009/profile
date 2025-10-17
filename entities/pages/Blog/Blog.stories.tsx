import { Meta, StoryObj } from "@storybook/nextjs";
import { Blog } from "./Blog";
import { expect, waitFor, within } from "storybook/test";
import { mockSanityClient } from "@/lib/sanity/mocks";

const meta: Meta<typeof Blog> = {
  component: Blog,
  args: {
    sanityClient: mockSanityClient,
  },
  parameters: {
    rsc: true,
  },
};

export default meta;

export const Default: StoryObj<typeof Blog> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() =>
      expect(canvas.getByTestId(Blog.displayName)).toBeInTheDocument()
    );
  },
};
