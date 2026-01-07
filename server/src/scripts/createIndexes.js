import mongoose from "mongoose";
import Workspace from "../models/workspace.model.js";

async function createIndexes() {
  const indexesOnWorkspace = await Workspace.collection.getIndexes();

  if (!(indexesOnWorkspace?.name_1_createdBy_1?.length > 0)) {
    await Workspace.collection.createIndex(
      {
        name: 1,
        createdBy: 1,
      },
      { unique: true }
    );

    console.log("Index on workspace schema created (name + createdBy)");
  }
}

export default createIndexes;
