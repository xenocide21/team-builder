const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const teamNames = [
	{id:0, title:'Asuna', type: 'Swordswoman'},
	{id:1, title:'Kirito', type: 'Swordsman'},
	{id:2, title:'Lisbeth', type: 'Blacksmith'},
	{id:3, title:'Sinon', type: 'Archer'},
	{id:4, title:'Leafa', type: 'Swordswoman'}
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
