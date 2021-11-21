import React from "react";
import { ErrorMessage, Field } from "formik";
import classNames from "classnames";

import "./Input.sass";

export default function Input({
  className,
  formikProps: { errors, touched },
  id,
  name,
  textBefore,
  textAfter,
  ...props
}) {
  return (
    <label htmlFor={id} className={className}>
      {textBefore}
      <Field
        name={name}
        id={id}
        {...props}
        className={classNames("input", {
          valid: !errors[name] && touched[name],
          invalid: errors[name] && touched[name],
        })}
      />
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div className={classNames("message", {
            radioError: name === "join"
          })}>
            <span>*&nbsp;</span>
            <p>{msg}</p>
          </div>
        )}
      />
      {textAfter}
    </label>
  );
}
