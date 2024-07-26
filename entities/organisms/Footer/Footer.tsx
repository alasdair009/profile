import { HTMLAttributes } from "react";
import { Parallax, Root, Wave1, Wave2, Wave3, Wave4, Waves } from "./styles";

type FooterProps = {} & HTMLAttributes<HTMLDivElement>;
export function Footer({ ...rest }: FooterProps) {
  return (
    <Root data-testid={Footer.name} {...rest}>
      <Waves
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <Parallax>
          <Wave1 xlinkHref="#gentle-wave" x="48" y="0" />
          <Wave2 xlinkHref="#gentle-wave" x="48" y="3" />
          <Wave3 xlinkHref="#gentle-wave" x="48" y="5" />
          <Wave4 xlinkHref="#gentle-wave" x="48" y="7" />
        </Parallax>
      </Waves>
    </Root>
  );
}
