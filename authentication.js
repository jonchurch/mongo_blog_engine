'use strict';
const passport = require('passport')
const mongoose = require('mongoose')
const User = require('./models/user')

module.exports = {
    signup: signup,
    login: login
}

function signup(req, res) {
    const user = new User(req.body)

    user.setPassword(req.body.password)
    user.save(function(err) {
        if (err) {
            return res.status(500).json({
                msg: 'error!'
            })
        }
        return res.status(200).json({
            msg: 'success'
        })
    })
}

function login(req, res) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return res.status(500).json({
                msg: 'authentication failed'
            })
        }
        if (user) {
        	return res.status(200).json({
        		msg: 'authentication succeeded'
        	})
        } else {
        	return res.status(401).json(info)
        }
    })
}
