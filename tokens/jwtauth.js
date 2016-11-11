var jwt = require("jwt-simple");
var users = require(__dirname + '/../userdata/users')

var auth = function(req,res){
    if(req.body){
    // Body has the username & password
        var user = users.checkCredentials(req.body.name, req.body.password);
        console.log(req.body)
        if(user){
            // Authenticated
            var payload = user;
            var token = jwt.encode(payload, "whateversecret");
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


// passport.use(strategy)

exports.auth = auth;
