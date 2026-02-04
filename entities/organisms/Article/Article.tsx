import { HTMLAttributes, ReactNode } from "react";
import { Heading, Spacer } from "@/entities";
import styles from "./Article.module.css";
import Image from "next/image";
import { breakpoints } from "@/styles/tokens";

type ArticleProps = {
  heading: string;
  image: string;
  date: Date;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const nthNumber = (number: number) => {
  if (number > 3 && number < 21) return "th";
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const getNiceDate = (date: Date) => {
  const dayNumber = date.toLocaleDateString("en-GB", {
    day: "numeric",
  });

  return `${dayNumber}${nthNumber(parseInt(dayNumber))} ${date.toLocaleDateString("en-GB", { year: "numeric", month: "long" })}`;
};

/**
 * Large content box with heading
 */
export function Article({
  heading,
  image,
  date,
  children,
  ...rest
}: ArticleProps) {
  return (
    <article className={styles.root} data-testid={Article.name} {...rest}>
      <Heading className={styles.articleHeading} align="center">
        {heading}
      </Heading>
      <time className={styles.articleDate} dateTime={date.toISOString()}>
        {getNiceDate(date)}
      </time>
      <Spacer multiplier={6} />
      <figure className={styles.articleFigure}>
        <Image
          className={styles.articleImage}
          src={image}
          alt={heading}
          fill={true}
          sizes={`(max-width: ${breakpoints.large}px) 100vw, 1184px`}
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </figure>
      <Spacer multiplier={8} />
      <div className={styles.content}>{children}</div>
    </article>
  );
}
