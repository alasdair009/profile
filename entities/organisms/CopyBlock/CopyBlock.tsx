import { HTMLAttributes, ReactNode } from "react";
import { Root } from "./styles";

type CopyBlockProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

/**
 * Renders text content inside a container.
 */
export function CopyBlock({ children, ...rest }: CopyBlockProps) {
  return (
    <Root data-testid={CopyBlock.name} {...rest}>
      {children}
    </Root>
  );
}
