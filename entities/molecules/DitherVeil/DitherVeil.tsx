import DitherVeilExport from "./DitherVeilExport";
import { HTMLAttributes } from "react";
import styles from "./DitherVeil.module.css";
import meImage from "./me-alpha.webp";
import { colors } from "@/styles/tokens";

type DitherVeilProps = {} & HTMLAttributes<HTMLDivElement>;

export function DitherVeil({ className, ...rest }: DitherVeilProps) {
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={DitherVeil.displayName}
      {...rest}
    >
      <DitherVeilExport
        src={meImage.src}
        pattern="floyd"
        pixelSize={2}
        inkColor={colors.blackEvil}
        paperColor={colors.greenGrass}
        revealRadius={200}
        softness={0.6}
        linger={1}
        fit="contain"
        rimColor="#000"
        palette="duotone"
        levels={2}
        contrast={1.15}
        brightness={0.03}
        rim={0}
        reverse={false}
        wander={true}
        clickBurst
      />
    </div>
  );
}
DitherVeil.displayName = "DitherVeil";
