import { Silhouette, Content, EffectBox, Inner, Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { StaticImageData } from "next/image";

type FlurryProps = {
  particlesPerPlate?: number;
  particleBaseDuration?: number;
  particleBlocks?: number;
  background?: StaticImageData;
  backgroundAlt?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Flurry({
  particlesPerPlate = 500,
  particleBaseDuration = 30,
  particleBlocks = 4,
  children,
  background,
  backgroundAlt,
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
      {background && backgroundAlt && (
        <Silhouette src={background} alt={backgroundAlt} />
      )}
      <Content>{children}</Content>
    </Root>
  );
}
