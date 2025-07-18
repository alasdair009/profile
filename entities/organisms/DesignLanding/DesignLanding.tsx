import { CSSProperties, HTMLAttributes } from "react";
import styles from "./DesignLanding.module.scss";
import {
  Cloud,
  colors,
  ContentPlate,
  Heading,
  Paragraph,
  Rain,
  Spacer,
} from "@/entities";
import amLogo from "../../assets/am.svg";
import Image from "next/image";

type DesignLandingProps = HTMLAttributes<HTMLDivElement>;

/**
 * Landing splash component for the design system.
 */
export function DesignLanding({ children, ...rest }: DesignLandingProps) {
  return (
    <section className={styles.root} data-testid={DesignLanding.name} {...rest}>
      <div className={styles.inner}>
        <Rain
          rainDrops={40}
          speedRainTrough={0}
          rainColor={colors.greenGrass}
        />
        <Cloud
          className={styles.cloud}
          dispersion={10}
          cloudColor={colors.greenGrass}
          skyColor="transparent"
          style={
            {
              "--translate": "translateY(5px)",
              "--animation-delay": 0,
              "--animation-direction": "normal",
              "--cloud-left": 0,
              "--cloud-top": 0,
            } as CSSProperties
          }
        />
        <Cloud
          className={styles.cloud}
          dispersion={30}
          cloudColor={colors.greenGrass}
          skyColor="transparent"
          style={
            {
              "--translate": "translateY(10px)",
              "--animation-delay": -0.6,
              "--animation-direction": "reverse",
              "--cloud-left": -250,
              "--cloud-top": -250,
            } as CSSProperties
          }
        />
        <Cloud
          className={styles.cloud}
          dispersion={50}
          cloudColor={colors.greenGrass}
          skyColor="transparent"
          style={
            {
              "--translate": "translateY(15px)",
              "--animation-delay": -1.2,
              "--animation-direction": "normal",
              "--cloud-left": 150,
              "--cloud-top": 150,
            } as CSSProperties
          }
        />
        <Cloud
          className={styles.cloud}
          dispersion={70}
          cloudColor={colors.greenGrass}
          skyColor="transparent"
          style={
            {
              "--translate": "translateY(20px)",
              "--animation-delay": -1.8,
              "--animation-direction": "reverse",
              "--cloud-left": -200,
              "--cloud-top": 150,
            } as CSSProperties
          }
        />
        <Cloud
          className={styles.cloud}
          dispersion={90}
          cloudColor={colors.greenGrass}
          skyColor="transparent"
          style={
            {
              "--translate": "translateY(25px)",
              "--animation-delay": -2.4,
              "--animation-direction": "normal",
              "--cloud-left": 200,
              "--cloud-top": -100,
            } as CSSProperties
          }
        />
        <Heading className={styles.heading} align="center">
          Alasdair Macrae Design
        </Heading>
        <Spacer multiplier={4} />
        <Image
          className={styles.logo}
          src={amLogo}
          alt="Green and white AM letters"
          width={0}
          height={0}
        />
        <Paragraph
          className={styles.paragraph}
          align="center"
          fontSize="medium"
        >
          I am a passionate advocate for Storybook.js and utilise it in nearly
          all the projects I develop, including websites, web applications, and
          desktop applications. The advantages of Storybook extend well beyond
          just showcasing components; it is an essential tool for testing, rapid
          iteration, and comprehensive developer documentation.
        </Paragraph>
      </div>
    </section>
  );
}

export function DesignLandingContentPlate() {
  return (
    <ContentPlate flameColor={colors.greenGrass}>
      <Heading level="h2">Like what you see?</Heading>
      <Paragraph>
        This Storybook instance serves as a playground for my front-end
        creativity and experiments. I strive to build everything you see here
        using CSS and SVG to create a lightweight and sleek user interface.
        While many visual effects can now be achieved with CSS, it’s important
        to remember that just because something is possible doesn’t mean it’s
        the best choice.
      </Paragraph>
    </ContentPlate>
  );
}
