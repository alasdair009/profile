import {
  BlockQuote,
  CopyBlock,
  Flurry,
  Heading,
  HorizontalRule,
  Paragraph,
  sizes,
  Trampoline,
} from "@/entities";
import { getTotalExperienceYears } from "@/lib/data/professional";
import Image from "next/image";
import skyImage from "@/entities/assets/sky.jpg";

export default function Portfolio() {
  return (
    <>
      <Flurry>
        <Heading>Portfolio</Heading>
        <Paragraph>
          I am a front-end web engineer with a passion for solving complex
          problems with elegant solutions.
        </Paragraph>
        <Paragraph>
          I have over <strong>{getTotalExperienceYears()}</strong> years
          experience in web development building sites and apps for games
          studios and volunteer projects.
        </Paragraph>
      </Flurry>
      <HorizontalRule margin="none" />
      <CopyBlock>
        <BlockQuote>
          We are alive, for a moment, one second in the great abyss of time...
        </BlockQuote>
      </CopyBlock>
      <HorizontalRule margin="none" />
      <div
        style={{
          clipPath: "inset(0)",
          height: sizes.s512.rem,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          placeholder="blur"
          src={skyImage}
          alt="Ali trampolining outside somersaulting in the air"
          style={{
            height: "100%",
            left: 0,
            objectFit: "cover",
            position: "fixed",
            top: 0,
            width: "100%",
          }}
        />
      </div>
    </>
  );
}
