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
    <Root {...rest}>
      <ArticleHeading align="center">{heading}</ArticleHeading>
      <ArticleDate dateTime={date.toISOString()}>
        {date.toLocaleDateString("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </ArticleDate>
      <Spacer multiplier={6} />
      <ArticleFigure>
        <ArticleImage
          src={image}
          alt={heading}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </ArticleFigure>
      <Content>{children}</Content>
    </Root>
  );
}
