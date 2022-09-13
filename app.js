const express = require("express");

const { tasksRouter } = require("./Routes/tasks.routes");
const { usersRouter } = require("./Routes/users.routes");

const app = express();
app.use(express.json());

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/tasks", tasksRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in the server`,
  });
});

module.exports = { app };
