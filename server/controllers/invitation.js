import Invitation from "../models/Invitation.js";
import Project from "../models/Project.js";
import User from "../models/User.js";
import { ObjectId } from "mongodb";

export const createInvitation = async (req, res, next) => {
  const projectid = req.params.projectid;
  const newInvitation = new Invitation(req.body);

  let inviteeId;

  try {
    inviteeId = await User.findOne({
      username: req.body.to,
    });
    newInvitation.to = inviteeId._id;
    newInvitation.project = projectid;
    try {
      const savedInvitation = await newInvitation.save();
      try {
        await Project.findByIdAndUpdate(projectid, {
          $push: { invitations: savedInvitation._id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedInvitation);
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

export const updateInvitation = async (req, res, next) => {
  try {
    const updatedInvitation = await Invitation.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedInvitation);
  } catch (err) {
    next(err);
  }
};

export const deleteInvitation = async (req, res, next) => {
  try {
    await Invitation.findByIdAndDelete(req.params.id);
    res.status(200).json("Invitation has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getInvitation = async (req, res, next) => {
  try {
    const invitation = await Invitation.findById(req.params.id);
    await Invitation.findById(req.params.id);
    res.status(200).json(invitation);
  } catch (err) {
    next(err);
  }
};

export const getInvitations = async (req, res, next) => {
  try {
    const invitations = await Invitation.find()
      .populate("from")
      .populate("project");
    await Invitation.find(req.params.id);
    res.status(200).json(invitations);
  } catch (err) {
    next(err);
  }
};

export const getUserInvitations = async (req, res, next) => {
  const userid = req.query.userid;
  try {
    const invitations = await Invitation.find({
      to: ObjectId(userid),
    })
      .populate("from")
      .populate("project");
    await Invitation.find(req.params.id);
    res.status(200).json(invitations);
  } catch (err) {
    next(err);
  }
};
