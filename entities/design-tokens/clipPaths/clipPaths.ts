import { CSSProperties } from "react";
import variables from "./ClipPaths.module.scss";

export const clipPaths: Record<string, CSSProperties["clipPath"]> = JSON.parse(
  variables.clipPaths.replaceAll("'", "")
);
