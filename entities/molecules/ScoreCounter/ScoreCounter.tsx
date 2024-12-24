"use client";
import { ProgressRing, Root } from "./styles";
import { HTMLAttributes, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { prefersReducedMotion, sizes } from "@/entities";

type ScoreCounterProps = {
  /**
   * Score as a percentage.
   */
  value?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Animated score counter that displays indicated percentage progress.
 */
export function ScoreCounter({ value = 100, ...rest }: ScoreCounterProps) {
  const [progressValue, setProgressValue] = useState(
    prefersReducedMotion ? value : 0
  );

  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (inView) {
      let start = 0;
      if (start >= value) {
        return;
      }

      const progressInterval = setInterval(() => {
        start += 2;
        setProgressValue(start);
        if (start >= value) {
          clearInterval(progressInterval);
        }
      }, 1);

      return () => {
        clearInterval(progressInterval);
      };
    } else {
      setProgressValue(0);
    }
  }, [inView]);

  return (
    <Root
      data-testid={ScoreCounter.name}
      $value={progressValue}
      ref={ref}
      {...rest}
    >
      <ProgressRing max={100} value={progressValue} />
    </Root>
  );
}
