import { Router } from "express";

import { createUser } from "./user.controller.js";
import { createUserSchemaValidation } from "./user.validation.js";
import validator from "../../../middlewares/validator.middleware.js";

const userRouter = Router();

// GET REQUESTS

// POST REQUESTS
userRouter.post("/create", validator(createUserSchemaValidation), createUser);

export default userRouter;
