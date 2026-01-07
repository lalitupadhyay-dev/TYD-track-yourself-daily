import mongoose from "mongoose";

const workreportSchema = new mongoose.Schema({

    date: {
        type: Date,
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
    }

});

const Workreport = mongoose.model("Workreports", workreportSchema);

export default Workreport;