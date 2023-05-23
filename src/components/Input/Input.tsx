import { CustomInputProps } from "./type";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  register,
  errors,
  placeholder,
}) => {
  return (
    <div className="mb-2 px-2">
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <input
        {...register}
        className="border border-gray-300 rounded-md px-2 py-2 w-full"
        placeholder={placeholder}
      />
      <p className="text-red-500 mt-1 h-10 md:h-6">{errors}</p>
    </div>
  );
};

export default CustomInput;
