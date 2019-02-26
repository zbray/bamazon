var mysql = require("mysql");
var inquirer = require("inquire");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazons"
});
console.log

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return;
  };
  console.log("connected as id " + connection.threadId + "\n");
  shop();
});

function shop() {

}