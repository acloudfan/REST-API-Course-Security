// This has all the code for implementing basic auth
var passport = require('passport')
// This the strategy for basic authentication
var BasicStrategy = require('passport-http').BasicStrategy

// Access to the users data
var users = require(__dirname + '/userdata/users')

// Setup the passport strategy
passport.use(new BasicStrategy(function (username, password, done) {

    var user = users.checkCredentials(username,password)
    if(user)
        return done(null, true)
    else
        return done(null, false)
}));

// This is the middleware function that gets invoked
var auth = passport.authenticate('basic', { session: false })

exports.auth = auth;
