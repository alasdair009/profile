import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BlogArticle } from "./BlogArticle";
import { expect, waitFor, within } from "storybook/test";
import { mockPosts, mockSanityClient } from "@/lib/sanity/mocks";

const meta: Meta<typeof BlogArticle> = {
  component: BlogArticle,
  args: {
    sanityClient: mockSanityClient,
    post: mockPosts[0],
  },
};

export default meta;

export const Default: StoryObj<typeof BlogArticle> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() =>
      expect(canvas.getByTestId(BlogArticle.displayName)).toBeInTheDocument()
    );
  },
};
