import express from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
  getRecentPublications,
} from "../controllers/project.js";
import { verifyEditor } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyEditor, createProject);
router.put("/:id", verifyEditor, updateProject);
router.delete("/:id", verifyEditor, deleteProject);
router.get("/find/:id", getProject);
router.get("/", getProjects);
router.get("/recentPublications", getRecentPublications);

export default router;
