import { Meta, StoryObj } from "@storybook/react";
import { SelectList } from "./SelectList";
import { Figure } from "@/entities/experimental/SelectList/styles";
import { Button, HorizontalRule, Paragraph, sizes } from "@/entities";
import Image from "next/image";
import amLogo from "@/entities/assets/am.svg";
import { expect, userEvent, waitFor, within } from "@storybook/test";

const meta: Meta<typeof SelectList> = {
  component: SelectList,
  args: {
    defaultOption: "Select an option",
    children: (
      <>
        <option value="1">
          <Figure>
            <Image
              src={amLogo}
              alt="am Logo"
              height={sizes.s16.raw}
              width={sizes.s16.raw}
            />
          </Figure>
          <Paragraph>Option 1</Paragraph>
        </option>
        <option value="2">
          <Figure>
            <Image
              src={amLogo}
              alt="am Logo"
              height={sizes.s16.raw}
              width={sizes.s16.raw}
            />
          </Figure>
          <Paragraph>Option 2</Paragraph>
        </option>
        <option value="3">
          <Figure>
            <Image
              src={amLogo}
              alt="am Logo"
              height={sizes.s16.raw}
              width={sizes.s16.raw}
            />
          </Figure>
          <Paragraph>Option 3</Paragraph>
        </option>
        <HorizontalRule margin="none" />
        <option value="all">
          <Figure>
            <Image
              src={amLogo}
              alt="am Logo"
              height={sizes.s16.raw}
              width={sizes.s16.raw}
            />
          </Figure>
          <Paragraph>All Options</Paragraph>
        </option>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        component:
          "An experimental new spec for a standardised styled dropdown box. \n\n _Please note to view this you must be viewing this story in Edge or Chrome with experimental features turned on._",
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof SelectList> = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const selectListElement = canvas.getByTestId(SelectList.name);
    const firstElement = canvas.getByText("Option 1")
      .parentElement as HTMLElement;

    await expect(selectListElement).toBeInTheDocument();
  },
};
