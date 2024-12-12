import {
  ArticleDate,
  ArticleFigure,
  ArticleHeading,
  ArticleImage,
  Content,
  Root,
} from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { Spacer } from "@/entities";

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
  const dayNumber = date.toLocaleDateString("en-GB", {
    day: "numeric",
  });
  return (
    <Root data-testid={Article.name} {...rest}>
      <ArticleHeading align="center">{heading}</ArticleHeading>
      <ArticleDate dateTime={date.toISOString()}>
        {getNiceDate(date)}
      </ArticleDate>
      <Spacer multiplier={6} />
      <ArticleFigure>
        <ArticleImage
          src={image}
          alt={heading}
          fill={true}
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </ArticleFigure>
      <Spacer multiplier={8} />
      <Content>{children}</Content>
    </Root>
  );
}
