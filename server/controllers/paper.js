import Paper from "../models/Paper.js";
import Project from "../models/Project.js";

export const createPaper = async (req, res, next) => {
  const projectid = req.params.projectid;
  const newPaper = new Paper(req.body);

  try {
    const savedPaper = await newPaper.save();
    try {
      await Project.findByIdAndUpdate(projectid, {
        $push: { papers: savedPaper._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedPaper);
  } catch (err) {
    next(err);
  }
};

export const updatePaper = async (req, res, next) => {
  try {
    const updatedPaper = await Paper.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedPaper);
  } catch (err) {
    next(err);
  }
};

export const deletePaper = async (req, res, next) => {
  try {
    await Paper.findByIdAndDelete(req.params.id);
    res.status(200).json("Paper has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getPaper = async (req, res, next) => {
  try {
    const paper = await Paper.findById(req.params.id).populate("authors");
    await Paper.findById(req.params.id);
    res.status(200).json(paper);
  } catch (err) {
    next(err);
  }
};

export const getPapers = async (req, res, next) => {
  try {
    const Papers = await Paper.find();
    await Paper.find(req.params.id);
    res.status(200).json(Papers);
  } catch (err) {
    next(err);
  }
};
