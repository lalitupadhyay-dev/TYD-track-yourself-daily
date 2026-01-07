// import { Router } from "express";

// import {
//   createUser,
//   getProfile,
//   login,
//   healthCheck,
// } from "../controllers/user.controller.js";
// import validator from "../middlewares/validator.middleware.js";
// import {
//   createUserSchemaValidation,
//   loginUserSchemaValidation,
// } from "../validations/user.validation.js";


// const userRouter = Router();

// userRouter.get("/health-check", healthCheck);
// userRouter.get("/get-profile/:userId", getProfile);

// userRouter.post(
//   "/create-user",
//   validator(createUserSchemaValidation),
//   createUser
// );
// userRouter.post("/login", validator(loginUserSchemaValidation), login);

// export default userRouter;
