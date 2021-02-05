const db = require('./connection.js');

module.exports = {
  // Handle sending Dashboard data
  getActiveShipments: (callback) => {
    let sql = `SELECT c.firstname, c.lastname, c.email, s.volume, (s.charge - s.cost) AS profit FROM shipments s
    JOIN clients c ON c.id = s.client_id`;
    db.query(sql, [], (err, res, fields) => {
      if (err) { return console.error(err.message) };
      callback(null, res);
    });
  },

  // Handle new client creation
  setNewClient: (req, callback) => {
    let sql = 'INSERT INTO clients (firstname, lastname, phone, email) VALUES (?,?,?,?)';
    let insert = [req.firstname, req.lastname, req.phone, req.email];

    db.query(sql, insert, (err, results, fields) => {
      if (err) callback(err);
      callback(null, `Affected rows: ${results.affectedRows}`);
    });
  },

  // Handle new shipment creation
  setNewShipment: (req, callback) => {},

  // Handle shipment updating
  updateStatus: (req, callback) => {}
};