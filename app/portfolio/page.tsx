import { CopyBlock, Flurry, Heading, Paragraph } from "@/entities";
import { getTotalExperienceYears } from "@/lib/data/professional";

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
      <CopyBlock></CopyBlock>
    </>
  );
}
