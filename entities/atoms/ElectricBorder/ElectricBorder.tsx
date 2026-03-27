import ElectricBorderExport from "./ElectricBorderExport";
import { HTMLAttributes } from "react";
import { colors } from "../../../styles/tokens";
import styles from "./ElectricBorder.module.css";
import { prefersReducedMotion } from "@/entities";

type ElectricBorderProps = {
  color?: string;
  speed?: number;
  chaos?: number;
} & HTMLAttributes<HTMLDivElement>;

export function ElectricBorder({
  className = "",
  color = colors.greenGrass,
  speed = 1,
  chaos = 0.12,
  children,
  ...args
}: ElectricBorderProps) {
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={ElectricBorder.displayName}
      {...args}
    >
      <ElectricBorderExport
        color={color}
        speed={prefersReducedMotion ? 0 : speed}
        chaos={chaos}
      >
        {children}
      </ElectricBorderExport>
    </div>
  );
}
ElectricBorder.displayName = "ElectricBorder";
