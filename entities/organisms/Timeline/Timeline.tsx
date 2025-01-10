"use client";
import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { StaticImageData } from "next/image";
import { TimelineElement } from "./TimelineElement";
import { prefersReducedMotion } from "@/entities";

export type TimelineEntry = {
  date: string;
  icon: StaticImageData;
  alt: string;
  content: ReactNode;
};

export type TimelineProps = {
  entries: TimelineEntry[];
} & HTMLAttributes<HTMLDivElement>;

export function Timeline({ entries, ...rest }: TimelineProps) {
  return (
    <Root data-testid={Timeline.name} {...rest}>
      <VerticalTimeline animate={!prefersReducedMotion}>
        {entries.map((entry, index) => (
          <TimelineElement
            key={`${entry.date}${entry.icon}${index}`}
            date={entry.date}
            icon={entry.icon}
            alt={entry.alt}
          >
            {entry.content}
          </TimelineElement>
        ))}
      </VerticalTimeline>
    </Root>
  );
}
