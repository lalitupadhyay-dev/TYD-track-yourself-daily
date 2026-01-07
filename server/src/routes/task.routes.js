import { Router } from "express";
import { createTask, searchTaskByTitle, getAllTasks } from "../controllers/task.controller.js";
import auth from "../middlewares/auth.middleware.js";

const taskRouter = Router();

taskRouter.get("/search-task-by-title", auth, searchTaskByTitle);
taskRouter.get("/get-all-tasks", auth, getAllTasks);

taskRouter.post("/create-task", createTask);

export default taskRouter;