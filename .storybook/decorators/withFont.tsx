import { DecoratorFunction } from "@storybook/core/csf";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const withFont: DecoratorFunction = (Story) => {
  return (
    <div className={inter.className}>
      <Story />
    </div>
  );
};
