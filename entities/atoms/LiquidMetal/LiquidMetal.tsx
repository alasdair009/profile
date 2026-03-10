import { ComponentProps, CSSProperties, HTMLAttributes } from "react";
import styles from "./LiquidMetal.module.css";
import LiquidChrome from "./LiquidChromeExport";
import { colors } from "../../../styles/tokens";
import { prefersReducedMotion } from "@/entities";

type LiquidMetalProps = {
  /**
   * Thickest colour of the animation.
   */
  baseColor: string;
  /**
   * Maximum displacement moved by a point on a wave.
   */
  amplitude: ComponentProps<typeof LiquidChrome>["amplitude"];
  /**
   * Speed of the animation.
   */
  speed: ComponentProps<typeof LiquidChrome>["speed"];
  /**
   * Opacity of the entity.
   */
  opacity: CSSProperties["opacity"];
  /**
   * Number of pixels of blur of the entity.
   */
  blur: number;
} & HTMLAttributes<HTMLDivElement>;

function hexToRgb(hex: string) {
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const num = parseInt(hex, 16);

  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

/**
 * A moving liquid metal effect that can have the speed, distance and colour modified.
 */
export function LiquidMetal({
  className = "",
  style = {},
  opacity = 0.5,
  blur = 0,
  baseColor = colors.greenGrass,
  amplitude = 0.3,
  speed = 0.3,
  ...rest
}: LiquidMetalProps) {
  if (!baseColor.startsWith("#")) {
    baseColor = colors.greenGrass;
  }
  const { r, g, b } = hexToRgb(baseColor);
  const colorToUse: [number, number, number] = [r / 255, g / 255, b / 255];
  return (
    <LiquidChrome
      className={`${styles.root} ${className}`}
      baseColor={colorToUse}
      speed={prefersReducedMotion ? 0 : speed}
      amplitude={amplitude}
      interactive={false}
      data-testid={LiquidMetal.displayName}
      style={{ ...style, filter: `blur(${blur}px)`, opacity: opacity }}
      {...rest}
    />
  );
}
LiquidMetal.displayName = "LiquidMetal";
