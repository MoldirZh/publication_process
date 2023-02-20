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
      default: "Awaiting", //Approved, Returned for revision
    },
    authors: {
      type: [String],
    },
    pdfFile: {
      type: String,
      required: true,
    },
    sources: {},
    copyright: {},
  },
  { timestamps: true }
);

export default mongoose.model("Paper", paperSchema);
