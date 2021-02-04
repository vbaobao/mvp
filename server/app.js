const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, ()=> {
  console.log(`App is listening at http://localhost:${port}`)
});

app.get('/', (req, res) => {
  res.send('Hello World?');
});

app.post('/newclient', (req,res) => {
  res.send('New client!');
});

app.post('/newshipment', (req,res) => {
  res.send('New shipment!');
});

app.post('/complete', (req,res) => {
  res.send('Shipment completed!');
});