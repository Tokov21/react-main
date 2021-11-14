import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../../components/Forms/SignUpForm";

export default function SignupPage() {
  const onSubmit = (values, formikBag) => {
    console.group();

    console.log(values);
    console.log(formikBag);

    console.groupEnd();

    formikBag.resetForm();
  };

  return (
    <>
      <div>
        <Link to="/">Main</Link>
      </div>
      <SignUpForm onSubmit={onSubmit} />
    </>
  );
}
