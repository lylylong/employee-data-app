// initial require
const inquirer = require("inquirer");
const db = require("./db");
const logo = require("asciiart-logo");
require("console.table");

const appProcess = function () {
  const loading = logo({ name: "Employee Data" }).render();
  console.log(loading);

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

  // view all departments
  function viewAllDepartments() {
    db.findAllDepartments()
      .then(([rows]) => {
        console.log("\n");
        console.table(rows);
        console.log("\n");
      })
      .then(() => {
        showMenu();
      });
  }

  // view all roles
  function viewAllRoles() {
    db.findAllRoles()
      .then(([rows]) => {
        console.log("\n");
        console.table(rows);
        console.log("\n");
      })
      .then(() => {
        showMenu();
      });
  }

  // view all employees
  function viewAllEmployees() {
    db.findAllEmployees()
      .then(([rows]) => {
        console.log("\n");
        console.table(rows);
        console.log("\n");
      })
      .then(() => {
        showMenu();
      });
  }

  // to add a department
  function addADepartment() {
    inquirer
      .prompt([
        {
          name: "departmentName",
          message: "Input the new department:",
        },
      ])
      .then((res) => {
        let departmentName = res.departmentName;
        let newDepartment = {
          department_name: departmentName,
        };

        db.createDepartment(newDepartment)
          .then(function () {
            console.log("\n");
            console.log(
              "You added " +
                departmentName +
                ", as a new department, to the database!"
            );
            console.log("\n");
          })
          .then(() => {
            showMenu();
          });
      });

    // console.log("NA");
    // showMenu();
  }

  // to add a role
  function addARole() {
    inquirer
      .prompt([
        {
          name: "roleTitle",
          message: "Input the new role title:",
        },
      ])
      .then((res) => {
        let roleTitle = res.roleTitle;

        inquirer
          .prompt([
            {
              name: "salary",
              message: "Input the new role salary:",
            },
          ])
          .then((res) => {
            let salary = res.salary;

            db.findAllDepartments().then(([rows]) => {
              let departmentRows = rows;
              const departmentsChoices = departmentRows.map(
                ({ id, department_name }) => ({
                  name: department_name,
                  value: id,
                })
              );

              inquirer
                .prompt([
                  {
                    type: "list",
                    name: "departmentId",
                    message: "Choose the new role's department:",
                    choices: departmentsChoices,
                  },
                ])
                .then((res) => {
                  let departmentId = res.departmentId;
                  let newRole = {
                    role_title: roleTitle,
                    salary: salary,
                    department_id: departmentId,
                  };
                  db.createRole(newRole)
                    .then(function () {
                      console.log("\n");
                      console.log(
                        "You added " +
                          roleTitle +
                          ", as a new role, to the database!"
                      );
                      console.log("\n");
                    })
                    .then(() => {
                      showMenu();
                    });
                });
            });
          });
      });
  }

  // to add an employee
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
                  console.log("\n");
                  console.log(
                    "You added " +
                      employeeName +
                      ", as an new employee, to the database!"
                  );
                  console.log("\n");
                })
                .then(() => {
                  showMenu();
                });
            });
        });
      });
  }

  // to update an employee's role
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
              })
              .then(() => {
                console.log("\n");
                console.log("You updated an employee's title!");
                console.log("\n");
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
    console.log(`

See you next time!

    `);
    // Exit from a Node
    process.exit();
  }
};

appProcess();
