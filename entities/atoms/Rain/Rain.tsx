"use client";
import { HTMLAttributes, useEffect, useRef } from "react";
import { lighten, rgba } from "polished";
import { prefersReducedMotion } from "@/entities";
import { LCG, lcgNextRand, makeLCG } from "@/lib/random";
import styles from "./Rain.module.scss";

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
  ...rest
}: RainProps) {
  const rainLCG = makeLCG();
  const rainCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const rain: RainDrop[] = [];
  const rainTrough: RainTrough[] = [];
  const troughColor = lighten(0.02, rainColor);

  const drawRain = (ctx: CanvasRenderingContext2D, i: number) => {
    ctx.beginPath();
    ctx.moveTo(rain[i].x, rain[i].y);
    ctx.lineTo(
      rain[i].x + rain[i].l * rain[i].xs,
      rain[i].y + rain[i].l * rain[i].ys
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
      rainTrough[i].y,
      0,
      rainTrough[i].y + rainTrough[i].length
    );
    grd.addColorStop(0, rgba(troughColor, 0));
    grd.addColorStop(1, rgba(troughColor, rainTrough[i].opacity));

    ctx.fillStyle = grd;
    ctx.fillRect(rainTrough[i].x, rainTrough[i].y, 1, rainTrough[i].length);
    ctx.fill();
  };

  const clear = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.clearRect(0, 0, w, h);
  };

  const createRain = (w: number, h: number) => {
    for (let i = 0; i < rainDrops; i++) {
      rain[i] = {
        x: lcgNextRand(rainLCG) * w,
        y: lcgNextRand(rainLCG) * h,
        l: lcgNextRand(rainLCG),
        xs: -4 + lcgNextRand(rainLCG) * 4 + 2,
        ys: lcgNextRand(rainLCG) * 10 + 10,
      };
    }
  };

  const createRainTrough = (w: number, h: number) => {
    for (let i = 0; i < rainDrops; i++) {
      rainTrough[i] = {
        x: random(rainLCG, 0, w),
        y: random(rainLCG, 0, h),
        length: Math.floor(random(rainLCG, 1, 830)),
        opacity: lcgNextRand(rainLCG) * 0.2,
        xs: random(rainLCG, -2, 2),
        ys: random(rainLCG, 10, 20),
      };
    }
  };

  const animate = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    clear(ctx, w, h);

    for (let i = 0; i < rainDrops; i++) {
      if (!prefersReducedMotion) {
        rain[i].x += rain[i].xs;
        rain[i].y += rain[i].ys;
        if (rain[i].x > w || rain[i].y > h) {
          rain[i].x = lcgNextRand(rainLCG) * w;
          rain[i].y = -20;
        }
      }
      drawRain(ctx, i);

      if (!prefersReducedMotion) {
        if (rainTrough[i].y >= h) {
          rainTrough[i].y = h - rainTrough[i].y - rainTrough[i].length * 5;
        } else {
          rainTrough[i].y += speedRainTrough;
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
  }, [drawRain]);

  return (
    <div className={styles.rainCanvasWrapper} data-testid={Rain.name} {...rest}>
      <canvas
        className={styles.rainCanvas}
        ref={rainCanvasRef}
        data-chromatic="ignore"
      />
    </div>
  );
}
