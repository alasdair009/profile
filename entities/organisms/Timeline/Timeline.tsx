"use client";
import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { StaticImageData } from "next/image";
import { TimelineElement } from "./TimelineElement";

type TimelineProps = {
  entries: {
    date: string;
    icon: StaticImageData;
    alt: string;
    content: ReactNode;
  }[];
} & HTMLAttributes<HTMLDivElement>;

export function Timeline({ entries, ...rest }: TimelineProps) {
  return (
    <Root {...rest}>
      <VerticalTimeline>
        {entries.map((entry, index) => (
          <TimelineElement date={entry.date} icon={entry.icon} alt={entry.alt}>
            {entry.content}
          </TimelineElement>
        ))}
      </VerticalTimeline>
    </Root>
  );
}
