"use client";
import styled from "styled-components";
import { Property } from "csstype";
import { device, sizes } from "@/entities";
import { SkillGridConfig } from "./Skill.types";

export const Root = styled.article<{
  $background: Property.BackgroundColor;
  $grid: SkillGridConfig;
}>`
  align-items: center;
  background-color: ${({ $background }) => $background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${sizes.s16.rem};

  @media (${device.xsmall}) {
    grid-column-start: ${({ $grid }) => $grid.xsmall.columnStart};
    grid-column-end: ${({ $grid }) => $grid.xsmall.columnEnd};
    grid-row-start: ${({ $grid }) => $grid.xsmall.rowStart};
    grid-row-end: ${({ $grid }) => $grid.xsmall.rowEnd};
  }

  @media (${device.small}) {
    grid-column-start: ${({ $grid }) => $grid.small.columnStart};
    grid-column-end: ${({ $grid }) => $grid.small.columnEnd};
    grid-row-start: ${({ $grid }) => $grid.small.rowStart};
    grid-row-end: ${({ $grid }) => $grid.small.rowEnd};
  }
`;
