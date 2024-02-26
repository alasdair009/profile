import { UnorderedList } from "./UnorderedList";
import { Meta, StoryObj } from "@storybook/react";

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

export const Default: StoryObj<typeof UnorderedList> = {};
