import {
  BlockQuote,
  colors,
  CopyBlock,
  FixedPlate,
  Flurry,
  globalContentMaxWidth,
  Heading,
  HorizontalRule,
  Paragraph,
  sizes,
  Skill,
  Timeline,
} from "@/entities";
import {
  careerHistory,
  companyDetails,
  getTotalExperienceYears,
} from "@/lib/data/professional";
import jagexLogo from "../../entities/assets/jagex-square.png";
import { TimelineEntry } from "@/entities/organisms/Timeline/Timeline";
import { rem, rgba } from "polished";
import amLogo from "../../entities/assets/am.svg";
import Image from "next/image";
import { GridLogo, SkillGrid } from "@/app/portfolio/styles";

const employmentHistory: TimelineEntry[] = [];
careerHistory.roles.forEach((employment, index) => {
  employmentHistory.push({
    date: `${employment.startDate.toLocaleString("default", {
      month: "long",
    })} ${employment.startDate.getFullYear()}`,
    icon: companyDetails[employment.company].logo,
    alt: `${employment.company} logo`,
    content: (
      <>
        <Heading level="h3">{companyDetails[employment.company].name}</Heading>
        <Paragraph align="center" fontSize="xxlarge">
          {employment.position}
        </Paragraph>
      </>
    ),
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
      <Timeline entries={employmentHistory} />
      <HorizontalRule margin="bottom" />
      <section
        style={{
          display: "block",
          maxWidth: rem(globalContentMaxWidth),
          margin: "0 auto",
          padding: `0 ${sizes.s16.rem}`,
        }}
      >
        <Heading level="h2">Skills</Heading>
        <Paragraph>
          Throughout my career and personal projects I have a wide exposure to
          many frameworks and languages both industry standard and proprietary.
          Whilst my passion is predominantly front-end I also have many years of
          experience supporting back-end implementations across multiple
          platforms and am able to quickly adapt to support the needs of my
          team.
        </Paragraph>
        <Paragraph>
          I have also been passionate about blogging myself and other
          team&apos;s work to improve company cohesion and help identify value
          delivered to the business.
        </Paragraph>
        <SkillGrid>
          <Skill
            background={rgba(colors.redHeat, 0.25)}
            value={100}
            heading="Storybook"
            copy="I am an avid supporter of design system delivered through Storybook.js for display, maintenace and testing. I have planned and delivered progresiively more ambitious implementations of these that have been of high value to the business."
            grid={{ xsmall: { columnStart: 1, rowStart: 1 }, small: {} }}
          />
          <Skill
            background={rgba(colors.greenGrass, 0.25)}
            value={100}
            heading="CSS"
            copy="Passionate about pushing the boundaries of what CSS can achieve in a browser."
            grid={{ xsmall: { columnStart: 2, rowStart: 1 }, small: {} }}
          />
          <Skill
            background={rgba(colors.blueSea, 0.25)}
            value={100}
            heading="React"
            copy="Extensive experience building apps and websites using React and associated frameworks."
            grid={{
              xsmall: { columnStart: 1, rowStart: 2, columnEnd: 3 },
              small: { columnStart: 1, columnEnd: 2, rowStart: 2, rowEnd: 4 },
            }}
          />
          <GridLogo
            $grid={{
              xsmall: { columnStart: 1, columnEnd: 3, rowStart: 3 },
              small: { columnStart: 2, rowStart: 2 },
            }}
          >
            <Image
              src={amLogo}
              alt="Am Logo"
              style={{ maxWidth: sizes.s256.rem }}
            />
          </GridLogo>
          <Skill
            background={rgba(colors.redHeat, 0.25)}
            value={100}
            heading="php"
            copy="Built a wide variety of personal projects to support volunteer organisations including trampoline clubs, family history researchers and small local professionals."
            grid={{
              xsmall: { columnStart: 1, rowStart: 4 },
              small: { columnStart: 3, rowStart: 1, rowEnd: 3 },
            }}
          />
          <Skill
            background={rgba(colors.greenGrass, 0.25)}
            value={50}
            heading="Java / Freemarker"
            copy="Moderate experience developing a proprietary Java based framework to support several very mature online MMORPGs."
            grid={{
              xsmall: { columnStart: 2, rowStart: 4 },
              small: { columnStart: 2, columnEnd: 4, rowStart: 3, rowEnd: 4 },
            }}
          />
          <Skill
            background={rgba(colors.redHeat, 0.25)}
            value={25}
            heading="Video editing"
            copy="Basic experience editing videos with Adobe Premier for display in presentations or usage in web technologies."
            grid={{
              xsmall: { columnStart: 2, rowStart: 5 },
              small: { columnStart: 1, rowStart: 4, columnEnd: 3 },
            }}
          />
          <Skill
            background={rgba(colors.blueSea, 0.25)}
            value={25}
            heading="Dev Blogging"
            copy="Active maintainer of Dev Blogs and internal monthly roundups for my department. Passion for increasing visibility of value deliverd"
            grid={{
              xsmall: { columnStart: 1, rowStart: 5 },
              small: { columnStart: 3, rowStart: 4, columnEnd: 4 },
            }}
          />
        </SkillGrid>
      </section>
      <HorizontalRule margin="bottom" />
      <section
        style={{
          display: "block",
          maxWidth: rem(globalContentMaxWidth),
          margin: "0 auto",
          padding: `0 ${sizes.s16.rem}`,
        }}
      >
        <Heading level="h2">Work portfolio</Heading>
        <Paragraph>
          Below you will find a collection of projects I have worked on
          throughout my career and in my personal time. Referees for projects
          are available upon request but technical details may be withheld by the owner / business.
        </Paragraph>
      </section>
    </>
  );
}
