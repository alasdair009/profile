import { Meter } from "./Meter";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Meter> = {
  component: Meter,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    max: {
      control: { type: "range", min: 1, max: 100, step: 1 },
    },
    min: {
      control: { type: "range", min: 1, max: 100, step: 1 },
    },
    low: {
      control: { type: "range", min: 1, max: 100, step: 1 },
    },
    high: {
      control: { type: "range", min: 1, max: 100, step: 1 },
    },
    optimum: {
      control: { type: "range", min: 1, max: 100, step: 1 },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Meter> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const meterElement = canvas.getByTestId(Meter.name);

    await expect(meterElement).toBeInTheDocument();
  },
};

export const Middle: StoryObj<typeof Meter> = {
  args: {
    value: 0.5,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const meterElement = canvas.getByTestId(Meter.name);

    await expect(meterElement).toBeInTheDocument();
  },
};

export const Max: StoryObj<typeof Meter> = {
  args: {
    value: 1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const meterElement = canvas.getByTestId(Meter.name);

    await expect(meterElement).toBeInTheDocument();
  },
};

export const High: StoryObj<typeof Meter> = {
  args: {
    high: 0.8,
    value: 0.9,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const meterElement = canvas.getByTestId(Meter.name);

    await expect(meterElement).toBeInTheDocument();
  },
};

export const Low: StoryObj<typeof Meter> = {
  args: {
    low: 0.2,
    value: 0.1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const meterElement = canvas.getByTestId(Meter.name);

    await expect(meterElement).toBeInTheDocument();
  },
};

export const HighOptimum: StoryObj<typeof Meter> = {
  args: {
    low: 0.3,
    high: 0.7,
    value: 0.2,
    optimum: 0.8,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const meterElement = canvas.getByTestId(Meter.name);

    await expect(meterElement).toBeInTheDocument();
  },
};

export const LowOptimum: StoryObj<typeof Meter> = {
  args: {
    low: 0.3,
    high: 0.7,
    value: 0.8,
    optimum: 0.2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const meterElement = canvas.getByTestId(Meter.name);

    await expect(meterElement).toBeInTheDocument();
  },
};
