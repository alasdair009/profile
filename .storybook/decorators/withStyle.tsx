import { DecoratorFunction } from "storybook/internal/csf";
import "@fontsource-variable/inter";

export const withStyle: DecoratorFunction = (Story) => {
  const css = `:root{
      --animation-rhythm: 1s;
      box-sizing: border-box;
      interpolate-size: allow-keywords;
  }

  @media (prefers-reduced-motion: reduce) {
    :root {
        --animation-rhythm: 0s;
    }
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
