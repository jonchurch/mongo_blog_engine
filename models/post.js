/*jshint esversion: 6 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	created: {
		type: Date,
		required: true
	},
	updated: {
		type: Date,
		required: true
	}
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
