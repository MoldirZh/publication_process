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
      default: "Awaiting", //In progress, Completed
    },
    papers: {
      type: [String],
    },
    invitations: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
