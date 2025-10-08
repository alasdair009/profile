import { LabelledFile } from "./LabelledFile";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";
import { BaseFile } from "@/entities";

const meta: Meta<typeof LabelledFile> = {
  component: LabelledFile,
  args: {
    name: "textentry",
    required: true,
    isInvalid: false,
    label: "File entry",
    errorText: "",
  },
};
export default meta;

export const Default: StoryObj<typeof LabelledFile> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledFile.name);
    await canvas.findByTestId(BaseFile.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText("File entry")).toBeInTheDocument();
    await expect(canvas.getByTestId(BaseFile.name)).toHaveAttribute(
      "type",
      "file"
    );
  },
};

export const Required: StoryObj<typeof LabelledFile> = {
  args: {
    label: "Required entry",
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledFile.name);
    await canvas.findByTestId(BaseFile.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText("Required entry")).toBeInTheDocument();
    await expect(canvas.getByTestId(BaseFile.name)).toHaveAttribute("required");
  },
};

export const IsInvalid: StoryObj<typeof LabelledFile> = {
  args: {
    label: "isInvalid entry",
    required: true,
    isInvalid: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByTestId(BaseFile.name);

    await expect(canvas.getByTestId(BaseFile.name)).toHaveStyle(
      "background-color: rgba(223,28,65,0.15)"
    );
  },
};
