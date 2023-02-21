import express from "express";
import {
  uploadPaper,
  createPaper,
  deletePaper,
  getPaper,
  getPapers,
  updatePaper,
} from "../controllers/paper.js";
import { verifyAuthor, verifyEditor } from "../utils/verifyToken.js";

const router = express.Router();
//REMOVE LATER
router.post("/", uploadPaper);

router.post("/:projectid", createPaper);
router.put("/:id", updatePaper);
router.delete("/:id", deletePaper);
router.get("/:id", getPaper);
router.get("/", getPapers);

export default router;
