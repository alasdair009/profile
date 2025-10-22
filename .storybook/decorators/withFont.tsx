import { DecoratorFunction } from "storybook/internal/csf";
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
