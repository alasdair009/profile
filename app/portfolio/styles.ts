"use client";
import styled from "styled-components";
import { device, sizes } from "@/entities";
import { SkillGridConfig } from "@/entities/molecules/Skill/Skill.types";

export const SkillGrid = styled.div`
  display: block;
  width: 100%;

  @media (${device.xsmall}) {
    display: grid;
    gap: ${sizes.s2.rem};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }

  @media (${device.small}) {
    display: grid;
    gap: ${sizes.s2.rem};
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

export const GridLogo = styled.figure<{ $grid: SkillGridConfig }>`
  align-items: center;
  display: flex;
  justify-content: center;

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
