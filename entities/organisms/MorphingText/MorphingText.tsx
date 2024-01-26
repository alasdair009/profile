import { HTMLAttributes } from "react";
import { Root, Text, Morpher } from "./styles";

type MorphingTextProps = {
  values: string[];
} & HTMLAttributes<HTMLDivElement>;

export function MorphingText({ values }: MorphingTextProps) {
  return (
    <Root>
      <Morpher>
        {values.map((value, index) => {
          return (
            <Text $wordCount={values.length} $wordIndex={index} key={value}>
              {value}
            </Text>
          );
        })}
      </Morpher>
    </Root>
  );
}
