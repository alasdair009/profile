import { create } from "storybook/theming/create";
// @ts-ignore
import amLogo from "./assets/am.svg";
import { interFont } from "../entities/design-tokens/typography";

export default create({
  base: "dark",

  fontBase: interFont.style.fontFamily,
  fontCode: "monospace",

  brandTitle: "Alasdair Macrae",
  brandUrl: "https://www.alasdairmacrae.co.uk",
  brandImage: amLogo,
  brandTarget: "_self",

  colorPrimary: "#2E9B26",
  colorSecondary: "#3487F5",

  // UI
  appBg: "#222425",
  appContentBg: "#222425",
  appBorderColor: "#585C6D",
  appBorderRadius: 4,

  // Text colors
  textColor: "#fff",
  textInverseColor: "#fff",

  // Toolbar default and active colors
  barHoverColor: "#051d04",
  barTextColor: "#fff",
  barSelectedColor: "#004400",
  barBg: "#2E9B26",
  buttonBg: "#2E9B26",
  buttonBorder: "#000",

  // Form colors
  inputBg: "#000",
  inputBorder: "#585C6D",
  inputTextColor: "#fff",
  inputBorderRadius: 2,
  booleanBg: "#004400",
  booleanSelectedBg: "#2E9B26",
});
