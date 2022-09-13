const express = require("express");

const {
  getAllTasks,
  createTask,
  getGivenStatus,
  updateTask,
  deleteTask
} = require("../controllers/tasks.controller");

const {
  statusExist,
  taskExist,
  isTaskActive,
} = require("../middlewares/tasks.middleware");

const {
  createTasksValidators,
  updateTasksValidators,
} = require("../middlewares/validators.middleware");

const tasksRouter = express.Router();

tasksRouter.get("/", getAllTasks);

tasksRouter.get("/:status", statusExist, getGivenStatus);

tasksRouter.post("/", createTasksValidators, createTask);

tasksRouter.patch("/:id", taskExist, updateTasksValidators, isTaskActive, updateTask);

tasksRouter.delete("/:id", taskExist, isTaskActive, deleteTask);

module.exports = { tasksRouter };
