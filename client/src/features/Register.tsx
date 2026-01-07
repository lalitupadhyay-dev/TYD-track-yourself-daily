import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import {
  registerFormSchema,
  type RegisterFormSchema,
} from "../schemas/auth.schema.ts";
import Error from "../components/Error.tsx";
import useRegister from "../hooks/useRegister.ts";
import type { ApiError } from "../services/auth.service.ts";

function Register() {

  const { register, handleSubmit, formState } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    mode: "onSubmit",
  });

  const { registerUser } = useRegister();

  const onSubmit = async (formData: RegisterFormSchema) => {


    try {
      const data = await registerUser(formData);
      console.log(data);
      if (data.success) {
        toast.success(data.message);
      }
    } catch (error) {
      toast.error((error as ApiError).error);
    }

  };

  return (
    <section className="flex items-center justify-center px-4 pb-8">
      <div className="w-full max-w-2xl rounded-xl border border-neutral-800 bg-neutral-900 shadow-lg">
        {/* Header */}
        <div className="border-b border-neutral-800 px-6 py-4">
          <h1 className="text-xl font-semibold text-neutral-100">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-neutral-400">
            Fill in the details to get started
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 px-6 py-6"
        >
          {/* Name fields */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* First Name */}
            <div>
              <label className="mb-1 block text-xs font-medium text-neutral-400">
                First name
              </label>
              <input
                type="text"
                placeholder="John"
                {...register("firstName")}
                className="
              w-full rounded-md border border-neutral-800
              bg-neutral-950 px-3 py-2 text-sm text-neutral-100
              placeholder:text-neutral-500 outline-none
              focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600
            "
              />
              {formState.errors?.firstName?.message && (
                <Error message={formState.errors.firstName.message} />
              )}
            </div>

            {/* Middle Name */}
            <div>
              <label className="mb-1 block text-xs font-medium text-neutral-400">
                Middle name
              </label>
              <input
                type="text"
                placeholder="Optional"
                {...register("middleName")}
                className="
              w-full rounded-md border border-neutral-800
              bg-neutral-950 px-3 py-2 text-sm text-neutral-100
              placeholder:text-neutral-500 outline-none
              focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600
            "
              />
              {formState.errors?.middleName?.message && (
                <Error message={formState.errors.middleName.message} />
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="mb-1 block text-xs font-medium text-neutral-400">
                Last name
              </label>
              <input
                type="text"
                placeholder="Doe"
                {...register("lastName")}
                className="
              w-full rounded-md border border-neutral-800
              bg-neutral-950 px-3 py-2 text-sm text-neutral-100
              placeholder:text-neutral-500 outline-none
              focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600
            "
              />
              {formState.errors?.lastName?.message && (
                <Error message={formState.errors.lastName.message} />
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-400">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="
            w-full rounded-md border border-neutral-800
            bg-neutral-950 px-3 py-2 text-sm text-neutral-100
            placeholder:text-neutral-500 outline-none
            focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600
          "
            />
            {formState.errors?.email?.message && (
              <Error message={formState.errors.email.message} />
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-400">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className="
            w-full rounded-md border border-neutral-800
            bg-neutral-950 px-3 py-2 text-sm text-neutral-100
            placeholder:text-neutral-500 outline-none
            focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600
          "
            />
            {formState.errors?.password?.message && (
              <Error message={formState.errors.password.message} />
            )}
          </div>

          {/* Avatar */}
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-400">
              Avatar <span className="text-neutral-500">(max 1MB)</span>
            </label>
            <input
              type="file"
              accept="image/webp, image/jpeg"
              className="
            w-full cursor-pointer rounded-md border border-neutral-800
            bg-neutral-950 px-3 py-2 text-sm text-neutral-400
            file:mr-4 file:rounded file:border-0
            file:bg-neutral-800 file:px-3 file:py-1.5
            file:text-sm file:font-medium file:text-neutral-100
            hover:file:bg-neutral-700
          "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
          mt-2 inline-flex items-center justify-center
          rounded-md bg-neutral-100 px-4 py-2 text-sm font-semibold
          text-neutral-900 transition
          hover:bg-neutral-300
          active:scale-[0.98]
        "
          >
            Register
          </button>

          {/* Footer */}
          <p className="mt-4 text-center text-sm text-neutral-400">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-medium text-neutral-100 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>

  );
}

export default Register;
