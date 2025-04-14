import { CSSProperties, HTMLAttributes } from "react";
import styles from "./MorphingText.module.scss";

type MorphingTextProps = {
  values: string[];
} & HTMLAttributes<HTMLDivElement>;

export function MorphingText({ values, ...rest }: MorphingTextProps) {
  return (
    <section className={styles.root} data-testid={MorphingText.name} {...rest}>
      <h2 className={styles.morpher}>
        {values.map((value, index) => {
          return (
            <span
              className={styles.text}
              key={value}
              data-testid={`${MorphingText.name}Text`}
              style={
                {
                  "--word-count": values.length,
                  "--word-index": index,
                } as CSSProperties
              }
            >
              {value}
            </span>
          );
        })}
      </h2>
    </section>
  );
}
