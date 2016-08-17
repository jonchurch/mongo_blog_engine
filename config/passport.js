'use strict';

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy 
const mongoose = require('mongoose')
const User = require('../models/user.js')

passport.use(new LocalStrategy({
	usernameField: 'email'
}, function(username, password, done){
		User.findOne({email: username}, function(err, user){
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false)
			}
			if (!user.validPassword(password)){
				return done(null, false, {msg: 'password or username is incorrect'})
			}
			return done(null, user)
		})
}
))
