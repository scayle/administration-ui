import React from "react";
import { TextFieldHTMLProps, TextFieldProps } from "@rmwc/textfield";
import { TextField } from "../../";
import { Field } from "formik";
import * as RMWC from "@rmwc/types";

type Props = RMWC.ComponentProps<TextFieldProps, TextFieldHTMLProps, "input">;

const TextInput = ({ type, name, ...props }: Props) => {
  return (
    <Field
      type={type}
      name={name}
      component={() => <TextField type={type} name={name} {...props} />}
    />
  );
};

export default TextInput;
