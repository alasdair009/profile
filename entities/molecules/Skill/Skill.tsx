import { Root } from "./styles";
import { HTMLAttributes } from "react";
import { Heading, Paragraph, ScoreCounter } from "@/entities";
import { Property } from "csstype";
import { SkillGridConfig } from "@/entities/molecules/Skill/Skill.types";

type SkillProps = {
  value: number;
  heading: string;
  copy: string;
  background?: Property.BackgroundColor;
  grid: SkillGridConfig;
} & HTMLAttributes<HTMLDivElement>;

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
