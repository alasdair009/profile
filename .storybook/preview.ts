import type { Preview } from "@storybook/react";
import theme from "./theme";
import {withGlobalStyles} from "./decorators/withGlobalStyles";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: theme,
    },
  },
  decorators: [withGlobalStyles]
};

export default preview;
