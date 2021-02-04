var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  multipleStatements: true,
  database: 'shipment_tracker'
});

connection.connect((err) => {
  if (err) { return console.error(err); }
  console.log(`Connected`);
});

// db.query(someQuery, args, (err) => {
//   if (err) { return console.error(err.message); }

// })

module.exports = connection;