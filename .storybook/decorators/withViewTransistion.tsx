import { DecoratorFunction } from "storybook/internal/csf";
import { ViewTransitions } from "next-view-transitions";

export const withViewTransistion: DecoratorFunction = (Story) => {
  return (
    <ViewTransitions>
      <Story />
    </ViewTransitions>
  );
};
