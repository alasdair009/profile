/**
 * Boolean to represent whether the client has opted to reduce motion in a browser
 */
export const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
