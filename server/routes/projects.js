import express from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
} from "../controllers/project.js";
import { verifyEditor } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyEditor, createProject);
router.put("/:id", verifyEditor, updateProject);
router.delete("/:id", verifyEditor, deleteProject);
router.get("/:id", getProject);
router.get("/", getProjects);

export default router;
