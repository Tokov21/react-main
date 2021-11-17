import React from "react";
import { ErrorMessage, Field } from "formik";

export default function Input({ id, name, textBefore, textAfter, ...props }) {
  return (
    <label htmlFor={id}>
      {textBefore}
      <Field name={name} id={id} {...props} />
      <ErrorMessage name={name} />
      {textAfter}
    </label>
  );
}
