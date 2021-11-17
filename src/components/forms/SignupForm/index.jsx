import React from "react";
import { Form, Formik } from "formik";

import Input from "../../Input";
import Button from "../../Button";

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
          <Input type="text" name="firstname" id="firstname" />
          <Input type="text" name="lastname" id="lastname" />
          <Input type="text" name="displayname" id="displayname" />
          <Input type="email" name="email" id="email" />
          <Input type="password" name="password" id="password" />
          <Input type="passwordConf" name="passwordConf" id="passwordConf" />
          <Input type="radio" name="join" id="buyer" value="buyer" />
          <Input type="radio" name="join" id="seller" value="seller" />
          <Input type="checkbox" name="marketing" id="marketing" />

          <Button type="submit" text="Create an account" />
          {/* Google API */}
        </Form>
      )}
    </Formik>
  );
}
