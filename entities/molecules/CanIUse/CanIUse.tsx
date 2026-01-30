import { HTMLAttributes } from "react";
import { IFrame, Paragraph } from "@/entities";
import styles from "./CanIUse.module.css";
import { sizes } from "@/styles/tokens";
import { toRem } from "@/styles/style-helpers";

type CanIUseProps = {
  feature: string;
  periods?: string;
} & HTMLAttributes<HTMLDivElement>;

export function CanIUse({
  feature,
  periods = "future_1,current,past_1,past_2",
  className = "",
  ...rest
}: CanIUseProps) {
  return (
    <>
      <div
        className={`${styles.root} ${className}`}
        data-testid={CanIUse.displayName}
        {...rest}
      >
        <IFrame
          src={`https://caniuse.bitsofco.de/embed/index.html?feat=${feature}&periods=${periods}`}
        />
        <Paragraph
          className={styles.text}
          fontSize="small"
          align="center"
          margin={`${toRem(sizes.s16)} auto 0`}
          textWrap="balance"
        >
          Data on support for the <code>{feature}</code> feature across the
          major browsers from caniuse.com.
        </Paragraph>
      </div>
    </>
  );
}
CanIUse.displayName = "CanIUse";
