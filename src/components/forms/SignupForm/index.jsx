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
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "300px",
          }}
        >
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
          />
          <Input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
          />
          <Input
            type="text"
            name="displayname"
            id="displayname"
            placeholder="Nickname"
          />
          <Input type="email" name="email" id="email" placeholder="Email" />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <Input
            type="password"
            name="passwordConf"
            id="passwordConf"
            placeholder="Confirm Password"
          />
          <Input
            type="radio"
            name="join"
            id="buyer"
            value="buyer"
            textAfter="Join As a Buyer"
          />
          <Input
            type="radio"
            name="join"
            id="seller"
            value="seller"
            textAfter="Join As a Creative or Marketplace Seller"
          />
          <Input
            type="checkbox"
            name="marketing"
            id="marketing"
            textAfter="Allow Squadhelp to send marketing/promotional offers from time to time"
          />

          <Button type="submit" text="Create an account" />
          {/* Google API */}
        </Form>
      )}
    </Formik>
  );
}
