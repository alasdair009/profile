import { Root } from "./styles";
import { HTMLAttributes } from "react";
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
  ...rest
}: SkillProps) {
  return (
    <Root $background={background} $grid={grid} {...rest}>
      <Heading level="h3">{heading}</Heading>
      <ScoreCounter value={value} />
      <Paragraph>{copy}</Paragraph>
    </Root>
  );
}
