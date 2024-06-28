import { Details } from "./Details";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";

const meta: Meta<typeof Details> = {
  component: Details,
  argTypes: {
    summary: {
      type: "string",
    },
  },
  args: {
    summary: "Title for the details element",
    children: (
      <>
        <Heading>Content</Heading>
        <Paragraph>
          Some copy to display with the Heading and whatever else takes your
          fancy.
        </Paragraph>
      </>
    ),
  },
};
export default meta;

export const Default: StoryObj<typeof Details> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const summaryElement = canvas.getByText(args.summary);

    await expect(summaryElement).toBeInTheDocument();
  },
};

export const Accordion: StoryObj<typeof Details> = {
  args: {
    name: "accordion",
  },
  render: (args) => (
    <>
      <Details summary="First details" name={args.name}>
        {args.children}
      </Details>
      <Details summary="Second details" name={args.name}>
        {args.children}
      </Details>
      <Details summary="Third details" name={args.name}>
        {args.children}
      </Details>
    </>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const summaryElement1 = canvas.getByText("First details");
    const summaryElement2 = canvas.getByText("Second details");
    const summaryElement3 = canvas.getByText("Third details");

    await expect(summaryElement1).toBeInTheDocument();
    await expect(summaryElement2).toBeInTheDocument();
    await expect(summaryElement3).toBeInTheDocument();
  },
};
