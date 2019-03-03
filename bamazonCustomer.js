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

//init function
function initShop() {
  console.log("‌‌▲");
  console.log("▲‌ ▲");
  console.log("");
  console.log("It's dangerous to go alone! Gear up!\n");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw (err);
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " " + res[i].product_name + " " + res[i].department_name + " $" + res[i].price);
    }
  })
  buyItems();
}

//buy function
function buyItems() {
  inquirer
    .prompt([{
        name: "purchasedId",
        type: "input",
        message: "What is the ID of the product you need, young hero?\n\n",
        filter: Number
      },
      {
        name: "purchasedQuant",
        type: "input",
        message: "And how many will you be needing today?",
        filter: Number
      }
    ])
    //Check stock to ensure purchase can occur, update stock and return purchase total
    .then(function (answer) {
      connection.query("SELECT * FROM products WHERE ?", {
        item_id: answer.purchasedId
      }, function (err, res) {
        if (err) throw (err);
        if (answer.purchasedQuant <= res[0].stock_quantity) {
          console.log("Excellent choice, young hero!");
          connection.query("UPDATE products SET ? WHERE ?",
            [{
                stock_quantity: (res[0].stock_quantity - answer.purchasedQuant)
              },
              {
                item_id: answer.purchasedId
              }
            ],
            function (err, res) {
              if (err) throw (err);
            })
          console.log("Ah, perfect. After you've purchased " + answer.purchasedQuant + " You've left me with " + res[0].stock_quantity);
          console.log("Your total today, young hero, is $" + answer.purchasedQuant * res[0].price + "\nYour rupees are no good here!");
          orderAgain();
        } else {
          console.log("Ah, young hero I seem to be out of that today. Perhaps something else? \n");
          orderAgain();
        };
      });
    });
}

//order again function
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
      leaveShop();
    }
  })
};

//done function
function leaveShop() {
  connection.end();
  console.log("Thank you, young hero! May you bring peace to our land.");
  console.log("Connection has ended.")
}