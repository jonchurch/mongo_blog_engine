/*jshint esversion: 6 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	}
});
userSchema.pre('findOneAndUpdate', function() {
    this.update({}, {
        $set: {
            updated: new Date()
        }
    });
});


const User = mongoose.model('User', userSchema);
module.exports = User;
