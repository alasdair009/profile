import { CSSProperties, HTMLAttributes } from "react";
import { colors } from "@/entities";
import { rem } from "polished";
import styles from "./Cloud.module.scss";

type CloudProps = {
  cloudColor: CSSProperties["color"];
  skyColor?: CSSProperties["background"];
  scale?: number;
  dispersion: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Sky and cloud generated using CSS.
 */
export function Cloud({
  cloudColor = colors.whiteGhost,
  dispersion = 60,
  scale = 180,
  skyColor = "linear-gradient(165deg, #527785 0%, #7fb4c7 100%)",
  style,
  ...rest
}: CloudProps) {
  return (
    <div
      data-testid={Cloud.name}
      className={styles.root}
      style={{ "--skyColor": skyColor, ...style } as CSSProperties}
      {...rest}
    >
      <div
        className={styles.cloudCircle}
        style={
          {
            "--dispersion": rem(dispersion),
            "--cloudColor": cloudColor,
          } as CSSProperties
        }
      />
      <svg width="0" height="0">
        <filter id="cloudFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={0.01}
            numOctaves={10}
          />
          <feDisplacementMap in="SourceGraphic" scale={scale} />
        </filter>
      </svg>
    </div>
  );
}
