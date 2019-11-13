const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const teamNames = [
  'Asuna',
  'Kirito',
  'Lisbeth',
  'Sinon',
  'Leafa'
];

app.get('/api/teamNames', (req, res) => {
  res.send(teamNames);
});

app.get('/api/teamNames/:id', (req, res) => {
  const names = teamNames.filter(names => names.id.toString() === req.params.id)[0];
  res.status(200).json(names);
});

app.post('api/teamNames', (req, res) => {
  if (req.body.id !== undefined) teamNames.push(req.body);
  res.status(201).json(teamNames);
});

app.listen(5000, () =>{console.log('Server listening on :5000')});
