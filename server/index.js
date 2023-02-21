import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import projectsRoute from "./routes/projects.js";
import papersRoute from "./routes/papers.js";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload());
app.use("/server/auth", authRoute);
app.use("/server/users", usersRoute);
app.use("/server/projects", projectsRoute);
app.use("/server/papers", papersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const erroMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: erroMessage,
    stack: err.stack,
  });
});

app.listen(8080, () => {
  connect();
  console.log("Connected to backend.");
});
