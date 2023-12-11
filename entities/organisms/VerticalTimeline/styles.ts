"use client";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement as VerticalTinelineElementOrig,
} from "react-vertical-timeline-component";

export const Root = styled.section``;

export const Wrapper = styled(VerticalTimeline);

export const VerticalTimelineElement = styled(VerticalTinelineElementOrig);
