// Basic Authentication
// Part of the course on "REST API Design Development & Management"
// http://www.acloudfan.com

var     express = require('express')
var     jwtauth = require(__dirname + '/tokens/jwtauth')


// Express app setup
var app = express();
var router = express.Router();

// This is the passport middlewae function tha get called first
var  auth = jwt.auth
router.get('/private',auth,function(req, res){
    res.send('Access granted to private resource!!!')
});

app.use(router);

app.listen(3000);

console.log('Listening on 3000')