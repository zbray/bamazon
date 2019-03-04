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
    ("master sword", "weapons", 99.99, 1), 
    ("hookshot", "weapons", 49.99, 5), 
    ("green tunic", "clothing", 24.99, 10), 
    ("green hat", "clothing", 14.99, 5), 
    ("hookshot", "weapons", 29.99, 15), 
    ("bow", "weapons", 34.99, 15), 
    ("arrow", "ammo", 4.99, 99), 
    ("bomb", "ammo", 19.99, 99), 
    ("brown boot", "clothing", 29.99, 20), 
    ("boomerang", "weapons", 9.99, 1);

SELECT * FROM products;