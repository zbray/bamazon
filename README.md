# bamazon


## Task
Create an Amazon-like storefront using MySQL and Node.js. This is a storefront created in Javascript and MySQL that has CLI functions where a user can purchase items. 

## Demos
Upon entering the shop the user is presented with a menu of items with different values - all pulled from bamazon.sql. The user is asked upon initializing the app to choose an item's item_id to purchased.

![Alt text](assets/1storestart.png?raw=true "Store Opening"| width=100)

The user is then asked how many of the item the user would like to purchase

![Alt text](assets/2quantconf.png?raw=true "Quantity")

After responding to the prompt the shop keeper repeats the quantity purchased by the user, informs them of the amount he still has in stock, informs the user the total purchase and asks if they'd like to shop again.

![Alt text](assets/3purchase.png?raw=true "Purchase Confirm")

The user here can tell the shopkeeper to shop again, at which point the user will be presented with the original ask and the updated complete stock.


The user can also inform the shopkeeper they'd best be on their way at which point the shopkeeper will wish the user well and the connection will end, alerting the user with a message saying as much.

![Alt text](assets/4end.png?raw=true "Connection End")


### Technology Used
Javascript, Node.js, MySQL

### Built With
Visual Studio Code, MySQLWorkbench, Terminal, Mac OS

#### Referenced in
Github portfolio link, created by zzzbray
