import { FieldInputProps } from "formik";
import { FormikProps } from "formik/dist/types";

export function formikProps<Values>(
  name: string,
  formik: FormikProps<Values>
): FieldInputProps<Values> {
  const initial = formik.getFieldMeta(name).initialValue;
  return {
    name: name,
    value: initial as any,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
  };
}
