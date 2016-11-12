var jwt = require("jwt-simple");
var moment = require('moment')
var users = require(__dirname + '/../userdata/users')
var tokenStore = require(__dirname + '/tokenstore')

var jwtParams = {
    JWT_TOKEN_SECRET: 'whateversecret',
    JWT_TOKEN_ISSUER: 'ACME Travels',
    ACME_TOKEN_HEADER: 'x-acme-token',
    JWT_TOKEN_EXPIRY: 30   /** Set to expiry after 30 seconds */
};

// Issues the token
var auth = function (req, res) {
    if (req.body) {
        // Body has the username & password
        var user = users.checkCredentials(req.body.name, req.body.password);
        //console.log(req.body)
        if (user) {
            // Authenticated
            var expires = moment().add(jwtParams.JWT_TOKEN_EXPIRY, 'seconds').valueOf();
            // Create the PAYLOAD
            var payload = {
                // Registered claims
                exp: expires,
                iss: jwtParams.JWT_TOKEN_ISSUER,
                // Public claims
                name: user.name,
                email: user.email
            }

            console.log("Created Payload:")
            console.log(payload)

            // Encode the token
            // HEADER internally created by jwt-simple
            var token = jwt.encode(payload, jwtParams.JWT_TOKEN_SECRET);

            // Add the token to token store
            tokenStore.add(token, payload)

            // Return the token to the caller
            res.json({ token: token });
           
        } else {
            // User not found or password incorrect
            res.sendStatus(401);
        }
    } else {
        // Body did not have the username/password data
        res.sendStatus(401);
    }
}

exports.auth = auth;
exports.params = jwtParams;
