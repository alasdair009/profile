import { Silhouette, Content, EffectBox, Inner, Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { StaticImageData } from "next/image";

type FlurryProps = {
  /**
   * Amount of particles per plate.
   */
  particlesPerPlate?: number;
  /**
   * Base duration of the animation other blocks are based on.
   */
  particleBaseDuration?: number;
  /**
   * Amount of particle blocks.
   */
  particleBlocks?: number;
  /**
   * Background image to display.
   */
  background?: StaticImageData;
  /**
   * Alt text for the background image.
   */
  backgroundAlt?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Background animation with floating orbs.
 */
export function Flurry({ particlesPerPlate = 500, particleBaseDuration = 30, particleBlocks = 4, children, background, backgroundAlt, ...rest }: FlurryProps) {
  const effectBoxes: ReactNode[] = [];
  for (let i = 0; i < particleBlocks; i++) {
    effectBoxes.push(<EffectBox key={`Flurry${particlesPerPlate}${particleBaseDuration}${particleBlocks}${particleBlocks}${i}`} $particleBaseDuration={particleBaseDuration} $particleBlocks={particleBlocks} $particlesPerPlate={particlesPerPlate} />);
  }

  return (
    <Root data-testid={Flurry.name} {...rest}>
      <Inner>{effectBoxes}</Inner>
      {background && backgroundAlt && <Silhouette src={background} alt={backgroundAlt} />}
      <Content>{children}</Content>
    </Root>
  );
}
