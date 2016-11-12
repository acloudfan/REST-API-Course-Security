// DO NOT USE THIS IN PRODUCTION Implementation
// This is just for demo purposes
var jwt = require("jwt-simple");
var jwtAuth = require(__dirname + '/jwtauth')
var tokenStore = require(__dirname + '/tokenstore')

var  auth = function(req, res, next) {
    
    // Token sent by the client HTTP header X-ACME-Token
    var token = req.headers[jwtAuth.params.ACME_TOKEN_HEADER];
    //console.log(token)
    if(token === undefined){
        
        // Send 401 with reason for failure
        res.statusMessage = 'Unauthorized : Token not provided!!!'
        res.sendStatus('401').end()
        // Do NOT call next()

    } else {
        // Decode the header
        try{
            var decoded = jwt.decode(token, jwtAuth.params.JWT_TOKEN_SECRET)
        }catch(e) {
            // Decode exception
            res.statusMessage = 'Unauthorized : Invalid Token!!!'
            res.sendStatus('401')
            return;
        }

        // Token is valid so check if it's expired
        if(!tokenStore.isValid(token)){
            res.statusMessage = 'Unauthorized : Token invalid or Expired!!!'
            res.sendStatus('401')
            return;
        }
        next();
    }
}

exports.auth = auth