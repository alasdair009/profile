"use client";
import { resets } from "./resets";
import { Global } from "@storybook/theming";
import { recaptcha } from "./recaptcha";
import { motionStyles } from "../animations";

/**
 * Global style setup for JDS.
 */
export function GlobalStyle(): JSX.Element {
  return <Global styles={`${resets} ${recaptcha} ${motionStyles}`} />;
}
