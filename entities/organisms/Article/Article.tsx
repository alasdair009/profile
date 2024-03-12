import { ArticleHeading, Content, Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { Spacer } from "@/entities";

type ArticleProps = {
  heading: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Large content box with heading
 */
export function Article({ heading, children, ...rest }: ArticleProps) {
  return (
    <Root {...rest}>
      <ArticleHeading align="center">{heading}</ArticleHeading>
      <Spacer multiplier={6} />
      <Content>{children}</Content>
    </Root>
  );
}
