import * as yup from "yup";

export const schema = yup
  .object({
    firstName: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Only letters are allowed")
      .min(2, "Min 2 letters")
      .max(20)
      .required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .matches(/^\d{6,}$/, "Phone number must be more than 6 digits")
      .required(),
    gender: yup.string().oneOf(["male", "female", "other"]).required(),
    checkbox: yup.boolean().oneOf([true], "Checkbox is required").required(),
  })
  .required();
