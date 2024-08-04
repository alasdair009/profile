import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { Heading, HorizontalRule, Paragraph } from "@/entities";
import TrampolineMoveNetwork from "./components/TrampolineMoveNetwork/TrampolineMoveNetwork";

export const metadata: Metadata = generateMetaData(
  "Trampolining",
  "Thoughts and ideas on my trampoline journey",
  "about-me/trampolining"
);

export default async function Trampolining() {
  return (
    <>
      <Heading>Trampolining</Heading>
      <Paragraph>
        I have been involved with trampolining since the age of 4 in performing,
        coaching and judging.
      </Paragraph>
      <HorizontalRule />
      <TrampolineMoveNetwork />
    </>
  );
}
