import * as yup from "yup";

export const SIGNUP_SCHEME = yup.object().shape({
  login: yup.string().email().required(),
});
