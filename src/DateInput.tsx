import React from "react";
import { DateInputProps } from "./types";
import { InputComponent } from "./utils";
import { DateTimeInput } from "./DateTimeInput";

export class DateInput extends InputComponent<DateInputProps> {
  public static defaultProps = {
    mode: "date",
    labelFormat: "M/D/YYYY",
    valueFormat: "YYYY-MM-DD"
  };

  public render() {
    return <DateTimeInput ref={this.inputRef} {...this.props} />;
  }
}
