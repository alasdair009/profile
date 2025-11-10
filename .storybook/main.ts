// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { createRequire } from "node:module";
import type { StorybookConfig } from "@storybook/nextjs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);
const path = require("path");
import webpack from "webpack";

const config: StorybookConfig = {
  stories: [
    "../entities/**/*.mdx",
    "../entities/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  features: { experimentalRSC: true },
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
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

    // 🧩 Add DefinePlugin to inject Sanity (and any Storybook) environment variables
    (config.plugins ||= []).push(
      new webpack.DefinePlugin({
        // Useful flag for storybook-only code paths
        "process.env.STORYBOOK": JSON.stringify("true"),

        // Map STORYBOOK_ vars (from Vercel) to the NEXT_PUBLIC_ vars your Sanity client expects
        "process.env.NEXT_PUBLIC_SANITY_PROJECT_ID": JSON.stringify(
          process.env.STORYBOOK_SANITY_PROJECT_ID || ""
        ),
        "process.env.NEXT_PUBLIC_SANITY_DATASET": JSON.stringify(
          process.env.STORYBOOK_SANITY_DATASET || ""
        ),
        "process.env.NEXT_PUBLIC_SANITY_API_VERSION": JSON.stringify(
          process.env.STORYBOOK_SANITY_API_VERSION || "2023-01-01"
        ),
      })
    );

    return config;
  },
};
export default config;
