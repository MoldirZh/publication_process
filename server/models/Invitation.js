import mongoose from "mongoose";

const invitationSchema = new mongoose.Schema(
  {
    project: {
      type: String,
      ref: "Project",
      required: true,
    },
    from: {
      type: String,
      ref: "User",
      required: true,
    },
    to: {
      type: String,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Awaiting", //Accepted, Rejected
    },
  },
  { timestamps: true }
);

export default mongoose.model("Invitation", invitationSchema);
