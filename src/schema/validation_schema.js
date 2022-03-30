import * as yup from "yup";
import errors from "../constants/error";

export const userNameValidation = yup.string().required(errors.required);

export const emailValidation = yup
  .string(errors.email)
  .email(errors.invalidEmail)
  .required(errors.required);

export const passwordValidation = yup.string().required(errors.required);
// .matches(
//   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//   errors.password
// );

export const confirmPasswordValidation = yup
  .string()
  .required(errors.required)
  .oneOf([yup.ref("password"), null], errors.confirmpassword);
