import mongoose from "mongoose";
import { TASK_PRIORITY, TASK_STATUS } from "../constants/task.js";

const workitemSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        enum: Object.values(TASK_STATUS),
        default: TASK_STATUS.NOT_STARTED
    },

    priority: {
        type: String,
        enum: Object.values(TASK_PRIORITY),
        default: TASK_PRIORITY.LOW,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    workspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
        required: true,
    }

});

const Workitem = mongoose.model("Workitems", workitemSchema);

export default Workitem;