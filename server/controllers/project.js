import Project from "../models/Project.js";

export const createProject = async (req, res, next) => {
  const newProject = new Project(req.body);
  try {
    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (err) {
    next(err);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    let updatedProject;
    if (req.query.isPush) {
      updatedProject = await Project.findByIdAndUpdate(req.params.id, {
        $push: req.body,
      });
    } else {
      updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
    }
    res.status(200).json(updatedProject);
  } catch (err) {
    next(err);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json("Project has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate("papers")
      .populate("editors");
    await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};

export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find()
      .populate("papers")
      .populate("editors");
    await Project.find(req.params.id);
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
};

export const getRecentPublications = async (req, res, next) => {
  try {
    const recentPublications = await Project.find({
      $and: [{ isPublic: true }, { progress: "Completed" }],
    })
      .populate("papers")
      .populate("editors");

    await Project.find(req.params.id);
    res.status(200).json(recentPublications);
  } catch (err) {
    next(err);
  }
};

export const getUserProjects = async (req, res, next) => {
  const userid = req.query.userid;
  try {
    const userProjects = await Project.find({
      $or: [{ editors: userid }, { authors: userid }],
    }).populate("editors");
    await Project.find(req.params.id);
    res.status(200).json(userProjects);
  } catch (err) {
    next(err);
  }
};
