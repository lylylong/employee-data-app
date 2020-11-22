const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  findAllDepartments() {
    let querySQL = "SELECT * FROM departmentTB;";
    // MySQL2 exposes a .promise() function on Connections
    // to "upgrade" an existing non-promise connection to use promise
    return this.connection.promise().query(querySQL);
  }

  findAllRoles() {
    let querySQL =
      "SELECT roleTB.id, roleTB.role_title AS title, roleTB.salary, departmentTB.department_name AS department FROM roleTB LEFT JOIN departmentTB ON roleTB.department_id = departmentTB.id;";
    return this.connection.promise().query(querySQL);
  }

  findAllEmployees() {
    let querySQL =
      "SELECT employeeTB.id, employeeTB.full_name, roleTB.role_title AS title, roleTB.salary, departmentTB.department_name AS department, employeeTB.manager_name AS manager FROM employeeTB LEFT JOIN roleTB ON employeeTB.role_id = roleTB.id LEFT JOIN departmentTB ON roleTB.department_id = departmentTB.id;";
    return this.connection.promise().query(querySQL);
  }

  createEmployee(newEmployee) {
    return this.connection
      .promise()
      .query("INSERT INTO employeeTB SET ?", newEmployee);
  }

  updateEmployeesRoleTitle(employeeId, roleId) {
    return this.connection
      .promise()
      .query("UPDATE employeeTB SET role_id = ? WHERE id = ?", [
        roleId,
        employeeId,
      ]);
  }
}

module.exports = new DB(connection);
