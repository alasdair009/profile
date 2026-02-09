"use client";

import { HTMLAttributes, useEffect, useRef, useState } from "react";
import styles from "./Flame.module.css";

type FireProps = {
  /**
   * The length of time the particles rise for.
   */
  maxLife?: number;
  /**
   * Movement speed of the flames.
   */
  speed?: number;
  /**
   * Size of the flame particles.
   */
  size?: number;
  /**
   * Flame colour.
   */
  baseColor?: string;
  /**
   * Number of fire particles to animate per frame.
   */
  particlesPerFrame?: number;
  /**
   * Percentage along the base the fire spreads by.
   */
  spreadPercentage?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * A single fire particle.
 */
class Particle {
  public x: number;
  public y: number;
  public xs: number;
  public ys: number;
  public life: number;
  constructor(x: number, y: number, xs: number, ys: number) {
    this.x = x;
    this.y = y;
    this.xs = xs;
    this.ys = ys;
    this.life = 0;
  }
}

export const defaultBaseColor = "#ff3200";
const colourPattern = "^#([A-Fa-f0-9]{6})$";

/**
 * Convert a hex to it's RGB values.
 * @param hex
 */
const hexToRgb = (hex: string) => {
  if (hex.match(colourPattern)) {
    const colourWithoutHash = hex.replace("#", "");
    return {
      r: parseInt(colourWithoutHash.substring(0, 2), 16),
      g: parseInt(colourWithoutHash.substring(2, 4), 16),
      b: parseInt(colourWithoutHash.substring(4, 6), 16),
    };
  }

  if (hex !== defaultBaseColor) {
    return hexToRgb(defaultBaseColor);
  }

  return { r: 0, g: 0, b: 0 };
};

/**
 * Canvas rendered flame with customisable size and intensity.
 */
export function Flame({
  children,
  className,
  maxLife = 40,
  speed = 3,
  size = 10,
  particlesPerFrame = 20,
  spreadPercentage = 10,
  baseColor = defaultBaseColor,
  ...rest
}: FireProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasHeight, setCanvasHeight] = useState(0);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const rgbColors = hexToRgb(baseColor);

  useEffect(() => {
    const particles: Particle[] = [];
    let interval: NodeJS.Timeout;
    const resizeCanvas = (ctx: CanvasRenderingContext2D) => {
      if (!canvasRef.current || !containerRef.current) {
        return;
      }
      setCanvasHeight(containerRef.current.clientHeight);
      setCanvasWidth(containerRef.current.clientWidth);
      ctx.globalCompositeOperation = "lighter";
    };

    const update = (ctx: CanvasRenderingContext2D) => {
      const xSpawn = canvasWidth / 2;
      const ySpawn = canvasHeight - 20;
      const spreadWidth = (canvasWidth / 100) * spreadPercentage;

      //Adds ten new particles every frame
      for (let i = 0; i < particlesPerFrame; i++) {
        const random = Math.floor(Math.random() * spreadWidth);
        const p = new Particle(
          xSpawn - spreadWidth / 2 + random,
          ySpawn,
          (Math.random() * 2 * speed - speed) / 2,
          0 - Math.random() * 2 * speed
        );
        particles.push(p);
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      //Cycle through all the particles to draw them
      for (let i = 0; i < particles.length; i++) {
        //Set the file colour to an RGBA value where it starts off red-orange, but progressively gets more grey and transparent the longer the particle has been alive for
        ctx.fillStyle = `rgba(${rgbColors.r - particles[i].life * 2}, ${rgbColors.g + particles[i].life * 2}, ${rgbColors.b + particles[i].life * 2}, ${((maxLife - particles[i].life) / maxLife) * 0.4})`;

        ctx.beginPath();
        //Draw the particle as a circle, which gets slightly smaller the longer it's been alive for
        ctx.arc(
          particles[i].x,
          particles[i].y,
          ((maxLife - particles[i].life) / maxLife) * (size / 2) + size / 2,
          0,
          2 * Math.PI
        );
        ctx.fill();

        //Move the particle based on its horizontal and vertical speeds
        particles[i].x += particles[i].xs;
        particles[i].y += particles[i].ys;

        particles[i].life++;
        //If the particle has lived longer than we are allowing, remove it from the array.
        if (particles[i].life >= maxLife) {
          particles.splice(i, 1);
          i--;
        }
      }
    };

    const init = () => {
      if (!canvasRef.current) {
        return;
      }
      const ctx = canvasRef.current.getContext("2d");

      if (!ctx) {
        return;
      }

      ctx.globalCompositeOperation = "xor";

      window.addEventListener("resize", function () {
        resizeCanvas(ctx);
        ctx.globalCompositeOperation = "lighter";
      });
      resizeCanvas(ctx);
      interval = setInterval(() => update(ctx), 40);
    };

    init();

    return () => {
      clearInterval(interval);
    };
  }, [
    canvasWidth,
    canvasHeight,
    spreadPercentage,
    particlesPerFrame,
    speed,
    rgbColors.r,
    rgbColors.g,
    rgbColors.b,
    maxLife,
    size,
  ]);

  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={Flame.displayName}
      ref={containerRef}
      {...rest}
    >
      <canvas
        ref={canvasRef}
        height={canvasHeight}
        width={canvasWidth}
      ></canvas>
    </div>
  );
}
Flame.displayName = "Flame";
