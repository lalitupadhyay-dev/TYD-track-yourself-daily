import z from "zod";

import VALIDATION_ERRORS from "../../../constants/errors/validationErrors.js";

const createWorkspaceValidationSchema = z
  .object({
    name: z.string().trim(),
    description: z.string().trim(),
  })
  .superRefine((data, ctx) => {
    // FOR WORKSPACE NAME
    if (data.name === "") {
      return ctx.addIssue({
        code: "custom",
        message: VALIDATION_ERRORS.EMPTY_WORKSPACE_NAME.message,
        path: ["name"],
      });
    }

    if (data.name !== "" && !isNaN(Number(data.name))) {
      return ctx.addIssue({
        code: "custom",
        message: VALIDATION_ERRORS.INVALID_WORKSPACE_NAME.message,
        path: ["name"],
      });
    }

    // FOR WORKSPACE DESCRIPTION
    if (data.description === "") {
      return ctx.addIssue({
        code: "custom",
        message: VALIDATION_ERRORS.EMPTY_WORKSPACE_DESCRIPTION.message,
        path: ["description"],
      });
    }
  });

export { createWorkspaceValidationSchema };
