"use client";
import { HTMLAttributes, useEffect, useRef } from "react";
import { lighten, rgba } from "polished";
import { prefersReducedMotion } from "@/entities";
import { LCG, lcgNextRand, makeLCG } from "@/lib/random";
import styles from "./Rain.module.css";

type RainProps = {
  rainDrops?: number;
  rainColor?: string;
  speedRainTrough?: number;
} & HTMLAttributes<HTMLDivElement>;

type RainDrop = {
  x: number;
  y: number;
  l: number;
  xs: number;
  ys: number;
};

type RainTrough = {
  x: number;
  y: number;
  length: number;
  opacity: number;
  xs: number;
  ys: number;
};

function random(lcg: LCG, min: number, max: number) {
  return lcgNextRand(lcg) * (max - min + 1) + min;
}

/**
 * A canvas playing a rain animation
 */
export function Rain({
  rainColor = "rgb(174,194,224)",
  rainDrops = 200,
  speedRainTrough = 25,
  className,
  ...rest
}: RainProps) {
  const rainLCGRef = useRef<LCG>(makeLCG());
  const rainCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const rainRef = useRef<RainDrop[]>([]);
  const rainTroughRef = useRef<RainTrough[]>([]);
  const troughColor = lighten(0.02, rainColor);

  const drawRain = (ctx: CanvasRenderingContext2D, i: number) => {
    ctx.beginPath();
    ctx.moveTo(rainRef.current[i].x, rainRef.current[i].y);
    ctx.lineTo(
      rainRef.current[i].x + rainRef.current[i].l * rainRef.current[i].xs,
      rainRef.current[i].y + rainRef.current[i].l * rainRef.current[i].ys
    );
    ctx.strokeStyle = rgba(rainColor, 0.5);
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    ctx.stroke();
  };

  const drawRainTrough = (ctx: CanvasRenderingContext2D, i: number) => {
    ctx.beginPath();
    const grd = ctx.createLinearGradient(
      0,
      rainTroughRef.current[i].y,
      0,
      rainTroughRef.current[i].y + rainTroughRef.current[i].length
    );
    grd.addColorStop(0, rgba(troughColor, 0));
    grd.addColorStop(1, rgba(troughColor, rainTroughRef.current[i].opacity));

    ctx.fillStyle = grd;
    ctx.fillRect(
      rainTroughRef.current[i].x,
      rainTroughRef.current[i].y,
      1,
      rainTroughRef.current[i].length
    );
    ctx.fill();
  };

  const clear = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.clearRect(0, 0, w, h);
  };

  const createRain = (w: number, h: number) => {
    for (let i = 0; i < rainDrops; i++) {
      rainRef.current[i] = {
        x: lcgNextRand(rainLCGRef.current) * w,
        y: lcgNextRand(rainLCGRef.current) * h,
        l: lcgNextRand(rainLCGRef.current),
        xs: -4 + lcgNextRand(rainLCGRef.current) * 4 + 2,
        ys: lcgNextRand(rainLCGRef.current) * 10 + 10,
      };
    }
  };

  const createRainTrough = (w: number, h: number) => {
    for (let i = 0; i < rainDrops; i++) {
      rainTroughRef.current[i] = {
        x: random(rainLCGRef.current, 0, w),
        y: random(rainLCGRef.current, 0, h),
        length: Math.floor(random(rainLCGRef.current, 1, 830)),
        opacity: lcgNextRand(rainLCGRef.current) * 0.2,
        xs: random(rainLCGRef.current, -2, 2),
        ys: random(rainLCGRef.current, 10, 20),
      };
    }
  };

  const animate = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    clear(ctx, w, h);

    for (let i = 0; i < rainDrops; i++) {
      if (!prefersReducedMotion) {
        rainRef.current[i].x += rainRef.current[i].xs;
        rainRef.current[i].y += rainRef.current[i].ys;
        if (rainRef.current[i].x > w || rainRef.current[i].y > h) {
          rainRef.current[i].x = lcgNextRand(rainLCGRef.current) * w;
          rainRef.current[i].y = -20;
        }
      }
      drawRain(ctx, i);

      if (!prefersReducedMotion) {
        if (rainTroughRef.current[i].y >= h) {
          rainTroughRef.current[i].y =
            h -
            rainTroughRef.current[i].y -
            rainTroughRef.current[i].length * 5;
        } else {
          rainTroughRef.current[i].y += speedRainTrough;
        }
      }
      drawRainTrough(ctx, i);
    }
  };

  useEffect(() => {
    const rainCanvas = rainCanvasRef.current;
    if (!rainCanvas) {
      return;
    }

    const rainContext = rainCanvas.getContext("2d");
    if (!rainContext) {
      return;
    }

    let w = rainCanvas.width;
    let h = rainCanvas.height;
    window.addEventListener("resize", function () {
      w = rainCanvas.width;
      h = rainCanvas.height;
      createRainTrough(w, h);
    });

    createRain(w, h);
    createRainTrough(w, h);

    const animloop = () => {
      animate(rainContext, w, h);
      requestAnimationFrame(animloop);
    };
    animloop();
  });

  return (
    <div
      className={`${styles.rainCanvasWrapper} ${className}`}
      data-testid={Rain.name}
      {...rest}
    >
      <canvas
        className={styles.rainCanvas}
        ref={rainCanvasRef}
        data-chromatic="ignore"
      />
    </div>
  );
}
