// This has all the code for implementing basic auth
var passport = require('passport')
// This the strategy for basic authentication
var BasicStrategy = require('passport-http').BasicStrategy

var users = require(__dirname + '/userdata/users')

passport.use(new BasicStrategy(function (username, password, done) {

    var check = users.checkCredentials(username,password)
    return done(null, check)

}));

var auth = passport.authenticate('basic', { session: false })

exports.auth = auth;
