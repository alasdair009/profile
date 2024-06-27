import type { Preview } from "@storybook/react";
import theme from "./theme";
import { withGlobalStyles } from "./decorators/withGlobalStyles";
import {
  breakpoints,
  device,
} from "../entities/design-tokens/dimensions/dimensions";
import { ViewportMap } from "@storybook/addon-viewport";

const customViewports: ViewportMap = {};

(Object.keys(breakpoints) as (keyof typeof breakpoints)[]).forEach(
  (breakpointKey) => {
    if (breakpoints[breakpointKey] > 0) {
      customViewports[breakpointKey] = {
        name: `${breakpointKey} (${
          device[breakpointKey]
            ? device[breakpointKey]
            : `min-width: ${breakpoints[breakpointKey]}px`
        })`,
        styles: {
          height: "100%",
          width: `${breakpoints[breakpointKey]}px`,
        },
        type:
          breakpoints[breakpointKey] > breakpoints.medium
            ? "desktop"
            : "mobile",
      };
    }
  }
);

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: theme,
    },
    viewport: {
      viewports: customViewports,
    },
  },

  decorators: [withGlobalStyles],
  tags: ["autodocs"],
};

export default preview;
