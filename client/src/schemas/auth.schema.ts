import { z } from "zod";

const registerFormSchema = z
  .object({
    firstName: z.string().trim(),
    middleName: z.string().trim(),
    lastName: z.string().trim(),
    email: z.email("Empty or invalid email!"),
    password: z.string().trim(),
  })
  .superRefine((data, ctx) => {
    // FIRSTNAME
    if (data.firstName.length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Required *",
        path: ["firstName"],
      });
    }

    if (!isNaN(Number(data.firstName))) {
      ctx.addIssue({
        code: "custom",
        message: "Invalid firstname!",
        path: ["firstName"],
      });
    }

    // MIDDLENAME
    if (data.middleName !== "" && !isNaN(Number(data.middleName))) {
      ctx.addIssue({
        code: "custom",
        message: "Invalid middlename!",
        path: ["middleName"],
      });
    }

    // LASTNAME
    if (data.lastName !== "" && !isNaN(Number(data.lastName))) {
      ctx.addIssue({
        code: "custom",
        message: "Invalid lastname!",
        path: ["lastName"],
      });
    }

    // PASSWORD
    if (data.password.length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Required *",
        path: ["password"],
      });
    }

    if (data.password.length < 6) {
      ctx.addIssue({
        code: "custom",
        message: "Password length must be atleast 6 characters!",
        path: ["password"],
      });
    }

  });

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

export { registerFormSchema, type RegisterFormSchema };
