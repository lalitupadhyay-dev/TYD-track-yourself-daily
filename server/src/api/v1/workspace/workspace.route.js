import { Router } from "express";

import {
  createWorkspace,
  getAllWorkspacesOfUser,
  updateWorkspaceDetailsById,
} from "./workspace.controller.js";
import { createWorkspaceValidationSchema } from "./workspace.validation.js";
import validator from "../../../middlewares/validator.middleware.js";

const workspaceRouter = Router();

// GET REQUESTS

/* -> Here auth middleware will be used */
workspaceRouter.get("/get-all", getAllWorkspacesOfUser);

// POST REQUESTS
workspaceRouter.post(
  "/create",
  validator(createWorkspaceValidationSchema),
  createWorkspace
);

// PATCH REQUESTS
workspaceRouter.patch("/update/:workspaceId", updateWorkspaceDetailsById);

export default workspaceRouter;
