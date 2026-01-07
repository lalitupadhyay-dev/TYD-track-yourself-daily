import { z } from "zod";

const createUserSchemaValidation = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Firstname must be atleast 2 characters long!"),
  middleName: z.string().trim(),
  lastName: z.string().trim(),
  email: z.email().trim(),
  password: z.string().trim(),
});

export { createUserSchemaValidation };
