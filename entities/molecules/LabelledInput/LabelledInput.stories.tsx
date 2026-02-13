import { LabelledInput } from "./LabelledInput";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";
import { BaseInput } from "@/entities";

const meta: Meta<typeof LabelledInput> = {
  component: LabelledInput,
  args: {
    name: "textentry",
    defaultValue: "hello",
    required: true,
    isInvalid: false,
    label: "Text entry",
    type: "text",
    errorText: "",
  },
};
export default meta;

export const Text: StoryObj<typeof LabelledInput> = {
  args: {
    label: "Text entry",
    type: "text",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledInput.name);
    await canvas.findByTestId(BaseInput.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText("Text entry")).toBeInTheDocument();
    await expect(canvas.getByTestId(BaseInput.name)).toHaveAttribute(
      "type",
      "text"
    );
  },
};

export const Email: StoryObj<typeof LabelledInput> = {
  args: {
    label: "Email entry",
    type: "email",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledInput.name);
    await canvas.findByTestId(BaseInput.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText("Email entry")).toBeInTheDocument();
    await expect(canvas.getByTestId(BaseInput.name)).toHaveAttribute(
      "type",
      "email"
    );
  },
};

export const Password: StoryObj<typeof LabelledInput> = {
  args: {
    label: "Password entry",
    type: "password",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledInput.name);
    await canvas.findByTestId(BaseInput.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText("Password entry")).toBeInTheDocument();
    await expect(canvas.getByTestId(BaseInput.name)).toHaveAttribute(
      "type",
      "password"
    );
  },
};

export const Required: StoryObj<typeof LabelledInput> = {
  args: {
    label: "Required entry",
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledInputElement = canvas.getByTestId(LabelledInput.name);
    await canvas.findByTestId(BaseInput.name);

    await expect(labelledInputElement).toBeInTheDocument();
    await expect(canvas.getByText("Required entry")).toBeInTheDocument();
    await expect(canvas.getByTestId(BaseInput.name)).toHaveAttribute(
      "required"
    );
  },
};

export const IsInvalid: StoryObj<typeof LabelledInput> = {
  args: {
    label: "isInvalid entry",
    required: true,
    isInvalid: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByTestId(BaseInput.name);

    await expect(canvas.getByTestId(BaseInput.name)).toHaveStyle(
      "background-color: color(srgb 0.87451 0.109804 0.254902 / 0.15)"
    );
  },
};
