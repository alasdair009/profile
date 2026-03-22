import { HTMLAttributes } from "react";
import { Heading, Link, LiquidMetal, Paragraph, Spacer } from "@/entities";
import styles from "./Splash.module.css";

export function Splash({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={styles.root}
      itemScope={true}
      itemType="https://schema.org/Person"
      data-testid={Splash.displayName}
      {...rest}
    >
      <div className={styles.inner}>
        <LiquidMetal className={styles.liquidMetal} opacity={0.3} />
        <div className={styles.content}>
          <Heading>
            <span itemProp="givenName">Ali</span> Macrae
          </Heading>
          <Paragraph fontSize="large" align="center">
            The gravity defying blend of{" "}
            <span itemProp="jobTitle">web developer</span> and trampolinist.
          </Paragraph>
          <Paragraph
            className={styles.copyParagraph}
            fontSize="large"
            align="center"
          >
            Always seeking adventures!
          </Paragraph>
          <Spacer />
          <Spacer />
          <Link variant="large" href="/portfolio">
            Hire me now!
          </Link>
        </div>
      </div>
    </section>
  );
}
Splash.displayName = "Splash";
