import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

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

        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2">
            First Name
          </label>
          <input
            {...register("firstName", { pattern: /^[A-Za-z]+$/i })}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="Mykola"
          />
          <p className="text-red-500 mt-1">{errors.firstName?.message} </p>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            {...register("email")}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="email@gmail.com"
          />
          <p className="text-red-500 mt-1">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2">
            Phone
          </label>
          <input
            {...register("phone")}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="80677785095"
          />
          <p className="text-red-500 mt-1">
            {errors.checkbox?.message &&
              "Phone number must be more than 7 digits and less than 20 digits!"}
          </p>
        </div>

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
