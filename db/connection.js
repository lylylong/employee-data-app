const mysql = require("mysql2");

// This will create a new connection every time
// The connection is destroyed when either the program exits
// or connection.end() is called

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employees",
});

connection.connect(function (err) {
  if (err) throw err;
});

// For reuse this connection:
//// put the connection logic in a separate module, like this
//// then just export the connection itself
module.exports = connection;
