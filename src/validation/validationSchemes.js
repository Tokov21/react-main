import * as yup from "yup";

export const SIGNUP_SCHEME = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[A-Z]{1}[a-z]{2,15}$/)
    .required(),
  lastname: yup
    .string()
    .matches(/^[A-Z]{1}[a-z]{2,15}$/)
    .required(),
  displayname: yup
    .string()
    .matches(/^[a-zA-Z][a-zA-Z0-9_-]{3,15}$/, "Must start from a letter")
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
    )
    .required(),
  passwordConf: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  join: yup.string().required(),
  marketing: yup.boolean(),
});
