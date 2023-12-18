"use client";
import { ProgressRing, Root } from "./styles";
import { HTMLAttributes, useEffect, useState } from "react";

type ScoreCounterProps = {
  value?: number;
} & HTMLAttributes<HTMLDivElement>;

export function ScoreCounter({ value = 100, ...rest }: ScoreCounterProps) {
  const [canCount, setCanCount] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    let start = 0;
    if (start >= value) {
      return;
    }
    setCanCount(true);

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
  }, []);

  return (
    <Root $value={progressValue} {...rest}>
      <ProgressRing max={100} value={progressValue} />
    </Root>
  );
}
