// initial require
const inquirer = require("inquirer");
const db = require("./db");
// const logo = require("asciiart-logo");
require("console.table");

const appProcess = function () {
  console.log(`
  
    Employee Data App`);

  function showMenu() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "continue",
          message: "Choose one of the following options:",
          choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Leave",
          ],
        },
      ])
      .then((choices) => {
        switch (choices.continue) {
          case "View all departments":
            viewAllDepartments();
            break;

          case "View all roles":
            viewAllRoles();
            break;

          case "View all employees":
            viewAllEmployees();
            break;

          case "Add a department":
            addADepartment();
            break;

          case "Add a role":
            addARole();
            break;

          case "Add an employee":
            addAEmployee();
            break;

          case "Update an employee role":
            UpdateAnEmployeeRole();
            break;

          case "Leave":
            leaveApp();
            break;
        }
      });
  }

  showMenu();

  function viewAllDepartments() {
    db.findAllDepartments()
      .then(([rows]) => {
        // console.log("View all departments");
        console.table(rows);
        console.log("\n");
      })
      .then(() => {
        showMenu();
      });
  }
  function viewAllRoles() {
    db.findAllRoles()
      .then(([rows]) => {
        // console.log("View all roles");
        console.table(rows);
        console.log("\n");
      })
      .then(() => {
        showMenu();
      });
  }
  function viewAllEmployees() {
    db.findAllEmployees()
      .then(([rows]) => {
        // console.log("View all employees");
        console.table(rows);
        console.log("\n");
      })
      .then(() => {
        showMenu();
      });
  }
  function addADepartment() {
    console.log("NA");
    showMenu();
  }
  function addARole() {
    console.log("NA");
    showMenu();
  }

  function addAEmployee() {
    inquirer
      .prompt([
        {
          name: "employeeName",
          message: "Input the new employee name:",
        },
      ])
      .then((res) => {
        let employeeName = res.employeeName;

        db.findAllRoles().then(([rows]) => {
          let roleRows = rows;
          const roleChoices = roleRows.map(({ id, title }) => ({
            name: title,
            value: id,
          }));

          inquirer
            .prompt([
              {
                type: "list",
                name: "roleId",
                message: "Choose the new employee role:",
                choices: roleChoices,
              },
            ])
            .then((res) => {
              let roleId = res.roleId;

              inquirer
                .prompt([
                  {
                    type: "list",
                    name: "managerName",
                    message: "Choose a manager for that new employee employee:",
                    choices: [
                      "Daniel Sharman",
                      "Hugo Weaving",
                      "Leonardo DiCaprio",
                    ],
                  },
                ])
                .then((res) => {
                  let managerName = res.managerName;
                  let newEmployee = {
                    full_name: employeeName,
                    role_id: roleId,
                    manager_name: managerName,
                  };

                  db.createEmployee(newEmployee);
                })
                .then(function () {
                  console.log(
                    "You added " + employeeName + " to the database!"
                  );
                })
                .then(() => {
                  showMenu();
                });
            });
        });
      });
    // console.log("NA");
    // showMenu();
  }

  function UpdateAnEmployeeRole() {
    db.findAllEmployees().then(([rows]) => {
      let employeeRows = rows;
      // need to ask
      const employeeChoices = employeeRows.map(({ id, full_name }) => ({
        name: full_name,
        value: id,
      }));

      inquirer
        .prompt([
          {
            type: "list",
            name: "employeeId",
            message: "Choose an employee to continue to update:",
            choices: employeeChoices,
          },
        ])
        .then((res) => {
          let employeeId = res.employeeId;

          db.findAllRoles().then(([rows]) => {
            let roleRows = rows;
            // need to ask
            const roleChoices = roleRows.map(({ id, title }) => ({
              name: title,
              value: id,
            }));

            inquirer
              .prompt([
                {
                  type: "list",
                  name: "roleId",
                  message:
                    "Choose the role that you want to update for the selected employee:",
                  choices: roleChoices,
                },
              ])
              .then((res) => {
                let roleId = res.roleId;
                db.updateEmployeesRoleTitle(employeeId, roleId);
                //   console.log("You updated an employee's title");
              })
              .then(() => {
                showMenu();
              });
          });
        });

      //   console.log("\n");
    });
  }

  function leaveApp() {
    console.log("See you next time!");
    // Exit from a Node
    process.exit();
  }
};

appProcess();

// console.log("Now runing node index!");
