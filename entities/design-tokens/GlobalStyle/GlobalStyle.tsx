"use client";
import { resets } from "./resets";
import { Global } from "@storybook/theming";

/**
 * Global style setup for JDS.
 */
export function GlobalStyle(): JSX.Element {
  return <Global styles={resets} />;
}
