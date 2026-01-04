"use client";
import { StaticImageData } from "next/image";
import { toRem } from "@/entities";
import { colors, sizes } from "../../../../app/styles/tokens";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";
import { HTMLAttributes } from "react";
import "react-vertical-timeline-component/style.min.css";
import styles from "./TimelineElement.module.css";

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
          background: colors.colorGreenGrass,
          color: colors.colorWhiteGhost,
        }}
        contentArrowStyle={{
          borderRight: `${toRem(sizes.size8)} solid  ${colors.colorGreenGrass}`,
        }}
        date={date}
        iconStyle={{
          background: colors.colorGreenGrass,
          color: colors.colorWhiteGhost,
        }}
        icon={<Image className={styles.logo} src={icon} alt={alt} />}
      >
        {children}
      </VerticalTimelineElement>
    </div>
  );
}
