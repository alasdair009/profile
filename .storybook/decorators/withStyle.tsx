import { DecoratorFunction } from "storybook/internal/csf";
import "@fontsource-variable/inter";

export const withStyle: DecoratorFunction = (Story) => {
  const css = `--animation-rhythm: 1s;
  box-sizing: border-box;
  interpolate-size: allow-keywords;

  @media (prefers-reduced-motion: reduce) {
    --animation-rhythm: 0s;
  }
  
  * {
    box-sizing: border-box;
  }`;
  return (
    <>
      <style>{css}</style>
      <Story />
    </>
  );
};
