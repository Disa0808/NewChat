var User = require('../models/user').User;
var async = require('async');

module.exports.get = function(req, res) {
    res.render('../views/login');
};

module.exports.post = function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username}, function(err, user) {
        if (user) {
        }
    });

};