"use client";
import { HTMLAttributes, useEffect, useRef } from "react";
import { RainCanvasWrapper as Root, RainCanvas } from "@/entities/organisms/Lightning/styles";
import { lighten, rgba } from "polished";

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

function random(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

/**
 * A canvas playing a rain animation
 */
export function Rain({ rainColor = "rgb(174,194,224)", rainDrops = 200, speedRainTrough = 25, ...rest }: RainProps) {
  const rainCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const rain: RainDrop[] = [];
  const rainTrough: RainTrough[] = [];
  const troughColor = lighten(0.02, rainColor);

  const drawRain = (ctx: CanvasRenderingContext2D, i: number) => {
    ctx.beginPath();
    ctx.moveTo(rain[i].x, rain[i].y);
    ctx.lineTo(rain[i].x + rain[i].l * rain[i].xs, rain[i].y + rain[i].l * rain[i].ys);
    ctx.strokeStyle = rgba(rainColor, 0.5);
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    ctx.stroke();
  };

  const drawRainTrough = (ctx: CanvasRenderingContext2D, i: number) => {
    ctx.beginPath();
    const grd = ctx.createLinearGradient(0, rainTrough[i].y, 0, rainTrough[i].y + rainTrough[i].length);
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
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random(),
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10,
      };
    }
  };

  const createRainTrough = (w: number, h: number) => {
    for (let i = 0; i < rainDrops; i++) {
      rainTrough[i] = {
        x: random(0, w),
        y: random(0, h),
        length: Math.floor(random(1, 830)),
        opacity: Math.random() * 0.2,
        xs: random(-2, 2),
        ys: random(10, 20),
      };
    }
  };

  const animate = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    clear(ctx, w, h);

    for (let i = 0; i < rainDrops; i++) {
      rain[i].x += rain[i].xs;
      rain[i].y += rain[i].ys;
      if (rain[i].x > w || rain[i].y > h) {
        rain[i].x = Math.random() * w;
        rain[i].y = -20;
      }
      drawRain(ctx, i);

      if (rainTrough[i].y >= h) {
        rainTrough[i].y = h - rainTrough[i].y - rainTrough[i].length * 5;
      } else {
        rainTrough[i].y += speedRainTrough;
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
    <Root {...rest}>
      <RainCanvas ref={rainCanvasRef} />
    </Root>
  );
}
