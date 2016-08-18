/*jshint esversion: 6 */
'use strict';
require('dotenv').config();
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport')
require('./config/passport.js')
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);
const commentRouter = require('./routes/comments.js');
const postRouter = require('./routes/posts.js');
const userRouter = require('./routes/users.js');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(passport.initialize())
server.use(commentRouter);
server.use(postRouter);
server.use(userRouter);


server.get('/', function(req, res) {
	res.send('Booyah');
});

server.listen(port, function(){
	console.log('Now listening on port...', port);
});
