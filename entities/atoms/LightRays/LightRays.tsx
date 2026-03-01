import { HTMLAttributes } from "react";
import LightRaysExport from "./LightRaysExport";
import styles from "./LightRays.module.css";
import { colors } from "../../../styles/tokens";

type LightRaysProps = {} & HTMLAttributes<HTMLDivElement>;

/**
 * Light rays shining from the top of the background down to the bottom.
 */
export function LightRays({ className = "", ...rest }: LightRaysProps) {
  return (
    <LightRaysExport
      className={`${styles.root} ${className}`}
      data-testid={LightRays.displayName}
      raysColor={colors.greenGrass}
      rayLength={3}
      fadeDistance={2}
      {...rest}
    />
  );
}
LightRays.displayName = "LightRays";
