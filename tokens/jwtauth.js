// Passport setup for tokens
var passport = require('passport');
var passportJWT = require("passport-jwt");

var extractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var users = require(__dirname + '/../userdata/users')

// Set the jwt location in the request
// Can be header, query param, body 
// Set it to header
var params = {
    secretOrKey: 'MyS3cr3tK3Y',
    jwtFromRequest: extractJwt.fromAuthHeader()
};

passport.initialize();

// Create the Passport Jwt Startegy
var strategy = new JwtStrategy(params, function (payload, done) {
    // var user = users[payload.id] || null;
    // if (user) {
    //     return done(null, { id: user.id });
    // } else {
    //     return done(new Error("User not found"), null);
    // }
console.log(payload)
    var  check = users.checkCredentials(payload.name, payload.password)
console.log('check')
    if (check) {
        return done(null, { id: user.id });
    } else {
        return done(new Error("User not found"), null);
    }
});



passport.use(strategy)

exports.auth = passport.authenticate('jwt', { session: false });
