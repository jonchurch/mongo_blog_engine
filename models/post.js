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
    author: String,
    /*author: {
    	type: mongoose.Schema.Types.ObjectId,
    	ref: 'User',
    	required: true
    },*/
    created: {
        type: Date,
        required: true
    },
    updated: {
        type: Date,
        required: true
    }
});

postSchema.pre('findOneAndUpdate', function() {
    this.update({}, {
        $set: {
            updated: new Date()
        }
    });
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
