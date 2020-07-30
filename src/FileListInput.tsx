import * as React from "react";
import { Field, FieldProps } from "./Field";
import { FormField } from "@stackup/form";
import { useBlur, getLabelledBy, getClassName, Size } from "./utilities";

export interface FileListInputProps extends FieldProps {
  field: FormField<FileList | null>;
  size?: Size;
  inline?: boolean;
  condensed?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
  inputClassName?: string;
}

export function FileListInput(props: FileListInputProps) {
  const { field, innerRef } = props;
  const { id, setValue } = field;

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.files || null);
    },
    [setValue]
  );

  return (
    <Field variant="file" {...props}>
      <input
        type="file"
        id={id}
        ref={innerRef}
        onBlur={onBlur}
        onChange={onChange}
        aria-labelledby={getLabelledBy(field)}
        className={getClassName(
          props,
          "field__input",
          "field__input--file",
          props.inputClassName
        )}
      />
    </Field>
  );
}
