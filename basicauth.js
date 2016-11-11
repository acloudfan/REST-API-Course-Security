// This has all the code for implementing basic auth
var     passport= require('passport')
// This the strategy for basic authentication
var     BasicStrategy = require('passport-http').BasicStrategy

passport.use(new BasicStrategy(function(username,password,done){
    // This is the function that gets called for all protected resource
    if(username === 'user' && password === 'pass')
        done(null, true)
    else   
        done(null,false)
}));

var auth  = passport.authenticate('basic',{session:false})

exports.auth = auth;
