var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  port: 3000,
  user: 'root',
  password: '',
  multipleStatements: true
});

/* Database and Table schema */

var createDatabase = `CREATE DATABASE IF NOT EXISTS shipment_tracker`;

var createClients = `CREATE TABLE IF NOT EXISTS clients (
  id INT AUTOINCREMENT NOT NULL UNIQUE,
  PRIMARY KEY (id),
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  phone INT,
  email varchar(50)
)`;

var createShipments = `CREATE TABLE IF NOT EXISTS shipments (
  id INT AUTOINCREMENT NOT NULL UNIQUE,
  PRIMARY KEY (id),
  client_id INT,
  volume INT,
  charge DOUBLE,
  cost DOUBLE,
  address VARCHAR(160),
  status INT
  FOREIGN KEY client_id REFERENCES clients(id)
)`;


db.connect((err) => {
  if (err) { return console.error(err); }
  console.log(`Connected`);
});

db.query(createDatabase, (err) => {
  if (err) { return console.error(err.message); }
  let tables = [createClients, createShipments];
  for (const newTable of tables) {
    db.query(newTable, (err) => {
      return console.error('Unable to create table ', newTable, err.message);
    })
    console.log('New table created.');
  }
})

db.end((err) => {
  if (err) { return console.error(err.message); }
});