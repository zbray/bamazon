DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE bamazonTable (
  id INT NOT NULL,
  name VARCHAR(100) NULL,
  price DECIMAL NULL,
  category VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

SELECT * FROM bamazonTable;
