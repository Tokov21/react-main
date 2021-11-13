import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "../../components/Forms/SignupForm";

export default function SignupPage() {
  return (
    <>
      <div>
        <Link to="/">Main</Link>
      </div>
      <SignupForm />
    </>
  );
}
