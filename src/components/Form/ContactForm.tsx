import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import CustomInput from "./Input";

const schema = yup
  .object({
    firstName: yup.string().min(2).max(20).required(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
    gender: yup.string().oneOf(["male", "female", "other"]).required(),
    checkbox: yup.boolean().oneOf([true], "Checkbox is required").required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <form
      id="section2"
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xs md:max-w-md mx-auto px-2"
    >
      <fieldset>
        <legend className="text-center mb-5 sm:text-2xl font-bold text-rose-500">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </legend>

        <CustomInput
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
          placeholder="Mykola"
          pattern={/^[A-Za-z]+$/i}
        />
        <CustomInput
          label="Email"
          name="email"
          register={register}
          errors={errors}
          placeholder="email@gmail.com"
        />
        <CustomInput
          label="Phone"
          name="phone"
          register={register}
          errors={errors}
          placeholder="80677785095"
          errorMessage="Phone number must be more than 7 digits and less than 20 digits!"
        />
        <div className="mb-4">
          {" "}
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("checkbox")}
              className="mr-2 cursor-pointer"
            />
            I agree to the terms and conditions
          </label>
          <p className="text-red-500 mt-1 ">{errors.checkbox?.message}</p>
        </div>

        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded cursor-pointer"
        />
      </fieldset>
    </form>
  );
}
