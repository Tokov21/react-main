import * as yup from "yup";

import { regExp } from "common/regexes";

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
    onlyEnglish,
  },
  onlyLetters,
} = regExp;

export const SIGNUP_SCHEME = yup.object().shape({
  firstname: yup
    .string()
    .min(3, "Minimum three characters")
    .test({
      name: "only-english-letters",
      test: function (value) {
        return onlyEnglish.test(value)
          ? this.createError({
              message: `Only English letters allowed`,
              path: "firstname",
            })
          : true;
      },
    })
    .test("only-letters", (value, { createError, path }) => {
      return onlyLetters.test(value)
        ? createError({
            path,
            message: "Only letters allowed",
          })
        : true;
    })
    .matches(firstname, "Start from an uppercase letter")
    .required("First name is required"),
  lastname: yup
    .string()
    .min(3, "Minimum three characters")
    .test({
      name: "only-english-letters",
      test: function (value) {
        return onlyEnglish.test(value)
          ? this.createError({
              message: `Only English letters allowed`,
              path: "lastname",
            })
          : true;
      },
    })
    .test("only-letters", (value, { createError, path }) => {
      return onlyLetters.test(value)
        ? createError({
            path,
            message: "Only letters allowed",
          })
        : true;
    })
    .matches(lastname, "Start from an uppercase letter")
    .required("Last name is required"),
  displayname: yup
    .string()
    .test({
      name: "only-english-letters",
      test: function (value) {
        return onlyEnglish.test(value)
          ? this.createError({
              message: `Only English letters allowed`,
              path: "displayname",
            })
          : true;
      },
    })
    .min(4, "Minimum four characters")
    .matches(displayname, "Start from a letter")
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
        return onlyEnglish.test(value)
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
