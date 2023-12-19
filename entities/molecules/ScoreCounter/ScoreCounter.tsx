"use client";
import { ProgressRing, Root } from "./styles";
import { HTMLAttributes, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type ScoreCounterProps = {
  value?: number;
} & HTMLAttributes<HTMLDivElement>;

export function ScoreCounter({ value = 100, ...rest }: ScoreCounterProps) {
  const [progressValue, setProgressValue] = useState(0);

  const { ref, inView } = useInView();

  useEffect(() => {
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
    <Root $value={progressValue} ref={ref} {...rest}>
      <ProgressRing max={100} value={progressValue} />
    </Root>
  );
}
