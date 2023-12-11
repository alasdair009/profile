"use client";
import { Root, Wrapper } from "./styles";
import { Fragment, HTMLAttributes, ReactNode } from "react";
import {
  VerticalTimeline as VerticalTimelineOrig,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { colors, sizes } from "@/entities";
import Image, { StaticImageData } from "next/image";

type VerticalTimelineProps = {
  entries: {
    date: string;
    icon: StaticImageData;
    alt: string;
    content: string;
  }[];
} & HTMLAttributes<HTMLDivElement>;

export function VerticalTimeline({ entries, ...rest }: VerticalTimelineProps) {
  return (
    <Root {...rest}>
      <VerticalTimelineOrig>
        {entries.map((entry, index) => (
          <Fragment key={`${index}${entry.date}`}>
            <VerticalTimelineElement
              //visible={true} https://github.com/stephane-monnot/react-vertical-timeline/issues/171 and https://github.com/stephane-monnot/react-vertical-timeline/issues/166
              contentStyle={{
                background: colors.greenGrass,
                color: colors.whiteGhost,
              }}
              contentArrowStyle={{
                borderRight: `${sizes.s8.rem} solid  ${colors.greenGrass}`,
              }}
              date={entry.date}
              iconStyle={{
                background: colors.greenGrass,
                color: colors.whiteGhost,
              }}
              icon={<Image src={entry.icon} alt={entry.alt} />}
            >
              {entry.content}
            </VerticalTimelineElement>
          </Fragment>
          // <span key={index}>abc</span>
        ))}
      </VerticalTimelineOrig>
    </Root>
  );
}
