import { Router } from "express";

import {
  createWorkitem,
  deleteWorkitem,
  getAllWorkitems,
  updateWorkitem,
} from "./workitem.controller.js";

const workitemRouter = Router();

workitemRouter.get("/all", getAllWorkitems);
workitemRouter.post("/create", createWorkitem);
workitemRouter.delete("/delete/:id", deleteWorkitem);
workitemRouter.put("/update/:id", updateWorkitem);

export default workitemRouter;
