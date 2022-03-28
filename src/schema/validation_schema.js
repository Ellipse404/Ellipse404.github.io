import * as yup from "yup";

export const emailValidation = yup
  .string()
  .email("incorrect email")
  .required("required email");

export const passwordValidation = yup
  .string()
  .required("required password")
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // );
