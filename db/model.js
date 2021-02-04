const db = require('./connection.js');

module.exports = {
  // Handle sending Dashboard data
  getActiveShipments: () => {
    let sql = `SELECT c.firstname, c.lastname, c.email, s.volume, (s.charge - s.cost) AS profit FROM shipments`;
    db.query(sql, args, (err, res, fields) => {
      if (err) { return console.error(err.message) };
      console.log('GET FROM DB FUNCTIONAL');
      return res;
    });
  },

  // Handle new client creation
  setNewClient: () => {},

  // Handle new shipment creation
  setNewShipment: () => {},

  // Handle shipment updating
  updateStatus: () => {}
};