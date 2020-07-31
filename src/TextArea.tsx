import * as React from "react";
import { FieldProps } from "./types";
import { useFieldProps } from "./useFieldProps";

export interface TextAreaProps extends FieldProps<string, HTMLInputElement> {}

export function TextArea(props: TextAreaProps) {
  const {
    field,
    label,
    help,
    error,
    append,
    prepend,
    getFieldProps,
    getLabelProps,
    getErrorProps,
    getHelpProps,
    ...inputProps
  } = useFieldProps(props, "textarea");

  const { id, value, setValue } = field;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <div {...getFieldProps()}>
      <label {...getLabelProps()}>
        {label}
        {help && <span {...getHelpProps()}>{help}</span>}
      </label>
      {prepend}
      <textarea {...inputProps} id={id} value={value} onChange={onChange} />
      {append}
      {error && <span {...getErrorProps()}>{error}</span>}
    </div>
  );
}
