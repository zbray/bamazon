//Initialize Server
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazonDB"
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
  console.log("It's dangerous to go alone! Gear up!");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw (err);
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " " + res[i].product_name + " " + res[i].department_name + " $" + res[i].price);
    }
  })
  buyItems();
}

function buyItems() {
  inquirer
    .prompt([{
        name: "id",
        type: "input",
        message: "What is the ID of the product you would like to buy?" + "\n",
      },
      {
        name: "quantity",
        type: "input",
        message: "How many are you interested in?"
      }
    ])
    .then(function (answer) {
      //Confirm purchase and thank user
      //Check for stock
    });
}

function updateshop() {

};

function orderAgain() {
  inquirer.prompt([{
    name: "orderAgain",
    type: "list",
    message: "Would you like to keep shopping?",
    choices: ["Yes", "No"]
  }]).then(function (answer) {
    if (answer.orderAgain === "Yes") {
      initShop();
    } else {
      console.log("Thank you, young hero! Come again.");
    }
  })
};