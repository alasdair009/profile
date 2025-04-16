import type { Preview } from "@storybook/react";
import theme from "./theme";
import {
  breakpoints,
  device,
} from "../entities/design-tokens/dimensions/dimensions";
import { ViewportMap } from "@storybook/addon-viewport";
import "../app/styles/global.scss";

const customViewports: ViewportMap = {};

(Object.keys(breakpoints) as (keyof typeof breakpoints)[]).forEach(
  (breakpointKey) => {
    if (breakpoints[breakpointKey] > 0) {
      customViewports[breakpointKey] = {
        name: `${breakpointKey} (${device[breakpointKey] ? device[breakpointKey] : `min-width: ${breakpoints[breakpointKey]}px`})`,
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
    options: {
      storySort: {
        order: [
          "Alasdair Macrae Design",
          "Design Tokens",
          "atoms",
          "molecules",
          "organisms",
          "templates",
          "experimental",
        ],
      },
    },
    viewport: {
      viewports: customViewports,
    },
  },

  tags: ["autodocs"],
};

export default preview;
