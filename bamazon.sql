DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;
USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
    ("master sword", "weapons", 99.9, 1), 
    ("sword of the six sages", "weapons", 49.9, 5), 
    ("green tunic", "clothing", 22.5, 10), 
    ("green hat", "clothing", 14.9, 5), 
    ("hookshot", "weapons", 29.9, 15), 
    ("bow", "weapons", 34.9, 15), 
    ("arrows", "ammo", 4.9, 99), 
    ("bombs", "ammo", 19.9, 99), 
    ("brown boots", "clothing", 29.9, 20), 
    ("boomerang", "weapons", 9.9, 1);

SELECT * FROM products;