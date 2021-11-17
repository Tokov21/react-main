import React from "react";
import { ErrorMessage, Field } from "formik";

export default function Input({ id, name, ...props }) {
  return (
    <label htmlFor={id}>
      <Field name={name} {...props} />
      <ErrorMessage name={name} />
    </label>
  );
}
