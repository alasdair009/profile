import {
  BlockQuote,
  CopyBlock,
  FixedPlate,
  Flurry,
  Heading,
  HorizontalRule,
  Paragraph,
  Timeline,
} from "@/entities";
import {careerHistory, companyDetails, getTotalExperienceYears} from "@/lib/data/professional";
import jagexLogo from "../../entities/assets/jagex-square.png";
import {TimelineEntry} from "@/entities/organisms/Timeline/Timeline";
import {StaticImageData} from "next/image";

const employmentHistory: TimelineEntry[] = [];
careerHistory.roles.forEach((employment, index) => {
    employmentHistory.push({
        date: `${employment.startDate.toLocaleString('default', { month: 'long' })} ${employment.startDate.getFullYear()}`,
        icon: companyDetails[employment.company].logo,
        alt: `${employment.company} logo`,
        content: <><Heading level="h3">{companyDetails[employment.company].name}</Heading><Paragraph align="center" fontSize="xxlarge">{employment.position}</Paragraph></>
    });
});

export default function Portfolio() {
  return (
    <>
      <Flurry>
        <Heading>Portfolio</Heading>
        <Paragraph align="center">
          I am a front-end web engineer with a passion for solving complex
          problems with elegant solutions.
        </Paragraph>
        <Paragraph align="center">
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
      <FixedPlate image={jagexLogo} alt="Green Jagex logo" />
      <HorizontalRule margin="none" />
      <CopyBlock>
        <Heading level="h2">Employment</Heading>
        <Paragraph>
          I have worked in the games industry for XXX years. I am current
          employed at Jagex Games Ltd as a Senior Web Engineer.
        </Paragraph>
      </CopyBlock>
      <Timeline
        entries={employmentHistory}
      />
    </>
  );
}
