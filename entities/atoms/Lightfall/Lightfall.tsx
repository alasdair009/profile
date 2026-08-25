"use client";
import { HTMLAttributes } from "react";
import styles from "./Lightfall.module.css";
import LightfallExport from "./LightfallExport";
import { colors } from "@/styles/tokens";
import { useEffect, useRef, useState } from "react";

type LightfallProps = {
  /**
   * Color of the soft ambient glow behind the streaks.
   */
  backgroundColor?: string;
  /**
   * Colour for the light particles.
   */
  color1?: string;
  /**
   * Colour for the light particles.
   */
  color2?: string;
  /**
   * Colour for the light particles.
   */
  color3?: string;
} & HTMLAttributes<HTMLIFrameElement>;

/**
 * Large container with animated falling stars.
 */
export function Lightfall({
  className = "",
  backgroundColor = colors.greenGrass,
  color1 = colors.greenGrass,
  color2 = colors.greenGrass,
  color3 = colors.whiteGhost,
  children,
  ...rest
}: LightfallProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={Lightfall.displayName}
      ref={rootRef}
      {...rest}
    >
      <LightfallExport
        colors={[color1, color2, color3]}
        backgroundColor={backgroundColor}
        className={styles.lights}
        paused={!isVisible}
        speed={0.5}
        streakCount={9}
        streakWidth={0.2}
        streakLength={1}
        glow={0.7}
        density={0.4}
        twinkle={1}
        zoom={1.3}
        backgroundGlow={0.5}
        opacity={1}
        mouseInteraction={false}
        mouseStrength={2.8}
        mouseRadius={2}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
Lightfall.displayName = "Lightfall";
