import { IFrame } from "./IFrame";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import amLogo from "../../assets/am.svg";
import { ComponentProps } from "react";
import { StepFunction } from "storybook/internal/csf";

const meta: Meta<typeof IFrame> = {
  component: IFrame,
  args: {
    src: "https://www.alasdairmacrae.co.uk",
    title: "IFrame of Alasdair's profile site",
  },
  play: async ({ args, canvasElement, step }) =>
    iFrameTests(args, canvasElement, step),
};
export default meta;

export const Default: StoryObj<typeof IFrame> = {};

export const Placeholder: StoryObj<typeof IFrame> = {
  args: {
    placeholder: {
      image: amLogo,
      alt: "my logo",
    },
  },
};

const iFrameTests = async (
  args: ComponentProps<typeof IFrame>,
  canvasElement: HTMLElement,
  step: StepFunction
) => {
  const canvas = within(canvasElement);
  const iFrameElement = canvas.getByTestId(IFrame.displayName);
  const iFrameElementPlaceholder = canvas.queryByTestId(
    `${IFrame.displayName}Placeholder`
  );
  const iFrameElementFrame = canvas.getByTestId(`${IFrame.displayName}Frame`);

  await step(`Check the iframe renders`, async () => {
    await expect(iFrameElement).toBeInTheDocument();
    if (args.placeholder) {
      await expect(iFrameElementPlaceholder).toBeInTheDocument();
    } else {
      await expect(iFrameElementPlaceholder).not.toBeInTheDocument();
    }
    await expect(iFrameElementFrame).toBeInTheDocument();
  });

  await step(`Check attributes`, async () => {
    if (args.placeholder) {
      await expect(iFrameElementFrame).not.toHaveAttribute("src");
    } else {
      await expect(iFrameElementFrame).toHaveAttribute("src", args.src);
    }
  });

  if (args.placeholder) {
    await step(`Check placeholder`, async () => {
      await expect(
        // @ts-expect-error args.placeholder is already confirmed as defined
        canvas.getByAltText(args.placeholder.alt)
      ).toBeInTheDocument();
      await userEvent.click(iFrameElementPlaceholder as HTMLElement);
      await expect(iFrameElementFrame).toHaveAttribute("src", args.src);
      await expect(
        canvas.queryByTestId(`${IFrame.displayName}Placeholder`)
      ).not.toBeInTheDocument();
    });
  }
};
