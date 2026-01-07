import { z } from "zod";



const loginUserSchemaValidation = z.object({
  email: z.email("Email is not valid!").trim(),
  password: z.string().trim().min(1, "Password must be 1 characters long!"),
});

export {createUserSchemaValidation, loginUserSchemaValidation};
