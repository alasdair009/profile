import { UnorderedList } from "./UnorderedList";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { TextMask } from "@/entities";

const meta: Meta<typeof UnorderedList> = {
  component: UnorderedList,
  args: {
    children: (
      <>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </>
    ),
    align: "left",
  },
  argTypes: {
    children: {
      type: "string",
    },
  },
};
export default meta;

export const Default: StoryObj<typeof UnorderedList> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const listElement = canvas.getByTestId(UnorderedList.name);

    await expect(listElement).toBeInTheDocument();
    await expect(listElement.children).toHaveLength(3);
    await expect(listElement.children[0]).toHaveTextContent("First item");
    await expect(listElement.children[1]).toHaveTextContent("Second item");
    await expect(listElement.children[2]).toHaveTextContent("Third item");
  },
};
