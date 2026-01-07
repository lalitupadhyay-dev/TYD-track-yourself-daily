import mongoose from "mongoose";

const worklogSchema = new mongoose.Schema({

    workreportId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workreport",
        required: true,
    },

    workitemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workitem",
        required: true,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    description: {
        type: String,
        required: true,
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

const Worklog = mongoose.model("Worklog", worklogSchema);

export default Worklog;