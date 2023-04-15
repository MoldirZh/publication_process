import express from "express";
import {
  createInvitation,
  deleteInvitation,
  getInvitation,
  getInvitations,
  updateInvitation,
  getUserInvitations,
} from "../controllers/Invitation.js";

const router = express.Router();

router.post("/:projectid", createInvitation);
router.put("/:id", updateInvitation);
router.delete("/:id", deleteInvitation);
router.get("/find/:id", getInvitation);
router.get("/", getInvitations);
router.get("/getUserInvitations", getUserInvitations);

export default router;
