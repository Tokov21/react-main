import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../../components/Forms/SignUpForm";

export default function SignUpPage() {
  const onSubmit = (values, formikBag) => {
    console.log(values);

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
