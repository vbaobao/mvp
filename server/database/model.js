const db = require('./connection.js');

module.exports = {
  // Handle sending Dashboard data
  getShipments: (callback) => {
    let sql = `SELECT s.id, c.firstname, c.lastname, c.email, s.volume, (s.charge - s.cost) AS profit, s.is_complete FROM shipments s
    JOIN clients c ON c.id = s.client_id`;
    db.query(sql, [], (err, res, fields) => {
      if (err) console.error(err.message);
      callback(null, res);
    });
  },

  getClients: (callback) => {
    let sql = `SELECT * FROM clients`;

    db.query(sql, [], (err, results, fields) => {
      if (err) callback(err);
      callback(null, results);
    });
  },

  // Handle new client creation
  setNewClient: (req, callback) => {
    let sql = 'INSERT INTO clients (firstname, lastname, phone, email) VALUES (?,?,?,?)';
    let insert = [req.firstname, req.lastname, req.phone, req.email];

    db.query(sql, insert, (err, results, fields) => {
      if (err) callback(err);
      module.exports.getClients(callback);
    });
  },

  // Handle new shipment creation
  setNewShipment: (req, callback) => {
    let sql = 'INSERT INTO shipments (client_id, volume, charge, cost, address, is_complete) VALUES (?, ?, ?, ?, ?, ?)';
    let insert = [req.client_id, req.volume, req.charge, req.cost, req.address, 0];
    db.query(sql, insert, (err, results, fields) => {
      if (err) callback(err);
      module.exports.getShipments(callback);
    });
  },

  // Handle shipment updating
  updateStatus: (req, callback) => {
    let sql = 'UPDATE shipments SET is_complete=? WHERE id=?';
    let insert = [req.is_complete, req.id];

    db.query(sql, insert, (err, results, fields) => {
      if (err) callback(error);
      module.exports.getShipments(callback);
    });
  }
};