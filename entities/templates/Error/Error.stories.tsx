import { Meta, StoryObj } from "@storybook/nextjs";
import { Error } from "./Error";
import { expect, within } from "storybook/test";
import { Link } from "@/entities";

const meta: Meta<typeof Error> = {
  component: Error,
  args: {
    errorCode: 404,
    errorHeading: "Whoops!",
    errorText: "Could not find the page you were looking",
    children: (
      <Link href="/" style={{ margin: "0 auto" }}>
        Return Home
      </Link>
    ),
  },
};
export default meta;

export const Default: StoryObj<typeof Error> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const errorElement: HTMLDivElement = canvas.getByTestId(Error.name);

    await expect(errorElement).toBeInTheDocument();
  },
};
