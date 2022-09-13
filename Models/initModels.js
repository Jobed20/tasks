const { Task } = require("./tasks.model");
const { User } = require("./users.model");

const initModels = () => {

  User.hasMany(Task, { foreignKey: "userId" });
  Task.belongsTo(User, { foreignKey: "userId" });
};

module.exports = { initModels };
