import {
  BlockQuote,
  colors,
  ContentPlate,
  CopyBlock,
  FixedPlate,
  Flurry,
  globalContentMaxWidth,
  Heading,
  HorizontalRule,
  IFrame,
  Link,
  Paragraph,
  sizes,
  Skill,
  Timeline,
} from "@/entities";
import {
  careerHistory,
  companyDetails,
  getCurrentEmployer,
  getTotalExperienceYears,
} from "@/lib/data/professional";
import jagexLogo from "../../entities/assets/jagex-square.png";
import jdsLogo from "../../entities/assets/jds-logo.svg";
import jagexCorporateImage from "../../entities/assets/jagex-corporate.png";
import jagexLauncherImage from "../../entities/assets/launcher.png";
import runeFestImage from "../../entities/assets/runefest.png";
import runeFestPanelImage from "../../entities/assets/runefest-recipe-for-faster.png";
import runeScapeNewsImage from "../../entities/assets/runescape-news.png";
import { TimelineEntry } from "@/entities/organisms/Timeline/Timeline";
import { rem, rgba } from "polished";
import amLogo from "../../entities/assets/am.svg";
import { GridLogo, SkillGrid } from "@/app/portfolio/styles";
import aliSvg from "../../entities/assets/ali-portrait.svg";
import Image from "next/image";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";

const currentEmployer = getCurrentEmployer();
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

export const metadata: Metadata = generateMetaData(
  "Portfolio",
  "My professional work history and portfolio of work.",
  "portfolio"
);

export default function Portfolio() {
  return (
    <>
      <Flurry background={aliSvg} backgroundAlt="SVG portrait of Ali">
        <Heading>Portfolio</Heading>
        <Paragraph align="center" fontSize="large" textWrap="balance">
          I am a front-end web engineer with a passion for solving complex
          problems with elegant solutions.
        </Paragraph>
        <Paragraph align="center" fontSize="mlarge" textWrap="balance">
          I have over <strong>{getTotalExperienceYears("web")}</strong> years
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
          I have worked in the games industry for{" "}
          <strong>{getTotalExperienceYears()} years</strong> with{" "}
          <strong>{getTotalExperienceYears("web")}</strong> of those working in
          web development. I am currently employed at{" "}
          <Link href={companyDetails[currentEmployer.company].url}>
            {companyDetails[currentEmployer.company].name}
          </Link>{" "}
          as a {getCurrentEmployer().position}. I currently work predominantly
          remote and am mostly interested in roles that offer hybrid or
          remote-first employment. References are available upon request.
        </Paragraph>
        <Paragraph>
          Below is my Games Industry employment timeline at companies across the
          UK. Before working in games I have also worked in the USA as a
          Recreation Director at the{" "}
          <Link href="https://internationalgymnastics.com/">
            Internation Gymnastics Camp
          </Link>
          , Pennsylvania.
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
          are available upon request but technical details may be withheld by
          the owner / business.
        </Paragraph>
      </section>
      <ContentPlate
        foregroundImage={jdsLogo}
        foregroundImageAlt="White Jagex logo part-way through being drawn"
        backgroundCss={`linear-gradient(#1c1c1c,black)`}
      >
        <Heading level="h3">Jagex Design System</Heading>
        <pre>(URL not public)</pre>
        <Paragraph>
          Responsible for constructing a large design system to style and
          maintain consistent branding across all Jagex Publishing Platform
          products including websites and apps. This library was written in
          React and displayed via Storybook.js.
        </Paragraph>
        <Paragraph>
          The system covers all areas of visual implementation including
          colours, animation, typography, sizing, components and is all
          structured using atomic design principles.
        </Paragraph>
      </ContentPlate>
      <ContentPlate
        foregroundImage={jagexLauncherImage}
        foregroundImageAlt="The opening UI from the Jagex Launcher displaying RuneScape"
        backgroundCss={`linear-gradient(#07111b,black)`}
        orientation="right"
      >
        <Heading level="h3">Jagex Launcher</Heading>
        <Link href="https://www.jagex.com/launcher" />
        <Paragraph>
          The Jagex Launcher is an application that is used to run all Jagex
          products. I was responsible for maintaining the{" "}
          <abbr title="Jagex Design System">JDS</abbr> (see above) integration
          that delivered the visual aesthetics and functionality for the
          front-end.
        </Paragraph>
      </ContentPlate>
      <ContentPlate
        foregroundImage={runeScapeNewsImage}
        foregroundImageAlt="A RuneScape news article"
        backgroundCss={`linear-gradient(#101d23,black)`}
      >
        <Heading level="h3">RuneScape News</Heading>
        <Link href="https://secure.runescape.com/m=news/vorkath-battle-for-forinthry---this-week-in-runescape" />
        <Paragraph>
          Rebuilt the RuneScape news article view hosted on proprietary
          technology to work better on modern browsers and be ready for the
          launch of RuneScape Mobile.
        </Paragraph>
      </ContentPlate>
      <ContentPlate
        foregroundImage={jagexCorporateImage}
        foregroundImageAlt="The Jagex corporate website homepage"
        backgroundCss={`linear-gradient(#4b4c01,black)`}
        orientation="right"
      >
        <Heading level="h3">Jagex Corporate website</Heading>
        <Link href="https://www.jagex.com" />
        <Paragraph>
          The corporate website for Jagex Games Ltd. This site content was
          powered by Contentful CMS and later migrated to a fixed code driven
          version. The site is driven via Express with EJS for page templating.
        </Paragraph>
      </ContentPlate>
      <ContentPlate
        foregroundImage={runeFestImage}
        foregroundImageAlt="The golden dragon RuneFest logo"
        backgroundCss={`linear-gradient(#101d23,black)`}
      >
        <Heading level="h3">RuneFest</Heading>
        <pre>(URL not public)</pre>
        <Paragraph>
          RuneScape and Old School RuneScape&apos;s player event runs most years and
          requires a large input from teams across the studio. For this event I
          have built multiple versions of this site on many different tech
          stacks.
        </Paragraph>
        <Paragraph>
          I also built my first ever Progressive Web App for RuneFest 2017 that
          was used to assist players throughout their visit to the event.
        </Paragraph>
      </ContentPlate>
      <ContentPlate
        foregroundImage={runeFestPanelImage}
        foregroundImageAlt="The web team at RuneFest 2018 on stage"
        backgroundCss={`linear-gradient(#101d23,black)`}
        orientation="right"
      >
        <Heading level="h3">RuneFest Panel</Heading>
        <Paragraph>
          At RuneFest 2018 myself and other members of the team hosted a talk on
          one of the stages at the event explaining the work that goes into
          managing Jagex&apos;s web services.
        </Paragraph>
        <IFrame src="https://www.youtube.com/embed/JbVKUi9wezo?si=M2ZfSmqERR2hwzmV" />
      </ContentPlate>
    </>
  );
}
