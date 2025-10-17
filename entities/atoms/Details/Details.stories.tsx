import { Details } from "./Details";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, waitFor, within } from "storybook/test";
import { Heading, Paragraph } from "@/entities";

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

    await waitFor(() =>
      expect(canvas.getByText(args.summary)).toBeInTheDocument()
    );
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

    await waitFor(() =>
      expect(canvas.getByText("First details")).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(canvas.getByText("Second details")).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(canvas.getByText("Third details")).toBeInTheDocument()
    );
  },
};
