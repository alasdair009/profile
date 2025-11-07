// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { createRequire } from "node:module";
import type { StorybookConfig } from "@storybook/nextjs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);
const path = require("path");

const config: StorybookConfig = {
  stories: [
    "../entities/**/*.mdx",
    "../entities/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  features: { experimentalRSC: true },
  addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
  chromatic: { projectId: process.env.CHROMATIC_PROJECT_ID },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {},
  staticDirs: ["../public"],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/entities": path.resolve(__dirname, "/entities"),
      "@/lib": path.resolve(__dirname, "/lib"),
    };

    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      tls: false,
      fs: false,
    };

    return config;
  },
};
export default config;
