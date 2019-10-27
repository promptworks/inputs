import { FieldValidator } from "formik";
import {
  CheckboxProps as BCheckboxProps,
  CheckboxListProps as BCheckboxListProps,
  DateInputProps as BDateInputProps,
  DateTimeInputProps as BDateTimeInputProps,
  FieldProps as BFieldProps,
  FileInputProps as BFileInputProps,
  FileListInputProps as BFileListInputProps,
  FloatInputProps as BFloatInputProps,
  IntegerInputProps as BIntegerInputProps,
  RadioGroupProps as BRadioGroupProps,
  SelectProps as BSelectProps,
  TextAreaProps as BTextAreaProps,
  TextInputProps as BTextInputProps,
  ToggleButtonProps as BToggleButtonProps
} from "react-baseline-inputs";

export interface FieldConfig {
  name: string;
  validate?: FieldValidator;
}

type InputProps<T> = FieldConfig &
  Omit<T, "value" | "onChange" | "onBlur" | "error" | "touched">;

export type CheckboxProps = InputProps<BCheckboxProps>;
export type CheckboxListProps = InputProps<BCheckboxListProps>;
export type DateInputProps = InputProps<BDateInputProps>;
export type DateTimeInputProps = InputProps<BDateTimeInputProps>;
export type FileInputProps = InputProps<BFileInputProps>;
export type FileListInputProps = InputProps<BFileListInputProps>;
export type FieldProps = InputProps<BFieldProps>;
export type FloatInputProps = InputProps<BFloatInputProps>;
export type IntegerInputProps = InputProps<BIntegerInputProps>;
export type RadioGroupProps = InputProps<BRadioGroupProps>;
export type SelectProps = InputProps<BSelectProps>;
export type TextAreaProps = InputProps<BTextAreaProps>;
export type TextInputProps = InputProps<BTextInputProps>;
export type ToggleButtonProps = InputProps<BToggleButtonProps>;
