// JWT Token Authentication
// Part of the course on "REST API Design Development & Management"
// http://www.acloudfan.com

var     express = require('express')
var     bodyParser = require('body-parser')
var     jwtAuth = require(__dirname + '/tokens/jwtauth')
var     jwtValidate = require(__dirname + '/tokens/validator')

// Express app setup
var app = express();
app.use(bodyParser.json())
var router = express.Router();

// This is the passport middlewae function tha get called first
var  auth = jwtAuth.auth
router.post('/token',auth,function(req, res){
    res.send('token');
});

auth = jwtValidate.auth
router.get('/private',auth,function(req,res){
    res.send('Access granted to private resource!!!')
});

app.use(router);

app.listen(3000);

console.log('Listening on 3000')