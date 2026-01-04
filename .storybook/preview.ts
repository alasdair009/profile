import type { Preview } from "@storybook/nextjs";
import theme from "./theme";
import { breakpoints, device } from "../app/styles/tokens";
import type { Breakpoint } from "../app/styles/styles.types";
import { ViewportMap } from "storybook/viewport";
import "../app/styles/global.css";
import { withFont } from "./decorators/withFont";
import { withStyle } from "./decorators/withStyle";
import "@fontsource-variable/inter";

const customViewports: ViewportMap = {};

(Object.keys(breakpoints) as Array<keyof typeof breakpoints>).forEach(
  (breakpointKey) => {
    if (breakpoints[breakpointKey] > 0) {
      customViewports[breakpointKey] = {
        name: `${breakpointKey} (${device[breakpointKey as Breakpoint] ? device[breakpointKey as Breakpoint] : `min-width: ${breakpoints[breakpointKey]}px`})`,
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
          "pages",
          "experimental",
        ],
      },
    },
    rsc: false,
    viewport: {
      options: customViewports,
    },
  },
  decorators: [withFont, withStyle],
  tags: ["autodocs"],
};

export default preview;
