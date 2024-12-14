import { css } from "styled-components";
import { CSSProperties } from "react";

export const animationRhythmVariableName = "animation-rhythm";
export const motionStyles = `
  :root {
    --${animationRhythmVariableName}: 1s;

    @media (prefers-reduced-motion: reduce) {
      --${animationRhythmVariableName}: 0s;
    }
  }
`;

/**
 * Return a css calc for the number of seconds. If the user prefers reduced motion this will result in 0
 * @param seconds - the number of whole seconds for the animation duration
 */
export const animationDurationCSS = (
  seconds: number
): CSSProperties["animationDuration"] => {
  return `calc(var(--${animationRhythmVariableName}) * ${seconds})`;
};

/**
 * Boolean to represent whether the client has opted to reduce motion in a browser
 */
export const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;

/**
 * A reusable ternary for js based animation duration. If the user prefers reduced motion this will return 0
 * @param milliseconds - the number of milliseconds to animate for
 */
export const animationDurationJs = (milliseconds: number): number => {
  /* istanbul ignore next */
  return prefersReducedMotion ? 0 : milliseconds;
};
