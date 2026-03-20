import { HTMLAttributes } from "react";
import { TextInputType } from "../../atoms/BaseInput/BaseInput.types";
import { BaseInput, BaseLabel, ErrorText } from "@/entities";
import styles from "./LabelledInput.module.css";

type LabelledInputProps = {
  /**
   * Text for the label.
   */
  label: string;
  /**
   * Type of HTML Text input field
   */
  type: TextInputType;
  /**
   * Name of the field.
   */
  name: string;
  /**
   * Default value of the field.
   */
  value?: string;
  /**
   * Field requires a value to be valid.
   */
  required?: boolean;
  /**
   * Field displays as an invalid input.
   */
  isInvalid?: boolean;
  /**
   * Error text the field should display.
   */
  errorText?: string;
  /**
   * Datalist entries
   */
  dataList?: { label: string; value: string | number }[];
} & HTMLAttributes<HTMLInputElement>;

/**
 * Labelled text input field for forms.
 */
export function LabelledInput({
  isInvalid,
  type,
  label,
  errorText = `Please enter a valid ${label}`,
  dataList,
  id,
  ...rest
}: LabelledInputProps) {
  const listId = `list=${id}`;
  return (
    <label className={styles.root} data-testid={LabelledInput.name}>
      <BaseLabel as="span">{label}</BaseLabel>
      <BaseInput
        type={type}
        isInvalid={isInvalid}
        id={id}
        list={listId}
        {...rest}
      />
      {id && dataList && (
        <datalist id={listId}>
          {dataList.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </datalist>
      )}
      <ErrorText
        shown={isInvalid || false}
        data-testid={`${LabelledInput.name}Error`}
      >
        {errorText}
      </ErrorText>
    </label>
  );
}
