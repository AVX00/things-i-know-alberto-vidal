const inquirer = require("inquirer");

const options = () =>
  inquirer.prompt([
    {
      name: "port",
      default: 4000,
      type: "number",
      message: "Select a port in which start the server:",
    },
    {
      name: "db",
      type: "rawlist",
      message: "Select the data-base you want to connect to:",
      choices: ["test", "production"],
    },
    {
      name: "permissions",
      type: "confirm",
      message: "Set the data-base to read only?",
    },
  ]);

module.exports = options;
