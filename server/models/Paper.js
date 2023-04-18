import mongoose from "mongoose";

const paperSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Submitted", //Approved, Rejected
    },
    authors: {
      type: [String],
    },
    pdfFile: {
      type: String,
    },
    sourceFile: {
      type: String,
    },
    copyrightFile: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Paper", paperSchema);
