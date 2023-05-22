import {
  FieldError,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type CustomInputProps = {
  label: string;
  name: keyof FieldValues;
  register?: any;
  errors?: any;
  placeholder?: string;
  pattern?: RegisterOptions["pattern"];
  errorMessage?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  register,
  errors,
  placeholder,
  pattern,
  errorMessage,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <input
        {...register(name, { pattern: pattern || null })}
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
