import { HTMLAttributes } from "react";
import {
  Copy,
  CopyParagraph,
  FeetSection,
  HeadSection,
  Inner,
  Root,
} from "./styles";
import { colors, Heading, Link, Paragraph } from "@/entities";
import styles from "./Splash.module.scss";

export function Splash({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={styles.root}
      itemScope={true}
      itemType="https://schema.org/Person"
      data-testid={Splash.name}
      {...rest}
    >
      <div className={styles.inner}>
        <div className={styles.feetSection}>
          <div className={styles.copy}>
            <Heading>
              <span itemProp="givenName">Ali</span> Macrae
            </Heading>
            <Paragraph
              className={styles.copyParagraph}
              color={colors.whiteGhost}
              fontSize="large"
              textWrap="balance"
            >
              The gravity defying blend of{" "}
              <span itemProp="jobTitle">web developer</span> and trampolinist.
            </Paragraph>
            <Paragraph className={styles.copyParagraph} fontSize="large">
              Always seeking adventures!
            </Paragraph>
            <Link variant="large" href="/portfolio">
              Hire me now!
            </Link>
          </div>
        </div>
        <div className={styles.headSection} />
      </div>
    </section>
  );
}
