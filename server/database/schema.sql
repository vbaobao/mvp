CREATE DATABASE IF NOT EXISTS shipment_tracker;

USE shipment_tracker;

CREATE TABLE IF NOT EXISTS clients (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  phone VARCHAR(11),
  email varchar(50)
);

CREATE TABLE IF NOT EXISTS shipments (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  client_id INT,
  volume INT,
  charge DOUBLE,
  cost DOUBLE,
  address VARCHAR(160),
  is_complete INT,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);