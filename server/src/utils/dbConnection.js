import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });
const URL = process.env.MONGO_URI;

function connectToMongoDB() {
  console.log(URL);
  mongoose
    .connect(URL)
    .then(() => {
      console.log("MongoDB connected!");
    })
    .catch((error) => {
      console.log("MongoDB not connected!");
    });
}

export default connectToMongoDB;
