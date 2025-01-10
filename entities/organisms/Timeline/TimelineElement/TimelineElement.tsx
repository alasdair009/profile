"use client";
import { StaticImageData } from "next/image";
import { colors, sizes } from "@/entities";
import { Logo, Root } from "./styles";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";
import { HTMLAttributes } from "react";
import "react-vertical-timeline-component/style.min.css";

type TimelineElementProps = {
  date: string;
  icon: StaticImageData;
  alt: string;
} & HTMLAttributes<HTMLDivElement>;

export function TimelineElement({
  date,
  icon,
  alt,
  children,
  ...rest
}: TimelineElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <Root
      ref={ref}
      className="vertical-timeline-element"
      data-testid={TimelineElement.name}
      {...rest}
    >
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: colors.greenGrass,
          color: colors.whiteGhost,
        }}
        contentArrowStyle={{
          borderRight: `${sizes.s8.rem} solid  ${colors.greenGrass}`,
        }}
        date={date}
        iconStyle={{
          background: colors.greenGrass,
          color: colors.whiteGhost,
        }}
        icon={<Logo src={icon} alt={alt} />}
      >
        {children}
      </VerticalTimelineElement>
    </Root>
  );
}
