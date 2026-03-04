import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/nextjs-vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { mergeConfig } from "vite";
import { dirname, resolve as resolvePath } from "node:path";

const emptyShim = resolvePath(__dirname, "./shims/empty.ts");

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
    name: "@storybook/nextjs-vite",
    options: {},
  },
  docs: {},
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    const mockGetData = resolvePath(__dirname, "./mocks/getData.ts");
    const mysql2PromiseShim = resolvePath(
      __dirname,
      "./shims/mysql2-promise.ts"
    );

    return mergeConfig(config, {
      resolve: {
        alias: {
          "@/entities": resolvePath(__dirname, "../entities"),
          "@/lib": resolvePath(__dirname, "../lib"),

          // Stub server-only loader used by TrampolineMoveNetwork
          "entities/pages/AboutMe/Trampolining/components/TrampolineMoveNetwork/getData":
            mockGetData,
          "entities/pages/AboutMe/Trampolining/components/TrampolineMoveNetwork/getData.ts":
            mockGetData,

          // Node built-ins stubs
          fs: emptyShim,
          net: emptyShim,
          tls: emptyShim,

          // Optional safety net (keep if you want future-proofing)
          "mysql2/promise": mysql2PromiseShim,
          mysql2: mysql2PromiseShim,
        },
      },
      optimizeDeps: {
        exclude: ["mysql2", "mysql2/promise"],
      },
      define: {
        "process.env.STORYBOOK": JSON.stringify("true"),
        "process.env.NEXT_PUBLIC_SANITY_PROJECT_ID": JSON.stringify(
          process.env.STORYBOOK_SANITY_PROJECT_ID || ""
        ),
        "process.env.NEXT_PUBLIC_SANITY_DATASET": JSON.stringify(
          process.env.STORYBOOK_SANITY_DATASET || ""
        ),
        "process.env.NEXT_PUBLIC_SANITY_API_VERSION": JSON.stringify(
          process.env.STORYBOOK_SANITY_API_VERSION || "2023-01-01"
        ),
      },
    });
  },
};
export default config;
