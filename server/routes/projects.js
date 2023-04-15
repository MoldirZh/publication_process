import express from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
  getRecentPublications,
  getUserProjects,
} from "../controllers/project.js";
import { verifyEditor } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.get("/find/:id", getProject);
router.get("/", getProjects);
router.get("/recentPublications", getRecentPublications);
router.get("/getUserProjects", getUserProjects);

export default router;
