import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { StaticImageData } from "next/image";
import { EffectBox } from "./EffectBox";
import Image from "next/image";
import styles from "./Flurry.module.scss";

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
export function Flurry({
  particlesPerPlate = 500,
  particleBaseDuration = 30,
  particleBlocks = 4,
  children,
  background,
  backgroundAlt,
  style,
  ...rest
}: FlurryProps) {
  const effectBoxes: ReactNode[] = [];
  for (let i = 1; i <= particleBlocks; i++) {
    effectBoxes.push(
      <EffectBox
        key={`Flurry${particlesPerPlate}${particleBaseDuration}${particleBlocks}${particleBlocks}${i}`}
        index={i}
        particlesPerPlate={particlesPerPlate}
        data-chromatic="ignore"
      />
    );
  }

  return (
    <div
      className={styles.root}
      data-testid={Flurry.name}
      style={
        {
          "--particleBaseDuration": particleBaseDuration,
          "--particleBlocks": particleBlocks,
          "--particlesPerPlate": particlesPerPlate,
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      <div className={styles.inner}>{effectBoxes}</div>
      {background && backgroundAlt && (
        <Image
          className={styles.silhouette}
          src={background}
          alt={backgroundAlt}
        />
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
