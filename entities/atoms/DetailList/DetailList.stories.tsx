import { DetailList } from "./DetailList";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

const meta: Meta<typeof DetailList> = {
  component: DetailList,
  args: {
    children: (
      <>
        <dt>title 1</dt>
        <dd>description 1</dd>
        <dt>title 2</dt>
        <dd>description 2</dd>
        <dt>title 3</dt>
        <dd>description 3</dd>
      </>
    ),
  },
};
export default meta;

export const Default: StoryObj<typeof DetailList> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const detailListElement = canvas.getByTestId(DetailList.displayName);

    await expect(detailListElement).toBeInTheDocument();
    await expect(detailListElement).toHaveTextContent("title 1");
  },
};

export const Inline: StoryObj<typeof DetailList> = {
  args: {
    hasInlineContent: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const detailListElement = canvas.getByTestId(DetailList.displayName);

    await expect(detailListElement).toBeInTheDocument();
    await expect(detailListElement).toHaveTextContent("title 1");
  },
};
