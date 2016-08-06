/*jshint esversion: 6 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	body: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		required: true
	},
	post: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	updated: {
		type: Date,
		required: true
	}
});
commentSchema.pre('findOneAndUpdate', function() {
    this.update({}, {
        $set: {
            // updated: new Date()
        }
    });
});


const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
