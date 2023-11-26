import type { Args, Decorator } from "@storybook/react";

import { GlobalStyle } from "../../entities/design-tokens/GlobalStyle";

export const withGlobalStyles: Decorator<Args> = (Story) => {
  return (
    <>
      <GlobalStyle />
      <Story />
    </>
  );
};
