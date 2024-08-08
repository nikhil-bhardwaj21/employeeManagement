import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().max(8).min(6).required(),
});
