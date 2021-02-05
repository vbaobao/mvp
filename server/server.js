const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/model.js');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, ()=> {
  console.log(`App is listening at http://localhost:${port}`);
});

app.get('/data', (req, res) => {
  let sql = ``;
  let insert = [];
  db.getActiveShipments((err, response) => {
    res.send(response)
  });
});

app.post('/newclient', (req,res) => {
  db.setNewClient(req.body, (err) => {
    res.send('New client!');
  });
});

app.post('/newshipment', (req,res) => {
  console.log(req.body);
  db.setNewShipment(req.body, (err) => {
    res.send('New shipment!');
  })
});

app.post('/complete', (req,res) => {
  res.send('Shipment completed!');
});