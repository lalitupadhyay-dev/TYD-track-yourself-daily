import { Router } from "express";

import workitemRouter from "./workitem/workitem.route.js";
import workspaceRouter from "./workspace/workspace.route.js";
import userRouter from "./user/user.route.js";

const v1Router = Router();

v1Router.use("/workitem", workitemRouter);
v1Router.use("/workspace", workspaceRouter);
v1Router.use("/user", userRouter);

export default v1Router;