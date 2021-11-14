import React from "react";
import { Form, Formik } from "formik";

import Input from "../Input";

import { initialValues } from "../../../constants";
import { SIGNUP_SCHEME } from "../../../validation/validationSchemes";

export default function SignUpForm({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGNUP_SCHEME}
    >
      {() => (
        <Form>
          <Input type="text" name="login" id="login" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
