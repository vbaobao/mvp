var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  multipleStatements: true,
  database: 'shipment_tracker'
});

db.connect((err) => {
  if (err) { return console.error(err); }
  console.log(`Connected`);
});

// db.query(someQuery, args, (err) => {
//   if (err) { return console.error(err.message); }

// })

db.end((err) => {
  if (err) { return console.error(err.message); }
});