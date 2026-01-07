import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectToMongoDB from "./utils/dbConnection.js";
import v1Router from "./api/v1/index.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware.js";

// configure dotenv()
dotenv.config({ path: "./src/.env" });


// createIndexes();

const app = express();

// connect to MongoDB database
connectToMongoDB();

// built-in middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

// routes
app.use("/api/v1", v1Router);
// app.use("/api/v1/tasks", taskRouter);


// Global Error Handler
app.use(globalErrorHandler);

export default app;
