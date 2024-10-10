import { CloudCircle, Root } from "./styles";
import { HTMLAttributes } from "react";

type CloudProps = {
  scale?: number;
  dispersion: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Sky and cloud generated using CSS.
 */
export function Cloud({ dispersion = 60, scale = 180, ...rest }: CloudProps) {
  return (
    <Root data-testid={Cloud.name} {...rest}>
      <CloudCircle $dispersion={dispersion} />
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
    </Root>
  );
}
