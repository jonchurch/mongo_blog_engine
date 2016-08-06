/*jshint esversion: 6 */

const router = require('express').Router();
const User = require('../models/user.js');

router.get('/users', getAllUsers);
router.get('/users/:userID', getUserById);
router.post('/users', createUser);
router.put('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);

function getAllUsers(req, res){
	User.find({}, function(err, result){
		if (err) {
			res.status(500).json({msg: err});
		} else {
			res.status(200).json({users: result});
		}
	});
}
function getUserById(req, res){
	User.findOne({'_id': req.params.userId}, function(err, result){
		if (err) {
			res.status(500).json({msg: err});
		} else {
			res.status(200).json({user: result});
		}
	});
}
function createUser(req, res){
	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		age: req.body.age,
		email: req.body.email
	});
	user.save(function(err, result){
		if (err) {
			res.status(500).json({msg: err});
		} else {
			res.status(200).json({user: result});
		}
	});
}
function updateUser(req, res){
	User.findOneAndUpdate({'_id': req.params.userId}, function(err, result){
		if (err) {
			res.status(500).json({msg: err});
		} else {
			res.status(200).json({msg: result});
		}
	});
}
function deleteUser(req, res){
	User.remove({'_id': req.params.userId}, function(err, result) {
		if (err) {
			res.status(500).json({msg: err});
		} else {
			res.status(200).json({msg: result});
		}
	});
}

module.exports = router;
