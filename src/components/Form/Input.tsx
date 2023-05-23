import {
  FieldError,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";

type CustomInputProps = {
  label: string;
  name: keyof FieldValues;
  register?: UseFormRegisterReturn;
  errors?: any;
  placeholder?: string;
  errorMessage?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  register,
  errors,
  placeholder,
  errorMessage,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <input
        {...register}
        className="border border-gray-300 rounded-md px-4 py-2 w-full"
        placeholder={placeholder}
      />
      <p className="text-red-500 mt-1">
        {(errors[name]?.message && errorMessage) || errors[name]?.message}
      </p>
    </div>
  );
};

export default CustomInput;
