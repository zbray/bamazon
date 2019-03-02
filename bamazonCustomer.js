//Initialize Server
var mysql = require("mysql");
var inquirer = require("inquire");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return;
  };
  console.log("connected as id " + connection.threadId + "\n");
  initShop();
});

//Shop Functions
function initShop() {
  //Display items
  console.log("It's dangerous to go alone! Gear up!");
  //prompt user to buy items
}

function userBuy() {
  inquirer
    .prompt({
      name: "itemID",
      type: "input",
      message: "What is the ID of the product you would like to buy?",
    })
    .then(function (answer) {
      //Confirm purchase and thank user
    });
}