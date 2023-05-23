import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import CustomInput from "../Input/Input";
import { schema } from "./schema";

type FormData = yup.InferType<typeof schema>;

function ContactForm() {
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
      className="max-w-[300px] md:max-w-md mx-auto px-2 pt-32"
    >
      <fieldset>
        <legend className="text-center mb-5 sm:text-2xl font-bold text-rose-500">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </legend>

        <CustomInput
          label="First Name"
          name="firstName"
          register={register("firstName")}
          errors={
            (errors["firstName"]?.message && "") || errors["firstName"]?.message
          }
          placeholder="Mykola"
        />
        <CustomInput
          label="Email"
          name="email"
          register={register("email")}
          errors={(errors["email"]?.message && "") || errors["email"]?.message}
          placeholder="email@gmail.com"
        />
        <CustomInput
          label="Phone"
          name="phone"
          register={register("phone")}
          errors={
            (errors["phone"]?.message &&
              "Phone number must be more 6 and less 20 digits!") ||
            errors["phone"]?.message
          }
          placeholder="80677785095"
        />

        <div className="mb-4">
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("checkbox")}
              className="mr-2 cursor-pointer"
            />
            I agree to the terms and conditions
          </label>
          <p className="text-red-500 mt-1 h-6">{errors.checkbox?.message}</p>
        </div>

        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded cursor-pointer"
        />
      </fieldset>
    </form>
  );
}

export default ContactForm;
