import React from "react";
import { Form, Formik } from "formik";

import Input from "../../Input";
import Button from "../../Button";

export default function ChatForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ messages: [] }}
      onSubmit={onSubmit}
      validationSchema=""
    >
      {() => (
        <Form>
          <Input type="text" name="messages" id="messages" />

          <Button type="submit" text="Submit" />
        </Form>
      )}
    </Formik>
  );
}
