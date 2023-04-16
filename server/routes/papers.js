import express from "express";
import {
  createPaper,
  deletePaper,
  getPaper,
  getPapers,
  updatePaper,
} from "../controllers/paper.js";

const router = express.Router();

router.post("/:projectid", createPaper);
router.put("/:id", updatePaper);
router.delete("/:id", deletePaper);
router.get("/:id", getPaper);
router.get("/", getPapers);

export default router;
