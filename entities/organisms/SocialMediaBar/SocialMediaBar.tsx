import { SocialMediaLink } from "@/entities";
import { HTMLAttributes } from "react";
import styles from "./SocialMediaBar.module.scss";

type SocialMediaBarProps = HTMLAttributes<HTMLDivElement>;
export function SocialMediaBar({ ...rest }: SocialMediaBarProps) {
  return (
    <nav className={styles.root} data-testid={SocialMediaBar.name} {...rest}>
      <SocialMediaLink variant="bluesky">Bluesky</SocialMediaLink>
      <SocialMediaLink variant="facebook">Facebook</SocialMediaLink>
      <SocialMediaLink variant="github">GitHub</SocialMediaLink>
      <SocialMediaLink variant="instagram">Instagram</SocialMediaLink>
      <SocialMediaLink variant="linkedin">LinkedIn</SocialMediaLink>
      <SocialMediaLink variant="x">X</SocialMediaLink>
      <SocialMediaLink variant="youtube">YouTube</SocialMediaLink>
    </nav>
  );
}
