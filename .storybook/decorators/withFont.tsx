import { DecoratorFunction } from "@storybook/core/csf";
import "@fontsource-variable/inter";

export const withFont: DecoratorFunction = (Story) => {
  return (
    <div
      style={{ fontFamily: "'Inter Variable', 'Inter', system-ui, sans-serif" }}
    >
      <Story />
    </div>
  );
};
