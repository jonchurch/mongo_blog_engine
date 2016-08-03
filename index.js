/*jshint esversion: 6 */
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;

const commentRouter = require('./routes/comments.js');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(commentRouter);

server.get('/', function(req, res) {
	res.send('Booyah');
});

server.listen(port, function(){
	console.log('Now listening on port...', port);
});
