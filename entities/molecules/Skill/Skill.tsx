import styles from "./Skill.module.scss";
import { CSSProperties, HTMLAttributes } from "react";
import { Heading, Paragraph, ScoreCounter } from "@/entities";
import { Property } from "csstype";
import { SkillGridConfig } from "@/entities/molecules/Skill/Skill.types";

type SkillProps = {
  /**
   * Percentage value for the skill.
   */
  value: number;
  /**
   * Name of the skill.
   */
  heading: string;
  /**
   * Copy about the skill.
   */
  copy: string;
  /**
   * Background for the skill.
   */
  background?: Property.BackgroundColor;
  /**
   * Grid config for the skill.
   */
  grid: SkillGridConfig;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Grid box to display information about a skill.
 */
export function Skill({
  heading,
  copy,
  value,
  grid,
  background = "transparent",
  style,
  ...rest
}: SkillProps) {
  return (
    <article
      className={styles.root}
      data-testid={Skill.displayName}
      style={
        {
          ...style,
          "--background": background,
          "--xs-column-start": grid.xsmall.columnStart,
          "--xs-column-end": grid.xsmall.columnEnd,
          "--xs-row-start": grid.xsmall.rowStart,
          "--xs-row-end": grid.xsmall.rowEnd,
          "--s-column-start": grid.small.columnStart,
          "--s-column-end": grid.small.columnEnd,
          "--s-row-start": grid.small.rowStart,
          "--s-row-end": grid.small.rowEnd,
        } as CSSProperties
      }
      {...rest}
    >
      <Heading level="h3">{heading}</Heading>
      <ScoreCounter value={value} />
      <Paragraph>{copy}</Paragraph>
    </article>
  );
}
Skill.displayName = "Skill";
