import { Root } from "./styles";
import { HTMLAttributes } from "react";

type IFrameProps = {
  /**
   * URL for the iframe content
   */
  src: string;
} & HTMLAttributes<HTMLIFrameElement>;

/**
 * An HTML iframe for external content
 */
export function IFrame({ ...rest }: IFrameProps) {
  return <Root {...rest} allowFullScreen={true} />;
}
