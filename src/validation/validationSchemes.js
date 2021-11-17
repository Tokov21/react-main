import * as yup from "yup";

export const SIGNUP_SCHEME = yup.object().shape({
  firstname: yup.string().matches().required(),
  lastname: yup.string().matches().required(),
  displayname: yup.string().matches().required(),
  email: yup.string().email().required(),
  password: yup.string().matches().required(),
  /*  passwordConf: yup.string().matches().required(),
  join: yup.string().matches().required(),
  marketing: yup.string().matches().required(), */
});
