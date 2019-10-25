import * as React from "react";
import {
  useForm,
  initialValues,
  theme,
  fileTheme,
  selectTheme,
  checkboxTheme,
  toggleTheme
} from "./helpers";
import {
  Checkbox,
  DateInput,
  DateTimeInput,
  FileInput,
  FileListInput,
  FloatInput,
  TextInput,
  IntegerInput,
  Select,
  TextArea,
  ToggleButton
} from "react-baseline-inputs";

export const BaselineInputs = () => {
  const [values, fields] = useForm(initialValues);

  return (
    <section>
      <h2 className="mb-4">react-baseline-inputs</h2>

      <form
        onSubmit={event => {
          event.preventDefault();
          console.table(values);
        }}
      >
        <div className="row">
          <div className="col">
            <TextInput
              {...fields.text}
              label="Text"
              name="text"
              theme={theme}
            />
          </div>

          <div className="col">
            <IntegerInput label="Integer" {...fields.integer} theme={theme} />
          </div>

          <div className="col">
            <FloatInput label="Float" {...fields.float} theme={theme} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <DateInput label="Date" {...fields.date} theme={theme} />
          </div>

          <div className="col">
            <DateTimeInput
              label="DateTime"
              {...fields.datetime}
              theme={theme}
            />
          </div>

          <div className="col">
            <Select
              {...fields.select}
              label="Select"
              options={["One", "Two", "Three"]}
              theme={selectTheme}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <FileInput label="File" {...fields.file} theme={fileTheme} />
          </div>

          <div className="col">
            <FileListInput
              label="FileList"
              {...fields.filelist}
              theme={fileTheme}
            />
          </div>
        </div>
        <TextArea label="TextArea" {...fields.textarea} theme={theme} />
        <Checkbox label="Checkbox" {...fields.checkbox} theme={checkboxTheme} />
        <ToggleButton label="Toggle" {...fields.toggle} theme={toggleTheme} />

        <button type="submit" className="btn btn-primary mt-2 float-right">
          Submit
        </button>
      </form>
    </section>
  );
};
