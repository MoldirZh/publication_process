import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    progress: {
      type: String,
      required: true,
      default: "In progress", //In progress, Completed
    },
    isPublic: {
      type: Boolean,
      required: true,
    },
    editors: [
      {
        type: String,
        ref: "User",
        required: true,
      },
    ],
    authors: [
      {
        type: String,
        ref: "User",
      },
    ],
    papers: [
      {
        type: String,
        ref: "Paper",
      },
    ],
    invitations: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
