import * as yup from "yup";

import { regExp } from "common/regex";

const {
  firstname,
  lastname,
  displayname,
  password: {
    min5,
    oneNumber,
    engUpperCase,
    engLowerCase,
    oneSpecCh,
    onlyRussian,
  },
} = regExp;

export const SIGNUP_SCHEME = yup.object().shape({
  firstname: yup
    .string()
    .matches(
      firstname,
      "Start from an uppercase letter"
    )
    .required("First name is required"),
  lastname: yup
    .string()
    .matches(
      lastname,
      "Start from an uppercase letter"
    )
    .required("Last name is required"),
  displayname: yup
    .string()
    .matches(
      displayname,
      "Start from a letter and min 4 characters"
    )
    .required("Display name is required"),
  email: yup
    .string()
    .email("Must follow pattern: text@text.domain")
    .required("Email is required"),
  password: yup
    .string()
    .test({
      name: "test-password",
      test: function (value) {
        return onlyRussian.test(value)
          ? this.createError({
              message: `Only English letters allowed`,
              path: "password",
            })
          : true;
      },
    })
    .matches(min5, "Minimum 5 characters")
    .matches(oneNumber, "At least 1 number")
    .matches(engUpperCase, "At least one upper case letter")
    .matches(engLowerCase, "At least one lower case letter")
    .matches(oneSpecCh, "One special character: #?!@$ %^&*-")
    .required("Password is required"),
  passwordConf: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
  join: yup.string().required("Choose your account type: Buyer or Seller"),
  marketing: yup.boolean(),
});
