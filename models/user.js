/*jshint esversion: 6 */
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto')

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
    },
    hash: {
        type: String,
        required: false
    },
    salt: {
        type: String,
        required: false
    }
});
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex')
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex')
}
userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex')
    return this.hash === hash
}

userSchema.methods.generateJwt = function() {}

userSchema.pre('findOneAndUpdate', function() {
    this.update({}, {
        $set: {
            updated: new Date()
        }
    });
});


const User = mongoose.model('User', userSchema);
module.exports = User;
