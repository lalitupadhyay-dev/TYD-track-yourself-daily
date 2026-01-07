import mongoose from "mongoose";

function validateMongoDbObjectId(objectId) {
  if (mongoose.isValidObjectId(objectId)) {
    return true;
  }
  return false;
}

export default validateMongoDbObjectId;
