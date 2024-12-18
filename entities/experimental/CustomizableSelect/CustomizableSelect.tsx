import { HTMLAttributes } from "react";
import { DropButton, Root, SelectArea, SelectedContent } from "./styles";

type SelectMenuProps = {
  /**
   * The default value on render.
   */
  defaultValue?: string | number;
} & HTMLAttributes<HTMLSelectElement>;

// https://open-ui.org/components/customizableselect/
/**
 * An experimental new spec for a styled dropdown box.
 */
export function CustomizableSelect({
  defaultValue,
  children,
  ...rest
}: SelectMenuProps) {
  return (
    <Root {...rest}>
      <SelectArea>
        <SelectedContent as="selectedcontent" />
        <DropButton />
      </SelectArea>
      {children}
    </Root>
  );
}
