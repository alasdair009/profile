import meImage from "../entities/assets/me.jpg";

import { ContentPlate, Heading, Paragraph, Splash } from "@/entities";

export default function Home() {
  return (
    <>
      <Splash />
      <ContentPlate
          foregroundImage={meImage}
        foregroundImageAlt="Headshot photo of Ali"
        orientation="right"
      >
        <Heading level="h2">Hello there!</Heading>
        <Paragraph>
          My name is Alasdair (Ali). I am a web engineer with over 12 years
          experience working in the games industry.
        </Paragraph>
        <Paragraph>
          I have a passion for all things front-end and am passionate about
          pushing the limits of CSS on high fidelity web pages.
        </Paragraph>
      </ContentPlate>
    </>
  );
}
