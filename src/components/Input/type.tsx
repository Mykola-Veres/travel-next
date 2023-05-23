import { FieldValues, UseFormRegisterReturn } from "react-hook-form";

export type CustomInputProps = {
  label: string;
  name: keyof FieldValues;
  register?: UseFormRegisterReturn;
  errors?: string;
  placeholder?: string;
  errorMessage?: string;
};
