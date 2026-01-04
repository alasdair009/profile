/* eslint-disable no-console */
import fs from "fs";
import path from "path";
import { allTokens } from "../app/styles/tokens";

function toCss(vars: Record<string, string>) {
  return `:root {\n${Object.entries(vars)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join("\n")}\n}`;
}

const outCss = path.join("app/styles/_generated.css");

const cssContent = toCss(allTokens);

fs.mkdirSync(path.dirname(outCss), { recursive: true });

fs.writeFileSync(outCss, cssContent);

console.log("Generated CSS vars + typings!");
