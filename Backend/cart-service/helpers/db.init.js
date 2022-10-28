const mysql = require("mysql");
const util = require("util");

let connection = mysql.createConnection({
  host: "192.168.8.102",
  port: 8090,
  user: "root",
  password: "root",
  database: "mobileShop",
});

connection.connect(err => {
  if (err) {
    console.log("Error occurred ", err);
  } else {
    console.log("Connected to mysql database");
  }
});

const query = util.promisify(connection.query).bind(connection);

module.exports = { connection, query };
