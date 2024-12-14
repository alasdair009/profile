import { globalContentMaxWidth, sizes, SocialMediaLink } from "@/entities";
import { Root } from "./styles";
import { HTMLAttributes } from "react";

type SocialMediaBarProps = HTMLAttributes<HTMLDivElement>;
export function SocialMediaBar({ ...rest }: SocialMediaBarProps) {
  return (
    <Root {...rest}>
      <SocialMediaLink variant="x">X</SocialMediaLink>
      <SocialMediaLink variant="linkedin">LinkedIn</SocialMediaLink>
      <SocialMediaLink variant="github">GitHub</SocialMediaLink>
      <SocialMediaLink variant="facebook">Facebook</SocialMediaLink>
    </Root>
  );
}
