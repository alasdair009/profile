import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { Heading, Paragraph } from "@/entities";
import { Calculation } from "./components/Calculation";
import { kaprekarConstant } from "./components/constants";

export const metadata: Metadata = generateMetaData(
  "Kaprekar's Constant Tech Demo",
  `A small demonstration of Kaprekar's Constant: the number ${kaprekarConstant}.`,
  "portfolio/runescape"
);

export default async function RuneScapePage() {
  return (
    <>
      <Heading>Kaprekar&apos;s Constant</Heading>
      <Paragraph>
        Kaprekar&apos;s Constant is a mathematical constant that arises from a
        process involving the rearrangement of digits in a number. The process
        involves taking a four-digit number, arranging its digits in descending
        and ascending order, subtracting the smaller number from the larger one,
        and repeating the process with the result. Eventually, the process will
        reach the number {kaprekarConstant}, which is known as Kaprekar&apos;s
        Constant.
      </Paragraph>
      <Calculation />
    </>
  );
}
