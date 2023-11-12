"use client";
import { ContentPlate, CopyBlock, Heading, Paragraph } from "@/entities";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export function PortfolioPageContent() {
  return (
    <>
      {/*<Parallax speed={-10}>*/}
      <CopyBlock>
        <Heading>Portfolio</Heading>
        <Paragraph>
          I am a front-end web engineer with over 11 years experience building
          websites for computer games and passion projects.
        </Paragraph>
        <Paragraph>
          I currently work at Jagex Games Ltd as a Senior Front-end web engineer
          as part of the Marketing and Distribution team.
        </Paragraph>
      </CopyBlock>
      {/*</Parallax>*/}
      {/*<Parallax translateX={['-400px', '0px']}>*/}
      <ContentPlate>
        <CopyBlock>
          <Heading level="h3">Some content</Heading>
        </CopyBlock>
      </ContentPlate>
      <ContentPlate>
        <CopyBlock>
          <Heading level="h3">Some content</Heading>
        </CopyBlock>
      </ContentPlate>
      <ContentPlate>
        <CopyBlock>
          <Heading level="h3">Some content</Heading>
        </CopyBlock>
      </ContentPlate>
      <ContentPlate>
        <CopyBlock>
          <Heading level="h3">Some content</Heading>
        </CopyBlock>
      </ContentPlate>
      <ContentPlate>
        <CopyBlock>
          <Heading level="h3">Some content</Heading>
        </CopyBlock>
      </ContentPlate>
      <ContentPlate>
        <CopyBlock>
          <Heading level="h3">Some content</Heading>
        </CopyBlock>
      </ContentPlate>
      <ContentPlate>
        <CopyBlock>
          <Heading level="h3">Some content</Heading>
        </CopyBlock>
      </ContentPlate>
      <ContentPlate>
        <CopyBlock>
          <Heading level="h3">Some content</Heading>
        </CopyBlock>
      </ContentPlate>
      <ContentPlate>
        <CopyBlock>
          <Heading level="h3">Some content</Heading>
        </CopyBlock>
      </ContentPlate>
      <ContentPlate>
        <CopyBlock>
          <Heading level="h3">Some content</Heading>
        </CopyBlock>
      </ContentPlate>
      {/*</Parallax>*/}
    </>
  );
}
