var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shipment_tracker'
});

connection.connect((err) => {
  if (err) { return console.error(err); }
  console.log(`Connected`);
});

module.exports = connection;