import React from "react";
import { Form, Formik } from "formik";

import Button from "../../Button";
import Inputs from "./Inputs";

import { initialValues } from "constants.js";
import { SIGNUP_SCHEME } from "validation/validationSchemes";
import styles from "./SignUpForm.module.sass";

export default function SignUpForm({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGNUP_SCHEME}
    >
      {(props) => (
        <Form className={styles.flex}>
          <Inputs props={props}/>

          <Button type="submit" text="Create account" />
          {/* Google API */}
        </Form>
      )}
    </Formik>
  );
}
