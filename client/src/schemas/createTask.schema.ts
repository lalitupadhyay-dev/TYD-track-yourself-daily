import { z } from "zod";
import {
  taskPriority,
  taskStatus,
} from "../constants/constants";

const createTaskFormSchema = z
  .object({
    title: z.string().trim(),
    description: z.string().trim(),
    status: z.string().trim(),
    priority: z.string().trim(),
    startDate: z.date(),
    endData: z.date(),
  })
  .superRefine((data, ctx) => {
    // FOR TITLE
    if (data.title === "") {
      ctx.addIssue({
        code: "custom",
        message: "Title cannot be empty!",
        path: ["title"],
      });
    }

    if (data.title.length < 2) {
      ctx.addIssue({
        code: "custom",
        message: "Title must be atleast 2 characters long!",
        path: ["title"],
      });
    }

    if (!isNaN(Number(data.title))) {
      ctx.addIssue({
        code: "custom",
        message: "Enter a valid title!",
        path: ["title"],
      });
    }

    // FOR DESCRIPTION
    if (data.description !== "" && !isNaN(Number(data.description))) {
      ctx.addIssue({
        code: "custom",
        message: "Enter a valid description!",
        path: ["description"],
      });
    }

    // FOR STATUS
    if (taskStatus.filter(st => st.key === data.status).length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Select a valid task status!",
        path: ["status"],
      });
    }

    // FOR PRIORITY
    if (taskPriority.filter(prt => prt.key === data.status).length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Select a valid task priority!",
        path: ["priority"],
      });
    }
  });

type CreateTaskFromSchema = z.infer<typeof createTaskFormSchema>;

export { createTaskFormSchema, type CreateTaskFromSchema };
