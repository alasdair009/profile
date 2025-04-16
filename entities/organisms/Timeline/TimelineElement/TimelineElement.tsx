"use client";
import { StaticImageData } from "next/image";
import { colors, sizes } from "@/entities";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";
import { HTMLAttributes } from "react";
import "react-vertical-timeline-component/style.min.css";
import styles from "./TimelineElement.module.scss";

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
    <div
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
        icon={<Image className={styles.logo} src={icon} alt={alt} />}
      >
        {children}
      </VerticalTimelineElement>
    </div>
  );
}
