import { HTMLAttributes } from "react";
import { Button, ListBox, MenuIcon, Option, Root, SelectedOption } from "./styles";
import { Paragraph } from "@/entities";

type SelectMenuProps = {
  /**
   *
   */
  defaultOption?: string;
} & HTMLAttributes<HTMLSelectElement>;
/**
 * An experimental new spec for a styled dropdown box.
 */
export function SelectList({ defaultOption, children, ...rest }: SelectMenuProps) {
  return (
    <Root as="selectlist" data-testid={SelectList.name} {...rest}>
      <Button type="selectlist">
        <SelectedOption as="selectedoption" />
      </Button>
      <ListBox as="listbox">
        <>
          {defaultOption && (
            <Option value="" hidden>
              <MenuIcon />
              <Paragraph>{defaultOption}</Paragraph>
            </Option>
          )}
          {children}
        </>
      </ListBox>
    </Root>
  );
}
