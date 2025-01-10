import { HTMLAttributes } from "react";
import { Root, Text, Morpher } from "./styles";

type MorphingTextProps = {
  values: string[];
} & HTMLAttributes<HTMLDivElement>;

export function MorphingText({ values, ...rest }: MorphingTextProps) {
  return (
    <Root data-testid={MorphingText.name} {...rest}>
      <Morpher>
        {values.map((value, index) => {
          return (
            <Text
              $wordCount={values.length}
              $wordIndex={index}
              key={value}
              data-testid={`${MorphingText.name}Text`}
            >
              {value}
            </Text>
          );
        })}
      </Morpher>
    </Root>
  );
}
