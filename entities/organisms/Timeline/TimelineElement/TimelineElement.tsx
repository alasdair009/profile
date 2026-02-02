"use client";
import { StaticImageData } from "next/image";
import { colors, sizes } from "@/styles/tokens";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";
import { HTMLAttributes } from "react";
import "react-vertical-timeline-component/style.min.css";
import styles from "./TimelineElement.module.css";
import { toRem } from "@/styles/style-helpers";

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
          borderRight: `${toRem(sizes.s8)} solid  ${colors.greenGrass}`,
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
