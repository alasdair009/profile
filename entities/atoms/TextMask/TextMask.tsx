import { Rect, Root, Text } from "./styles";
import { HTMLAttributes } from "react";
import { Property } from "csstype";

type TextMaskProps = {
  /**
   * Fill colour around the text.
   */
  maskFill: Property.Fill;
  /**
   * Text for the mask.
   */
  text: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Mask formed from text to place over a background.
 */
export function TextMask({ maskFill, text, ...rest }: TextMaskProps) {
  return (
    <Root $maskFill={maskFill} data-testid={TextMask.name} {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <mask id="mask" x="0" y="0" width="100" height="100">
            <rect x="0" y="0" width="100" height="100" fill="white" />
            <Text x="50" y="50">
              {text}
            </Text>
          </mask>
        </defs>
        <Rect x="0" y="0" height="100" width="100" $maskFill={maskFill} />
      </svg>
    </Root>
  );
}
