import { defineConfig, globalIgnores } from "eslint/config";

import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

import storybook from "eslint-plugin-storybook";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  globalIgnores([
    "storybook-static/**",
    "scripts/**",
    ".next/**",
    "out/**",
    "build/**",
  ]),

  ...nextCoreWebVitals,
  ...nextTypescript,

  ...storybook.configs["flat/recommended"],

  prettier,
]);
