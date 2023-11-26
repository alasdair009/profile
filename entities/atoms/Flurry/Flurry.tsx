import { EffectBox, Inner, Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";

type FlurryProps = {
  particlesPerPlate?: number;
  particleBaseDuration?: number;
  particleBlocks?: number;
} & HTMLAttributes<HTMLDivElement>;

export function Flurry({
  particlesPerPlate = 500,
  particleBaseDuration = 30,
  particleBlocks = 4,
  children,
  ...rest
}: FlurryProps) {
  const effectBoxes: ReactNode[] = [];
  for (let i = 0; i < particleBlocks; i++) {
    effectBoxes.push(
      <EffectBox
        key={`Flurry${particlesPerPlate}${particleBaseDuration}${particleBlocks}${particleBlocks}${i}`}
        $particleBaseDuration={particleBaseDuration}
        $particleBlocks={particleBlocks}
        $particlesPerPlate={particlesPerPlate}
      />
    );
  }

  return (
    <Root {...rest}>
      <Inner>{effectBoxes}</Inner>
      <div>{children}</div>
    </Root>
  );
}
